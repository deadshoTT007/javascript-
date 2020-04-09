//init github
const github= new Github;
//init Ui
const ui=new UI;
//Search input
const searchUser=document.getElementById('searchUser');
//search input add eevent listener
searchUser.addEventListener('keyup',(e)=>{
    const userText=e.target.value;
    if(userText!==''){
        //make HTTP call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==='Not Found'){
                //Show alert
                ui.showAlert('user not found','alert alert-danger')
            }else{
           //show Profile
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
            }
            
        })
    }else{
        //clear profile
    ui.clearProfile();
    }


})