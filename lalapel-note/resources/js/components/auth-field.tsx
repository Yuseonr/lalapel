import type { InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type AuthFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
    error?: string;
    id: string;
    label: string;
};

export function AuthField({
    className,
    error,
    id,
    label,
    ...props
}: AuthFieldProps) {
    return (
        <div>
            <label
                className="mb-2 block text-sm font-medium text-[#3c3730]"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                aria-describedby={error ? `${id}-error` : undefined}
                aria-invalid={Boolean(error)}
                className={cn(
                    'h-12 w-full rounded-xl border border-[#dcd3c7] bg-white/70 px-4 text-sm text-[#24211d] transition outline-none placeholder:text-[#b7ab9b] focus:border-[#24211d] focus:ring-4 focus:ring-[#24211d]/8',
                    error ? 'border-[#ba5b4e]' : 'border-[#dcd3c7]',
                    className,
                )}
                id={id}
                {...props}
            />
            {error ? (
                <p className="mt-2 text-xs text-[#a9483d]" id={`${id}-error`}>
                    {error}
                </p>
            ) : null}
        </div>
    );
}
