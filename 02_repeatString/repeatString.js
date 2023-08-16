const repeatString = function(stringToDup,number) {
    let stringToDuptemp=stringToDup;
        if(number>0){
        for(i=0;i<number-1;i++){
            stringToDup=stringToDup+stringToDuptemp;   
        }
    }

    if(number==0){

        stringToDup= ""
    }
    if(number<0){
        stringToDup="ERROR"
        }
return stringToDup

};

// Do not edit below this line
module.exports = repeatString;
