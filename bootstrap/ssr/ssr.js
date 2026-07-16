import { Link, createInertiaApp, router, usePage } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import * as React from "react";
import { Fragment, useCallback, useEffect, useSyncExternalStore } from "react";
import { Toaster, toast } from "sonner";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { BookOpen, ChartSpline, ChevronRight, ChevronsUpDown, FlaskConical, FolderGit2, LogOut, PanelLeftCloseIcon, PanelLeftOpenIcon, Settings, XIcon } from "lucide-react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/hooks/use-flash-toast.ts
function useFlashToast() {
	useEffect(() => {
		return router.on("flash", (event) => {
			const data = (event.detail?.flash)?.toast;
			if (!data) return;
			toast[data.type](data.message);
		});
	}, []);
}
//#endregion
//#region resources/js/hooks/use-appearance.tsx
var listeners = /* @__PURE__ */ new Set();
var currentAppearance = "system";
var prefersDark = () => {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
var setCookie = (name, value, days = 365) => {
	if (typeof document === "undefined") return;
	const maxAge = days * 24 * 60 * 60;
	document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};
var isDarkMode = (appearance) => {
	return appearance === "dark" || appearance === "system" && prefersDark();
};
var applyTheme = (appearance) => {
	if (typeof document === "undefined") return;
	const isDark = isDarkMode(appearance);
	document.documentElement.classList.toggle("dark", isDark);
	document.documentElement.style.colorScheme = isDark ? "dark" : "light";
};
var subscribe = (callback) => {
	listeners.add(callback);
	return () => listeners.delete(callback);
};
var notify = () => listeners.forEach((listener) => listener());
function useAppearance() {
	const appearance = useSyncExternalStore(subscribe, () => currentAppearance, () => "system");
	const resolvedAppearance = isDarkMode(appearance) ? "dark" : "light";
	const updateAppearance = (mode) => {
		currentAppearance = mode;
		localStorage.setItem("appearance", mode);
		setCookie("appearance", mode);
		applyTheme(mode);
		notify();
	};
	return {
		appearance,
		resolvedAppearance,
		updateAppearance
	};
}
//#endregion
//#region resources/js/components/ui/sonner.tsx
function Toaster$1({ ...props }) {
	const { appearance } = useAppearance();
	useFlashToast();
	return /* @__PURE__ */ jsx(Toaster, {
		theme: appearance,
		className: "toaster group",
		position: "bottom-right",
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)"
		},
		...props
	});
}
//#endregion
//#region resources/js/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function toUrl(url) {
	return typeof url === "string" ? url : url.url;
}
//#endregion
//#region resources/js/components/ui/tooltip.tsx
function TooltipProvider({ delayDuration = 0, ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration,
		...props
	});
}
function Tooltip({ ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Root, {
		"data-slot": "tooltip",
		...props
	});
}
function TooltipTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, {
		"data-slot": "tooltip-trigger",
		...props
	});
}
function TooltipContent({ className, sideOffset = 4, children, ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(TooltipPrimitive.Content, {
		"data-slot": "tooltip-content",
		sideOffset,
		className: cn("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })]
	}) });
}
//#endregion
//#region resources/js/components/ui/button.tsx
var buttonVariants = cva("inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-blue-500 text-white shadow-sm shadow-blue-900/40 hover:bg-blue-600 active:bg-blue-700",
			secondary: "border border-white/10 bg-white/5 text-white shadow-sm hover:bg-white/10 active:bg-white/15",
			dark: "bg-[#1C1C1E] text-white hover:bg-slate-800 active:bg-slate-900",
			ghost: "text-slate-400 hover:bg-white/5 hover:text-white",
			outline: "border border-white/20 bg-transparent text-white hover:bg-white/5 active:bg-white/10",
			destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
			success: "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800"
		},
		size: {
			sm: "h-8 px-3 text-xs",
			md: "h-9 px-4 text-sm",
			lg: "h-10 px-5 text-sm",
			xl: "h-12 px-7 text-base",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region resources/js/components/ui/input.tsx
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ jsx("input", {
		type,
		"data-slot": "input",
		className: cn("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/separator.tsx
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
	return /* @__PURE__ */ jsx(SeparatorPrimitive.Root, {
		"data-slot": "separator-root",
		decorative,
		orientation,
		className: cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Root, {
		"data-slot": "sheet",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Portal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Overlay, {
		"data-slot": "sheet-overlay",
		className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", ...props }) {
	return /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(SheetPrimitive.Content, {
		"data-slot": "sheet-content",
		className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
		...props,
		children: [children, /* @__PURE__ */ jsxs(SheetPrimitive.Close, {
			className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
			children: [/* @__PURE__ */ jsx(XIcon, { className: "size-4" }), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sheet-header",
		className: cn("flex flex-col gap-1.5 p-4", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Title, {
		"data-slot": "sheet-title",
		className: cn("text-foreground font-semibold", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Description, {
		"data-slot": "sheet-description",
		className: cn("text-muted-foreground text-sm", className),
		...props
	});
}
//#endregion
//#region resources/js/hooks/use-mobile.tsx
var mql = typeof window === "undefined" ? void 0 : window.matchMedia(`(max-width: 767px)`);
function mediaQueryListener(callback) {
	if (!mql) return () => {};
	mql.addEventListener("change", callback);
	return () => {
		mql.removeEventListener("change", callback);
	};
}
function isSmallerThanBreakpoint() {
	return mql?.matches ?? false;
}
function getServerSnapshot() {
	return false;
}
function useIsMobile() {
	return useSyncExternalStore(mediaQueryListener, isSmallerThanBreakpoint, getServerSnapshot);
}
//#endregion
//#region resources/js/components/ui/sidebar.tsx
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 3600 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React.createContext(null);
function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
	return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = React.useState(false);
	const [_open, _setOpen] = React.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = React.useCallback((value) => {
		const openState = typeof value === "function" ? value(open) : value;
		if (setOpenProp) setOpenProp(openState);
		else _setOpen(openState);
		document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
	}, [setOpenProp, open]);
	const toggleSidebar = React.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [
		isMobile,
		setOpen,
		setOpenMobile
	]);
	React.useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);
	const state = open ? "expanded" : "collapsed";
	const contextValue = React.useMemo(() => ({
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	}), [
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	]);
	return /* @__PURE__ */ jsx(SidebarContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsx("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": SIDEBAR_WIDTH,
				"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
				...style
			},
			className: cn("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className),
			...props,
			children
		})
	});
}
function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
	if (collapsible === "none") return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar",
		className: cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className),
		...props,
		children
	});
	if (isMobile) return /* @__PURE__ */ jsxs(Sheet, {
		open: openMobile,
		onOpenChange: setOpenMobile,
		...props,
		children: [/* @__PURE__ */ jsxs(SheetHeader, {
			className: "sr-only",
			children: [/* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }), /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })]
		}), /* @__PURE__ */ jsx(SheetContent, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
			style: { "--sidebar-width": SIDEBAR_WIDTH_MOBILE },
			side,
			children: /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full flex-col",
				children
			})
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "group peer text-sidebar-foreground hidden md:block",
		"data-state": state,
		"data-collapsible": state === "collapsed" ? collapsible : "",
		"data-variant": variant,
		"data-side": side,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ jsx("div", { className: cn("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }), /* @__PURE__ */ jsx("div", {
			className: cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
			...props,
			children: /* @__PURE__ */ jsx("div", {
				"data-sidebar": "sidebar",
				className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
				children
			})
		})]
	});
}
function SidebarTrigger({ className, onClick, ...props }) {
	const { toggleSidebar, isMobile, state } = useSidebar();
	return /* @__PURE__ */ jsxs(Button, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: cn("h-7 w-7", className),
		onClick: (event) => {
			onClick?.(event);
			toggleSidebar();
		},
		...props,
		children: [isMobile || state === "collapsed" ? /* @__PURE__ */ jsx(PanelLeftOpenIcon, {}) : /* @__PURE__ */ jsx(PanelLeftCloseIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Toggle sidebar"
		})]
	});
}
function SidebarInset({ className, ...props }) {
	return /* @__PURE__ */ jsx("main", {
		"data-slot": "sidebar-inset",
		className: cn("bg-background relative flex max-w-full min-h-svh flex-1 flex-col", "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-0", className),
		...props
	});
}
function SidebarHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
		...props
	});
}
function SidebarGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: cn("relative flex w-full min-w-0 flex-col p-2", className),
		...props
	});
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "div", {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: cn("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:select-none group-data-[collapsible=icon]:pointer-events-none", className),
		...props
	});
}
function SidebarGroupContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: cn("w-full text-sm", className),
		...props
	});
}
function SidebarMenu({ className, ...props }) {
	return /* @__PURE__ */ jsx("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: cn("flex w-full min-w-0 flex-col gap-1", className),
		...props
	});
}
function SidebarMenuItem({ className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: cn("group/menu-item relative", className),
		...props
	});
}
var sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function SidebarMenuButton({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }) {
	const Comp = asChild ? Slot : "button";
	const { isMobile, state } = useSidebar();
	const button = /* @__PURE__ */ jsx(Comp, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": size,
		"data-active": isActive,
		className: cn(sidebarMenuButtonVariants({
			variant,
			size
		}), className),
		...props
	});
	if (!tooltip) return button;
	if (typeof tooltip === "string") tooltip = { children: tooltip };
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: button
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "right",
		align: "center",
		hidden: state !== "collapsed" || isMobile,
		...tooltip
	})] });
}
//#endregion
//#region resources/js/components/app-content.tsx
function AppContent({ variant = "sidebar", children, ...props }) {
	if (variant === "sidebar") return /* @__PURE__ */ jsx(SidebarInset, {
		...props,
		children
	});
	return /* @__PURE__ */ jsx("main", {
		className: "mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl",
		...props,
		children
	});
}
//#endregion
//#region resources/js/components/app-shell.tsx
function AppShell({ children, variant = "sidebar" }) {
	const isOpen = usePage().props.sidebarOpen;
	if (variant === "header") return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen w-full flex-col",
		children
	});
	return /* @__PURE__ */ jsx(SidebarProvider, {
		defaultOpen: isOpen,
		children
	});
}
//#endregion
//#region resources/js/components/app-logo-icon.tsx
function AppLogoIcon(props) {
	return /* @__PURE__ */ jsx("svg", {
		...props,
		viewBox: "0 0 40 42",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M17.2 5.63325L8.6 0.855469L0 5.63325V32.1434L16.2 41.1434L32.4 32.1434V23.699L40 19.4767V9.85547L31.4 5.07769L22.8 9.85547V18.2999L17.2 21.411V5.63325ZM38 18.2999L32.4 21.411V15.2545L38 12.1434V18.2999ZM36.9409 10.4439L31.4 13.5221L25.8591 10.4439L31.4 7.36561L36.9409 10.4439ZM24.8 18.2999V12.1434L30.4 15.2545V21.411L24.8 18.2999ZM23.8 20.0323L29.3409 23.1105L16.2 30.411L10.6591 27.3328L23.8 20.0323ZM7.6 27.9212L15.2 32.1434V38.2999L2 30.9666V7.92116L7.6 11.0323V27.9212ZM8.6 9.29991L3.05913 6.22165L8.6 3.14339L14.1409 6.22165L8.6 9.29991ZM30.4 24.8101L17.2 32.1434V38.2999L30.4 30.9666V24.8101ZM9.6 11.0323L15.2 7.92117V22.5221L9.6 25.6333V11.0323Z"
		})
	});
}
//#endregion
//#region resources/js/components/app-logo.tsx
function AppLogo() {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
		className: "flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground",
		children: /* @__PURE__ */ jsx(AppLogoIcon, { className: "size-5 fill-current text-white dark:text-black" })
	}), /* @__PURE__ */ jsx("div", {
		className: "ml-1 grid flex-1 text-left text-sm",
		children: /* @__PURE__ */ jsx("span", {
			className: "mb-0.5 truncate leading-tight font-semibold",
			children: "PBM Agency"
		})
	})] });
}
//#endregion
//#region resources/js/components/nav-footer.tsx
function NavFooter({ items, className, ...props }) {
	return /* @__PURE__ */ jsx(SidebarGroup, {
		...props,
		className: `group-data-[collapsible=icon]:p-0 ${className || ""}`,
		children: /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: items.map((item) => /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, {
			asChild: true,
			className: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",
			children: /* @__PURE__ */ jsxs("a", {
				href: toUrl(item.href),
				target: "_blank",
				rel: "noopener noreferrer",
				children: [item.icon && /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("span", { children: item.title })]
			})
		}) }, item.title)) }) })
	});
}
//#endregion
//#region resources/js/hooks/use-current-url.ts
function useCurrentUrl() {
	const page = usePage();
	const currentUrlPath = new URL(page.url, typeof window !== "undefined" ? window.location.origin : "http://localhost").pathname;
	const isCurrentUrl = (urlToCheck, currentUrl, startsWith = false) => {
		const urlToCompare = currentUrl ?? currentUrlPath;
		const urlString = toUrl(urlToCheck);
		const comparePath = (path) => startsWith ? urlToCompare.startsWith(path) : path === urlToCompare;
		if (!urlString.startsWith("http")) return comparePath(urlString);
		try {
			return comparePath(new URL(urlString).pathname);
		} catch {
			return false;
		}
	};
	const isCurrentOrParentUrl = (urlToCheck, currentUrl) => {
		return isCurrentUrl(urlToCheck, currentUrl, true);
	};
	const whenCurrentUrl = (urlToCheck, ifTrue, ifFalse = null) => {
		return isCurrentUrl(urlToCheck) ? ifTrue : ifFalse;
	};
	return {
		currentUrl: currentUrlPath,
		isCurrentUrl,
		isCurrentOrParentUrl,
		whenCurrentUrl
	};
}
//#endregion
//#region resources/js/components/nav-main.tsx
function NavMain({ items = [] }) {
	const { isCurrentUrl } = useCurrentUrl();
	return /* @__PURE__ */ jsxs(SidebarGroup, {
		className: "px-2 py-0",
		children: [/* @__PURE__ */ jsx(SidebarGroupLabel, { children: "Platform" }), /* @__PURE__ */ jsx(SidebarMenu, { children: items.map((item) => /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, {
			asChild: true,
			isActive: isCurrentUrl(item.href),
			tooltip: { children: item.title },
			children: /* @__PURE__ */ jsxs(Link, {
				href: item.href,
				prefetch: true,
				children: [item.icon && /* @__PURE__ */ jsx(item.icon, {}), /* @__PURE__ */ jsx("span", { children: item.title })]
			})
		}) }, item.title)) })]
	});
}
//#endregion
//#region resources/js/components/ui/dropdown-menu.tsx
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset,
		className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md", className),
		...props
	}) });
}
function DropdownMenuGroup({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Group, {
		"data-slot": "dropdown-menu-group",
		...props
	});
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props
	});
}
function DropdownMenuLabel({ className, inset, ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": inset,
		className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
		...props
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: cn("bg-border -mx-1 my-1 h-px", className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/avatar.tsx
function Avatar({ className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarPrimitive.Root, {
		"data-slot": "avatar",
		className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
		...props
	});
}
function AvatarImage({ className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarPrimitive.Image, {
		"data-slot": "avatar-image",
		className: cn("aspect-square size-full", className),
		...props
	});
}
function AvatarFallback({ className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarPrimitive.Fallback, {
		"data-slot": "avatar-fallback",
		className: cn("bg-muted flex size-full items-center justify-center rounded-full", className),
		...props
	});
}
//#endregion
//#region resources/js/hooks/use-initials.tsx
function useInitials() {
	return useCallback((fullName) => {
		const names = fullName.trim().split(" ");
		if (names.length === 0) return "";
		if (names.length === 1) return names[0].charAt(0).toUpperCase();
		return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
	}, []);
}
//#endregion
//#region resources/js/components/user-info.tsx
function UserInfo({ user, showEmail = false }) {
	const getInitials = useInitials();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Avatar, {
		className: "h-8 w-8 overflow-hidden rounded-full",
		children: [/* @__PURE__ */ jsx(AvatarImage, {
			src: user.avatar,
			alt: user.name
		}), /* @__PURE__ */ jsx(AvatarFallback, {
			className: "rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white",
			children: getInitials(user.name)
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "grid flex-1 text-left text-sm leading-tight",
		children: [/* @__PURE__ */ jsx("span", {
			className: "truncate font-medium",
			children: user.name
		}), showEmail && /* @__PURE__ */ jsx("span", {
			className: "truncate text-xs text-muted-foreground",
			children: user.email
		})]
	})] });
}
//#endregion
//#region resources/js/hooks/use-mobile-navigation.ts
function useMobileNavigation() {
	return useCallback(() => {
		document.body.style.removeProperty("pointer-events");
	}, []);
}
//#endregion
//#region resources/js/wayfinder/index.ts
var urlDefaults = () => ({});
var getValue = (value) => {
	if (value === true) return "1";
	if (value === false) return "0";
	return value.toString();
};
var addNestedParams = (obj, prefix, params) => {
	Object.entries(obj).forEach(([subKey, value]) => {
		if (value === void 0) return;
		const paramKey = `${prefix}[${subKey}]`;
		if (Array.isArray(value)) value.forEach((v) => params.append(`${paramKey}[]`, getValue(v)));
		else if (value !== null && typeof value === "object") addNestedParams(value, paramKey, params);
		else if ([
			"string",
			"number",
			"boolean"
		].includes(typeof value)) params.set(paramKey, getValue(value));
	});
};
var clearParamFamily = (params, key) => {
	const toDelete = /* @__PURE__ */ new Set();
	params.forEach((_, paramKey) => {
		if (paramKey === key || paramKey.startsWith(`${key}[`)) toDelete.add(paramKey);
	});
	toDelete.forEach((paramKey) => params.delete(paramKey));
};
var queryParams = (options) => {
	if (!options || !options.query && !options.mergeQuery) return "";
	const query = options.query ?? options.mergeQuery;
	const includeExisting = options.mergeQuery !== void 0;
	const params = new URLSearchParams(includeExisting && typeof window !== "undefined" ? window.location.search : "");
	for (const key in query) {
		const queryValue = query[key];
		if (includeExisting) clearParamFamily(params, key);
		if (queryValue === void 0 || queryValue === null) continue;
		if (Array.isArray(queryValue)) queryValue.forEach((value) => {
			params.append(`${key}[]`, value.toString());
		});
		else if (typeof queryValue === "object") addNestedParams(queryValue, key, params);
		else params.set(key, getValue(queryValue));
	}
	const str = params.toString();
	return str.length > 0 ? `?${str}` : "";
};
var applyUrlDefaults = (existing) => {
	const existingParams = { ...existing ?? {} };
	const defaultParams = urlDefaults();
	for (const key in defaultParams) if (existingParams[key] === void 0 && defaultParams[key] !== void 0) existingParams[key] = defaultParams[key];
	return existingParams;
};
//#endregion
//#region resources/js/routes/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
var login = (options) => ({
	url: login.url(options),
	method: "get"
});
login.definition = {
	methods: ["get", "head"],
	url: "/login"
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.url = (options) => {
	return login.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.get = (options) => ({
	url: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.head = (options) => ({
	url: login.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
var loginForm = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.get = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.head = (options) => ({
	action: login.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
login.form = loginForm;
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
var logout = (options) => ({
	url: logout.url(options),
	method: "post"
});
logout.definition = {
	methods: ["post"],
	url: "/logout"
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options) => {
	return logout.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options) => ({
	url: logout.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
var logoutForm = (options) => ({
	action: logout.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options) => ({
	action: logout.url(options),
	method: "post"
});
logout.form = logoutForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
var register = (options) => ({
	url: register.url(options),
	method: "get"
});
register.definition = {
	methods: ["get", "head"],
	url: "/register"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options) => {
	return register.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options) => ({
	url: register.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options) => ({
	url: register.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
var registerForm = (options) => ({
	action: register.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options) => ({
	action: register.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options) => ({
	action: register.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
register.form = registerForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
var home = (options) => ({
	url: home.url(options),
	method: "get"
});
home.definition = {
	methods: ["get", "head"],
	url: "/"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
home.url = (options) => {
	return home.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
home.get = (options) => ({
	url: home.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
home.head = (options) => ({
	url: home.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
var homeForm = (options) => ({
	action: home.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
homeForm.get = (options) => ({
	action: home.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
homeForm.head = (options) => ({
	action: home.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
home.form = homeForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
var dashboard = (options) => ({
	url: dashboard.url(options),
	method: "get"
});
dashboard.definition = {
	methods: ["get", "head"],
	url: "/dashboard"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.url = (options) => {
	return dashboard.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.get = (options) => ({
	url: dashboard.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.head = (options) => ({
	url: dashboard.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
var dashboardForm = (options) => ({
	action: dashboard.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboardForm.get = (options) => ({
	action: dashboard.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboardForm.head = (options) => ({
	action: dashboard.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
dashboard.form = dashboardForm;
//#endregion
//#region resources/js/routes/profile/index.ts
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
var edit$2 = (options) => ({
	url: edit$2.url(options),
	method: "get"
});
edit$2.definition = {
	methods: ["get", "head"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit$2.url = (options) => {
	return edit$2.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit$2.get = (options) => ({
	url: edit$2.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit$2.head = (options) => ({
	url: edit$2.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
var editForm$2 = (options) => ({
	action: edit$2.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
editForm$2.get = (options) => ({
	action: edit$2.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
editForm$2.head = (options) => ({
	action: edit$2.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit$2.form = editForm$2;
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
var update = (options) => ({
	url: update.url(options),
	method: "patch"
});
update.definition = {
	methods: ["patch"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
update.patch = (options) => ({
	url: update.url(options),
	method: "patch"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
var updateForm = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
updateForm.patch = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
var destroy = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroy.url = (options) => {
	return destroy.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroy.delete = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
var destroyForm = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroyForm.delete = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
Object.assign(edit$2, edit$2), Object.assign(update, update), Object.assign(destroy, destroy);
//#endregion
//#region resources/js/components/user-menu-content.tsx
function UserMenuContent({ user }) {
	const cleanup = useMobileNavigation();
	const handleLogout = () => {
		cleanup();
		router.flushAll();
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(DropdownMenuLabel, {
			className: "p-0 font-normal",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
				children: /* @__PURE__ */ jsx(UserInfo, {
					user,
					showEmail: true
				})
			})
		}),
		/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
		/* @__PURE__ */ jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsx(DropdownMenuItem, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Link, {
				className: "block w-full cursor-pointer",
				href: edit$2(),
				prefetch: true,
				onClick: cleanup,
				children: [/* @__PURE__ */ jsx(Settings, { className: "mr-2" }), "Settings"]
			})
		}) }),
		/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
		/* @__PURE__ */ jsx(DropdownMenuItem, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Link, {
				className: "block w-full cursor-pointer",
				href: logout(),
				as: "button",
				onClick: handleLogout,
				"data-test": "logout-button",
				children: [/* @__PURE__ */ jsx(LogOut, { className: "mr-2" }), "Log out"]
			})
		})
	] });
}
//#endregion
//#region resources/js/components/nav-user.tsx
function NavUser() {
	const { auth } = usePage().props;
	const { state } = useSidebar();
	const isMobile = useIsMobile();
	if (!auth.user) return null;
	return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(SidebarMenuButton, {
			size: "lg",
			className: "group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent",
			"data-test": "sidebar-menu-button",
			children: [/* @__PURE__ */ jsx(UserInfo, { user: auth.user }), /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto size-4" })]
		})
	}), /* @__PURE__ */ jsx(DropdownMenuContent, {
		className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
		align: "end",
		side: isMobile ? "bottom" : state === "collapsed" ? "left" : "bottom",
		children: /* @__PURE__ */ jsx(UserMenuContent, { user: auth.user })
	})] }) }) });
}
//#endregion
//#region resources/js/components/app-sidebar.tsx
var mainNavItems = [{
	title: "Analytics",
	href: "/admin",
	icon: ChartSpline
}, {
	title: "A/B Labs",
	href: "/admin/labs",
	icon: FlaskConical
}];
var footerNavItems = [{
	title: "Repository",
	href: "https://github.com/laravel/react-starter-kit",
	icon: FolderGit2
}, {
	title: "Documentation",
	href: "https://laravel.com/docs/starter-kits#react",
	icon: BookOpen
}];
function AppSidebar() {
	return /* @__PURE__ */ jsxs(Sidebar, {
		collapsible: "icon",
		variant: "sidebar",
		children: [
			/* @__PURE__ */ jsx(SidebarHeader, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, {
				size: "lg",
				asChild: true,
				children: /* @__PURE__ */ jsx(Link, {
					href: "/admin",
					prefetch: true,
					children: /* @__PURE__ */ jsx(AppLogo, {})
				})
			}) }) }) }),
			/* @__PURE__ */ jsx(SidebarContent, { children: /* @__PURE__ */ jsx(NavMain, { items: mainNavItems }) }),
			/* @__PURE__ */ jsxs(SidebarFooter, { children: [/* @__PURE__ */ jsx(NavFooter, {
				items: footerNavItems,
				className: "mt-auto"
			}), /* @__PURE__ */ jsx(NavUser, {})] })
		]
	});
}
//#endregion
//#region resources/js/components/ui/breadcrumb.tsx
function Breadcrumb({ ...props }) {
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		...props
	});
}
function BreadcrumbList({ className, ...props }) {
	return /* @__PURE__ */ jsx("ol", {
		"data-slot": "breadcrumb-list",
		className: cn("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className),
		...props
	});
}
function BreadcrumbItem({ className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "breadcrumb-item",
		className: cn("inline-flex items-center gap-1.5", className),
		...props
	});
}
function BreadcrumbLink({ asChild, className, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "a", {
		"data-slot": "breadcrumb-link",
		className: cn("hover:text-foreground transition-colors", className),
		...props
	});
}
function BreadcrumbPage({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: cn("text-foreground font-normal", className),
		...props
	});
}
function BreadcrumbSeparator({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: cn("[&>svg]:size-3.5", className),
		...props,
		children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
	});
}
//#endregion
//#region resources/js/components/breadcrumbs.tsx
function Breadcrumbs({ breadcrumbs }) {
	return /* @__PURE__ */ jsx(Fragment$1, { children: breadcrumbs.length > 0 && /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsx(BreadcrumbList, { children: breadcrumbs.map((item, index) => {
		const isLast = index === breadcrumbs.length - 1;
		return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(BreadcrumbItem, { children: isLast ? /* @__PURE__ */ jsx(BreadcrumbPage, { children: item.title }) : /* @__PURE__ */ jsx(BreadcrumbLink, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Link, {
				href: item.href,
				children: item.title
			})
		}) }), !isLast && /* @__PURE__ */ jsx(BreadcrumbSeparator, {})] }, index);
	}) }) }) });
}
//#endregion
//#region resources/js/components/app-sidebar-header.tsx
function AppSidebarHeader({ breadcrumbs = [] }) {
	return /* @__PURE__ */ jsx("header", {
		className: "flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }), /* @__PURE__ */ jsx(Breadcrumbs, { breadcrumbs })]
		})
	});
}
//#endregion
//#region resources/js/layouts/app/app-sidebar-layout.tsx
function AppSidebarLayout({ children, breadcrumbs = [] }) {
	return /* @__PURE__ */ jsxs(AppShell, {
		variant: "sidebar",
		children: [/* @__PURE__ */ jsx(AppSidebar, {}), /* @__PURE__ */ jsxs(AppContent, {
			variant: "sidebar",
			className: "overflow-x-hidden",
			children: [/* @__PURE__ */ jsx(AppSidebarHeader, { breadcrumbs }), children]
		})]
	});
}
//#endregion
//#region resources/js/layouts/app-layout.tsx
function AppLayout({ breadcrumbs = [], children }) {
	return /* @__PURE__ */ jsx(AppSidebarLayout, {
		breadcrumbs,
		children
	});
}
//#endregion
//#region resources/js/layouts/auth/auth-simple-layout.tsx
function AuthSimpleLayout({ children, title, description }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-sm",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center gap-4",
					children: [/* @__PURE__ */ jsxs(Link, {
						href: home(),
						className: "flex flex-col items-center gap-2 font-medium",
						children: [/* @__PURE__ */ jsx("div", {
							className: "mb-1 flex h-9 w-9 items-center justify-center rounded-md",
							children: /* @__PURE__ */ jsx(AppLogoIcon, { className: "size-9 fill-current text-[var(--foreground)] dark:text-white" })
						}), /* @__PURE__ */ jsx("span", {
							className: "sr-only",
							children: title
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2 text-center",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "text-xl font-medium",
							children: title
						}), /* @__PURE__ */ jsx("p", {
							className: "text-center text-sm text-muted-foreground",
							children: description
						})]
					})]
				}), children]
			})
		})
	});
}
//#endregion
//#region resources/js/layouts/auth-layout.tsx
function AuthLayout({ title = "", description = "", children }) {
	return /* @__PURE__ */ jsx(AuthSimpleLayout, {
		title,
		description,
		children
	});
}
//#endregion
//#region resources/js/components/heading.tsx
function Heading({ title, description, variant = "default" }) {
	return /* @__PURE__ */ jsxs("header", {
		className: variant === "small" ? "" : "mb-8 space-y-0.5",
		children: [/* @__PURE__ */ jsx("h2", {
			className: variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight",
			children: title
		}), description && /* @__PURE__ */ jsx("p", {
			className: "text-sm text-muted-foreground",
			children: description
		})]
	});
}
//#endregion
//#region resources/js/routes/appearance/index.ts
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
var edit$1 = (options) => ({
	url: edit$1.url(options),
	method: "get"
});
edit$1.definition = {
	methods: ["get", "head"],
	url: "/settings/appearance"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
edit$1.url = (options) => {
	return edit$1.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
edit$1.get = (options) => ({
	url: edit$1.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
edit$1.head = (options) => ({
	url: edit$1.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
var editForm$1 = (options) => ({
	action: edit$1.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
editForm$1.get = (options) => ({
	action: edit$1.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
editForm$1.head = (options) => ({
	action: edit$1.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit$1.form = editForm$1;
Object.assign(edit$1, edit$1);
//#endregion
//#region resources/js/routes/security/index.ts
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/security"
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:32
* @route '/settings/security'
*/
editForm.head = (options) => ({
	action: edit.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit.form = editForm;
Object.assign(edit, edit);
//#endregion
//#region resources/js/layouts/settings/layout.tsx
var sidebarNavItems = [
	{
		title: "Profile",
		href: edit$2(),
		icon: null
	},
	{
		title: "Security",
		href: edit(),
		icon: null
	},
	{
		title: "Appearance",
		href: edit$1(),
		icon: null
	}
];
function SettingsLayout({ children }) {
	const { isCurrentOrParentUrl } = useCurrentUrl();
	return /* @__PURE__ */ jsxs("div", {
		className: "px-4 py-6",
		children: [/* @__PURE__ */ jsx(Heading, {
			title: "Settings",
			description: "Manage your profile and account settings"
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col lg:flex-row lg:space-x-12",
			children: [
				/* @__PURE__ */ jsx("aside", {
					className: "w-full max-w-xl lg:w-48",
					children: /* @__PURE__ */ jsx("nav", {
						className: "flex flex-col space-y-1 space-x-0",
						"aria-label": "Settings",
						children: sidebarNavItems.map((item, index) => /* @__PURE__ */ jsx(Button, {
							size: "sm",
							variant: "ghost",
							asChild: true,
							className: cn("w-full justify-start", { "bg-muted": isCurrentOrParentUrl(item.href) }),
							children: /* @__PURE__ */ jsxs(Link, {
								href: item.href,
								children: [item.icon && /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }), item.title]
							})
						}, `${toUrl(item.href)}-${index}`))
					})
				}),
				/* @__PURE__ */ jsx(Separator, { className: "my-6 lg:hidden" }),
				/* @__PURE__ */ jsx("div", {
					className: "flex-1 md:max-w-2xl",
					children: /* @__PURE__ */ jsx("section", {
						className: "max-w-xl space-y-12",
						children
					})
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/ssr.tsx
var appName = "NextLevel";
var renderPage = (page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => title ? `${title} - ${appName}` : appName,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({
		"./pages/admin/analytics.tsx": () => import("./assets/analytics-JbTVP-2j.js"),
		"./pages/admin/labs/index.tsx": () => import("./assets/labs-D3dtsv6m.js"),
		"./pages/auth/confirm-password.tsx": () => import("./assets/confirm-password-DULZf6Mr.js"),
		"./pages/auth/forgot-password.tsx": () => import("./assets/forgot-password-BESnYyRB.js"),
		"./pages/auth/login.tsx": () => import("./assets/login-CfIe7Uls.js"),
		"./pages/auth/register.tsx": () => import("./assets/register-ERc-AM5g.js"),
		"./pages/auth/reset-password.tsx": () => import("./assets/reset-password-B1YAgovD.js"),
		"./pages/auth/two-factor-challenge.tsx": () => import("./assets/two-factor-challenge-mlSypIOY.js"),
		"./pages/auth/verify-email.tsx": () => import("./assets/verify-email-CUCkr2AS.js"),
		"./pages/cycle1/c1-angle.tsx": () => import("./assets/c1-angle-BCJwEDst.js"),
		"./pages/landing.tsx": () => import("./assets/landing-hAJp6gpf.js")
	})),
	layout: (name) => {
		switch (true) {
			case name.startsWith("auth/"): return AuthLayout;
			case name.startsWith("settings/"): return [AppLayout, SettingsLayout];
			default: return null;
		}
	},
	setup: ({ App, props }) => {
		return /* @__PURE__ */ jsxs(TooltipProvider, {
			delayDuration: 0,
			children: [/* @__PURE__ */ jsx(App, { ...props }), /* @__PURE__ */ jsx(Toaster$1, {})]
		});
	}
});
createServer(renderPage);
//#endregion
export { applyUrlDefaults as a, Button as c, renderPage as default, register as i, buttonVariants as l, login as n, queryParams as o, logout as r, Input as s, AppSidebarLayout as t, cn as u };

//# sourceMappingURL=ssr.js.map