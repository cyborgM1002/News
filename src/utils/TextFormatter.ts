export function CapitalizeFirstLetter(value: string) {
  return value?.charAt(0)?.toUpperCase() + value?.slice(1);
}

export function FormatLength(value: number) {
  return value ? value : "0";
}

export function FormatString(value: string, limit: number) {
  if (value) {
    if (value.length > limit) {
      return `${value.slice(0, limit)}...`;
    } else {
      return value;
    }
  } else {
    return "...";
  }
}

export function FormatDate(value: string) {
  if (value) {
    return value.slice(0, 10);
  } else {
    return "...";
  }
}
