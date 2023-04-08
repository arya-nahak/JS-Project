function Pagination() {
  let mainObj = {
    show_page: 2,
    isinit: false,
    init: function (a, b) {
      if (!mainObj.isInit) {
        mainObj.pagination_id = document.querySelector(a);
        mainObj.a_row = document.querySelector(b);

        //create Element for reading changing value

        mainObj.current_page = document.createElement("input");
        mainObj.current_page.setAttribute("id", "current_page");
        mainObj.current_page.setAttribute("type", "hidden");
        document.body.appendChild(mainObj.current_page);

        mainObj.show_p_page = document.createElement("input");
        mainObj.show_p_page.setAttribute("id", "show_per_page");
        mainObj.show_p_page.setAttribute("type", "hidden");
        document.body.appendChild(mainObj.show_p_page);

        // End

        mainObj.display(mainObj.a_row);
      }
    },
    display(a) {
      let number_of_pages = Math.ceil(a.children.length / mainObj.show_page);

      $(mainObj.current_page).val(0);
      $(mainObj.show_p_page).val(mainObj.show_page);

      let navigation_html = `<a class="previous_link border-0 me-3" href="javascript:pagination.previous();">
                <i class="fa fa-chevron-left text-dark" aria-hidden="true"></i></a>`;

      let current_link = 0;

      while (number_of_pages > current_link) {
        navigation_html += `<a class="page_link border-0 me-2  rounded fs-6  m-auto  fw-normal" onclick="pagination.go_to_page(${current_link})" longdesc="${current_link}">${
          current_link + 1
        }</a>`;
        current_link++;
      }

      navigation_html += `<a class="next_link border-0 ms-3" onclick="pagination.next()";"><i class="fa fa-chevron-right text-dark" aria-hidden="true"></i></button>`;

      $(mainObj.pagination_id).html(navigation_html);

      $(a).children().css("display", "none");

      $(a).children().slice(0, mainObj.show_page).css("display", "block");

      console.log($(mainObj.pagination_id));
      $(".page_link")[0].click();
    },
    previous() {
      let new_page = parseInt($(mainObj.current_page).val()) - 1;
      if ($(".active_page").prev(".page_link").length == true) {
        mainObj.go_to_page(new_page);
      }
    },
    next() {
      let new_page = parseInt($(mainObj.current_page).val()) + 1;
      if ($(".active_page").next(".page_link").length == true) {
        mainObj.go_to_page(new_page);
      }
    },
    go_to_page(page_num) {
      let show_per_page = parseInt($(mainObj.show_p_page).val());
      let start_from = page_num * show_per_page;
      let end_on = start_from + show_per_page;
      $(mainObj.a_row)
        .children()
        .css("display", "none")
        .slice(start_from, end_on)
        .css("display", "block");
      $(".page_link[longdesc=" + page_num + "]")
        .addClass("active_page")
        .siblings(".active_page")
        .removeClass("active_page");
      $(mainObj.current_page).val(page_num);
    },
  };

  return {
    init: mainObj.init,
    previous: mainObj.previous,
    next: mainObj.next,
    go_to_page: mainObj.go_to_page,
  };
}

let pagination = new Pagination();
pagination.init("#page_navigation", "#card_row");
