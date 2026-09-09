import { Head, Link, usePage } from '@inertiajs/react';

import { CatMark } from '@/components/cat-mark';
import { canvas, login, register } from '@/routes';
import type { Auth } from '@/types/auth';

export default function Welcome() {
    const { auth } = usePage().props as unknown as { auth: Auth };
    const user = auth.user;

    return (
        <>
            <Head title="Lalapel, a place to tell" />
            <main className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#24211d]">
                <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 sm:px-10">
                    <header className="flex h-20 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="grid size-10 place-items-center rounded-xl bg-[#24211d] text-[#f7f4ed]">
                                <CatMark size={27} />
                            </span>
                            <span className="text-lg font-semibold tracking-[-0.04em]">
                                lalapel
                            </span>
                        </div>
                        {user ? (
                            <Link
                                className="rounded-lg bg-[#24211d] px-4 py-2.5 text-xs font-semibold text-[#f7f4ed] transition hover:bg-[#39342d]"
                                href={canvas()}
                            >
                                Buka canvas
                            </Link>
                        ) : (
                            <Link
                                className="text-sm font-semibold underline decoration-[#c8b7a4] underline-offset-4 hover:decoration-[#24211d]"
                                href={login()}
                            >
                                Masuk
                            </Link>
                        )}
                    </header>

                    <section className="relative flex flex-1 items-center py-16 sm:py-24">
                        <div className="relative z-10 max-w-2xl">
                            <h1 className="max-w-xl text-6xl leading-[0.94] font-semibold tracking-[-0.08em] sm:text-8xl">
                                Lalapel,
                                <br />
                                a place to tell.
                            </h1>
                            <div className="mt-10 flex flex-wrap items-center gap-3">
                                {user ? (
                                    <Link
                                        className="rounded-xl bg-[#24211d] px-5 py-3 text-sm font-semibold text-[#f7f4ed] transition hover:bg-[#39342d] focus:ring-4 focus:ring-[#24211d]/15 focus:outline-none"
                                        href={canvas()}
                                    >
                                        Masuk ke canvas
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            className="rounded-xl bg-[#24211d] px-5 py-3 text-sm font-semibold text-[#f7f4ed] transition hover:bg-[#39342d] focus:ring-4 focus:ring-[#24211d]/15 focus:outline-none"
                                            href={register()}
                                        >
                                            Mulai menulis
                                        </Link>
                                        <Link
                                            className="rounded-xl border border-[#d9cfc2] px-5 py-3 text-sm font-semibold text-[#665d53] transition hover:border-[#24211d] hover:text-[#24211d]"
                                            href={login()}
                                        >
                                            Saya sudah punya akun
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="pointer-events-none absolute right-[-10%] bottom-[7%] hidden size-[28rem] rounded-[7rem] bg-[#e8e0d3] lg:block">
                            <div className="absolute inset-8 grid place-items-center rounded-[5rem] border border-[#d8ccbd]">
                                <CatMark
                                    className="text-[#766c60]"
                                    size={190}
                                />
                            </div>
                        </div>
                    </section>

                    <footer className="flex h-20 items-center justify-between border-t border-[#e5ddd2] text-xs text-[#9b8f80]">
                        <span>Lalapel, a place to tell</span>
                        <span>© {new Date().getFullYear()} lalapel</span>
                    </footer>
                </div>
            </main>
        </>
    );
}
