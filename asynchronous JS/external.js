//using the concept of es5 prototype nethod

function easyHTTP(){
   this.http=new XMLHttpRequest();
}
//make an HTTP GET request
//make an HTTP POST request
//make an HTTP PUT request
//make an HTTP DELETE request

easyHTTP.prototype.get=function(url,callback) {
    this.http.open('GET',url,true);
    let self=this;
    this.http.onload=function(){
        
        if(self.http.status=== 200){
            callback(null,self.http.responseText);
        }else{
            callback('error:  '+ self.http.status);
        }
    }
    this.http.send();    
}

//make an HTTP POST Request
easyHTTP.prototype.post=function(url,data,callback){       //(data contains the set of values as object  )
    this.http.open('POST',url,true);
     this.http.setRequestHeader('Content-type','application/json');
     let xhr=this;
     this.http.onload=function(){
             callback(null,xhr.http.responseText);
     }
    this.http.send(JSON.stringify(data));
}
//MAKE AN HTTP PUT REQUEST
easyHTTP.prototype.put=function(url,data,callback){       //(data contains the set of values as object  )
    this.http.open('PUT',url,true);
     this.http.setRequestHeader('Content-type','application/json');
     let xhr=this;
     this.http.onload=function(){
             callback(null,xhr.http.responseText);
     }
    this.http.send(JSON.stringify(data));
}
//MAKE AN HTTP DELETE REQUEST
easyHTTP.prototype.delete=function(url,data,callback){       //(data contains the set of values as object  )
    this.http.open('DELETE',url,true);
     this.http.setRequestHeader('Content-type','application/json');
     let xhr=this;
     this.http.onload=function(){
             callback(null,'post deleted');
     }
    this.http.send(JSON.stringify(data));
}