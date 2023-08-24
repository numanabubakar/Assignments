
// Task #1 

function arraySplice(array:number[], index:number, value:number) {
    array.splice(index, 0, value);
    return array;
  }

  var modified = arraySplice([1,2,3,4,5,6],2,12);
  console.log(modified)


