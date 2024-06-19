export function getDayOrNightIcon(
  iconName: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours();

  const isDayTime = hours >= 7 && hours < 20;

  return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}
