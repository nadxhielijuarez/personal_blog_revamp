/**
 * Normalizes user-entered plain text for safe storage and display.
 * - React already escapes text in JSX; this trims dangerous control chars and caps length.
 * - Does not interpret HTML; treat values as plain text only.
 */
export function sanitizePlainText(value: string, maxLength: number): string {
  return value
    .replace(/\0/g, "")
    .replace(/[\u0001-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}
