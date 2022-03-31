const postTitle = document.getElementById("title");
const postBody = document.getElementById("body");
const postID = document.getElementById("id");
const sectionList = document.querySelector(".sectionList");
const resultsDiv = document.querySelector(".results");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");

// let postsArray = []
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => postsArray.push(json));

button1.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        for (let i = 0; i < 100; i++) {
        postBody.innerHTML +=`<h5><b>Title: ${json[i].title}</b></h5> <h6><b>Body</b> <br>${json[i].body}</h6> <i>This post has the ID of ${json[i].id}.<i> <hr>`;
    }
})})





// button1.addEventListener("click", function () {
//   for (let i = 1; i < 10; i++) {
//     let newItem;
//     newItem = resultsDiv.cloneNode(true);
//     sectionList.appendChild(newItem);
//     // let newTitle = document.newItem.getElementById("title");
//     // let newBody = document.newItem.getElementById("title");
//     // let newID = document.newItem.getElementById("title");
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         postTitle.innerHTML = json[i].title;
//         console.log(postTitle);
//         postBody.innerHTML = json[i].body;
//         postID.innerHTML = `This post has the ID of ${json[i].id}.`;
//       });
//   }
// });

// button1.addEventListener('click', function() {
//   let postsArray = []
//   let newItem;
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => postsArray.push(json));
//     for(let i = 0; i < 10; i++){
//       newItem = resultsDiv.cloneNode(true)
//       sectionList.appendChild(newItem)
//       console.log(postsArray)
//       let specObj = postsArray.find(obj => obj.id == 1)
//       console.log(specObj)
//       postTitle.innerHTML = postsArray[i].title
//       console.log(postTitle)
//       postBody.innerHTML = postsArray[i].body
//       postID.innerHTML = `This post has the ID of ${postsArray[i].id}.`
//     }
// })

// function func() {
//   const var1 = document.createElement('div')
//   const var2 = document.createElement('h4')

//   var1.appendChild(var2)
// }

// // (e) => {
// //   fetch('https://jsonplaceholder.typicode.com/posts')
// //   .then((response) => response.json())
// //   .then((json) => {
// postTitle.innerHTML = json[0].title
// postBody.innerHTML = json[0].body
// postID.innerHTML = `This post has the ID of ${json[0].id}.`
// //   })
// // }
