const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userInput = e.target.value;
  if( userInput !== ''){
    github.getUser(userInput)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          ui.showAlert('User not fount', 'alert alert-danger');
        }else{
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
    }else{
      ui.clearProfile();
    }
});