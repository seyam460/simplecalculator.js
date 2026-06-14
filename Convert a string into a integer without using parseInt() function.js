// uisng coercion 

function convertStoI() {
    let a = "100";
    let b = a * 1;
    console.log(typeof(b));

    let c = "3 11 14" * 1;
    console.log(typeof(c)); 
}

convertStoI();

// using math.floor method 

function convertStoI() {
    let d = "200";
    let e = Math.floor(d);
    console.log(typeof(e));
}

convertStoI();

// Using Math.ceil( ) function

function  convertStoI() {
    let f = "ABCD";
    let g = Math.ceil(f);
    console.log(typeof(g));
}

convertStoI();