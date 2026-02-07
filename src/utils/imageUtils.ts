/**
 * Utility function to get the correct image path accounting for the base URL
 * @param imagePath - The image path relative to public folder (e.g., '/light/Header/logo.png')
 * @returns The full path with base URL prepended
 */
export function getImagePath(imagePath: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${baseUrl}${cleanPath}`;
}
