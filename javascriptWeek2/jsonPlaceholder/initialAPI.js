const postTitle = document.getElementById("title");
const postBody = document.getElementById("body");
const postID = document.getElementById("id");
const sectionList = document.querySelector(".sectionList");
const resultsDiv = document.querySelector(".results");
const form = document.querySelector("form");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");

button1.addEventListener("click", function () {
  button8.style.display = "none";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      sectionList.innerHTML = "";
      for (let i = 0; i < 100; i++) {
        console.log(json);
        sectionList.innerHTML += `<div class="results">
        <h2 id="title">${json[i].title}</h2>
        <hr>
        <h5 id="body">${json[i].body}</h5>
        <h6><p>User ID: ${json[i].userId}</p></h6>
        <p style="font-size: x-small; text-align: right;" id="id"><i>This post has the ID of ${json[i].id}.<i></i></p>
</div>`;
      }
    });
});

button2.addEventListener("click", function () {
  button8.style.display = "none";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      sectionList.innerHTML = "";
      sectionList.innerHTML += `<div class="results">
        <h2 id="title">${json[9].title}</h2>
        <hr>
        <h5 id="body">${json[9].body}</h5>
        <h6><p>User ID: ${json[9].userId}</p></h6>
        <p style="font-size: x-small; text-align: right;" id="id"><i>This post has the ID of ${json[9].id}.<i></i></p>
</div>`;
    });
});

button3.addEventListener("click", function () {
  button8.style.display = "none";
  sectionList.innerHTML = "";
  form.style.display = "block";
  button7.innerText = "Submit";
  button7.addEventListener("click", function (e) {
    sectionList.innerHTML = "";
    const formBody = document.querySelector("textarea").value;
    const formTitle = document.querySelector("input").value;
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: formTitle,
        body: formBody,
        userId: 1,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        console.log(json.id);
        form.style.display = "none";
        formTitle.value = "";
        formBody.value = "";
        sectionList.innerHTML += `<div class="results" style="margin-bottom: 100px;">
          <h2 id="title">${json.title}</h2>
          <hr>
          <h5 id="body">${json.body}</h5>
          <h6><p>User ID: ${json.userId}</p></h6>
          <p style="font-size: x-small; text-align: right;" id="id"><i>This post has the ID of ${json.id}.<i></i></p>
  </div>`;
      });
  });
});

button4.addEventListener("click", function () {
  button8.style.display = "none";
  sectionList.innerHTML = "";
  form.style.display = "block";
  button7.innerText = "Update Post with ID of 12";
  button7.addEventListener("click", function (e) {
    sectionList.innerHTML = "";
    const formBody = document.querySelector("textarea").value;
    const formTitle = document.querySelector("input").value;
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "PUT",
      body: JSON.stringify({
        title: formTitle,
        body: formBody,
        userId: 1,
        id: 12,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        button7.innerText = "Submit";
        form.style.display = "none";
        formTitle.value = "";
        formBody.value = "";
        sectionList.innerHTML += `<div class="results" style="margin-bottom: 100px;">
          <h2 id="title">${json.title}</h2>
          <hr>
          <h5 id="body">${json.body}</h5>
          <h6><p>User ID: ${json.userId}</p></h6>
          <p style="font-size: x-small; text-align: right;" id="id"><i>This post has the ID of ${json.id}.<i></i></p>
  </div>`;
      });
  });
});

button5.addEventListener("click", function () {
  button8.style.display = "none";
  sectionList.innerHTML = "";
  form.style.display = "block";
  button7.innerText = "Update Post with ID of 12";
  button7.addEventListener("click", function (e) {
    sectionList.innerHTML = "";
    const formBody = document.querySelector("textarea").value;
    const formTitle = document.querySelector("input").value;
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "PUT",
      body: JSON.stringify({
        title: formTitle,
        body: formBody,
        userId: 1,
        id: 12,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        button7.innerText = "Submit";
        form.style.display = "none";
        formTitle.value = "";
        formBody.value = "";
        sectionList.innerHTML += `<div class="results" style="margin-bottom: 100px;">
          <h2 id="title">${json.title}</h2>
          <hr>
          <h5 id="body">${json.body}</h5>
          <h6><p>User ID: ${json.userId}</p></h6>
          <p style="font-size: x-small; text-align: right;" id="id"><i>This post has the ID of ${json.id}.<i></i></p>
  </div>`;
      });
  });
});

button6.addEventListener("click", function () {
  sectionList.innerHTML = "";
  button8.style.display = "block";
  button8.addEventListener("click", function (e) {
    button8.style.display = "none";
    sectionList.innerHTML = "";
    const formBody = document.querySelector("textarea").value;
    const formTitle = document.querySelector("input").value;
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "DELETE",
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        sectionList.innerHTML += `<div class="results" style="margin-bottom: 100px;">
          <h2 id="title">Post was Succesfully Deleted</h2>
  </div>`;
      });
  });
});
