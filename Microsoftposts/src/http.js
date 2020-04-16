class EasyHttp {

    // Make an HTTP GET request
        async get(url){  
            const response = await fetch(url);
            const resData = await response.json();
            return resData;
        }
    
    //Make an Http POST request
        async post(url, data){
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }) 
            const resData = await response.json();
            return resData;
        }
    
    //Make an Http PUT request
        async put(url, data){
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data)
            }) 
            const resData = await response.json();
            return resData;
        }
    
    //Make an Http DELETE request
        async delete(url){
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            }) 
             const resData = await 'User Deleted!';
            return resData;
    }
}

export const http = new EasyHttp();