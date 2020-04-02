document.getElementById('loan-form').addEventListener('submit',function(e){
    
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='block';
    setTimeout(calculateresults,2000)
    e.preventDefault();
});
//calculate results
function calculateresults(){
console.log('calculating')

//UI variables
const amount=document.getElementById('amount');
const interest=document.getElementById('interest');
const years=document.getElementById('years');
const monthlypayment=document.getElementById('monthly-payment');
const totalpayment=document.getElementById('total-payment');
const totalinterest=document.getElementById('total-interest');

const principal=parseFloat(amount.value);
const calculatedinterest=parseFloat(interest.value) / 100 / 12;
const calculatedpayment= parseFloat(years.value)*12;
//compute monthly payments
const x=Math.pow(1+calculatedinterest,calculatedpayment);
const monthly=(principal*x*calculatedinterest)/(x-1);
if(isFinite(monthly)){
    monthlypayment.value=monthly.toFixed(2);
    totalpayment.value=(monthly*calculatedpayment);
    totalinterest.value=((monthly*calculatedpayment)-principal).toFixed(2);
    document.getElementById('results').style.display='block';
    document.getElementById('loading').style.display='none';
}else{
   showerror('please check the values or numbers ');
}

e.preventDefault();
}
//show error
function showerror(error){
    //hide result
    document.getElementById('results').style.display='none';
    //hide loader
    document.getElementById('loading').style.display='none';
    // get element
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');
//create div
const errordiv=document.createElement('div');
//add class
errordiv.className='alert alert-danger';
//create tewxt node and append to div
errordiv.appendChild(document.createTextNode(error));
//inserting error above heading
card.insertBefore(errordiv,heading);


//clear error after 3 seconds 
//setTimeout(errordiv,3000);
}