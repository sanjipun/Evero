export const getRateForXDays = (days: number): number => {
    const IAnnual = 88488.6;
    const rateForXDays = (Math.pow((1 + IAnnual / 100), days / 365) - 1) * 100
    return rateForXDays
}