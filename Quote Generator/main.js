function QuoteGenerator() {
  let mainObj = {
    isinit: false,
    init: function (q, a, b) {
      mainObj.quote = document.querySelector(q);
      mainObj.author = document.querySelector(a);
      mainObj.btn = document.querySelector(b);

      mainObj.click(mainObj.btn);
    },
    display() {
      fetch("https://type.fit/api/quotes")
        .then((y) => y.json())
        .then((data) => {
        
            let random = Math.round(Math.random() * data.length)

            mainObj.quote.innerHTML = data[random].text;
            mainObj.author.innerHTML = data[random].author;
        });

    },
    click(btn) {
      btn.addEventListener("click", () => {
        mainObj.display();
      });
    },
  };

  return {
    init: mainObj.init,
  };
}

let quote = new QuoteGenerator();
quote.init("#q_content", "#a_author", "#g_btn");
