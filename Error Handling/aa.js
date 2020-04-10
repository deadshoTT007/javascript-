let re;
re=/^h.llo$/i;

//String to match
const str='Hello';
//log results
const result=re.exec(str);
console.log(result);


function reTest(re,str){
        if(re.test(str)===true){          //===true is not neccessary
            console.log(`${str} matches ${re.source}`)
        }else{
            console.log(`${str} does not match ${re.source}`)
        }
    }
    reTest(re,str);