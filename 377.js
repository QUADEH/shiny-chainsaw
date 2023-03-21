function generateNumberList() {
  let ol = document.getElementById("numberList");
  
  for (let i = 1; i <= 377; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
  }
}