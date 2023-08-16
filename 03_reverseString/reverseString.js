const reverseString = function(stringToReverse) {
    let stringToReversetemp=stringToReverse;
    stringToReverse="";
for(let i=stringToReversetemp.length-1;i>=0;i--){
    stringToReverse+=stringToReversetemp[i];

}
if(stringToReversetemp.length==0){

    stringToReverse= ""
}
if(stringToReversetemp.length<0){
    stringToReverse="ERROR"
    }
return stringToReverse
};

// Do not edit below this line
module.exports = reverseString;
