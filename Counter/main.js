function Counter() {
  let mainObj = {
    isinit: false,
    count: 0,
    init: function (d, i, c) {
      if (!mainObj.isinit) {
        mainObj.dec = document.querySelector(d);
        mainObj.inc = document.querySelector(i);
        mainObj.data = document.querySelector(c);

        mainObj.increment(mainObj.inc);
        mainObj.decrement(mainObj.dec);
      }
    },
    increment(Checkmate) {
      Checkmate.addEventListener("click", () => {
        mainObj.count = mainObj.count + 1;

        mainObj.data.innerHTML = mainObj.count;
      });
    },
    decrement(Checkmate) {
      Checkmate.addEventListener("click", () => {
        mainObj.count = mainObj.count - 1;

        if (mainObj.count < 0) {
          mainObj.count = 0;
        }

        mainObj.data.innerHTML = mainObj.count;
      });
    },
  };
  return {
    init: mainObj.init,
  };
}

let counter = new Counter();
counter.init("#dec", "#inc", "#counter");
