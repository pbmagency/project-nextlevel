import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, X } from 'lucide-react';

const VIDEO_ID = 'qkjNsTmorDs';
const DEFER_MS = 3000;

function sendPlayerCommand(
    iframe: HTMLIFrameElement | null,
    func: string,
    args: unknown[] = [],
) {
    iframe?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func, args }),
        '*',
    );
}

export default function FloatingVideo() {
    const [closed, setClosed] = useState(false);
    const [muted, setMuted] = useState(true);
    const [ready, setReady] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Defer iframe load until browser is idle / page has settled
    useEffect(() => {
        if (closed) return;

        const idleWindow = window as Window & {
            requestIdleCallback?: (
                callback: () => void,
                options?: { timeout: number },
            ) => number;
            cancelIdleCallback?: (id: number) => void;
        };

        const id = idleWindow.requestIdleCallback
            ? idleWindow.requestIdleCallback(() => setReady(true), {
                  timeout: DEFER_MS,
              })
            : globalThis.setTimeout(() => setReady(true), DEFER_MS);

        return () => {
            if (idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(id);
            else globalThis.clearTimeout(id);
        };
    }, [closed]);

    useEffect(() => {
        if (!ready || closed) return;

        const handlePlayerMessage = (event: MessageEvent) => {
            if (event.source !== iframeRef.current?.contentWindow) return;

            let data: unknown = event.data;
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data);
                } catch {
                    return;
                }
            }

            if (
                typeof data !== 'object' ||
                data === null ||
                !('event' in data) ||
                data.event !== 'infoDelivery' ||
                !('info' in data) ||
                typeof data.info !== 'object' ||
                data.info === null ||
                !('playerState' in data.info) ||
                data.info.playerState !== 0
            ) {
                return;
            }

            sendPlayerCommand(iframeRef.current, 'seekTo', [0, true]);
            sendPlayerCommand(iframeRef.current, 'playVideo');
        };

        window.addEventListener('message', handlePlayerMessage);
        return () => window.removeEventListener('message', handlePlayerMessage);
    }, [closed, ready]);

    if (closed) return null;

    const toggleMute = () => {
        const cmd = muted ? 'unMute' : 'mute';
        sendPlayerCommand(iframeRef.current, cmd);
        setMuted(!muted);
    };

    const handlePlayerLoad = () => {
        iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: 'listening', id: VIDEO_ID }),
            '*',
        );
        sendPlayerCommand(iframeRef.current, 'playVideo');
    };

    const src =
        `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
        `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
        `&controls=0&rel=0&modestbranding=1&enablejsapi=1` +
        `&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0`;

    return (
        <div className="fixed bottom-4 right-4 z-40 w-56 overflow-hidden rounded-2xl shadow-2xl shadow-black/70 ring-1 ring-white/10 sm:bottom-6 sm:right-6 sm:w-72">
            {/* Top bar */}
            <div className="flex items-center justify-between bg-black/80 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-xs font-semibold text-white/70">
                    Coach Haryanto Kandani
                </span>
                <div className="flex items-center gap-1.5">
                    <button
                        onClick={toggleMute}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                        aria-label={muted ? 'Aktifkan suara' : 'Matikan suara'}
                    >
                        {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                    </button>
                    <button
                        onClick={() => setClosed(true)}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                        aria-label="Tutup video"
                    >
                        <X size={12} />
                    </button>
                </div>
            </div>

            {/* Video — only rendered after browser idle / 3s delay */}
            <div className="relative aspect-video bg-black">
                {ready ? (
                    <>
                        <iframe
                            ref={iframeRef}
                            src={src}
                            title="Haryanto Kandani - Achievement Motivator"
                            onLoad={handlePlayerLoad}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="h-full w-full"
                        />
                        <div className="absolute inset-0 z-10" />
                    </>
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white/60" />
                    </div>
                )}
            </div>
        </div>
    );
}
