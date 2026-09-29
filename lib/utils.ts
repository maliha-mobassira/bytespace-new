/**
 * Utility functions for ByteSpace.
 */

/**
 * Combines CSS class names into a single clean string.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
