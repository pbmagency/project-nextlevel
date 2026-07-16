import { c as Button } from "../ssr.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2 } from "lucide-react";
//#region resources/js/components/ui/section-cta.tsx
/**
* CTA block standar: tombol primary + opsional secondary ke #mentor + social proof row.
* Dipakai di semua section kecuali Problem, Social Proof, dan Mentor.
*/
function SectionCta({ href = "#pricing-section", text = "Amankan Seat Sekarang", showMentorCta = false, socialProof, location = "section", onClick, dark = false, className = "" }) {
	const items = socialProof ? socialProof.split(" • ").map((s) => s.trim()).filter(Boolean) : [];
	const iconColor = "text-blue-400";
	const textColor = dark ? "text-slate-300" : "text-slate-300";
	return /* @__PURE__ */ jsxs("div", {
		className: `mt-10 text-center ${className}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex w-full max-w-sm flex-col gap-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-3",
			children: [/* @__PURE__ */ jsx("a", {
				href,
				target: href.startsWith("http") ? "_blank" : void 0,
				rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
				onClick: () => onClick?.(location, text, href),
				className: "w-full sm:w-auto",
				children: /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					size: "lg",
					className: "w-full sm:w-auto",
					children: text
				})
			}), showMentorCta && /* @__PURE__ */ jsx("a", {
				href: "#mentor-section",
				onClick: () => onClick?.(location, "Kenali Fasilitator", "#mentor"),
				className: "w-full sm:w-auto",
				children: /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "lg",
					className: "w-full sm:w-auto",
					children: "Kenali Fasilitator"
				})
			})]
		}), items.length > 0 && /* @__PURE__ */ jsx("div", {
			className: "mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:gap-x-5 sm:gap-y-2",
			children: items.map((item) => /* @__PURE__ */ jsxs("span", {
				className: `flex items-center gap-1.5 text-sm font-semibold ${textColor}`,
				children: [/* @__PURE__ */ jsx(CheckCircle2, {
					size: 14,
					className: `shrink-0 ${iconColor}`
				}), item]
			}, item))
		})]
	});
}
//#endregion
export { SectionCta as t };

//# sourceMappingURL=section-cta-D4XNal45.js.map