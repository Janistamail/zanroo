let allInput = [];
let finalInput = [];

let allNega = [];
let finalNega = [];

let ans = [];

const removeIntersec = (input, nega) => {
  input.map((x) => {
    let n = 0;
    for (let i = 0; n < x[x.length - 1]; i++) {
      if (i === 0) {
        n = x[i];
        allInput.push(n);
      } else {
        n++;
        allInput.push(n);
      }
    }
  });
  allInput.forEach((x) => {
    if (!finalInput.includes(x)) {
      finalInput.push(x);
    }
  });
  // console.log(finalInput);
  //-----------------------------------
  nega.map((x) => {
    let n = 0;
    for (let i = 0; n < x[x.length - 1]; i++) {
      if (i === 0) {
        n = x[i];
        allNega.push(n);
      } else {
        n++;
        allNega.push(n);
      }
    }
    allNega.forEach((x) => {
      if (!finalNega.includes(x)) {
        finalNega.push(x);
      }
    });
  });
  // console.log(finalNega);
  //-----------------------------------
  finalInput.map((x) => {
    if (finalNega.indexOf(x) === -1) {
      ans.push(x);
    }
  });
  return ans.sort((a, b) => a - b);
};
console.log(
  removeIntersec(
    [
      [1, 7],
      [10, 20],
      [25, 100],
    ],
    [
      [2, 5],
      [11, 21],
      [30, 50],
    ]
  )
);
