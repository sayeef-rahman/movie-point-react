const options = { day: "2-digit", month: "short", year: "numeric" };
export const getFormattedDate = (releaseDate) => {
  if (releaseDate && releaseDate?.length > 0) {
    const date = new Date(releaseDate);
    const formattedDate = date?.toLocaleDateString("en-GB", options);
    return `| ${formattedDate}`;
  } else {
    return "";
  }
};
