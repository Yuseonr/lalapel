import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import { CatMark } from '@/components/cat-mark';

type AuthLayoutProps = {
    children: ReactNode;
    eyebrow: string;
    footer: ReactNode;
    title: string;
    description: string;
};

export function AuthLayout({
    children,
    description,
    eyebrow,
    footer,
    title,
}: AuthLayoutProps) {
    return (
        <>
            <Head title={title} />
            <main className="min-h-screen bg-[#f7f4ed] text-[#24211d]">
                <div className="mx-auto grid min-h-screen max-w-6xl lg:grid-cols-[0.9fr_1.1fr]">
                    <aside className="relative hidden overflow-hidden bg-[#e8e0d3] p-10 lg:flex lg:flex-col lg:justify-between">
                        <div className="relative z-10 flex items-center gap-3">
                            <span className="grid size-11 place-items-center rounded-2xl bg-[#24211d] text-[#f7f4ed]">
                                <CatMark size={30} />
                            </span>
                            <span className="text-lg font-semibold tracking-[-0.03em]">
                                lalapel
                            </span>
                        </div>

                        <div className="relative z-10 max-w-sm">
                            <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-[#766c60] uppercase">
                                ruang kecil untuk ide besar
                            </p>
                            <h1 className="text-5xl leading-[0.98] font-semibold tracking-[-0.06em]">
                                Tulis yang penting. Simpan yang berarti.
                            </h1>
                            <p className="mt-6 max-w-xs text-sm leading-6 text-[#6f665b]">
                                Canvas pribadi yang tenang untuk mengubah
                                pikiran yang berserakan menjadi catatan yang
                                rapi.
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center gap-3 text-xs text-[#766c60]">
                            <CatMark className="text-[#766c60]" size={24} />
                            <span>dibuat untuk berpikir lebih jernih</span>
                        </div>

                        <div className="pointer-events-none absolute -right-16 -bottom-20 size-72 rounded-full border-[32px] border-[#d9cdbd]" />
                        <div className="pointer-events-none absolute top-1/3 -left-20 size-48 rounded-full border-[24px] border-[#ded3c5]" />
                    </aside>

                    <section className="flex items-center justify-center px-6 py-12 sm:px-10">
                        <div className="w-full max-w-md">
                            <div className="mb-10 flex items-center gap-3 lg:hidden">
                                <span className="grid size-10 place-items-center rounded-xl bg-[#24211d] text-[#f7f4ed]">
                                    <CatMark size={27} />
                                </span>
                                <span className="text-lg font-semibold tracking-[-0.03em]">
                                    lalapel
                                </span>
                            </div>

                            <div className="mb-8">
                                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#a08f7b] uppercase">
                                    {eyebrow}
                                </p>
                                <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                                    {title}
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-[#766c60]">
                                    {description}
                                </p>
                            </div>

                            {children}
                            <div className="mt-8 text-center text-sm text-[#766c60]">
                                {footer}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
