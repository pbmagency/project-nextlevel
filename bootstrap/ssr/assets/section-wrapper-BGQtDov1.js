import { u as cn } from "../ssr.js";
import { jsx } from "react/jsx-runtime";
//#region resources/js/components/ui/section-wrapper.tsx
function SectionWrapper({ children, bg = "white", className = "", id }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: cn({
			white: "bg-[#0A0A0F]",
			slate: "bg-[#111118]",
			dark: "bg-[#050508]"
		}[bg], className),
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
			children
		})
	});
}
//#endregion
export { SectionWrapper as t };

//# sourceMappingURL=section-wrapper-BGQtDov1.js.map