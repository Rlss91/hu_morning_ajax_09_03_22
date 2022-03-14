let charsArr = [];

window.addEventListener("load", async () => {
  try {
    let data = await axios.get("https://rickandmortyapi.com/api/character");
    charsArr = data.data.results;
    displayCards();
  } catch (err) {}
});

const displayCards = () => {
  let containerStr = "";
  for (let item of charsArr) {
    containerStr += `
        <div class="col">
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <button type="button" class="btn btn-danger" onclick="handleDeleteCardClick(${item.id})">X</button>
                </div>
            </div>
        </div>
        `;
  }
  document.getElementById("cards-container").innerHTML = containerStr;
};

const handleDeleteCardClick = (id) => {
  charsArr = charsArr.filter((item) => item.id !== id);
  displayCards();
};
