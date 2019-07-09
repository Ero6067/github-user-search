// Init Github class
const github = new Github;
// Init UI
const ui = new UI;

// change year on copyright to current
//ui.footerDate();

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
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert();
      } else {
        // Show Profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});