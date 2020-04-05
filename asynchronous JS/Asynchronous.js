/*document.getElementById('button').addEventListener('click',loaddata);
function loaddata(){
//Create an XHR obhject
const xhr=new XMLHttpRequest();   //we create an XMLHttpRequest object
//OPEN
xhr.open('GET','data.txt',true);   //now we call a .open and pass in 'GET" to get the file or url externally from data.txt amd true is used as an confirmation  //we have a event listener we click it and is calls a loaddata() function 
console.log('READYSTATE',xhr.readyState);  // to check the ready state of xhr object
//optional-Used for spinners/loaders
xhr.onprogress=function(){
    console.log("READYSTATE",xhr.readyState);   //this shows the stage 3 i.e processing request
}
 xhr.onload=function(){      //then we unload the data.txt file in a function and make sure that the status is 200 i.e OK
    console.log('READYSTATE',xhr.readyState);
     if(this.status===200){

document.getElementById('output').innerHTML=`<h3>${this.responseText}</h3>`;         //console.log(this.responseText);//then we console the this.responseTExt which basically stores the values or tect of data.txt
     }
 }
 xhr.onerror=function(){            //if any error is present
     console.log('requesting error.....');
 }




// xhr.onreadystatechange=function(){
//     console.log('READYSTATE',xhr.readyState);   //when onreadystatechange runs it shows(goes) to all 5 states(0-4) 
//     if(this.status===200 && this.readyState===4){ //so that we have check for readystate 4..we have to make sure it is at a stage 4.
//         console.log(this.responseText);
//     }

 xhr.send();    //and then send it 
}

//HTTP statuses
//200:"ok"
//403:"forbidden"
//404:"not found"

//Ready State Values
//0:request not initialized
//1:server connection established
//2:request received
//3:processing request
//4:request finished and response is ready
*/

document.getElementById('button1').addEventListener('click',customer);
    function customer(e){
        const xhr=new XMLHttpRequest();
        xhr.open('GET','customer.json',true);
        xhr.onload=function(){
            if(this.status===200){
                console.log(this.responseText);
                const Customer=JSON.parse(this.responseText);
                const output=`
                <ul>
                <li> ID:${Customer.ID}</Li>
                <li> Name:${Customer.Name}</Li>
                <li> Conpany:${Customer.Company}</Li>
                <li> Phone:${Customer.Phone}</Li>
                </ul>`
                document.getElementById('output').innerHTML=output;
            }
        }
    
    xhr.send();
    }
    document.getElementById('button2').addEventListener('click',customers);
    function customers(e){
        const xhr=new XMLHttpRequest();
        xhr.open('GET','customers.json',true);
        xhr.onload=function(){
            if(this.status===200){
               // console.log(this.responseText);
                const Customers=JSON.parse(this.responseText);
               // console.log(Customers);
                //let output='';      //not necceasary
                Customers.forEach(function(Customer){   //forEach is used(beacause we are deling with an array type) amd aasining the values of Customers to customer for dealing seperately 
                    output+=       //'+' is used because it is an aaray type id we only use = then it stores only one object
                `
                <ul>
                <li> ID:${Customer.ID}</Li>
                <li> Name:${Customer.Name}</Li>
                <li> Conpany:${Customer.Company}</Li>
                <li> Phone:${Customer.Phone}</Li>
                </ul>`
                document.getElementById('output1').innerHTML=output;
            });
         
                }
            }
            xhr.send();
        }  

