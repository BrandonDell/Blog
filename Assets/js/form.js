document.getElementById('Form').addEventListener('submit', function (event) {
  event.preventDefault();

  let username = document.getElementById('username').value;
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

  console.log('Username:', username);
  console.log('Title:', title);
  console.log('Content:', content);
  blogInfo = {
    username: username,
    title: title,
    content: content,
  };
  //   if ((blogInfo.userName == null || blogInfo.userName == "") || (blogInfo == null))
  // } else {}
  // localStorage.setItem('blogPosts', JSON.stringify(blogInfo));
  // console.log(blogInfo);

  const allPosts = localStorage.getItem('allPosts');
  console.log(allPosts);
  let posts = JSON.parse(allPosts);
  console.log(posts);
  // const allPosts = JSON.parse(getBlogInfo) || [];
  posts.push(blogInfo);
  console.log(posts);
  localStorage.setItem('allPosts', JSON.stringify(posts));

  window.location.href = 'blog.html';
});
