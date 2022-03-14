window.addEventListener("load", async () => {
  try {
    let dataFromServer = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    ).then((res) => res.json());
    console.log(dataFromServer);
  } catch (err) {
    console.log("error from fetch", err);
  }
});
