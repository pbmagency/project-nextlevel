import { c as Button, u as cn } from "../ssr.js";
import { a as SelectTrigger, i as SelectItem, n as Select, o as SelectValue, r as SelectContent, t as admin_layout_default } from "./admin-layout-BjWc0bCI.js";
import { Head, router } from "@inertiajs/react";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CreditCard, DollarSign, Download, Eye, ShoppingCart, Target, TrendingUp } from "lucide-react";
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
//#region resources/js/components/analytics/conversion-funnel.tsx
function ConversionFunnel({ data, className }) {
	const maxCount = Math.max(...data.map((item) => item.count));
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm", "hover:border-primary/30 hover:shadow-primary/10 hover:shadow-lg transition-all duration-300", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-lg font-semibold text-foreground",
				children: "Conversion Funnel"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "User journey from visit to payment"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-4",
			children: data.map((stage, index) => {
				const width = stage.count / maxCount * 100;
				const isLast = index === data.length - 1;
				return /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium text-foreground",
								children: stage.stage
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-sm text-muted-foreground",
									children: stage.count.toLocaleString()
								}), /* @__PURE__ */ jsxs("span", {
									className: cn("text-xs font-bold px-2 py-1 rounded-full", isLast ? "bg-primary/20 text-primary" : "bg-muted/20 text-muted-foreground"),
									children: [stage.percentage, "%"]
								})]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "h-8 bg-muted/20 rounded-lg overflow-hidden",
							children: /* @__PURE__ */ jsx("div", {
								className: cn("h-full rounded-lg transition-all duration-1000 ease-out", "bg-gradient-to-r from-primary/60 via-primary to-primary/80", isLast && "from-primary via-yellow-400 to-yellow-400"),
								style: {
									width: `${width}%`,
									animationDelay: `${index * 200}ms`
								}
							})
						}),
						index < data.length - 1 && /* @__PURE__ */ jsx("div", {
							className: "flex justify-center mt-2",
							children: /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border/50" })
						})
					]
				}, stage.stage);
			})
		})]
	});
}
//#endregion
//#region resources/js/components/analytics/metric-card.tsx
function MetricCard({ title, value, change, icon: Icon, className, description }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm", "hover:border-primary/30 hover:shadow-primary/10 hover:shadow-lg transition-all duration-300", className),
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }), /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between mb-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors",
						children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm font-medium text-muted-foreground",
						children: title
					})]
				}), change && /* @__PURE__ */ jsx("div", {
					className: cn("flex items-center gap-1 text-xs font-medium", change.isPositive ? "text-green-400" : "text-red-400"),
					children: /* @__PURE__ */ jsxs("span", { children: [
						change.isPositive ? "+" : "",
						change.value,
						"%"
					] })
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-2xl font-bold text-foreground group-hover:text-primary transition-colors",
					children: value
				}), description && /* @__PURE__ */ jsx("div", {
					className: "text-xs text-muted-foreground",
					children: description
				})]
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/analytics/referral-chart.tsx
var COLORS = [
	"oklch(0.75 0.15 85)",
	"oklch(0.6 0.12 184)",
	"oklch(0.4 0.07 227)",
	"oklch(0.83 0.19 84)",
	"oklch(0.77 0.19 70)"
];
function ReferralChart({ data, className }) {
	const chartData = data.map((item, index) => ({
		name: item.referral_source === "direct" ? "Direct" : item.referral_source,
		value: item.count,
		color: COLORS[index % COLORS.length]
	}));
	return /* @__PURE__ */ jsxs("div", {
		className: cn("border-border/50 bg-card/30 rounded-xl border p-6 backdrop-blur-sm", "hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300 hover:shadow-lg", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-foreground text-lg font-semibold",
				children: "Traffic Sources"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-sm",
				children: "Top referral sources breakdown"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "h-64",
			children: /* @__PURE__ */ jsx(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ jsxs(PieChart, { children: [
					/* @__PURE__ */ jsx(Pie, {
						data: chartData,
						cx: "50%",
						cy: "50%",
						outerRadius: 80,
						dataKey: "value",
						stroke: "oklch(0.06 0 0)",
						strokeWidth: 2,
						children: chartData.map((entry, index) => /* @__PURE__ */ jsx(Cell, { fill: entry.color }, `cell-${index}`))
					}),
					/* @__PURE__ */ jsx(Tooltip, {
						contentStyle: {
							backgroundColor: "oklch(0.75 0.15 85)",
							border: "1px solid oklch(0.15 0 0)",
							borderRadius: "8px",
							color: "oklch(0.98 0 0)"
						},
						formatter: (value) => [Number(value ?? 0).toLocaleString(), "Visits"]
					}),
					/* @__PURE__ */ jsx(Legend, { wrapperStyle: {
						fontSize: "12px",
						color: "oklch(0.65 0 0)"
					} })
				] })
			})
		})]
	});
}
//#endregion
//#region resources/js/components/analytics/revenue-chart.tsx
function RevenueChart({ data, className }) {
	const chartData = useMemo(() => {
		const dates = /* @__PURE__ */ new Set();
		Object.values(data).forEach((eventData) => {
			eventData.forEach((item) => dates.add(item.date));
		});
		const sortedDates = Array.from(dates).sort();
		const coursePrice = "2000000";
		return sortedDates.map((date) => {
			const visits = data.visit?.find((item) => item.date === date)?.total || 0;
			const conversions = data.conversion?.find((item) => item.date === date)?.total || 0;
			const engagements = data.engagement?.find((item) => item.date === date)?.total || 0;
			const payments = data.payment?.find((item) => item.date === date)?.total || 0;
			const revenue = payments * coursePrice;
			return {
				date: new Date(date).toLocaleDateString("id-ID", {
					month: "short",
					day: "numeric"
				}),
				visits,
				conversions,
				engagements,
				payments,
				revenue: revenue / 1e6
			};
		});
	}, [data]);
	const formatCurrency = (value) => {
		return `Rp ${(value * 1e6).toLocaleString("id-ID")}`;
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("border-border/50 bg-card/30 rounded-xl border p-6 backdrop-blur-sm", "hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300 hover:shadow-lg", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-foreground text-lg font-semibold",
				children: "Revenue Trends"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-sm",
				children: "Daily revenue and conversion tracking"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "h-64",
			children: /* @__PURE__ */ jsx(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ jsxs(LineChart, {
					data: chartData,
					children: [
						/* @__PURE__ */ jsx(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "oklch(0.15 0 0)",
							opacity: .3
						}),
						/* @__PURE__ */ jsx(XAxis, {
							dataKey: "date",
							stroke: "oklch(0.65 0 0)",
							fontSize: 12
						}),
						/* @__PURE__ */ jsx(YAxis, {
							stroke: "oklch(0.65 0 0)",
							fontSize: 12
						}),
						/* @__PURE__ */ jsx(Tooltip, {
							contentStyle: {
								backgroundColor: "oklch(0.08 0 0)",
								border: "1px solid oklch(0.15 0 0)",
								borderRadius: "8px",
								color: "oklch(0.98 0 0)"
							},
							formatter: (value, name) => {
								if (name === "revenue") return [formatCurrency(Number(value ?? 0)), "Revenue"];
								const n = String(name ?? "");
								return [value, n.charAt(0).toUpperCase() + n.slice(1)];
							}
						}),
						/* @__PURE__ */ jsx(Line, {
							type: "monotone",
							dataKey: "visits",
							stroke: "oklch(0.75 0.15 85)",
							strokeWidth: 2,
							dot: {
								fill: "oklch(0.75 0.15 85)",
								strokeWidth: 2,
								r: 4
							}
						}),
						/* @__PURE__ */ jsx(Line, {
							type: "monotone",
							dataKey: "engagements",
							stroke: "oklch(0.75 0.15 85)",
							strokeWidth: 2,
							dot: {
								fill: "oklch(0.75 0.15 85)",
								strokeWidth: 2,
								r: 4
							}
						}),
						/* @__PURE__ */ jsx(Line, {
							type: "monotone",
							dataKey: "conversions",
							stroke: "oklch(0.6 0.12 184)",
							strokeWidth: 2,
							dot: {
								fill: "oklch(0.6 0.12 184)",
								strokeWidth: 2,
								r: 4
							}
						}),
						/* @__PURE__ */ jsx(Line, {
							type: "monotone",
							dataKey: "revenue",
							stroke: "oklch(0.77 0.19 70)",
							strokeWidth: 2,
							dot: {
								fill: "oklch(0.77 0.19 70)",
								strokeWidth: 2,
								r: 4
							}
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region resources/js/pages/admin/analytics.tsx
var breadcrumbs = [{
	title: "Dashboard",
	href: "/admin"
}, {
	title: "Analytics",
	href: "/admin/analytics"
}];
function Analytics({ stats, chartData, referralData, conversionFunnel, dateRange }) {
	const [selectedRange, setSelectedRange] = useState(dateRange);
	const handleRangeChange = (range) => {
		setSelectedRange(range);
		router.get("/admin/analytics", { range }, { preserveState: true });
	};
	const handleExport = () => {
		window.open(`/admin/export?range=${selectedRange}`, "_blank");
	};
	const formatCurrency = (amount) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0
		}).format(amount);
	};
	return /* @__PURE__ */ jsxs(admin_layout_default, {
		breadcrumbs,
		children: [/* @__PURE__ */ jsx(Head, { title: "Analytics Dashboard" }), /* @__PURE__ */ jsxs("div", {
			className: "min-h-screen bg-background",
			children: [/* @__PURE__ */ jsx("div", {
				className: "border-b border-border/50 bg-card/30 backdrop-blur-sm",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-6 py-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
							className: "text-3xl font-bold text-foreground",
							children: "Analytics Dashboard"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-muted-foreground",
							children: "Comprehensive insights into user behavior and conversion metrics"
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsxs(Select, {
								value: selectedRange,
								onValueChange: handleRangeChange,
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									className: "w-40",
									children: /* @__PURE__ */ jsx(SelectValue, {})
								}), /* @__PURE__ */ jsxs(SelectContent, { children: [
									/* @__PURE__ */ jsx(SelectItem, {
										value: "7",
										children: "Last 7 days"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "30",
										children: "Last 30 days"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "90",
										children: "Last 90 days"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "365",
										children: "Last year"
									})
								] })]
							}), /* @__PURE__ */ jsxs(Button, {
								onClick: handleExport,
								variant: "outline",
								children: [/* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }), "Export CSV"]
							})]
						})]
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-8 p-6",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "mb-6 text-xl font-semibold text-foreground",
						children: "Key Performance Indicators"
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ jsx(MetricCard, {
								title: "Total Visits",
								value: stats.total_visits.toLocaleString(),
								icon: Eye,
								description: `${stats.unique_visitors} unique visitors`
							}),
							/* @__PURE__ */ jsx(MetricCard, {
								title: "Engagement Rate",
								value: `${stats.engagement_rate}%`,
								icon: TrendingUp,
								description: `${stats.engaged_users} engaged (15s+ dwell & >25% scroll)`
							}),
							/* @__PURE__ */ jsx(MetricCard, {
								title: "Initiate Checkout Rate",
								value: `${stats.initiate_checkout_rate}%`,
								icon: ShoppingCart,
								description: `${stats.initiate_checkout_count} initiated checkout`
							}),
							/* @__PURE__ */ jsx(MetricCard, {
								title: "Lead Rate",
								value: `${stats.lead_rate}%`,
								icon: Target,
								description: `${stats.leads} leads from checkout`
							}),
							/* @__PURE__ */ jsx(MetricCard, {
								title: "Lead to Payment Rate",
								value: `${stats.conversion_to_payment_rate}%`,
								icon: CreditCard,
								description: `${stats.payments} successful payments`
							}),
							/* @__PURE__ */ jsx(MetricCard, {
								title: "Visit to Payment Rate",
								value: `${stats.payment_rate}%`,
								icon: CreditCard,
								description: `${stats.payments} successful payments`
							}),
							/* @__PURE__ */ jsx(MetricCard, {
								title: "Total Revenue",
								value: formatCurrency(stats.total_revenue),
								icon: DollarSign,
								description: `${stats.payments}x payments`
							})
						]
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsx(RevenueChart, { data: chartData }), /* @__PURE__ */ jsx(ReferralChart, { data: referralData })]
					}),
					/* @__PURE__ */ jsx(ConversionFunnel, { data: conversionFunnel }),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "mb-4 text-lg font-semibold text-foreground",
							children: "Key Insights"
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-primary/20 bg-primary/10 p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-semibold text-primary",
										children: "Top Referral Source"
									}), /* @__PURE__ */ jsxs("div", {
										className: "mt-1 text-sm text-muted-foreground",
										children: [referralData[0]?.referral_source || "No data", referralData[0] && ` (${referralData[0].count} visits)`]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-green-500/20 bg-green-500/10 p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-semibold text-green-400",
										children: "Revenue per Visit"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-1 text-sm text-muted-foreground",
										children: stats.total_visits > 0 ? formatCurrency(stats.total_revenue / stats.total_visits) : "Rp 0"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-blue-500/20 bg-blue-500/10 p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-semibold text-blue-400",
										children: "Avg. Revenue per User"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-1 text-sm text-muted-foreground",
										children: stats.unique_visitors > 0 ? formatCurrency(stats.total_revenue / stats.unique_visitors) : "Rp 0"
									})]
								})
							]
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { Analytics as default };

//# sourceMappingURL=analytics-JbTVP-2j.js.map