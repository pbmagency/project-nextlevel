import { useRef, useState } from 'react';
import { Volume2, VolumeX, X } from 'lucide-react';

const VIDEO_ID = 'qkjNsTmorDs';

export default function FloatingVideo() {
    const [closed, setClosed]   = useState(false);
    const [muted, setMuted]     = useState(true);
    const iframeRef             = useRef<HTMLIFrameElement>(null);

    if (closed) return null;

    const toggleMute = () => {
        const cmd = muted ? 'unMute' : 'mute';
        iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: cmd, args: [] }),
            '*',
        );
        setMuted(!muted);
    };

    const src =
        `https://www.youtube.com/embed/${VIDEO_ID}` +
        `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
        `&controls=0&rel=0&modestbranding=1&enablejsapi=1`;

    return (
        <div className="fixed bottom-4 right-4 z-40 w-56 overflow-hidden rounded-2xl shadow-2xl shadow-black/70 ring-1 ring-white/10 sm:bottom-6 sm:right-6 sm:w-72">
            {/* Top bar */}
            <div className="flex items-center justify-between bg-black/80 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-xs font-semibold text-white/70">
                    Haryanto Kandani
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

            {/* Video */}
            <div className="aspect-video">
                <iframe
                    ref={iframeRef}
                    src={src}
                    title="Haryanto Kandani - Achievement Motivator"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="h-full w-full"
                />
            </div>
        </div>
    );
}
