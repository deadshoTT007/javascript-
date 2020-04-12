const Singleton=(function(){
let instance;
function createInstance(){
    const object=new Object({name:'manish'});
    return object;
}
return{
    getInstance:function(){
        if(!instance){
            instance=createInstance();
        }
        return instance;
    }
}

}());
const instanceA=Singleton.getInstance();   //we can never have more than one instance
console.log(instanceA);
