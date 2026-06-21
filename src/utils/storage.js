export const getEntries = () => {
  return JSON.parse(localStorage.getItem("entries")) || [];
};

export const saveEntries = (entries) => {
  localStorage.setItem("entries", JSON.stringify(entries));
};