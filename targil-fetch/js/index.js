window.addEventListener("load", async () => {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(
      (res) => res.json()
    );
    console.log("data", data);
    document.getElementById("card-title").innerText = data.title;
    document.getElementById("card-id").innerText = data.id;
    document.getElementById("card-text").innerText = data.body;
  } catch (err) {
    console.log("error", err);
  }
});
