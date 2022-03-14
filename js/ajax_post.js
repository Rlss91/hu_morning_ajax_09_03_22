window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();

  //wait for server response
  xhr.onreadystatechange = () => {
    //check if the request and response success
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200 || xhr.status == 201) {
        console.log("xhr.responseText", xhr.responseText);
        let obj = JSON.parse(xhr.responseText);
        console.log("obj", obj);
      }
    }
  };

  //choose where we send the request and what the method
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  //the request will be using json format
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  //send the request and convert obj to json string
  xhr.send(
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  );
});
