export function calculateAge(birthDate: Date): {
  years: string;
  months: string;
  days: string;
} {
  const currentDate = new Date();

  let displayYears = currentDate.getFullYear() - birthDate.getFullYear();
  let displayMonths = currentDate.getMonth() - birthDate.getMonth();
  let displayDays = currentDate.getDay() - birthDate.getDay();

  // Calculate difference of days within the current month
  displayDays = currentDate.getDate() - birthDate.getDate();

  // Adjusts to ensure non-negative values
  if (displayMonths < 0) {
    displayMonths += 12;
    displayYears--;
  }

  // Adjust for negative days
  if (displayDays < 0) {
    const lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0,
    );
    displayDays += lastMonth.getDate();
    displayMonths--;
  }

  return {
    years: displayYears.toString(),
    months: displayMonths.toString(),
    days: displayDays.toString(),
  };
}
