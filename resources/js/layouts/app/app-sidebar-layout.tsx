import { type ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { BarChart2, FlaskConical, LogOut } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { cn } from '@/lib/utils';

interface AppSidebarLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    [key: string]: unknown;
}

const NAV = [
    { label: 'Analytics', href: '/admin', icon: BarChart2 },
    { label: 'Labs',       href: '/admin/labs', icon: FlaskConical },
];

export default function AppSidebarLayout({ children, breadcrumbs = [] }: AppSidebarLayoutProps) {
    const current = typeof window !== 'undefined' ? window.location.pathname : '';

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="flex w-56 shrink-0 flex-col border-r border-slate-200 bg-white">
                {/* Brand */}
                <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                        <span className="text-xs font-black text-white">P</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900">PBM Admin</span>
                </div>

                {/* Nav */}
                <nav className="flex-1 space-y-0.5 p-3">
                    {NAV.map((item) => {
                        const Icon = item.icon;
                        const active = current === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                                    active
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                                )}
                            >
                                <Icon size={16} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="border-t border-slate-200 p-3">
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    >
                        <LogOut size={16} />
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Main */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header / breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <header className="flex h-16 items-center gap-2 border-b border-slate-200 bg-white px-6">
                        {breadcrumbs.map((crumb, i) => (
                            <span key={i} className="flex items-center gap-2">
                                {i > 0 && <span className="text-slate-300">/</span>}
                                {crumb.href ? (
                                    <Link href={crumb.href} className="text-sm text-slate-500 hover:text-slate-900">
                                        {crumb.title}
                                    </Link>
                                ) : (
                                    <span className="text-sm font-medium text-slate-900">{crumb.title}</span>
                                )}
                            </span>
                        ))}
                    </header>
                )}

                <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
        </div>
    );
}
