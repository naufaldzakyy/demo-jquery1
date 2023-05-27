$(document).ready(function () {
  $("#myForm").submit(function (e) {
    e.preventDefault();

    var inputNumber = $("#inputNumber").val();
    var inputText = $("#inputText").val();

    $.ajax({
      url: "process.php",
      type: "POST",
      data: {
        inputNumber: inputNumber,
        inputText: inputText,
      },
      dataType: "json",
      success: function (response) {
        displayTable(response);
      },
      error: function (xhr, status, error) {
        console.log(error);
      },
    });
  });

  function displayTable(data) {
	$("table").hide();
	var thead = $("table thead")
    var tbody = $("table tbody");
    tbody.empty();

    $.each(data, function (index, item) {
      var row = "<tr>" + 
	  				"<td>" + index + "</td>" + 
					"<td>" + item + "</td>" + 
				"</tr>";
      tbody.append(row);
    });

    $("table").fadeIn();
  }
});
