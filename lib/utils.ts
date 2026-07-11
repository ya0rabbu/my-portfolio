import { type ClassValue, clsx } from "clsx";

/**
 * Merges Tailwind class names conditionally.
 * Usage: cn("base-class", condition && "conditional-class")
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}