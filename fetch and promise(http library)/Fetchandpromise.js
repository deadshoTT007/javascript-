//easy http liabrary
class EasyHTTP{
    //nake a hhtp get pequest
get(url){
    return new Promise((resolve,reject)=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=>resolve(data))            //we can just return it without consoling
        .catch(err=>reject(err));
    }); 
    
    }
    
    post(url,data){
        return new Promise((resolve,reject)=> {
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))            //we can just return it without consoling
            .catch(err=>reject(err));
        }); 
        
        }
    
        //make an HTTp PUT request

        put(url,data){
            return new Promise((resolve,reject)=> {
                fetch(url,{
                    method:'PUT',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
                .then(res=>res.json())
                .then(data=>resolve(data))            //we can just return it without consoling
                .catch(err=>reject(err));
            }); 
            
            }
//make an HTTp DELETE request

put(url,){
    return new Promise((resolve,reject)=> {
        fetch(url,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
          
        })
        .then(res=>res.json())
        .then(data=>resolve('data deleted'))            //we can just return it without consoling
        .catch(err=>reject(err));
    }); 
    
    }

        }