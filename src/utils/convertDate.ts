export function convertDateToYYMMDD(dateObj:Date):string{
    return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
  }).format(dateObj)
}