import { isPast } from "date-fns";

/**
 * Groups an array of objects with a date property into past and upcoming groups.
 * @param array The array of objects.
 * @param getDate The callback to get the date from the object.
 * @returns An object with past and upcoming groups.
 */
export default function groupByDate<T>(
  array: T[],
  getDate: (item: T) => Date
): {
  past: T[];
  upcoming: T[];
} {
  const past: T[] = [];
  const upcoming: T[] = [];

  array.forEach((item: T) => {
    // Use the callback to get the date from the object.
    const date: Date = getDate(item);

    if (isPast(date)) {
      past.push(item);
    } else {
      upcoming.push(item);
    }
  });

  return { past, upcoming };
}
