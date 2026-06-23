import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, X } from "lucide-react";

const VIDEO_SRC =
    "https://player.mediadelivery.net/embed/686796/9accf7ff-194a-45e9-b02c-1f935df0be67";
const VIDEO_DELAY_MS = 1500;

export default function FloatingVideo() {
    const [closed, setClosed] = useState(false);
    const [muted, setMuted] = useState(true);
    const [ready, setReady] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    const src = `${VIDEO_SRC}?autoplay=true&loop=true&muted=${muted}&preload=true&responsive=true&playsinline=true`;

    if (closed) return null;

    return (
        <div className="fixed bottom-4 right-4 z-40 w-56 overflow-hidden rounded-2xl shadow-2xl shadow-black/70 ring-1 ring-white/10 sm:bottom-6 sm:right-6 sm:w-72">
            <div className="flex items-center justify-between bg-black/80 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-sm font-semibold text-white/90">
                    Coach Haryanto Kandani
                </span>
                <div className="flex items-center gap-1.5">
                    <button
                        onClick={() => setMuted((isMuted) => !isMuted)}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                        aria-label={muted ? "Aktifkan suara" : "Matikan suara"}
                        title={muted ? "Aktifkan suara" : "Matikan suara"}
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

            <div className="relative aspect-video bg-black">
                {ready ? (
                    <>
                        <iframe
                            src={src}
                            title="Haryanto Kandani - Achievement Motivator"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                            allowFullScreen
                            tabIndex={-1}
                            className="pointer-events-none absolute inset-0 h-full w-full border-0"
                        />
                        <div
                            className="absolute inset-0 z-10"
                            aria-hidden="true"
                        />
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
