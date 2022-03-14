window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200 || xhr.status == 201) {
        console.log("xhr.responseText", xhr.responseText);
        let obj = JSON.parse(xhr.responseText);
        console.log("obj", obj);
        document.getElementById("card-title").innerText = obj.title;
        document.getElementById("card-id").innerText = obj.id;
        document.getElementById("card-text").innerText = obj.body;
      }
    }
  };

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  xhr.send();
});
