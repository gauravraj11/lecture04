// console.log(Math.random());

// const A = [2,3,4,6];

// const C = A.concat(B);

// console.log(C);

// const D = [...A, ...B , ...C];

// console.log(D);



// const B = [  4,6,8,  [9,7,[1,2]]   ,11, 22, [1,2]  ];

// const E = B.flat(Infinity);

// console.log(E);

// const C1 = Object.assign({} ,A1, B1);

// const D1 = {...A1, ...B1}

// console.log(D1);

const A1 = {

    1: "abc",
    2: "cde",
    3: "fgh"
}

const B1 = {

    A: "MERN",
    B: "Kartik",
    C: "Samar"
}

const {A, B,C }= B1 ;  //Destructuring


console.log(B1["C"]);

console.log(C);


