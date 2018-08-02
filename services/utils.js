export function getDate(dateString) {
  let d = new Date(dateString);
  return `${d.toLocaleDateString("en-us", {
    month: "long"
  })} ${d.getDate()}, ${d.getFullYear()}`;
}

export function shortenExcerpt(excerpt) {
  if (!excerpt) {
    return;
  }
  const split_excerpt = excerpt.split("</p>");
  const space_split_excerpt = split_excerpt[0].split(" ");
  let final_excerpt = "";
  let i = 0;

  while (final_excerpt.length < 103) {
    final_excerpt += space_split_excerpt[i] + " ";
    i += 1;
  }
  final_excerpt +=
    " &hellip; </p>" +
    split_excerpt.splice(1, split_excerpt.length).join("</p>");

  return final_excerpt;
}
