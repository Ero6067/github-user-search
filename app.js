// Init Github class
const github = new Github;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make HTTP call
    github.getUser(userText)
    .then(data => {
      console.log(data);
    })
  }
});