import { Form, Link } from '@inertiajs/react';

import { AuthField } from '@/components/auth-field';
import { AuthLayout } from '@/layouts/auth-layout';
import { login, registerSubmit } from '@/routes';

export default function Register() {
    return (
        <AuthLayout
            description="Buat akun gratis dan mulai menyusun ide di canvas pribadimu."
            eyebrow="mulai dari sini"
            footer={
                <>
                    Sudah punya akun?{' '}
                    <Link
                        className="font-semibold text-[#24211d] underline decoration-[#c8b7a4] underline-offset-4 hover:decoration-[#24211d]"
                        href={login()}
                    >
                        Masuk di sini
                    </Link>
                </>
            }
            title="Buat akun baru"
        >
            <Form action={registerSubmit()} className="space-y-5">
                {({ errors, processing }) => (
                    <>
                        <AuthField
                            autoComplete="name"
                            error={errors.name}
                            id="name"
                            label="Nama"
                            name="name"
                            placeholder="Nama lengkapmu"
                            required
                        />
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
                            autoComplete="new-password"
                            error={errors.password}
                            id="password"
                            label="Password"
                            name="password"
                            placeholder="Minimal 8 karakter"
                            required
                            type="password"
                        />
                        <AuthField
                            autoComplete="new-password"
                            error={errors.password_confirmation}
                            id="password_confirmation"
                            label="Ulangi password"
                            name="password_confirmation"
                            placeholder="Ketik ulang password"
                            required
                            type="password"
                        />

                        <button
                            className="flex h-12 w-full items-center justify-center rounded-xl bg-[#24211d] px-5 text-sm font-semibold text-[#f7f4ed] transition hover:bg-[#39342d] focus:ring-4 focus:ring-[#24211d]/15 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                            disabled={processing}
                            type="submit"
                        >
                            {processing ? 'Membuat akun...' : 'Buat akun'}
                        </button>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
