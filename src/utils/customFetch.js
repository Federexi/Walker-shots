const is_ok = true;

const customFetch = (time, array) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(array);
      } else {
        reject("error");
      }
    }, time);
  });
};

export default customFetch;