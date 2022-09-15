// credit to : https://github.com/jessebenjamin1/jbsks/blob/main/src/lib/components/createLoadObserver.js
export const createLoadObserver = (handler: () => void) => {
  let waiting = 0;

  const onload = (el: { addEventListener: (arg0: string, arg1: () => void) => void }) => {
    waiting++;
    el.addEventListener('load', () => {
      waiting--;
      if (waiting === 0) {
        handler();
      }
    });
  };

  return onload;
};
