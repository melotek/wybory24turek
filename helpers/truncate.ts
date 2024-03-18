import transliterate from "@sindresorhus/transliterate";

function replaceSpacesWithHyphens(inputString: string) {
  return transliterate(inputString).replace(/\s+/g, "-").toLowerCase();
}
export default replaceSpacesWithHyphens;
