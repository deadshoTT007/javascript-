document.getElementById('button1').addEventListener('click',gettext);
document.getElementById('button2').addEventListener('click',getjson);
document.getElementById('button3').addEventListener('click',getexternal);
function gettext(){
    fetch('test.txt').then(function(response){           //fetch promises anything passes on it and to resolve or reject its on our hand
    
        //console.log(response);                  //function(respose) gives the response of the fetched file (data.txtt)
        //return response.text();
       return response.text();
    }).then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })                          
};
function getjson(){
    fetch('posts.json').then(function(response){           //fetch promises anything passes on it and to resolve or reject its on our hand
    
        //console.log(response);                  //function(respose) gives the response of the fetched file (data.txtt)
        //return response.text();
       return response.json();
    }).then(function(data){
        console.log(data);
        let output='';
        data.forEach(function(singledata){
             output +=`<li>${singledata.title}`;
             document.getElementById('output').innerHTML=output;
        })
    }).catch(function(err){
        console.log(err);
    })                          
};

function getexternal(){
    fetch('https://api.github.com/users').then(function(response){           //fetch promises anything passes on it and to resolve or reject its on our hand
    
        //console.log(response);                  //function(respose) gives the response of the fetched file (data.txtt)
        //return response.text();
       return response.json();
    }).then(function(data){
        console.log(data);
        let output='';
        data.forEach(function(user){
             output +=`<li>${user.login}`;              //we are takingthe github users login through github API
             document.getElementById('output').innerHTML=output;
        })
    }).catch(function(err){
        console.log(err);
    })                          
};

