export const cloneObject = (obj) => JSON.parse(JSON.stringify(obj));

export const localStorageManager = {
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  get(key, defaultValue = null) {
    const getItem = localStorage.getItem(key);
    return getItem ? JSON.parse(getItem) : defaultValue;
  },
};
