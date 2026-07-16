import { c as Button, l as buttonVariants, u as cn } from "../ssr.js";
import { a as SelectTrigger, i as SelectItem, n as Select, o as SelectValue, r as SelectContent, t as admin_layout_default } from "./admin-layout-BjWc0bCI.js";
import { t as Checkbox } from "./checkbox-BcraPnnw.js";
import { t as Label } from "./label-BaWLt1lx.js";
import { Head, router, useHttp } from "@inertiajs/react";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Activity, AlertTriangle, ArrowDown, ArrowUpDown, BarChart3, CalendarIcon, CheckCircle, ChevronLeft, ChevronRight, Clock, Eye, Filter, FlaskConical, Globe, Layers, Monitor, MousePointerClick, RefreshCw, ShoppingCart, Smartphone, Target, TrendingUp, Trophy, Users, X } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { format, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import * as PopoverPrimitive from "@radix-ui/react-popover";
//#region resources/js/components/ui/calendar.tsx
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
	return /* @__PURE__ */ jsx(DayPicker, {
		showOutsideDays,
		className: cn("p-3 pointer-events-auto", className),
		classNames: {
			months: "flex flex-col sm:flex-row gap-2",
			month: "flex flex-col gap-4",
			month_caption: "flex justify-center pt-1 relative items-center w-full",
			caption_label: "text-sm font-medium",
			nav: "flex items-center gap-1",
			button_previous: cn(buttonVariants({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"),
			button_next: cn(buttonVariants({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"),
			month_grid: "w-full border-collapse space-x-1",
			weekdays: "flex",
			weekday: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
			week: "flex w-full mt-2",
			day: cn("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50", props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"),
			day_button: cn(buttonVariants({ variant: "ghost" }), "size-8 p-0 font-normal aria-selected:opacity-100"),
			range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
			range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
			selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
			today: "bg-accent text-accent-foreground",
			outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
			disabled: "text-muted-foreground opacity-50",
			range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
			hidden: "invisible",
			...classNames
		},
		components: { Chevron: ({ orientation }) => {
			return /* @__PURE__ */ jsx(orientation === "left" ? ChevronLeft : ChevronRight, { className: "size-4" });
		} },
		...props
	});
}
//#endregion
//#region resources/js/components/ui/popover.tsx
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(PopoverPrimitive.Content, {
	ref,
	align,
	sideOffset,
	className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none", className),
	...props
}) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
//#endregion
//#region resources/js/components/date-range-picker.tsx
function DateRangePicker({ className, date, onUpdate }) {
	const [isOpen, setIsOpen] = React.useState(false);
	const handleSelect = (selectedDate) => {
		onUpdate(selectedDate);
		if (selectedDate?.from && selectedDate?.to) setIsOpen(false);
	};
	return /* @__PURE__ */ jsx("div", {
		className: cn("grid gap-2", className),
		children: /* @__PURE__ */ jsxs(Popover, {
			open: isOpen,
			onOpenChange: setIsOpen,
			children: [/* @__PURE__ */ jsx(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs(Button, {
					id: "date",
					variant: "outline",
					className: cn("w-full justify-start text-left font-normal sm:w-[280px]", !date && "text-muted-foreground"),
					children: [/* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }), date?.from ? date.to ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
						format(date.from, "LLL dd, y"),
						" -",
						" ",
						format(date.to, "LLL dd, y")
					] }) : format(date.from, "LLL dd, y") : /* @__PURE__ */ jsx("span", { children: "Pick a date range" })]
				})
			}), /* @__PURE__ */ jsxs(PopoverContent, {
				className: "w-auto p-0",
				align: "start",
				children: [/* @__PURE__ */ jsx(Calendar, {
					mode: "range",
					defaultMonth: date?.from,
					selected: date,
					onSelect: handleSelect,
					numberOfMonths: 2,
					disabled: (date) => date > /* @__PURE__ */ new Date(),
					className: "hidden sm:block"
				}), /* @__PURE__ */ jsx(Calendar, {
					mode: "range",
					defaultMonth: date?.from,
					selected: date,
					onSelect: handleSelect,
					numberOfMonths: 1,
					disabled: (date) => date > /* @__PURE__ */ new Date(),
					className: "block sm:hidden"
				})]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/ui/badge.tsx
var badgeVariants = cva("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "span", {
		"data-slot": "badge",
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/card.tsx
function Card({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		className: cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-header",
		className: cn("flex flex-col gap-1.5 px-6", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-title",
		className: cn("leading-none font-semibold", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-description",
		className: cn("text-muted-foreground text-sm", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-content",
		className: cn("px-6", className),
		...props
	});
}
//#endregion
//#region resources/js/lib/safe-data.ts
/**
* Normalise a value that might be a JS array, a PHP-serialised object
* (keyed by "0","1",…), null, or undefined into a proper array.
*
* PHP Collections sometimes serialise as `{}` instead of `[]`.
*/
function toSafeArray(val) {
	if (Array.isArray(val)) return val;
	if (val !== null && val !== void 0 && typeof val === "object") return Object.values(val);
	return [];
}
/**
* Return a guaranteed number — falls back to `fallback` when the input
* is null, undefined or NaN.
*/
function safeNumber(val, fallback = 0) {
	if (val === null || val === void 0 || Number.isNaN(val)) return fallback;
	return val;
}
/** Format IDR currency without decimals. */
function formatCurrency(amount) {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(safeNumber(amount));
}
/** Format a number with Indonesian locale grouping. */
function formatNumber(num) {
	return new Intl.NumberFormat("id-ID").format(safeNumber(num));
}
/** Format seconds into a human-readable duration string. */
function formatDuration(seconds) {
	const s = safeNumber(seconds);
	if (s < 60) return `${Math.round(s)}s`;
	return `${Math.floor(s / 60)}m ${Math.round(s % 60)}s`;
}
/**
* Safe percentage string — avoids crashes when the value is
* null / undefined.
*/
function formatPercent(val, decimals = 1) {
	return safeNumber(val).toFixed(decimals);
}
//#endregion
//#region resources/js/components/labs/audience-segmentation.tsx
var PERSONA_COLORS = {
	Bouncers: "var(--destructive)",
	Skimmers: "var(--chart-3)",
	"Deep Readers": "var(--chart-4)",
	Casuals: "var(--chart-2)"
};
var DEPTH_COLORS = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)"
];
function AudienceSegmentation({ readers, heatmap, sectionHeatmap }) {
	const [activeTab, setActiveTab] = useState("personas");
	const safeReaders = toSafeArray(readers);
	const safeHeatmap = toSafeArray(heatmap);
	const safeSectionHeatmap = toSafeArray(sectionHeatmap ?? []);
	const personaChartData = useMemo(() => {
		return safeReaders.map((r) => {
			const dataPoint = { name: r.landing_source };
			toSafeArray(r.personas).forEach((p) => {
				dataPoint[p.name] = safeNumber(p.percentage);
			});
			return dataPoint;
		});
	}, [safeReaders]);
	const heatmapChartData = useMemo(() => {
		return [
			25,
			50,
			75,
			90
		].map((depth) => {
			const dataPoint = {
				name: `${depth}%`,
				depth
			};
			safeHeatmap.forEach((h) => {
				const analysis = toSafeArray(h.depth_analysis).find((d) => d.depth === depth);
				dataPoint[h.landing_source] = safeNumber(analysis?.percentage);
			});
			return dataPoint;
		});
	}, [safeHeatmap]);
	const personaNames = useMemo(() => {
		if (safeReaders.length === 0) return [];
		return toSafeArray(safeReaders[0].personas).map((p) => p.name);
	}, [safeReaders]);
	const landingSources = safeHeatmap.map((h) => h.landing_source);
	if (!(safeReaders.length > 0 || safeHeatmap.length > 0 || safeSectionHeatmap.length > 0)) return /* @__PURE__ */ jsx(Card, {
		className: "py-12 text-center",
		children: /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx(Users, { className: "mx-auto mb-4 h-10 w-10 text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
			className: "text-muted-foreground",
			children: "No audience segmentation data available"
		})] })
	});
	const getDropOffColor = (pct) => {
		if (pct >= 80) return "bg-emerald-500";
		if (pct >= 60) return "bg-emerald-400";
		if (pct >= 40) return "bg-amber-400";
		if (pct >= 20) return "bg-orange-400";
		return "bg-red-400";
	};
	const getDropBadgeVariant = (drop) => {
		if (drop > 30) return "destructive";
		if (drop > 15) return "secondary";
		return "outline";
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
				className: "text-xl font-semibold text-foreground",
				children: "Audience Segmentation"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "User behavior patterns and content consumption"
			})] })]
		}), /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ jsxs("button", {
					onClick: () => setActiveTab("personas"),
					className: `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${activeTab === "personas" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
					children: [/* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }), "Personas"]
				}),
				/* @__PURE__ */ jsxs("button", {
					onClick: () => setActiveTab("heatmap"),
					className: `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${activeTab === "heatmap" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
					children: [/* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }), "Scroll Heatmap"]
				}),
				/* @__PURE__ */ jsxs("button", {
					onClick: () => setActiveTab("sections"),
					className: `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${activeTab === "sections" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
					children: [/* @__PURE__ */ jsx(Layers, { className: "h-4 w-4" }), "Section Views"]
				})
			]
		}) }), /* @__PURE__ */ jsxs(CardContent, { children: [
			activeTab === "personas" && safeReaders.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(CardTitle, {
						className: "text-base",
						children: "Behavioral Personas"
					}), /* @__PURE__ */ jsx(CardDescription, { children: "Traffic composition by reader type" })] }),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3 rounded-lg border border-border/50 bg-muted/20 p-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-4",
							children: personaNames.map((name) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("div", {
									className: "h-3 w-3 rounded-full",
									style: { backgroundColor: PERSONA_COLORS[name] }
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm text-muted-foreground",
									children: name
								})]
							}, name))
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 gap-x-4 gap-y-2 border-t border-border/50 pt-3 text-xs text-muted-foreground sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1 font-semibold text-foreground",
										children: [
											/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--destructive)]" }),
											" ",
											"Bouncers"
										]
									}), /* @__PURE__ */ jsx("span", { children: "Scroll < 25% & Dwell < 15s (Immediate exit)" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1 font-semibold text-foreground",
										children: [
											/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--chart-3)]" }),
											" ",
											"Skimmers"
										]
									}), /* @__PURE__ */ jsx("span", { children: "Scroll > 75% & Dwell < 60s (Scanning only)" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1 font-semibold text-foreground",
										children: [
											/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--chart-4)]" }),
											" ",
											"Deep Readers"
										]
									}), /* @__PURE__ */ jsx("span", { children: "Total Dwell Time > 2 mins (Highly engaged)" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1 font-semibold text-foreground",
										children: [
											/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--chart-2)]" }),
											" ",
											"Casuals"
										]
									}), /* @__PURE__ */ jsx("span", { children: "Moderate scroll & dwell time" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "h-[300px] w-full",
						children: /* @__PURE__ */ jsx(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ jsxs(BarChart, {
								data: personaChartData,
								layout: "vertical",
								margin: {
									top: 20,
									right: 30,
									left: 80,
									bottom: 5
								},
								children: [
									/* @__PURE__ */ jsx(CartesianGrid, {
										strokeDasharray: "3 3",
										className: "stroke-border"
									}),
									/* @__PURE__ */ jsx(XAxis, {
										type: "number",
										domain: [0, 100],
										unit: "%",
										className: "fill-muted-foreground text-xs"
									}),
									/* @__PURE__ */ jsx(YAxis, {
										dataKey: "name",
										type: "category",
										className: "fill-muted-foreground text-xs",
										width: 70
									}),
									/* @__PURE__ */ jsx(Tooltip, {
										contentStyle: {
											backgroundColor: "var(--popover)",
											border: "1px solid var(--border)",
											borderRadius: "8px",
											color: "var(--popover-foreground)"
										},
										formatter: (value) => [`${Number(value ?? 0).toFixed(1)}%`]
									}),
									personaNames.map((name) => /* @__PURE__ */ jsx(Bar, {
										dataKey: name,
										stackId: "a",
										fill: PERSONA_COLORS[name]
									}, name))
								]
							})
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid gap-3 md:grid-cols-2",
						children: safeReaders.map((r) => {
							const rPersonas = toSafeArray(r.personas);
							const bouncers = rPersonas.find((p) => p.name === "Bouncers");
							const deepReaders = rPersonas.find((p) => p.name === "Deep Readers");
							const hasIssue = safeNumber(bouncers?.percentage) > 50;
							const hasWin = safeNumber(deepReaders?.percentage) > 20;
							return /* @__PURE__ */ jsxs("div", {
								className: `rounded-lg border p-3 ${hasIssue ? "border-destructive/50 bg-destructive/10" : hasWin ? "border-chart-4/50 bg-chart-4/10" : "border-border"}`,
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-2 flex items-center justify-between",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "font-mono text-sm font-medium text-foreground",
											children: r.landing_source
										}),
										hasIssue && /* @__PURE__ */ jsx(Badge, {
											variant: "destructive",
											className: "text-xs",
											children: "High Bounce"
										}),
										hasWin && !hasIssue && /* @__PURE__ */ jsx(Badge, {
											className: "bg-chart-4 text-xs text-foreground",
											children: "Engaged"
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-2 gap-2 text-xs",
									children: rPersonas.map((p) => /* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-muted-foreground",
											children: [p.name, ":"]
										}), /* @__PURE__ */ jsxs("span", {
											className: "font-medium text-foreground",
											children: [formatPercent(p.percentage, 1), "%"]
										})]
									}, p.name))
								})]
							}, r.landing_source);
						})
					})
				]
			}),
			activeTab === "heatmap" && safeHeatmap.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(CardTitle, {
						className: "text-base",
						children: "Scroll Depth Heatmap"
					}), /* @__PURE__ */ jsx(CardDescription, { children: "Content consumption drop-off visualization" })] }),
					/* @__PURE__ */ jsx("div", {
						className: "h-[300px] w-full",
						children: /* @__PURE__ */ jsx(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ jsxs(BarChart, {
								data: heatmapChartData,
								margin: {
									top: 20,
									right: 30,
									left: 20,
									bottom: 5
								},
								children: [
									/* @__PURE__ */ jsx(CartesianGrid, {
										strokeDasharray: "3 3",
										className: "stroke-border"
									}),
									/* @__PURE__ */ jsx(XAxis, {
										dataKey: "name",
										className: "fill-muted-foreground text-xs"
									}),
									/* @__PURE__ */ jsx(YAxis, {
										domain: [0, 100],
										unit: "%",
										className: "fill-muted-foreground text-xs"
									}),
									/* @__PURE__ */ jsx(Tooltip, {
										contentStyle: {
											backgroundColor: "var(--popover)",
											border: "1px solid var(--border)",
											borderRadius: "8px",
											color: "var(--popover-foreground)"
										},
										formatter: (value) => [`${Number(value ?? 0).toFixed(1)}%`]
									}),
									/* @__PURE__ */ jsx(Legend, {}),
									landingSources.map((source, index) => /* @__PURE__ */ jsx(Bar, {
										dataKey: source,
										fill: DEPTH_COLORS[index % DEPTH_COLORS.length],
										radius: [
											4,
											4,
											0,
											0
										]
									}, source))
								]
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-medium text-foreground",
							children: "Drop-off Analysis"
						}), safeHeatmap.map((h) => {
							const depths = toSafeArray(h.depth_analysis).sort((a, b) => safeNumber(a.depth) - safeNumber(b.depth));
							const hasCliff = depths.length >= 2 && safeNumber(depths[0].percentage) - safeNumber(depths[1].percentage) > 40;
							return /* @__PURE__ */ jsxs("div", {
								className: `rounded-lg border p-3 ${hasCliff ? "border-destructive/50" : "border-border"}`,
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-2 flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-mono text-sm font-medium text-foreground",
										children: h.landing_source
									}), hasCliff && /* @__PURE__ */ jsx(Badge, {
										variant: "destructive",
										className: "text-xs",
										children: "Drop-off Cliff"
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1",
									children: depths.map((d) => /* @__PURE__ */ jsxs("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "mb-1 text-center text-xs",
												children: /* @__PURE__ */ jsxs("span", {
													className: "text-muted-foreground",
													children: [d.depth, "%"]
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: "h-8 w-full overflow-hidden rounded bg-muted",
												children: /* @__PURE__ */ jsx("div", {
													className: "h-full bg-primary transition-all",
													style: {
														height: `${safeNumber(d.percentage)}%`,
														opacity: .4 + safeNumber(d.percentage) / 100 * .6
													}
												})
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-1 text-center text-xs font-medium",
												children: [formatPercent(d.percentage, 0), "%"]
											})
										]
									}, d.depth))
								})]
							}, h.landing_source);
						})]
					})
				]
			}),
			activeTab === "sections" && safeSectionHeatmap.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(CardTitle, {
					className: "text-base",
					children: "Section Visibility Funnel"
				}), /* @__PURE__ */ jsx(CardDescription, { children: "Percentage of visitors who saw each section — identify where users drop off" })] }), safeSectionHeatmap.map((item) => {
					const sections = toSafeArray(item.sections);
					if (sections.length === 0) return null;
					const maxViews = sections[0]?.views ?? 1;
					const biggestDrop = sections.reduce((max, s) => s.drop_from_prev > max.drop_from_prev ? s : max, sections[0]);
					return /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-sm font-semibold text-foreground",
									children: item.landing_source
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-xs text-muted-foreground",
									children: [
										maxViews.toLocaleString(),
										" ",
										"total sessions"
									]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "space-y-1",
								children: sections.map((section, idx) => /* @__PURE__ */ jsxs("div", { children: [idx > 0 && section.drop_from_prev > 0 && /* @__PURE__ */ jsx("div", {
									className: "flex items-center justify-center py-1",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3 text-muted-foreground" }), /* @__PURE__ */ jsxs(Badge, {
											variant: getDropBadgeVariant(section.drop_from_prev),
											className: "px-2 py-0 text-[10px]",
											children: [
												"−",
												formatPercent(section.drop_from_prev, 1),
												"%"
											]
										})]
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "group relative",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "w-28 shrink-0 text-right",
												children: /* @__PURE__ */ jsx("span", {
													className: `text-xs font-medium ${section.id === biggestDrop?.id && biggestDrop.drop_from_prev > 15 ? "text-destructive" : "text-foreground"}`,
													children: section.name
												})
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "relative h-8 flex-1 overflow-hidden rounded-md bg-muted",
												children: [/* @__PURE__ */ jsx("div", {
													className: `h-full rounded-md transition-all duration-500 ${getDropOffColor(section.pct)}`,
													style: { width: `${Math.max(section.pct, 2)}%` }
												}), /* @__PURE__ */ jsx("div", {
													className: "absolute inset-0 flex items-center px-3",
													children: /* @__PURE__ */ jsxs("span", {
														className: `text-xs font-bold ${section.pct > 30 ? "text-white" : "text-foreground"}`,
														children: [formatPercent(section.pct, 1), "%"]
													})
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "w-16 shrink-0 text-right",
												children: /* @__PURE__ */ jsx("span", {
													className: "text-xs text-muted-foreground",
													children: section.views.toLocaleString()
												})
											})
										]
									})
								})] }, section.id))
							}),
							biggestDrop && biggestDrop.drop_from_prev > 15 && /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-xs",
								children: [/* @__PURE__ */ jsx(ArrowDown, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("span", {
									className: "font-medium text-foreground",
									children: [
										"Biggest drop:",
										" ",
										biggestDrop.name
									]
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-muted-foreground",
									children: [
										" ",
										"—",
										" ",
										formatPercent(biggestDrop.drop_from_prev, 1),
										"% of visitors didn't reach this section from the previous one. Consider repositioning or improving the section above."
									]
								})] })]
							})
						]
					}, item.landing_source);
				})]
			}),
			activeTab === "personas" && safeReaders.length === 0 && /* @__PURE__ */ jsx("p", {
				className: "py-8 text-center text-muted-foreground",
				children: "No persona data available"
			}),
			activeTab === "heatmap" && safeHeatmap.length === 0 && /* @__PURE__ */ jsx("p", {
				className: "py-8 text-center text-muted-foreground",
				children: "No heatmap data available"
			}),
			activeTab === "sections" && safeSectionHeatmap.length === 0 && /* @__PURE__ */ jsx("p", {
				className: "py-8 text-center text-muted-foreground",
				children: "No section view data available yet. Data will appear after visitors scroll through landing page sections."
			})
		] })] })]
	});
}
//#endregion
//#region resources/js/components/labs/cta-analysis.tsx
function CtaAnalysis({ data }) {
	const safeData = toSafeArray(data);
	const sortedData = useMemo(() => {
		return [...safeData].map((lp) => {
			const locations = toSafeArray(lp.cta_locations);
			return {
				...lp,
				cta_locations: [...locations].sort((a, b) => (b.leads ?? 0) - (a.leads ?? 0)),
				total_leads: locations.reduce((sum, cta) => sum + (cta.leads ?? 0), 0),
				total_clicks: locations.reduce((sum, cta) => sum + (cta.click_count ?? 0), 0)
			};
		}).sort((a, b) => b.total_leads - a.total_leads);
	}, [safeData]);
	if (safeData.length === 0) return /* @__PURE__ */ jsx(Card, {
		className: "py-12 text-center",
		children: /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx(MousePointerClick, { className: "text-muted-foreground mx-auto mb-4 h-10 w-10" }), /* @__PURE__ */ jsx("p", {
			className: "text-muted-foreground",
			children: "No CTA performance data available"
		})] })
	});
	const formatLocation = (location) => {
		return location.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ jsx(MousePointerClick, { className: "text-primary h-5 w-5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
				className: "text-foreground text-xl font-semibold",
				children: "CTA Performance"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-sm",
				children: "Button placement attribution sorted by leads"
			})] })]
		}), /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, {
			className: "text-base",
			children: "Micro-Conversion Attribution"
		}), /* @__PURE__ */ jsx(CardDescription, { children: "Which button placements generate the most leads?" })] }), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("div", {
			className: "hidden overflow-x-auto lg:block",
			children: /* @__PURE__ */ jsxs("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
					className: "border-border border-b",
					children: [
						/* @__PURE__ */ jsx("th", {
							className: "text-muted-foreground p-4 text-left font-medium",
							children: "Landing Page"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "text-muted-foreground p-4 text-left font-medium",
							children: "Button Location"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "text-muted-foreground p-4 text-right font-medium",
							children: "Clicks"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "text-muted-foreground p-4 text-right font-medium",
							children: "Leads"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "text-muted-foreground p-4 text-right font-medium",
							children: "Lead Rate"
						})
					]
				}) }), /* @__PURE__ */ jsx("tbody", { children: sortedData.map((lp) => lp.cta_locations.map((cta, ctaIndex) => {
					const isTopCta = ctaIndex === 0 && (cta.leads ?? 0) > 0;
					return /* @__PURE__ */ jsxs("tr", {
						className: "border-border hover:bg-muted/50 border-b transition",
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "p-4",
								children: ctaIndex === 0 ? /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-foreground font-mono font-medium",
										children: lp.landing_source
									}), /* @__PURE__ */ jsxs(Badge, {
										variant: "secondary",
										className: "text-xs",
										children: [lp.cta_locations.length, " CTAs"]
									})]
								}) : /* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "↳"
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "p-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: isTopCta ? "text-primary font-semibold" : "text-foreground",
										children: formatLocation(cta.location)
									}), isTopCta && /* @__PURE__ */ jsxs(Badge, {
										variant: "default",
										className: "bg-chart-4 text-foreground gap-1 text-xs",
										children: [/* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }), " Top"]
									})]
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "text-foreground p-4 text-right",
								children: (cta.click_count ?? 0).toLocaleString()
							}),
							/* @__PURE__ */ jsx("td", {
								className: "p-4 text-right",
								children: /* @__PURE__ */ jsx("span", {
									className: isTopCta ? "text-chart-4 font-bold" : "text-foreground",
									children: (cta.leads ?? 0).toLocaleString()
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "p-4 text-right",
								children: /* @__PURE__ */ jsxs(Badge, {
									variant: (cta.lead_rate ?? 0) > 5 ? "default" : "outline",
									children: [formatPercent(cta.lead_rate, 2), "%"]
								})
							})
						]
					}, `${lp.landing_source}-${cta.location}`);
				})) })]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-4 lg:hidden",
			children: sortedData.map((lp) => /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-foreground font-mono font-medium",
						children: lp.landing_source
					}), /* @__PURE__ */ jsxs(Badge, {
						variant: "secondary",
						className: "text-xs",
						children: [lp.total_leads, " leads"]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "bg-muted/50 space-y-2 rounded-lg p-3",
					children: lp.cta_locations.map((cta, index) => {
						const isTop = index === 0 && (cta.leads ?? 0) > 0;
						return /* @__PURE__ */ jsxs("div", {
							className: `flex items-center justify-between rounded-md p-2 ${isTop ? "bg-chart-4/20" : ""}`,
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [isTop && /* @__PURE__ */ jsx(TrendingUp, { className: "text-chart-4 h-3 w-3" }), /* @__PURE__ */ jsx("span", {
									className: isTop ? "text-foreground font-medium" : "text-muted-foreground text-sm",
									children: formatLocation(cta.location)
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 text-xs",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-muted-foreground",
									children: [cta.click_count ?? 0, " clicks"]
								}), /* @__PURE__ */ jsxs("span", {
									className: isTop ? "text-chart-4 font-bold" : "text-foreground",
									children: [cta.leads ?? 0, " leads"]
								})]
							})]
						}, cta.location);
					})
				})]
			}, lp.landing_source))
		})] })] })]
	});
}
//#endregion
//#region resources/js/components/labs/device-comparison.tsx
var DEFAULT_DEVICE = {
	visits: 0,
	leads: 0,
	conversion_rate: 0
};
function DeviceComparison({ data }) {
	const safeData = toSafeArray(data);
	if (safeData.length === 0) return /* @__PURE__ */ jsx(Card, {
		className: "py-12 text-center",
		children: /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx(Smartphone, { className: "text-muted-foreground mx-auto mb-4 h-10 w-10" }), /* @__PURE__ */ jsx("p", {
			className: "text-muted-foreground",
			children: "No device performance data available"
		})] })
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ jsx(Smartphone, { className: "text-primary h-5 w-5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
				className: "text-foreground text-xl font-semibold",
				children: "Device Performance"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-sm",
				children: "Mobile vs Desktop conversion comparison"
			})] })]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: safeData.map((item) => {
				const mobile = item.mobile ?? DEFAULT_DEVICE;
				const desktop = item.desktop ?? DEFAULT_DEVICE;
				const mobileRate = safeNumber(mobile.conversion_rate);
				const desktopRate = safeNumber(desktop.conversion_rate);
				const gap = desktopRate - mobileRate;
				const isMobileUnderperforming = mobileRate < desktopRate * .5 && desktopRate > 0;
				const maxRate = Math.max(mobileRate, desktopRate, .01);
				return /* @__PURE__ */ jsxs(Card, {
					className: isMobileUnderperforming ? "border-destructive/50 bg-destructive/5" : "",
					children: [/* @__PURE__ */ jsxs(CardHeader, {
						className: "pb-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx(CardTitle, {
								className: "font-mono text-sm",
								children: item.landing_source
							}), isMobileUnderperforming && /* @__PURE__ */ jsxs(Badge, {
								variant: "destructive",
								className: "gap-1 text-xs",
								children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3" }), "Mobile Issue"]
							})]
						}), /* @__PURE__ */ jsx(CardDescription, { children: isMobileUnderperforming ? "Mobile conversion is significantly lower" : "Device performance comparison" })]
					}), /* @__PURE__ */ jsxs(CardContent, {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Smartphone, { className: "text-primary h-4 w-4" }), /* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: "Mobile"
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-muted-foreground text-xs",
											children: [safeNumber(mobile.visits).toLocaleString(), " visits"]
										}), /* @__PURE__ */ jsxs("span", {
											className: `font-bold ${isMobileUnderperforming ? "text-destructive" : "text-foreground"}`,
											children: [formatPercent(mobileRate, 2), "%"]
										})]
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "bg-muted h-3 w-full overflow-hidden rounded-full",
									children: /* @__PURE__ */ jsx("div", {
										className: `h-full rounded-full transition-all ${isMobileUnderperforming ? "bg-destructive" : "bg-primary"}`,
										style: { width: `${mobileRate / maxRate * 100}%` }
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Monitor, { className: "text-chart-2 h-4 w-4" }), /* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: "Desktop"
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-muted-foreground text-xs",
											children: [safeNumber(desktop.visits).toLocaleString(), " visits"]
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-foreground font-bold",
											children: [formatPercent(desktopRate, 2), "%"]
										})]
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "bg-muted h-3 w-full overflow-hidden rounded-full",
									children: /* @__PURE__ */ jsx("div", {
										className: "bg-chart-2 h-full rounded-full transition-all",
										style: { width: `${desktopRate / maxRate * 100}%` }
									})
								})]
							}),
							gap !== 0 && /* @__PURE__ */ jsxs("div", {
								className: "border-border flex items-center justify-between border-t pt-3 text-xs",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "Gap"
								}), /* @__PURE__ */ jsxs("span", {
									className: gap > 0 ? "text-destructive" : "text-chart-4",
									children: [
										gap > 0 ? "+" : "",
										formatPercent(gap, 2),
										"% ",
										gap > 0 ? "Desktop leads" : "Mobile leads"
									]
								})]
							})
						]
					})]
				}, item.landing_source);
			})
		})]
	});
}
//#endregion
//#region resources/js/components/ui/alert.tsx
var alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "text-destructive-foreground [&>svg]:text-current *:data-[slot=alert-description]:text-destructive-foreground/80"
	} },
	defaultVariants: { variant: "default" }
});
function Alert({ className, variant, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert",
		role: "alert",
		className: cn(alertVariants({ variant }), className),
		...props
	});
}
function AlertDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-description",
		className: cn("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
		...props
	});
}
//#endregion
//#region resources/js/pages/admin/labs/index.tsx
var transformFunnelData = (funnel, selectedSources) => {
	if (funnel.length === 0 || selectedSources.length === 0) return [];
	return [
		"Visits",
		"Engaged",
		"Intent",
		"Initiate Checkout",
		"Leads",
		"Sales"
	].map((stage) => {
		const dataPoint = { name: stage };
		selectedSources.forEach((source) => {
			const funnelItem = funnel.find((f) => f.landing_source === source);
			if (funnelItem) dataPoint[source] = toSafeArray(funnelItem.steps).find((s) => s.stage === stage)?.count ?? 0;
		});
		return dataPoint;
	});
};
var CHART_COLORS = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)",
	"var(--chart-5)"
];
function LabsIndex({ matrix: rawMatrix, funnel: rawFunnel, quality: rawQuality, devices: rawDevices, cta: rawCta, readers: rawReaders, heatmap: rawHeatmap, section_heatmap: rawSectionHeatmap, availableSources: rawAvailableSources, filters }) {
	const matrix = toSafeArray(rawMatrix);
	const safeFunnel = toSafeArray(rawFunnel);
	const quality = toSafeArray(rawQuality);
	const devices = toSafeArray(rawDevices);
	const cta = toSafeArray(rawCta);
	const readers = toSafeArray(rawReaders);
	const heatmap = toSafeArray(rawHeatmap);
	const sectionHeatmap = toSafeArray(rawSectionHeatmap);
	const availableSources = toSafeArray(rawAvailableSources);
	const http = useHttp({
		range: filters.range,
		source: filters.source ?? "",
		start_date: filters.start_date,
		end_date: filters.end_date
	});
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [sortColumn, setSortColumn] = useState("rpv");
	const [sortDirection, setSortDirection] = useState("desc");
	const [currentPage, setCurrentPage] = useState(1);
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const [toastType, setToastType] = useState("success");
	const [dateRange, setDateRange] = useState(() => {
		if (filters.start_date && filters.end_date) return {
			from: parse(filters.start_date, "yyyy-MM-dd", /* @__PURE__ */ new Date()),
			to: parse(filters.end_date, "yyyy-MM-dd", /* @__PURE__ */ new Date())
		};
	});
	const normalizePath = (source) => {
		try {
			if (source.startsWith("http://") || source.startsWith("https://")) return new URL(source).pathname;
		} catch {}
		return source.startsWith("/") ? source : `/${source}`;
	};
	const availablePages = useMemo(() => [...new Set(matrix.map((m) => normalizePath(m.landing_source)))].sort(), [matrix]);
	const [selectedPages, setSelectedPages] = useState(() => {
		if (typeof window === "undefined") return [];
		try {
			const stored = localStorage.getItem("labs_page_filter");
			if (stored) return JSON.parse(stored).filter((p) => availablePages.includes(p));
		} catch {}
		return [];
	});
	useEffect(() => {
		if (typeof window === "undefined") return;
		localStorage.setItem("labs_page_filter", JSON.stringify(selectedPages));
	}, [selectedPages]);
	const togglePage = (page) => {
		setSelectedPages((prev) => prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]);
	};
	const clearPageFilter = () => setSelectedPages([]);
	const isPageFiltered = selectedPages.length > 0;
	const pageMatch = (source) => !isPageFiltered || selectedPages.includes(normalizePath(source));
	const filteredMatrix = useMemo(() => matrix.filter((m) => pageMatch(m.landing_source)), [matrix, selectedPages]);
	const filteredFunnel = useMemo(() => safeFunnel.filter((f) => pageMatch(f.landing_source)), [safeFunnel, selectedPages]);
	const filteredQuality = useMemo(() => quality.filter((q) => pageMatch(q.landing_source)), [quality, selectedPages]);
	const filteredDevices = useMemo(() => devices.filter((d) => pageMatch(d.landing_source)), [devices, selectedPages]);
	const filteredCta = useMemo(() => cta.filter((c) => pageMatch(c.landing_source)), [cta, selectedPages]);
	const filteredReaders = useMemo(() => readers.filter((r) => pageMatch(r.landing_source)), [readers, selectedPages]);
	const filteredHeatmap = useMemo(() => heatmap.filter((h) => pageMatch(h.landing_source)), [heatmap, selectedPages]);
	const filteredSectionHeatmap = useMemo(() => sectionHeatmap.filter((s) => pageMatch(s.landing_source)), [sectionHeatmap, selectedPages]);
	const triggerToast = (message, type) => {
		setToastMessage(message);
		setToastType(type);
		setShowToast(true);
		setTimeout(() => {
			setShowToast(false);
			setToastMessage("");
		}, 4e3);
	};
	const [selectedFunnelSources, setSelectedFunnelSources] = useState(() => {
		return matrix.slice(0, 2).map((m) => m.landing_source);
	});
	const itemsPerPage = 10;
	const winner = useMemo(() => {
		if (filteredMatrix.length === 0) return null;
		return filteredMatrix.reduce((prev, curr) => curr.rpv > prev.rpv ? curr : prev);
	}, [filteredMatrix]);
	const sortedMatrix = useMemo(() => {
		return [...filteredMatrix].sort((a, b) => {
			const aVal = a[sortColumn];
			const bVal = b[sortColumn];
			if (sortDirection === "asc") return aVal > bVal ? 1 : -1;
			return aVal < bVal ? 1 : -1;
		});
	}, [
		filteredMatrix,
		sortColumn,
		sortDirection
	]);
	const paginatedMatrix = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		return sortedMatrix.slice(startIndex, startIndex + itemsPerPage);
	}, [sortedMatrix, currentPage]);
	const totalPages = Math.ceil(sortedMatrix.length / itemsPerPage);
	const chartData = useMemo(() => {
		return transformFunnelData(filteredFunnel, selectedFunnelSources);
	}, [filteredFunnel, selectedFunnelSources]);
	const handleRangeChange = (value) => {
		if (value === "custom") router.get("/admin/labs", {
			range: "custom",
			start_date: filters.start_date,
			end_date: filters.end_date,
			source: filters.source || void 0
		}, {
			preserveState: true,
			preserveScroll: true,
			replace: true
		});
		else router.get("/admin/labs", {
			range: value,
			source: filters.source || void 0
		}, {
			preserveState: true,
			preserveScroll: true,
			replace: true
		});
	};
	const handleDateUpdate = (date) => {
		setDateRange(date);
		if (date?.from && date?.to) router.get("/admin/labs", {
			range: "custom",
			start_date: format(date.from, "yyyy-MM-dd"),
			end_date: format(date.to, "yyyy-MM-dd"),
			source: filters.source || void 0
		}, {
			preserveState: true,
			preserveScroll: true,
			replace: true
		});
	};
	const handleSourceChange = (value) => {
		const sourceValue = value === "all" ? void 0 : value;
		const params = {
			range: filters.range,
			source: sourceValue
		};
		if (filters.range === "custom") {
			params.start_date = filters.start_date;
			params.end_date = filters.end_date;
		}
		router.get("/admin/labs", params, {
			preserveState: true,
			preserveScroll: true,
			replace: true
		});
	};
	const handleClearSource = () => {
		const params = {
			range: filters.range,
			source: void 0
		};
		if (filters.range === "custom") {
			params.start_date = filters.start_date;
			params.end_date = filters.end_date;
		}
		router.get("/admin/labs", params, {
			preserveState: true,
			preserveScroll: true,
			replace: true
		});
	};
	const handleRefreshCache = () => {
		setIsRefreshing(true);
		http.post("/admin/labs/clear-cache", {
			onSuccess: () => {
				triggerToast("Data cached successfully", "success");
				router.reload();
			},
			onError: () => {
				triggerToast("Failed to cache data", "error");
			},
			onFinish: () => {
				setIsRefreshing(false);
			}
		});
	};
	const handleSort = (column) => {
		if (sortColumn === column) setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		else {
			setSortColumn(column);
			setSortDirection("desc");
		}
	};
	const toggleFunnelSource = (source) => {
		setSelectedFunnelSources((prev) => prev.includes(source) ? prev.filter((s) => s !== source) : [...prev, source]);
	};
	const hasData = matrix.length > 0;
	return /* @__PURE__ */ jsxs(admin_layout_default, { children: [/* @__PURE__ */ jsx(Head, { title: "A/B Testing Labs" }), /* @__PURE__ */ jsxs("div", {
		className: "container mx-auto space-y-8 p-4 md:p-6",
		children: [
			showToast && /* @__PURE__ */ jsx("div", {
				className: "animate-fade-in fixed top-20 right-4 z-50 w-auto max-w-sm",
				children: /* @__PURE__ */ jsxs(Alert, {
					className: toastType === "success" ? "border-primary/50 bg-primary/10 backdrop-blur-sm" : "border-red-500/50 bg-red-900/50 backdrop-blur-sm",
					children: [toastType === "success" ? /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400" }), /* @__PURE__ */ jsx(AlertDescription, {
						className: toastType === "success" ? "font-medium text-primary" : "font-medium text-red-300",
						children: toastMessage
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20",
						children: /* @__PURE__ */ jsx(FlaskConical, { className: "h-6 w-6 text-primary" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold text-foreground md:text-3xl",
						children: "A/B Testing Labs"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Optimize your landing page performances"
					})] })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Filter, { className: "h-4 w-4 text-muted-foreground" }),
								/* @__PURE__ */ jsxs(Select, {
									value: filters.source || "all",
									onValueChange: handleSourceChange,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "w-[160px]",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Sources" })
									}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
										value: "all",
										children: "All Sources"
									}), availableSources.map((source) => /* @__PURE__ */ jsx(SelectItem, {
										value: source,
										children: source === "direct" ? "Direct Traffic" : source
									}, source))] })]
								}),
								filters.source && /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "icon",
									onClick: handleClearSource,
									className: "h-8 w-8",
									children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
								})
							]
						}),
						availablePages.length > 1 && /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-muted-foreground" }),
								/* @__PURE__ */ jsxs(Select, {
									value: selectedPages.length === 1 ? selectedPages[0] : "__multi__",
									onValueChange: (val) => {
										if (val === "__all__") clearPageFilter();
										else togglePage(val);
									},
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "w-[180px]",
										children: /* @__PURE__ */ jsx(SelectValue, { children: selectedPages.length === 0 ? "All Pages" : selectedPages.length === 1 ? selectedPages[0] : `${selectedPages.length} pages` })
									}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
										value: "__all__",
										children: "All Pages"
									}), availablePages.map((page) => /* @__PURE__ */ jsx(SelectItem, {
										value: page,
										children: /* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("span", { className: `inline-block h-2 w-2 rounded-full ${selectedPages.includes(page) ? "bg-primary" : "bg-muted-foreground/30"}` }), page]
										})
									}, page))] })]
								}),
								isPageFiltered && /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "icon",
									onClick: clearPageFilter,
									className: "h-8 w-8",
									children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
								})
							]
						}),
						/* @__PURE__ */ jsxs(Select, {
							value: filters.range,
							onValueChange: handleRangeChange,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "w-[160px]",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select range" })
							}), /* @__PURE__ */ jsxs(SelectContent, { children: [
								/* @__PURE__ */ jsx(SelectItem, {
									value: "3",
									children: "Last 3 Days"
								}),
								/* @__PURE__ */ jsx(SelectItem, {
									value: "5",
									children: "Last 5 Days"
								}),
								/* @__PURE__ */ jsx(SelectItem, {
									value: "7",
									children: "Last 7 Days"
								}),
								/* @__PURE__ */ jsx(SelectItem, {
									value: "14",
									children: "Last 14 Days"
								}),
								/* @__PURE__ */ jsx(SelectItem, {
									value: "30",
									children: "Last 30 Days"
								}),
								/* @__PURE__ */ jsx(SelectItem, {
									value: "custom",
									children: "Custom Range"
								})
							] })]
						}),
						filters.range === "custom" && /* @__PURE__ */ jsx(DateRangePicker, {
							date: dateRange,
							onUpdate: handleDateUpdate
						}),
						/* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							type: "button",
							onClick: handleRefreshCache,
							disabled: isRefreshing,
							className: "gap-2",
							children: [/* @__PURE__ */ jsx(RefreshCw, { className: `h-4 w-4 ${isRefreshing ? "animate-spin" : ""}` }), /* @__PURE__ */ jsx("span", {
								className: "hidden sm:inline",
								children: "Refresh Data"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ jsxs("span", { children: [
						"Showing data from",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: filters.start_date
						}),
						" ",
						"to",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: filters.end_date
						})
					] }),
					filters.source && /* @__PURE__ */ jsxs(Badge, {
						variant: "secondary",
						className: "gap-1",
						children: [/* @__PURE__ */ jsx(Filter, { className: "h-3 w-3" }), filters.source === "direct" ? "Direct Traffic" : filters.source]
					}),
					isPageFiltered && /* @__PURE__ */ jsxs(Badge, {
						variant: "secondary",
						className: "gap-1",
						children: [
							/* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" }),
							selectedPages.length,
							" page",
							selectedPages.length > 1 ? "s" : "",
							" selected"
						]
					})
				]
			}),
			!hasData ? /* @__PURE__ */ jsx(Card, {
				className: "py-16 text-center",
				children: /* @__PURE__ */ jsxs(CardContent, { children: [
					/* @__PURE__ */ jsx(BarChart3, { className: "mx-auto mb-4 h-12 w-12 text-muted-foreground" }),
					/* @__PURE__ */ jsx("h3", {
						className: "text-lg font-semibold text-foreground",
						children: "No Analytics Data"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-muted-foreground",
						children: "There's no data available for the selected filters. Try adjusting the date range or source filter."
					})
				] })
			}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Performance Matrix" }), /* @__PURE__ */ jsx(CardDescription, { children: "Landing page comparison sorted by Revenue Per Visit" })] })]
				}) }), /* @__PURE__ */ jsxs(CardContent, { children: [
					/* @__PURE__ */ jsx("div", {
						className: "hidden overflow-x-auto lg:block",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: "Source"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: /* @__PURE__ */ jsxs("button", {
											onClick: () => handleSort("visits"),
											className: "flex items-center gap-1 hover:text-foreground",
											children: [
												/* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }),
												" ",
												"Visits",
												/* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3" })
											]
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: /* @__PURE__ */ jsxs("button", {
											onClick: () => handleSort("bounce_rate"),
											className: "flex items-center gap-1 hover:text-foreground",
											children: ["Bounce", /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3" })]
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: /* @__PURE__ */ jsxs("button", {
											onClick: () => handleSort("conversions"),
											className: "flex items-center gap-1 hover:text-foreground",
											children: [
												/* @__PURE__ */ jsx(MousePointerClick, { className: "h-4 w-4" }),
												" ",
												"Intent",
												/* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3" })
											]
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: /* @__PURE__ */ jsxs("button", {
											onClick: () => handleSort("initiate_checkout_rate"),
											className: "flex items-center gap-1 hover:text-foreground",
											children: [
												/* @__PURE__ */ jsx(ShoppingCart, { className: "h-4 w-4" }),
												" ",
												"Initiate Checkout",
												/* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3" })
											]
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: /* @__PURE__ */ jsxs("button", {
											onClick: () => handleSort("lead_cr"),
											className: "flex items-center gap-1 hover:text-foreground",
											children: ["Lead CR", /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3" })]
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: /* @__PURE__ */ jsxs("button", {
											onClick: () => handleSort("strict_cr"),
											className: "flex items-center gap-1 hover:text-foreground",
											children: [
												/* @__PURE__ */ jsx(Target, { className: "h-4 w-4" }),
												" ",
												"Sales CR",
												/* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3" })
											]
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: /* @__PURE__ */ jsxs("button", {
											onClick: () => handleSort("rpv"),
											className: "flex items-center gap-1 hover:text-foreground",
											children: [
												/* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
												" ",
												"RPV",
												/* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3" })
											]
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 text-left text-sm font-medium text-muted-foreground",
										children: "Revenue"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", { children: paginatedMatrix.map((item) => {
								const isWinner = winner && item.landing_source === winner.landing_source;
								const isHighBounce = item.bounce_rate > 80;
								return /* @__PURE__ */ jsxs("tr", {
									className: "border-b border-border transition hover:bg-muted/50",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "p-4",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-mono text-sm font-medium text-foreground",
													children: item.landing_source
												}), isWinner && /* @__PURE__ */ jsxs(Badge, {
													variant: "default",
													className: "gap-1 bg-chart-4 text-foreground",
													children: [
														/* @__PURE__ */ jsx(Trophy, { className: "h-3 w-3" }),
														" ",
														"Winner"
													]
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4 font-medium text-foreground",
											children: formatNumber(item.visits)
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4",
											children: /* @__PURE__ */ jsxs("span", {
												className: isHighBounce ? "font-medium text-destructive" : "text-foreground",
												children: [formatPercent(item.bounce_rate, 1), "%"]
											})
										}),
										/* @__PURE__ */ jsxs("td", {
											className: "p-4 text-foreground",
											children: [formatPercent(item.intent_rate, 2), "%"]
										}),
										/* @__PURE__ */ jsxs("td", {
											className: "p-4 text-foreground",
											children: [formatPercent(item.initiate_checkout_rate, 2), "%"]
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4",
											children: /* @__PURE__ */ jsxs(Badge, {
												variant: "secondary",
												children: [formatPercent(item.lead_cr, 2), "%"]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4",
											children: /* @__PURE__ */ jsxs(Badge, {
												variant: "outline",
												children: [formatPercent(item.strict_cr, 2), "%"]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4",
											children: /* @__PURE__ */ jsx("span", {
												className: `font-bold ${isWinner ? "text-chart-4" : "text-foreground"}`,
												children: formatCurrency(item.rpv)
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4 text-foreground",
											children: formatCurrency(item.revenue)
										})
									]
								}, item.landing_source);
							}) })]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "space-y-4 lg:hidden",
						children: paginatedMatrix.map((item) => {
							const isWinner = winner && item.landing_source === winner.landing_source;
							const isHighBounce = item.bounce_rate > 80;
							return /* @__PURE__ */ jsx(Card, {
								className: `${isWinner ? "border-2 border-chart-4" : ""}`,
								children: /* @__PURE__ */ jsxs(CardContent, {
									className: "space-y-3 pt-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsx("span", {
											className: "font-mono font-medium text-foreground",
											children: item.landing_source
										}), isWinner && /* @__PURE__ */ jsxs(Badge, {
											variant: "default",
											className: "gap-1 bg-chart-4 text-foreground",
											children: [
												/* @__PURE__ */ jsx(Trophy, { className: "h-3 w-3" }),
												" ",
												"Winner"
											]
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-3 text-sm",
										children: [
											/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Visits:"
												}),
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "font-medium text-foreground",
													children: formatNumber(item.visits)
												})
											] }),
											/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Bounce:"
												}),
												" ",
												/* @__PURE__ */ jsxs("span", {
													className: isHighBounce ? "text-destructive" : "text-foreground",
													children: [formatPercent(item.bounce_rate, 1), "%"]
												})
											] }),
											/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Checkout:"
												}),
												" ",
												/* @__PURE__ */ jsxs("span", {
													className: "text-foreground",
													children: [formatPercent(item.initiate_checkout_rate, 2), "%"]
												})
											] }),
											/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Lead CR:"
												}),
												" ",
												/* @__PURE__ */ jsxs(Badge, {
													variant: "secondary",
													children: [formatPercent(item.lead_cr, 2), "%"]
												})
											] }),
											/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Sales CR:"
												}),
												" ",
												/* @__PURE__ */ jsxs(Badge, {
													variant: "outline",
													children: [formatPercent(item.strict_cr, 2), "%"]
												})
											] }),
											/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "RPV:"
												}),
												" ",
												/* @__PURE__ */ jsx("span", {
													className: `font-bold ${isWinner ? "text-chart-4" : "text-foreground"}`,
													children: formatCurrency(item.rpv)
												})
											] }),
											/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Revenue:"
												}),
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "text-foreground",
													children: formatCurrency(item.revenue)
												})
											] })
										]
									})]
								})
							}, item.landing_source);
						})
					}),
					totalPages > 1 && /* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setCurrentPage(Math.max(1, currentPage - 1)),
								disabled: currentPage === 1,
								children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "text-sm text-muted-foreground",
								children: [
									"Page ",
									currentPage,
									" of ",
									totalPages
								]
							}),
							/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setCurrentPage(Math.min(totalPages, currentPage + 1)),
								disabled: currentPage === totalPages,
								children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
							})
						]
					})
				] })] }),
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Split Funnel" }), /* @__PURE__ */ jsx(CardDescription, { children: "Compare conversion journey across landing pages" })] })]
					})
				}) }), /* @__PURE__ */ jsxs(CardContent, {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-4",
							children: filteredFunnel.map((f, index) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center space-x-2",
								children: [/* @__PURE__ */ jsx(Checkbox, {
									id: `funnel-${f.landing_source}`,
									checked: selectedFunnelSources.includes(f.landing_source),
									onCheckedChange: () => toggleFunnelSource(f.landing_source)
								}), /* @__PURE__ */ jsxs(Label, {
									htmlFor: `funnel-${f.landing_source}`,
									className: "flex cursor-pointer items-center gap-2 text-sm",
									children: [/* @__PURE__ */ jsx("div", {
										className: "h-3 w-3 rounded-full",
										style: { backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }
									}), f.landing_source]
								})]
							}, f.landing_source))
						}),
						selectedFunnelSources.length > 0 ? /* @__PURE__ */ jsx("div", {
							className: "h-[400px] w-full",
							children: /* @__PURE__ */ jsx(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ jsxs(BarChart, {
									data: chartData,
									margin: {
										top: 20,
										right: 30,
										left: 20,
										bottom: 5
									},
									children: [
										/* @__PURE__ */ jsx(CartesianGrid, {
											strokeDasharray: "3 3",
											className: "stroke-border"
										}),
										/* @__PURE__ */ jsx(XAxis, {
											dataKey: "name",
											className: "fill-muted-foreground text-xs"
										}),
										/* @__PURE__ */ jsx(YAxis, { className: "fill-muted-foreground text-xs" }),
										/* @__PURE__ */ jsx(Tooltip, {
											contentStyle: {
												backgroundColor: "var(--popover)",
												border: "1px solid var(--border)",
												borderRadius: "8px",
												color: "var(--popover-foreground)"
											},
											formatter: (value, name) => [formatNumber(Number(value ?? 0)), String(name ?? "")]
										}),
										/* @__PURE__ */ jsx(Legend, {}),
										selectedFunnelSources.map((source) => /* @__PURE__ */ jsx(Bar, {
											dataKey: source,
											fill: CHART_COLORS[safeFunnel.findIndex((f) => f.landing_source === source) % CHART_COLORS.length],
											radius: [
												4,
												4,
												0,
												0
											]
										}, source))
									]
								})
							})
						}) : /* @__PURE__ */ jsx("div", {
							className: "py-12 text-center text-muted-foreground",
							children: "Select at least one landing page to view the funnel chart"
						}),
						selectedFunnelSources.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ jsxs("table", {
								className: "w-full text-sm",
								children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
									className: "border-b border-border",
									children: [/* @__PURE__ */ jsx("th", {
										className: "p-3 text-left font-medium text-muted-foreground",
										children: "Stage"
									}), selectedFunnelSources.map((source) => /* @__PURE__ */ jsx("th", {
										className: "p-3 text-left font-medium text-muted-foreground",
										children: source
									}, source))]
								}) }), /* @__PURE__ */ jsx("tbody", { children: [
									"Visits",
									"Engaged",
									"Intent",
									"Initiate Checkout",
									"Leads",
									"Sales"
								].map((stage) => /* @__PURE__ */ jsxs("tr", {
									className: "border-b border-border",
									children: [/* @__PURE__ */ jsx("td", {
										className: "p-3 font-medium text-foreground",
										children: stage
									}), selectedFunnelSources.map((source) => {
										const step = toSafeArray(filteredFunnel.find((f) => f.landing_source === source)?.steps).find((s) => s.stage === stage);
										return /* @__PURE__ */ jsx("td", {
											className: "p-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-foreground",
													children: formatNumber(step?.count ?? 0)
												}), /* @__PURE__ */ jsxs("span", {
													className: "text-xs text-muted-foreground",
													children: [
														"(",
														formatPercent(step?.percentage, 1),
														"%)"
													]
												})]
											})
										}, source);
									})]
								}, stage)) })]
							})
						})
					]
				})] }),
				filteredDevices && filteredDevices.length > 0 && /* @__PURE__ */ jsx(DeviceComparison, { data: filteredDevices }),
				filteredCta && filteredCta.length > 0 && /* @__PURE__ */ jsx(CtaAnalysis, { data: filteredCta }),
				(filteredReaders && filteredReaders.length > 0 || filteredHeatmap && filteredHeatmap.length > 0 || filteredSectionHeatmap && filteredSectionHeatmap.length > 0) && /* @__PURE__ */ jsx(AudienceSegmentation, {
					readers: filteredReaders || [],
					heatmap: filteredHeatmap || [],
					sectionHeatmap: filteredSectionHeatmap || []
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-semibold text-foreground",
							children: "Behavior Analysis"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: "Leads vs Non-Leads engagement comparison"
						})] })]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
						children: filteredQuality.map((item) => {
							const defaultMetrics = {
								count: 0,
								avg_scroll_depth: 0,
								avg_dwell_time: 0
							};
							const leads = item.leads ?? defaultMetrics;
							const nonLeads = item.non_leads ?? defaultMetrics;
							const scrollGap = Math.abs(leads.avg_scroll_depth - nonLeads.avg_scroll_depth);
							const dwellGap = Math.abs(leads.avg_dwell_time - nonLeads.avg_dwell_time);
							const hasSignificantGap = scrollGap > 30 || dwellGap > 60;
							return /* @__PURE__ */ jsxs(Card, {
								className: hasSignificantGap ? "border-chart-4/50" : "",
								children: [/* @__PURE__ */ jsx(CardHeader, {
									className: "pb-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsx(CardTitle, {
											className: "font-mono text-sm",
											children: item.landing_source
										}), hasSignificantGap && /* @__PURE__ */ jsx(Badge, {
											variant: "outline",
											className: "border-chart-4 text-xs text-chart-4",
											children: "High Gap"
										})]
									})
								}), /* @__PURE__ */ jsxs(CardContent, {
									className: "space-y-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex items-center justify-between text-sm",
											children: /* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-1 text-muted-foreground",
												children: [
													/* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
													" ",
													"Scroll Depth"
												]
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between text-xs",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "text-primary",
														children: [
															"Leads (",
															leads.count,
															")"
														]
													}), /* @__PURE__ */ jsxs("span", {
														className: "font-medium text-foreground",
														children: [formatPercent(leads.avg_scroll_depth, 1), "%"]
													})]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "h-2 w-full overflow-hidden rounded-full bg-muted",
													children: /* @__PURE__ */ jsx("div", {
														className: "h-full rounded-full bg-primary transition-all",
														style: { width: `${Math.min(leads.avg_scroll_depth, 100)}%` }
													})
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between text-xs",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "text-muted-foreground",
														children: [
															"Others (",
															nonLeads.count,
															")"
														]
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-foreground",
														children: [formatPercent(nonLeads.avg_scroll_depth, 1), "%"]
													})]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "h-2 w-full overflow-hidden rounded-full bg-muted",
													children: /* @__PURE__ */ jsx("div", {
														className: "h-full rounded-full bg-muted-foreground transition-all",
														style: { width: `${Math.min(nonLeads.avg_scroll_depth, 100)}%` }
													})
												})
											]
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex items-center justify-between text-sm",
											children: /* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-1 text-muted-foreground",
												children: [
													/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
													" ",
													"Dwell Time"
												]
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between gap-4",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "text-center",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-lg font-bold text-primary",
														children: formatDuration(leads.avg_dwell_time)
													}), /* @__PURE__ */ jsx("div", {
														className: "text-xs text-muted-foreground",
														children: "Leads"
													})]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-xl text-muted-foreground",
													children: "vs"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "text-center",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-lg font-bold text-foreground",
														children: formatDuration(nonLeads.avg_dwell_time)
													}), /* @__PURE__ */ jsx("div", {
														className: "text-xs text-muted-foreground",
														children: "Others"
													})]
												})
											]
										})]
									})]
								})]
							}, item.landing_source);
						})
					})]
				})
			] })
		]
	})] });
}
//#endregion
export { LabsIndex as default };

//# sourceMappingURL=labs-D3dtsv6m.js.map