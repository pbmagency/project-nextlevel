import { c as Button, u as cn } from "../ssr.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/next-level-logo.tsx
function NextLevelLogo({ className }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("relative block h-8 w-36 shrink-0 overflow-hidden", className),
		children: /* @__PURE__ */ jsx("img", {
			src: "/storage/logo/LogoNext.webp",
			alt: "Next Level",
			className: "absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2"
		})
	});
}
//#endregion
//#region resources/js/hooks/use-analytics.tsx
var LANDING_SOURCE_KEY = "landing_source";
/**
* Generate a unique event ID for Meta Pixel ↔ CAPI deduplication.
*/
function generateEventId() {
	if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
	return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}
/**
* Get a cookie value by name.
*/
function getCookieValue(name) {
	const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
	return match ? decodeURIComponent(match[2]) : null;
}
/**
* Get landing source from sessionStorage
*/
function getLandingSource() {
	if (typeof window === "undefined") return "unknown";
	return sessionStorage.getItem(LANDING_SOURCE_KEY) || window.location.pathname;
}
function useAnalytics() {
	const coursePrice = "2000000";
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (!sessionStorage.getItem(LANDING_SOURCE_KEY)) {
			const cleanPath = window.location.pathname;
			sessionStorage.setItem(LANDING_SOURCE_KEY, cleanPath);
		}
	}, []);
	const track = useCallback(async (event) => {
		try {
			const landingSource = getLandingSource();
			const urlParams = new URLSearchParams(window.location.search);
			const enrichedEventData = {
				...event.event_data,
				landing_source: landingSource
			};
			const eventData = {
				...event,
				event_data: enrichedEventData,
				referral_source: event.referral_source || urlParams.get("ref") || document.referrer || "direct",
				utm_source: event.utm_source || urlParams.get("utm_source"),
				utm_medium: event.utm_medium || urlParams.get("utm_medium"),
				utm_campaign: event.utm_campaign || urlParams.get("utm_campaign"),
				utm_content: event.utm_content || urlParams.get("utm_content"),
				utm_term: event.utm_term || urlParams.get("utm_term")
			};
			await fetch("/analytics/track", {
				method: "POST",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
					"X-CSRF-TOKEN": document.querySelector("meta[name=\"csrf-token\"]")?.getAttribute("content") || ""
				},
				body: JSON.stringify(eventData)
			});
		} catch (error) {
			console.debug("Analytics tracking failed:", error);
		}
	}, []);
	return {
		track,
		trackVisit: useCallback(() => {
			const eventId = window.__META_PAGE_VIEW_EVENT_ID || generateEventId();
			if (typeof window.fbq === "function") window.fbq("track", "PageView", {}, { eventID: eventId });
			track({
				event_type: "visit",
				event_data: {
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					event_id: eventId,
					_fbp: getCookieValue("_fbp"),
					_fbc: getCookieValue("_fbc")
				}
			});
		}, [track]),
		trackScroll: useCallback((depth) => {
			track({
				event_type: "scroll",
				event_data: {
					depth,
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString()
				}
			});
		}, [track]),
		trackEngagement: useCallback((type, data) => {
			track({
				event_type: "engagement",
				event_data: {
					type,
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					...data
				}
			});
		}, [track]),
		trackConversion: useCallback((type, data) => {
			track({
				event_type: "conversion",
				event_data: {
					type,
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					...data
				}
			});
		}, [track]),
		trackPayment: useCallback((status, data) => {
			track({
				event_type: "payment",
				event_data: {
					status,
					amount: coursePrice,
					currency: "IDR",
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					...data
				}
			});
		}, [track, coursePrice]),
		trackCTA: useCallback((location, text, destination, metaEvent, eventId) => {
			if (metaEvent && typeof window.fbq === "function") {
				const pixelEventId = eventId || generateEventId();
				window.fbq("track", metaEvent, {}, { eventID: pixelEventId });
			}
			track({
				event_type: "cta_click",
				event_data: {
					location,
					text,
					destination: destination || "unknown",
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					meta_event: metaEvent,
					event_id: eventId,
					...metaEvent ? {
						_fbp: getCookieValue("_fbp"),
						_fbc: getCookieValue("_fbc")
					} : {}
				}
			});
		}, [track]),
		trackInitiateCheckout: useCallback((data) => {
			track({
				event_type: "initiate_checkout",
				event_data: {
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					...data
				}
			});
		}, [track]),
		trackLead: useCallback((type, data) => {
			const eventId = data?.event_id ?? generateEventId();
			if (typeof window.fbq === "function") {
				const pixelPayload = data?.value ? {
					value: data.value,
					currency: data.currency ?? "IDR"
				} : {};
				window.fbq("track", "Lead", pixelPayload, { eventID: eventId });
			}
			track({
				event_type: "lead",
				event_data: {
					type,
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					event_id: eventId,
					meta_event: "Lead",
					_fbp: getCookieValue("_fbp"),
					_fbc: getCookieValue("_fbc"),
					...data
				}
			});
		}, [track]),
		trackPurchase: useCallback((amount, currency = "IDR", data) => {
			const eventId = generateEventId();
			if (typeof window.fbq === "function") window.fbq("track", "Purchase", {
				value: amount,
				currency
			}, { eventID: eventId });
			track({
				event_type: "lead",
				event_data: {
					type: "purchase",
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					event_id: eventId,
					meta_event: "Purchase",
					amount,
					currency,
					_fbp: getCookieValue("_fbp"),
					_fbc: getCookieValue("_fbc"),
					...data
				}
			});
		}, [track]),
		trackSectionView: useCallback((sectionId, data) => {
			track({
				event_type: "section_view",
				event_data: {
					section: sectionId,
					page: window.location.pathname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					...data
				}
			});
		}, [track])
	};
}
//#endregion
//#region resources/js/hooks/use-scroll-tracking.tsx
function useScrollTracking() {
	const { trackScroll } = useAnalytics();
	const scrollDepths = useRef(/* @__PURE__ */ new Set());
	const lastScrollTime = useRef(0);
	useEffect(() => {
		const handleScroll = () => {
			const now = Date.now();
			if (now - lastScrollTime.current < 200) return;
			lastScrollTime.current = now;
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollTop = window.scrollY;
			const scrollPercent = Math.round(scrollTop / scrollHeight * 100);
			[
				25,
				50,
				75,
				90
			].forEach((milestone) => {
				if (scrollPercent >= milestone && !scrollDepths.current.has(milestone)) {
					scrollDepths.current.add(milestone);
					trackScroll(milestone);
				}
			});
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [trackScroll]);
}
//#endregion
//#region resources/js/hooks/use-dwell-time.tsx
var INITIAL_THRESHOLD = 15e3;
var HEARTBEAT_INTERVAL = 3e4;
var TICK_INTERVAL = 1e3;
function useDwellTime() {
	const { trackEngagement } = useAnalytics();
	const timeActive = useRef(0);
	const lastPingTime = useRef(0);
	const hasInitialTracked = useRef(false);
	const isVisible = useRef(!document.hidden);
	const tickerRef = useRef(null);
	const sendPing = useCallback((duration, isInitial) => {
		trackEngagement("dwell_ping", {
			duration,
			type: "dwell_ping",
			is_initial: isInitial
		});
	}, [trackEngagement]);
	useEffect(() => {
		const handleVisibilityChange = () => {
			isVisible.current = !document.hidden;
		};
		const tick = () => {
			if (!isVisible.current) return;
			timeActive.current += TICK_INTERVAL;
			if (!hasInitialTracked.current && timeActive.current >= INITIAL_THRESHOLD) {
				hasInitialTracked.current = true;
				lastPingTime.current = timeActive.current;
				sendPing(INITIAL_THRESHOLD, true);
				return;
			}
			if (hasInitialTracked.current) {
				if (timeActive.current - lastPingTime.current >= HEARTBEAT_INTERVAL) {
					lastPingTime.current = timeActive.current;
					sendPing(HEARTBEAT_INTERVAL, false);
				}
			}
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		tickerRef.current = setInterval(tick, TICK_INTERVAL);
		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			if (tickerRef.current) {
				clearInterval(tickerRef.current);
				tickerRef.current = null;
			}
		};
	}, [sendPing]);
}
//#endregion
//#region resources/js/hooks/use-section-tracking.tsx
var SECTION_SEEN_PREFIX = "section_seen_";
/**
* Minimum continuous visibility duration (ms) required to count a section as "seen".
* 500ms filters fast-scrolls while capturing genuine pauses.
*/
var DWELL_MS = 500;
/**
* Automatically track all <section> elements that have an `id` attribute.
*
* No predefined list needed — the hook scans the DOM on mount and observes
* every matching element. New sections added to the page are picked up
* automatically without updating any config.
*
* Strategy:
*  - querySelectorAll('section[id]') discovers sections dynamically.
*  - IntersectionObserver with threshold:0.2 detects entry/exit for sections
*    of any height (tall sections can never achieve 50% simultaneous visibility).
*  - A 500ms dwell timer is started on entry and cancelled on exit, so
*    fast-scrolls do NOT trigger an event — only genuine pauses count.
*  - Each section fires exactly once per session (deduplicated via sessionStorage).
*/
function useSectionTracking() {
	const { trackSectionView } = useAnalytics();
	const observerRef = useRef(null);
	const dwellTimers = useRef(/* @__PURE__ */ new Map());
	useEffect(() => {
		if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
		observerRef.current?.disconnect();
		dwellTimers.current.forEach(clearTimeout);
		dwellTimers.current.clear();
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const sectionId = entry.target.id;
				if (!sectionId) return;
				const storageKey = `${SECTION_SEEN_PREFIX}${sectionId}`;
				if (entry.isIntersecting) {
					if (!sessionStorage.getItem(storageKey) && !dwellTimers.current.has(sectionId)) {
						const timer = setTimeout(() => {
							dwellTimers.current.delete(sectionId);
							if (sessionStorage.getItem(storageKey)) return;
							sessionStorage.setItem(storageKey, "1");
							trackSectionView(sectionId);
							observer.unobserve(entry.target);
						}, DWELL_MS);
						dwellTimers.current.set(sectionId, timer);
					}
				} else {
					const timer = dwellTimers.current.get(sectionId);
					if (timer !== void 0) {
						clearTimeout(timer);
						dwellTimers.current.delete(sectionId);
					}
				}
			});
		}, { threshold: .2 });
		observerRef.current = observer;
		requestAnimationFrame(() => {
			document.querySelectorAll("section[id]").forEach((el) => {
				const storageKey = `${SECTION_SEEN_PREFIX}${el.id}`;
				if (!sessionStorage.getItem(storageKey)) observer.observe(el);
			});
		});
		return () => {
			observer.disconnect();
			dwellTimers.current.forEach(clearTimeout);
			dwellTimers.current.clear();
		};
	}, [trackSectionView]);
}
//#endregion
//#region resources/js/components/sections/Navbar.tsx
function Navbar({ onCtaClick }) {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("nav", {
		className: `fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5" : ""}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx("a", {
				href: "#",
				"aria-label": "Next Level",
				children: /* @__PURE__ */ jsx(NextLevelLogo, { className: "h-8 w-36" })
			}), /* @__PURE__ */ jsx("a", {
				href: "#pricing-section",
				onClick: () => onCtaClick("navbar", "Amankan Seat", "#pricing-section"),
				children: /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					size: "md",
					children: "Amankan Seat"
				})
			})]
		})
	});
}
//#endregion
export { generateEventId as a, useScrollTracking as i, useSectionTracking as n, useAnalytics as o, useDwellTime as r, NextLevelLogo as s, Navbar as t };

//# sourceMappingURL=Navbar-BRDCbq9k.js.map