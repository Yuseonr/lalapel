import { Form, Link } from '@inertiajs/react';

import { AuthField } from '@/components/auth-field';
import { AuthLayout } from '@/layouts/auth-layout';
import { loginSubmit, register } from '@/routes';

export default function Login() {
    return (
        <AuthLayout
            description="Masuk untuk melanjutkan catatanmu dan kembali ke canvas pribadi."
            eyebrow="selamat datang kembali"
            footer={
                <>
                    Belum punya akun?{' '}
                    <Link
                        className="font-semibold text-[#24211d] underline decoration-[#c8b7a4] underline-offset-4 hover:decoration-[#24211d]"
                        href={register()}
                    >
                        Daftar sekarang
                    </Link>
                </>
            }
            title="Masuk ke lalapel"
        >
            <Form action={loginSubmit()} className="space-y-5">
                {({ errors, processing }) => (
                    <>
                        <AuthField
                            autoComplete="email"
                            error={errors.email}
                            id="email"
                            label="Email"
                            name="email"
                            placeholder="kamu@email.com"
                            required
                            type="email"
                        />
                        <AuthField
                            autoComplete="current-password"
                            error={errors.password}
                            id="password"
                            label="Password"
                            name="password"
                            placeholder="Masukkan password"
                            required
                            type="password"
                        />

                        <button
                            className="flex h-12 w-full items-center justify-center rounded-xl bg-[#24211d] px-5 text-sm font-semibold text-[#f7f4ed] transition hover:bg-[#39342d] focus:ring-4 focus:ring-[#24211d]/15 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                            disabled={processing}
                            type="submit"
                        >
                            {processing ? 'Memeriksa...' : 'Masuk'}
                        </button>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
