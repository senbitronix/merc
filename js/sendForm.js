const form = document.querySelector(".form-test-drive");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {};
  for (let { name, value } of form.elements) {
    if (name) {
      data[name] = value;
    }
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: `POST`,
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      console.log(data);
      alert("DATA WAS SEND!!!");
      form.reset();
    })
    .catch((error) => alert(`Error ${error}!`));
});
