const displayNewPost = function () {
    const postContent = JSON.parse(localStorage.getItem('allPosts'));

  for (let i = 0; i < postContent.length; i++) {
    let divElement = document.createElement('div');
    let h1Element = document.createElement('h1');
    let pElement = document.createElement('p');
    let h2Element = document.createElement('h2');
// gave content to the title, username, and content
    h1Element.textContent = postContent[i].title;
    pElement.textContent = postContent[i].content;
    h2Element.textContent = postContent[i].username;
    // append them to the div element to create a box
    divElement.appendChild(h1Element);
    divElement.appendChild(pElement);
    divElement.appendChild(h2Element);
    console.log(divElement);
    
    document.querySelector('#blogTableBody').appendChild(divElement);
  }
};
displayNewPost()

