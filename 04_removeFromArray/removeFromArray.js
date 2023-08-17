const removeFromArray = function(array, ...toRemove) {
    let arrayTemp = new Array();

    array.forEach((item) => {if (!toRemove.includes(item)) {
        arrayTemp.push(item);
      }
    });
return arrayTemp
}

// Do not edit below this line
module.exports = removeFromArray;
