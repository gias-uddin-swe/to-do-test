let count = 0;

document.getElementById("add-button").addEventListener("click", function (e) {
  count = count + 1;
  let inputValue = document.getElementById("input-box").value;
  const tableContent = document.getElementById("table-content");

  if (inputValue == "") {
    alert("your didn't input any value");
  } else {
    let makeElement = document.createElement("tr");
    makeElement.id = "main-content";
    makeElement.innerHTML = `<th>${count}</th>
      <td>${inputValue}</td>
      <td><button class="delete-button">Delete</button> <button class="done-button">Done</button></td>`;
    tableContent.appendChild(makeElement);
    document.getElementById("input-box").value = "";

    const allDeleteButton = document.getElementsByClassName("delete-button");
    const allDoneButton = document.getElementsByClassName("done-button");

    for (const button of allDeleteButton) {
      console.log(button);
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.display = "none";
        // console.log(e.target.parentNode.parentNode);
      });
    }
    for (const button of allDoneButton) {
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
        // console.log(e.target.parentNode.parentNode.childNodes);
      });
    }
  }
});

document.getElementById("clear-all").addEventListener("click", function (e) {
  document.getElementById("table-content").style.display = "none";
  window.location.reload();
});
