window.addEventListener("load", async () => {
  try {
    let data = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
    console.log("data", data);
  } catch (err) {}
});
