export default function browserUrlIncludes(match) {
  return window.location.pathname.includes(match);
};