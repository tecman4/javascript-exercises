const sumAll = function(min, max) {
    let sum =0

 //   array.forEach((item) => {if (!toRemove.includes(item)) {
        
     // }
    //});
//return arrayTemp
if(min<0 || max<0) return "ERROR"
if(!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"
if(max<min){
    let temp =min;
    min=max;
    max=temp;
}
for(let i = min;i <= max;i++){
    sum += i;
}

return sum
};

// Do not edit below this line
module.exports = sumAll;
