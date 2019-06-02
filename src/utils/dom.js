export const isInViewport = (elem, offset = 0) => {
  if (!elem) return false;
  const top = elem.getBoundingClientRect().top;
  return top + offset >= 0 && top - offset <= window.innerHeight;
};
