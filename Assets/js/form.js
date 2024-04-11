document.getElementById('Form').addEventListener('submit', function (event) {
  event.preventDefault();

  let username = document.getElementById('username').value;
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;
// Commented out the alert as I liked the "required part on index.html"
  // if (username && title && content) {
    console.log('Username:', username);
    console.log('Title:', title);
    console.log('Content:', content);
    blogInfo = {
      username: username,
      title: title,
      content: content,
    };
    // long verson:let allPosts = localStorage.getItem('allPosts');
    // console.log(allPosts);
    // let posts = JSON.parse(allPosts);
    // console.log(posts);

    // if (posts === null)
    //   console.log('empty');
    //   posts = [];
    // }
    // condensed verson:
    const posts = JSON.parse(localStorage.getItem('allPosts')) || [];

    posts.push(blogInfo);
    console.log(posts);
    localStorage.setItem('allPosts', JSON.stringify(posts));

    window.location.href = 'blog.html';
  // } else {
  //   alert('Please fill out all fields');
  // }
});
