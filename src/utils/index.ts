export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const cx = (...classNames: any) =>
    classNames.filter(Boolean).join(" ");