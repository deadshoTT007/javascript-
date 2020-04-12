const data=[
{
    name:'Manish Kharel',
    age:19,
    gender:'male',
    lookingfor:'female',
    location:'Balkumari,Lalitpur',
    image:'https://randomuser.me/portraits/men/82.jpg'
},
    {
        name: 'lobi baun(Avishek)',
        age: 21,
        gender: 'male',
        lookingfor: 'female',
        location: 'lobipur',
        image: 'https://randomuser.me/portraits/women/83.jpg'
    },
    {
        name: 'rame ko choro(Shishir)',
        age: 22,
        gender: 'male',
        lookingfor: 'female',
        location: 'ayodhya',
        image: 'https://randomuser.me/portraits/men/81.jpg'
    },
];

const PROFILES=profileIterator(data);
nextProfile();


//next event
document.getElementById('next').addEventListener('click',nextProfile);
function nextProfile(){
    const currentProfile=PROFILES.next().value;    //this gives details of each profile
    if(currentProfile!==undefined){
    document.getElementById('profileDisplay').innerHTML=`
    <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `
    document.getElementById('imageDisplay').innerHTML=`
    <img src="${currentProfile.image}">
    `;
}else{
    window.location.reload();
}
}
//Profile Iterator
function profileIterator(profiles){
    let nextIndex=0;
return{
next:function(){
    return nextIndex<profiles.length?
    {  value:profiles[nextIndex++],done:false}:
    {done:true}
}
};
}
