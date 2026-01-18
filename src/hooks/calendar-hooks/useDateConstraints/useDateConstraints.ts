export interface DateConstraints {
  min?: Date;
  max?: Date;
  disabled?: (date: Date) => boolean;
}

export const useDateConstraints = ({ min, max, disabled }: DateConstraints) => {
  const isDisabled = (date: Date) => {
    if (min && date < min) return true;
    if (max && date > max) return true;
    if (disabled && disabled(date)) return true;
    return false;
  };

  return { isDisabled };
};
