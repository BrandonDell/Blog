const displayNewPost = function () {
    const blogInfo = JSON.parse(localStorage.getItem('allPosts'));

  for (let i = 0; i < newContent.length(); i++) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let h2 = document.createElement('h2');

    h1.textContent = newContent[i].text;
    p.textContent = newContent[i].content;
    h2.textContent = newContent[i].username;

    h1.classList.add('newTitle');
    p.classList.add('newContent');
    h2.classList.add('newUsername');

    div.append(h1);
    div.append(p);
    div.append(h2);

    document.querySelector('main').append(div);
  }
};

displayNewPost()
// retreives data for local storage
// const blogInfo = localStorage.getItem("blogPosts");
// console.log(blogInfo);
// console.log(JSON.parse(blogInfo));

// document.main.append(div);
// document.getSelection.append('article');
// document.querySelector('main').append(div)
