export function isDateValid(year: number, month: number, day: number): boolean {
  // Use month directly without subtraction
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    // Adjust month comparison by 1 for correct index
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}
