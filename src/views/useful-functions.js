export const randomId = () => {
  return Math.random().toString(36).substring(2, 7);
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const addCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertToNumber = (string) => {
  return parseInt(string.replace(/(,|개|원)/g, ""));
};

export const wait = (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};
