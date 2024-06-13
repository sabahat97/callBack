//callback 
type fn = ()=> void;
let placeOder = (preparePizzaCB :fn)=>{
setTimeout(() => {
    console.log("Order is placed!");
    preparePizzaCB()
}, 2000);
}

let fn2 = () =>{
    setTimeout(() => {
        console.log("Pizza is prepared!")
    }, 3000);
}
placeOder(fn2);
