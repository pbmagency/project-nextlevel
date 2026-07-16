import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Volume2, VolumeX, X } from "lucide-react";
//#region resources/js/components/FloatingVideo.tsx
var VIDEO_SRC = "https://player.mediadelivery.net/embed/686796/9accf7ff-194a-45e9-b02c-1f935df0be67";
var VIDEO_DELAY_MS = 1500;
function FloatingVideo() {
	const [closed, setClosed] = useState(false);
	const [muted, setMuted] = useState(true);
	const [ready, setReady] = useState(false);
	const [playerReady, setPlayerReady] = useState(false);
	const iframeRef = useRef(null);
	const playerRef = useRef(null);
	const timerRef = useRef(null);
	const tsRef = useRef(Date.now());
	useEffect(() => {
		if (document.querySelector("script[data-bunny-playerjs]")) return;
		const script = document.createElement("script");
		script.src = "https://assets.mediadelivery.net/playerjs/playerjs-latest.min.js";
		script.async = false;
		script.setAttribute("data-bunny-playerjs", "true");
		document.head.appendChild(script);
	}, []);
	useEffect(() => {
		const loadVideo = () => {
			timerRef.current = globalThis.setTimeout(() => setReady(true), VIDEO_DELAY_MS);
		};
		if (document.readyState === "complete") loadVideo();
		else window.addEventListener("load", loadVideo, { once: true });
		return () => {
			window.removeEventListener("load", loadVideo);
			if (timerRef.current) globalThis.clearTimeout(timerRef.current);
		};
	}, []);
	useEffect(() => {
		if (!ready || !iframeRef.current) return;
		let cancelled = false;
		const tryInit = () => {
			if (cancelled || !iframeRef.current) return;
			if (!window.playerjs) {
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
			player.play();
		} else player.mute();
		setMuted((prev) => !prev);
	};
	const src = `${VIDEO_SRC}?autoplay=true&loop=true&muted=true&preload=true&responsive=true&playsinline=true&_t=${tsRef.current}`;
	if (closed) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-4 right-4 z-40 w-56 overflow-hidden rounded-2xl shadow-2xl shadow-black/70 ring-1 ring-white/10 sm:bottom-6 sm:right-6 sm:w-72",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between bg-black/80 px-3 py-1.5 backdrop-blur-sm",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-sm font-semibold text-white/90",
				children: "Coach Haryanto Kandani"
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("button", {
					onClick: handleToggleMute,
					disabled: !playerReady,
					className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-40",
					"aria-label": muted ? "Aktifkan suara" : "Matikan suara",
					title: muted ? "Aktifkan suara" : "Matikan suara",
					children: muted ? /* @__PURE__ */ jsx(VolumeX, { size: 12 }) : /* @__PURE__ */ jsx(Volume2, { size: 12 })
				}), /* @__PURE__ */ jsx("button", {
					onClick: () => setClosed(true),
					className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white",
					"aria-label": "Tutup video",
					title: "Tutup video",
					children: /* @__PURE__ */ jsx(X, { size: 12 })
				})]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative aspect-video bg-black",
			children: ready ? /* @__PURE__ */ jsx("iframe", {
				ref: iframeRef,
				src,
				title: "Haryanto Kandani - Achievement Motivator",
				allow: "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen",
				allowFullScreen: true,
				tabIndex: -1,
				className: "absolute inset-0 h-full w-full border-0"
			}) : /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full items-center justify-center",
				children: /* @__PURE__ */ jsx("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white/60" })
			})
		})]
	});
}
//#endregion
export { FloatingVideo as default };

//# sourceMappingURL=FloatingVideo-DUiMueh_.js.map