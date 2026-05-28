import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Head title="Login Admin" />
            <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
                <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
                    <div className="mb-6 text-center">
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">PBM Agency</p>
                        <h1 className="mt-1 text-2xl font-black text-slate-900">Admin Dashboard</h1>
                        <p className="mt-1 text-sm text-slate-500">Masuk untuk akses analytics</p>
                    </div>

                    {status && (
                        <p className="mb-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{status}</p>
                    )}

                    <form onSubmit={submit} className="flex flex-col gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="admin@pbm.com"
                                required
                                autoFocus
                                autoComplete="email"
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="••••••••"
                                required
                                autoComplete="current-password"
                            />
                            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                        </div>

                        <Button type="submit" variant="primary" className="mt-2 w-full" disabled={processing}>
                            {processing ? 'Masuk...' : 'Masuk'}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
