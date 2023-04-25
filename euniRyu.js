
const basicData = ["안녕하세요", "어디선가", "입력된", "데이터를", "찾아보는", "함수입니다"];

function exampleOne(arr, dataType, itemToFind){
  if(Array.isArray(arr) === false){
    console.log("배열이 아닙니다");
    return false;
  }

  const isDataTypeMatched = (typeof(itemToFind) === dataType);
  const isItemExist = arr.includes(itemToFind);

  if(isDataTypeMatched === true && isItemExist === true){
    console.log(`${itemToFind}은(는) 배열에 존재합니다`);
    return true;
  }
  else if(isItemExist === false){
    console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다`);
    return false;
  }
  else if(isDataTypeMatched === false){
    console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다`)
  }
}

exampleOne(basicData, "string", "어디선가");

class typeArray{
  constructor(arr) {
    this.arr = arr;
  }
  
  set array(ary) {
    if(Array.isArray(ary)) {
      this._arr = ary;
    } 
    else {
      console.log("배열이 아닙니다");
    }
  }

  findData(itemToFind, dataType) {
    const isDataTypeMatched = (typeof(itemToFind) === dataType);
    const isItemExist = this.arr.includes(itemToFind);
  
    if(isDataTypeMatched && isItemExist) {
      console.log(`${itemToFind}은(는) 배열에 존재합니다`);
      return true;
    } 
    else if(!isItemExist){
      console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다`);
      return false;
    }
    else if(!isDataTypeMatched) {
      console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다`);
    } 
  }
}

const ex1 = new typeArray(basicData);
ex1.findData("안녕하세요", "string");


function exampleThree(arr, dataType, itemToFind, callback){
  if(Array.isArray(arr) === false){
    console.log("배열이 아닙니다");
    return false;
  }

  const isDataTypeMatched = (typeof(itemToFind) === dataType);
  const isItemExist = arr.includes(itemToFind);

  callback.call({ itemToFind, dataType }, isDataTypeMatched, isItemExist);

}
function findData2(isDataTypeMatched, isItemExist) {

  if(isDataTypeMatched && isItemExist) {
    console.log(`${this.itemToFind}은(는) 배열에 존재합니다`);
    return true;
  } 
  else if(!isItemExist){
    console.log(`${this.itemToFind}은(는) 배열에 존재하지 않습니다`);
    return false;
  }
  else if(!isDataTypeMatched) {
    console.log(`찾으려는 항목은 ${this.dataType} 데이터 타입이 아닙니다`);
  } 
}

exampleThree(basicData, "string", "아무래도", findData2)