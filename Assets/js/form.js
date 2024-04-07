document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    
    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    // need to send items to Database
    console.log("Username:", username);
    console.log("Title:", title);
    console.log("Content:", content);

   