/**
 * Generates a URL to embed a Google Map with the given location and zoom level.
 *
 * Read more from the Google Map Embed API documentation:
 * https://developers.google.com/maps/documentation/embed/embedding-map#search_mode
 * @param location The location (i.e., search query) to embed.
 * @param zoom The zoom level of the map.
 * @returns The URL to embed a map with the given location and zoom level.
 */
export default function generateMapEmbedUrl(
  location: string,
  zoom?: number
): string {
  if (zoom && zoom < 0 && zoom > 21) zoom = undefined;

  return `https://www.google.com/maps/embed/v1/search?q=${encodeURIComponent(
    location
  )}&key=${process.env.GOOGLE_CLOUD_API_KEY}${zoom && `&zoom=${zoom}`}`;
}
