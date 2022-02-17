const textToCapitalize = (text: string, separator: string): string => {
  const name = text.replace(separator, " ");
  const arr = name.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
};

export { textToCapitalize };
