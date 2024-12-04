const openingTagRegex = /^<[A-Z]>$/;
const closingTagRegex = /^<\/[A-Z]>$/;

const validateTags = (tags: string[]): string | null => {
  const tagStack: string[] = [];

  for (const tag of tags) {
    if (openingTagRegex.test(tag)) {
      // Get char inside a opening tag
      tagStack.push(tag[1]);
    }
    const hasClosingTag = closingTagRegex.test(tag);

    if (hasClosingTag) {
      // get char inside closing tag
      const tagLetter = tag[2];
      const expectedTag = tagStack.pop();

      if (expectedTag !== tagLetter) {
        return expectedTag
          ? `Expected </${expectedTag}> found </${tagLetter}>`
          : `Expected # found </${tagLetter}>`;
      }
    }
    // Skip invalid tags and other characters
  }

  if (tagStack.length > 0) {
    const expectedTag = tagStack.pop();
    return `Expected </${expectedTag}> found #`;
  }

  return null;
};

export const tagChecker = (input: string, delimiter: string): string[] => {
  const errorArray: string[] = [];

  const formattedInput: string[] = input
    .split(delimiter)
    .map((paragraph) => paragraph.trim()) // TODO Potentially more processing, remove invalid non-alphanumeric characters
    .filter((paragraph) => paragraph.length > 0);

  const tagRegex = /<\/?[A-Z]>/g;

  for (const paragraph of formattedInput) {
    const tags = paragraph.match(tagRegex) || [];
    const error = validateTags(tags);
    errorArray.push(error || "Correctly tagged paragraph");
  }

  return errorArray;
};
