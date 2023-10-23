const palindromes = function (array) {
    for (i=0;i<array.length;i++){
        for (j=array.length;j>array.length;j--){
            if(array[i]=! array[j])
            return false;


        }
    }
return true
};

// Do not edit below this line
module.exports = palindromes;
