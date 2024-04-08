document.getElementById('Form').addEventListener('submit', function (event) {
  event.preventDefault();

  
  let username = document.getElementById('username').value;
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

  console.log('Username:', username);
  console.log('Title:', title);
  console.log('Content:', content);

  
});
