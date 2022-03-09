let animalsArr = ["dog", "cat", "fish", "bear", "horse", "iguana"];

let selectedItem;

const displayArr = () => {
  $("#listdiv").empty();
  let i = 0;
  for (let animal of animalsArr) {
    $("#listdiv").append(
      `<p id="animal_${i}" onclick="handleEditSelected(this)">${animal}</p>`
    );
    i++;
  }
};

const handleEditSelected = (ev) => {
  //   console.log(ev);
  selectedItem = ev;
  $("#edittxt").val(ev.innerText);
};

$(document).ready(() => {
  displayArr();
  $("#newanimalform").submit((ev) => {
    ev.preventDefault();
    animalsArr = [...animalsArr, $("#newtxt").val()];
    console.log("animalsArr", animalsArr);
    displayArr();
  });
  $("#editpopup-edit").click(() => {
    let newName = $("#edittxt").val();
    selectedItem.innerText = newName;
    animalsArr[selectedItem.id.replace("animal_", "")] = newName;
  });
  $("#editpopup-remove").click(() => {
    console.log(selectedItem.id);
    animalsArr = animalsArr.filter(
      (item, id) => id != selectedItem.id.replace("animal_", "")
    );
    displayArr();
  });
});
