import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, X } from "lucide-react";

const VIDEO_SRC =
    "https://player.mediadelivery.net/embed/686796/9accf7ff-194a-45e9-b02c-1f935df0be67";
const VIDEO_DELAY_MS = 1500;

interface BunnyPlayer {
    on: (event: string, callback: () => void) => void;
    mute: () => void;
    unmute: () => void;
    play: () => void;
    supports: (type: string, method: string) => boolean;
}

declare global {
    interface Window {
        playerjs: {
            Player: new (iframe: HTMLIFrameElement) => BunnyPlayer;
        };
    }
}

export default function FloatingVideo() {
    const [closed, setClosed] = useState(false);
    const [muted, setMuted] = useState(true);
    const [ready, setReady] = useState(false);
    const [playerReady, setPlayerReady] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const playerRef = useRef<BunnyPlayer | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Timestamp di-freeze sekali — untuk uniqueness playerjs + agar src tidak berubah
    const tsRef = useRef(Date.now());

    // Step 1: Load playerjs-latest SEBELUM iframe mount
    useEffect(() => {
        if (document.querySelector("script[data-bunny-playerjs]")) return;
        const script = document.createElement("script");
        // ✅ Versi terbaru sesuai docs resmi
        script.src =
            "https://assets.mediadelivery.net/playerjs/playerjs-latest.min.js";
        script.async = false; // ✅ async=false agar load sebelum iframe
        script.setAttribute("data-bunny-playerjs", "true");
        document.head.appendChild(script);
    }, []);

    // Step 2: Delay mount iframe
    useEffect(() => {
        const loadVideo = () => {
            timerRef.current = globalThis.setTimeout(
                () => setReady(true),
                VIDEO_DELAY_MS,
            );
        };

        if (document.readyState === "complete") loadVideo();
        else window.addEventListener("load", loadVideo, { once: true });

        return () => {
            window.removeEventListener("load", loadVideo);
            if (timerRef.current) globalThis.clearTimeout(timerRef.current);
        };
    }, []);

    // Step 3: Init Player.js instance setelah iframe mount
    useEffect(() => {
        if (!ready || !iframeRef.current) return;

        let cancelled = false;

        const tryInit = () => {
            if (cancelled || !iframeRef.current) return;
            if (!window.playerjs) {
                // Script belum selesai load, coba lagi
                setTimeout(tryInit, 100);
                return;
            }

            const player = new window.playerjs.Player(iframeRef.current);
            player.on("ready", () => {
                if (cancelled) return;
                playerRef.current = player;
                setPlayerReady(true);
            });
        };

        tryInit();

        return () => {
            cancelled = true;
        };
    }, [ready]);

    const handleToggleMute = () => {
        const player = playerRef.current;
        if (!player) return;

        if (muted) {
            player.unmute();
            player.play(); // Paksa play — beberapa browser pause setelah unmute
        } else {
            player.mute();
        }
        setMuted((prev) => !prev);
    };

    // ✅ src freeze dengan timestamp — tidak berubah, player.js bisa identify instance unik
    const src = `${VIDEO_SRC}?autoplay=true&loop=true&muted=true&preload=true&responsive=true&playsinline=true&_t=${tsRef.current}`;

    if (closed) return null;

    return (
        <div className="fixed bottom-4 right-4 z-40 w-56 overflow-hidden rounded-2xl shadow-2xl shadow-black/70 ring-1 ring-white/10 sm:bottom-6 sm:right-6 sm:w-72">
            <div className="flex items-center justify-between bg-black/80 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-sm font-semibold text-white/90">
                    Coach Haryanto Kandani
                </span>
                <div className="flex items-center gap-1.5">
                    <button
                        onClick={handleToggleMute}
                        disabled={!playerReady}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label={muted ? "Aktifkan suara" : "Matikan suara"}
                        title={muted ? "Aktifkan suara" : "Matikan suara"}
                    >
                        {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                    </button>
                    <button
                        onClick={() => setClosed(true)}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                        aria-label="Tutup video"
                        title="Tutup video"
                    >
                        <X size={12} />
                    </button>
                </div>
            </div>

            <div className="relative aspect-video bg-black">
                {ready ? (
                    // ✅ Tidak ada overlay, tidak ada pointer-events-none
                    // Player.js butuh iframe accessible di DOM level JS
                    <iframe
                        ref={iframeRef}
                        src={src}
                        title="Haryanto Kandani - Achievement Motivator"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                        allowFullScreen
                        tabIndex={-1}
                        className="absolute inset-0 h-full w-full border-0"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white/60" />
                    </div>
                )}
            </div>
        </div>
    );
}
