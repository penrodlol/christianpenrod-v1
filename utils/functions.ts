export function titleCase(source: string) {
  return source.toLowerCase().replace(/(^|\s)\S/g, (char) => {
    return char.toUpperCase();
  });
}
