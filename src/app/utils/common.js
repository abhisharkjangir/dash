export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  if(data) {
    return JSON.parse(data);
  }
  return undefined;
}

