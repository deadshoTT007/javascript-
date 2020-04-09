class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }
    showProfile(user){
         //  console.log(user);    //now we get the profile of the user through user in which user's data is passed from APP.js ko data.profile bata
         this.profile.innerHTML=`
         <div class="card card-body mb-3>
         <div class="row">
         <div class="col-md-3">
         <img class="img-fluid mb-2" src="${user.avatar_url}"></img>
         <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
         </div>
         <div class="col-md-9">
         <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
         <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
         <span class="badge badge-success">Followers:${user.followers}</span>
         <span class="badge badge-info"> Following:${user.following}</span>
         <br><br>
         <ul class="list-group">
         <li class="list-group-item">Company:${user.company}</li>
         <li class="list-group-item">Website/Blog:${user.blog}</li>
         <li class="list-group-item">Location:${user.location}</li>
         <li class="list-group-item"><Member Since:${user.created_at}</li>
         </li>
         </ul>
         </div>
         </div>
         </div>
         <h3 class="page-heading mb-3"></h3>
         <div id="repos"></div>

         `
    }
    showRepos(repos){
        let output='';
        repos.forEach(function(repo){   
            output+=`
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars:${repo.stargazers_count}
            </span>
            <span class="badge badge-secondary">Watchers:${repo.watchers_count}
            </span>
            <span class="badge badge-success">Forks:${repo.forms_count}</span>
            </div>
            </div>
            </div>
            `;
        });
        //Output Repos

document.getElementById('repos').innerHTML=output;
    }//show alert message
    showAlert(message,className){
        //clear any remaining alert
        this.clearAlert();                    // after remaining alert we have to call the function
        //create divv
            const div=document.createElement('div');
            //add classname
            div.className=className;
            //add text
            div.appendChild(document.createTextNode(message));   // in this showAlert() section the alert is popped 
            //get parent
            const Container=document.querySelector('.searchContainer');
            //get search
            const search=document.querySelector('.search');
            //insert aleart
            Container.insertBefore(div,search);
            //setTimeout
            setTimeout(()=>{
            this.clearAlert();               //setTimeout clears the mesage which is in clearAlert() after 3 sec
            },3000)                               

    }
    clearAlert(){
        const Alert=document.querySelector('.alert');
        if(Alert){
            Alert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML='';  
    }
   
}