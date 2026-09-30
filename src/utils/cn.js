import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility to conditionally combine and merge Tailwind CSS classes cleanly.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
