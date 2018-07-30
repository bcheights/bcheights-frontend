export function getDate(dateString) {
  let d = new Date(dateString);
  return `${d.toLocaleDateString("en-us", {
    month: "long"
  })} ${d.getDate()}, ${d.getFullYear()}`;
}