export function convertWindSpeed(speedInMetersPerSecond: number): string {
  const speedInKilometersPerHour = speedInMetersPerSecond * 3.6;
  return `${speedInKilometersPerHour.toFixed(0)}km/h`;
}
