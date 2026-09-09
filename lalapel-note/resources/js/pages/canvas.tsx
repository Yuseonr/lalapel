import { Form, Head, Link, usePage } from '@inertiajs/react';

import { CatMark } from '@/components/cat-mark';
import { home, logout } from '@/routes';
import type { Auth } from '@/types/auth';

export default function Canvas() {
    const { auth } = usePage().props as unknown as { auth: Auth };
    const user = auth.user;

    if (!user) {
        return null;
    }

    return (
        <>
            <Head title="Canvas" />
            <main className="min-h-screen bg-[#f7f4ed] text-[#24211d]">
                <header className="border-b border-[#e5ddd2] bg-[#f7f4ed]/90">
                    <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-10">
                        <Link className="flex items-center gap-3" href={home()}>
                            <span className="grid size-10 place-items-center rounded-xl bg-[#24211d] text-[#f7f4ed]">
                                <CatMark size={27} />
                            </span>
                            <span className="text-lg font-semibold tracking-[-0.04em]">
                                lalapel
                            </span>
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="hidden text-right sm:block">
                                <p className="text-sm font-medium">
                                    {user.name}
                                </p>
                                <p className="text-xs text-[#8e8375]">
                                    canvas pribadi
                                </p>
                            </div>
                            <Form action={logout()}>
                                <button
                                    className="rounded-lg border border-[#dcd3c7] px-3 py-2 text-xs font-semibold text-[#665d53] transition hover:border-[#24211d] hover:text-[#24211d] focus:ring-4 focus:ring-[#24211d]/10 focus:outline-none"
                                    type="submit"
                                >
                                    Keluar
                                </button>
                            </Form>
                        </div>
                    </div>
                </header>

                <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
                    <div className="mb-10 flex items-end justify-between gap-6">
                        <div>
                            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#a08f7b] uppercase">
                                ruang kerjamu
                            </p>
                            <h1 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                                Canvas
                            </h1>
                            <p className="mt-3 text-sm text-[#766c60]">
                                Tempat semua catatanmu akan tinggal.
                            </p>
                        </div>
                        <span className="hidden rounded-full bg-[#ebe4da] px-3 py-1.5 text-xs font-medium text-[#766c60] sm:inline-flex">
                            0 catatan
                        </span>
                    </div>

                    <div className="flex min-h-[26rem] flex-col items-center justify-center rounded-3xl border border-dashed border-[#d7cdbf] bg-white/35 px-6 text-center shadow-[0_20px_60px_-45px_rgba(36,33,29,0.4)]">
                        <span className="mb-6 grid size-20 place-items-center rounded-[1.75rem] bg-[#ebe4da] text-[#8a7a67]">
                            <CatMark size={48} />
                        </span>
                        <h2 className="text-xl font-semibold tracking-[-0.03em]">
                            Canvas masih kosong
                        </h2>
                        <p className="mt-2 max-w-xs text-sm leading-6 text-[#8a7e70]">
                            Belum ada tab catatan. Saatnya memberi ruang untuk
                            ide pertamamu.
                        </p>
                        <div className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#ded4c8] bg-[#f7f4ed] px-4 py-2.5 text-xs font-semibold text-[#766c60]">
                            <span className="text-base leading-none">+</span>
                            Tambah catatan segera
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
