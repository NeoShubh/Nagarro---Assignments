$(document).ready(function () {
  $("#btn1").click(function () {
    $("#text").select();
    document.execCommand("copy");
  });
});

$(document).ready(function () {
  $("#btn2").click(function () {
    var $temp = $("#text").select();
    $("#show").val($temp);
  });
});
