function clousures() {
  function outer() {
    let count = 0;
    function inner() {
      count++;
      return count;
    }

    function getcount() {
      return count;
    }

    function setter(val) {
      count = val;
    }
    return { inner, getcount, setter };
  }
  // show
  const counter = outer();
  console.log(counter.inner());
  // get
  let c = counter.getcount();
  console.log(
    "counter().getcount(); it new instance , use counter.getcount(); val:",
    c
  );
  // set
  counter.setter(5);
  console.log(counter.inner());
  console.log(counter.inner());
}
function funTypes() {
  function add(a, b) {
    return a + b;
  }

  const subtract = (a, b) => {
    return a - b;
  };

  const root = (val) => {
    return Math.sqrt(val);
  };

  console.log("add", add(1, 3), "substract", subtract(2, 1), "root", root(2));
}

function callbackFunc() {
  function paid(rem) {
    console.log("mandate paid, remaining bal:",rem);
  }
  function payEmi(amount, paid) {
    const mandate = 2000;

    if (amount > mandate) {
      const rem = amount - mandate;
      paid(rem);
    } else {
      console.log("Insificient balance");
    }
  }

  payEmi(1000, paid);
}

function arrMethods(){
  const arr=[1,2,3,4,5,6,7,8];

 const newarr=  arr.map((number)=>{return number*2});
 console.log("*2",newarr);

const arrSum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
console.log("arr sum",arrSum);

const evenOnly = arr.find((number) => number % 2 === 0);
console.log("oneEvenOnly",evenOnly);

const evenNumbers = arr.filter((number) => number % 2 === 0);
console.log("evenNumbers",evenNumbers);


}
arrMethods();
// callbackFunc();
