document.addEventListener("DOMContentLoaded", function() {
  let numberList = document.querySelector("#number-list");

  for (var i = 1; i <= 377; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
  }
});
