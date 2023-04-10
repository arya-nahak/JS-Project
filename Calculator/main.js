function Calculator() {
  let mainObj = {
    isinit: false,
    result: "",
    init: function (v, b, c, r) {
      if (!mainObj.isinit) {
        mainObj.enter_value = document.querySelector(v);
        mainObj.all_button = document.querySelectorAll(b);
        mainObj.clr_button = document.querySelector(c);
        mainObj.results = document.querySelector(r);

        mainObj.display(mainObj.enter_value);
        mainObj.button_data(mainObj.all_button);
        mainObj.calculation_clear(
          mainObj.results,
          mainObj.clr_button,
          mainObj.enter_value
        );
      }
    },
    display(a) {
      a.addEventListener("change", function (e) {
        console.log(e.target.value);
      });
    },
    button_data(a) {
      a.forEach((e) => {
        console.log(e);

        e.addEventListener("click", (el) => {
          mainObj.enter_value.value += el.target.dataset.val;
        });
      });
    },
    calculation_clear(res, cls, val) {
      res.addEventListener("click", () => {
        if (val.value) {
          val.value = `${eval(val.value)}`;
        } else {
          val.value = "😫😫😫😫😫😫😫😫😫😫😫😫😫😫";

          setTimeout(() => {
            val.value = "";
          }, 2000);
        }
      });

      cls.addEventListener("click", () => {
        val.value = "";
      });
    },
  };

  return {
    init: mainObj.init,
  };
}

let calculator = new Calculator();
calculator.init("#enter_value", ".btn_data", ".btn_cls", ".btn_res");
