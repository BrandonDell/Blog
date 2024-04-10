const blogInfo = localStorage.getItem("blogPosts");
console.log(blogInfo);
console.log(JSON.parse(blogInfo));

const displayNewPost = function () {
    const postContent = JSON.parse(localStorage.getItem('allPosts'));

  for (let i = 0; i < postContent.length; i++) {
    let divElement = document.createElement('div');
    let h1Element = document.createElement('h1');
    let pElement = document.createElement('p');
    let h2Element = document.createElement('h2');

    h1Element.textContent = postContent[i].text;
    pElement.textContent = postContent[i].content;
    h2Element.textContent = postContent[i].username;

    // h1.classList.add('newTitle');
    // p.classList.add('postContent');
    // h2.classList.add('newUsername');

    // div.append(h1);
    // div.append(p);
    // div.append(h2);
    let div = '<tr><td>Username</td><td>Title</td><td>Content</td></tr>';

    document.querySelector('#blogTableBody').append(div);
  }
};

displayNewPost()


// document.main.append(div);
// document.getSelection.append('article');
// document.querySelector('main').append(div)
