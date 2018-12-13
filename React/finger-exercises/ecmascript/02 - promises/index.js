// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(timeMS) {
  // return new Promise((resolve) => setTimeout(resolve, timeMS));
  const tempIni = Date.now();
  return new Promise((resolve, reject) => {
    if (timeMS >= 4000) {
      reject(new Error('This time is too much !'));
    }
    setInterval(() => {
      resolve(Date.now() - tempIni);
    }, timeMS);
  });
}
export function asyncDelay() {

}
