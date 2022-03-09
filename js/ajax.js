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
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  //send the request
  xhr.send();
});
