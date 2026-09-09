import { cn } from '@/lib/utils';

type CatMarkProps = {
    className?: string;
    size?: number;
};

export function CatMark({ className, size = 64 }: CatMarkProps) {
    return (
        <svg
            aria-hidden="true"
            className={cn('shrink-0', className)}
            fill="none"
            height={size}
            viewBox="0 0 96 96"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 38 18 17l18 11c4-2 8-3 12-3s8 1 12 3l18-11-4 21c4 6 6 12 6 20 0 17-12 28-32 28S16 75 16 58c0-8 2-14 6-20Z"
                fill="currentColor"
                opacity=".12"
            />
            <path
                d="M22 38 18 17l18 11c4-2 8-3 12-3s8 1 12 3l18-11-4 21c4 6 6 12 6 20 0 17-12 28-32 28S16 75 16 58c0-8 2-14 6-20Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.5"
            />
            <path
                d="M33 54h.01M63 54h.01"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3.5"
            />
            <path
                d="M29 62 14 58m15 10-15 2m53-8 15-4m-15 12 15 2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
            />
        </svg>
    );
}
