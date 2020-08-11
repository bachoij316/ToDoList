document.getElementById("add-note").addEventListener("click", addNote);

function addNote() {
  let duty = prompt("Tell me your job to do.", "");
  if (duty == "") {
    alert("Add a thing to do!");
  } else if (duty != "" && duty != null) {
    let setDue = prompt("By when?");
    let tr = document.createElement("tr");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "chk-bx");
    input.setAttribute("onclick", "checking(this)");
    let td1 = document.createElement("td");
    td1.appendChild(input);
    let td2 = document.createElement("td");
    td2.innerHTML = duty;
    let td3 = document.createElement("td");
    td3.innerHTML = setDue;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.getElementById("table-body").appendChild(tr);
  }
}

document.getElementById("del-all").addEventListener("click", delAll);

function delAll() {
  let tbody = document.getElementById("table-body");
  while (tbody.childNodes.length != 0) {
    tbody.removeChild(tbody.childNodes[0]);
  }
}

document.getElementById("del-chk").addEventListener("click", delChecked);

function delChecked() {
  let checkboxes = document.querySelectorAll("#table-body .chk-bx");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      checkboxes[i].parentNode.parentNode.parentNode.removeChild(
        checkboxes[i].parentNode.parentNode
      );
    }
  }
}

function checking(x) {
  if (x.checked == true) {
    let striked = x.parentNode.nextSibling.innerHTML.strike();
    x.parentNode.nextSibling.innerHTML = striked;
    let strikedTD = x.parentNode.nextSibling.nextSibling.innerHTML.strike();
    x.parentNode.nextSibling.nextSibling.innerHTML = strikedTD;
  } else if (x.checked == false) {
    let unStriked = x.parentNode.nextSibling.firstChild.innerHTML;
    x.parentNode.nextSibling.innerHTML = unStriked;
    let unStrikedTD = x.parentNode.nextSibling.nextSibling.firstChild.innerHTML;
    x.parentNode.nextSibling.nextSibling.innerHTML = unStrikedTD;
  }
}

let timedate = document.getElementById("time-date");
(function a() {
  let x = new Date();
  let month = x.getMonth();
  let date = x.getDate();
  let year = x.getFullYear();
  let h = x.getHours();
  let m = x.getMinutes();
  let s = x.getSeconds();
  timedate.innerHTML = ` ${month}/${date}/${year} ${h}:${m}:${s}`;
  setTimeout(a, 1000);
})();
