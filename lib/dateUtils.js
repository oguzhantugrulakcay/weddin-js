export function parseSiteDate(value) {
  if (value instanceof Date) return value;
  if (typeof value !== "string") return new Date(value);
  const normalized = value.includes("T") ? value : value.replace(" ", "T");
  return new Date(normalized);
}

export function formatDateTimeTR(value) {
  const d = parseSiteDate(value);
  if (Number.isNaN(d.getTime())) return "";

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
