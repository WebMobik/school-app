export const cutStrId = (str) => {
  const regexp = /(\d+(\:\d)*)/i;
  const id = str.match(regexp);
  return id;
};
