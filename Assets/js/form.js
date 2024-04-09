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
}

   localStorage.setItem('allPosts', JSON.stringify(blogInfo));
   // const getBlogInfo = localStorage.getItem('allPosts');
  // const allPosts = JSON.parse(getBlogInfo) || [];
  //  allPosts.push(blogInfo)
  // // Need to be directed to blog.html
  // const redirect = document.getElementById('redirect');
  // redirect.addEventListener('click', function () {
  //   window.location.href = ""
  // }

});
