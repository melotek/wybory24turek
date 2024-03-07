function replaceSpacesWithHyphens(inputString: string) {
    return inputString.replace(/\s+/g, '-').toLowerCase();
  }
  export default replaceSpacesWithHyphens;