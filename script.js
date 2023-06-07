
function one(cb = () => {}) {
    console.log('10')
    update("10")
    cb();
}

function two(cb = () => {}) {
    console.log('9')
    update("9")

    cb();
}

function three(cb = () => {}) {
    console.log('8')
    update("8")

    cb();
}

function four(cb = () => {}) {
    console.log('7')
    update("7")
    cb();
}

function five(cb = () => {}) {
    console.log('6')
    update("6")
     cb();
}
function six(cb = () => {}) {
    console.log('5')
    update("5")
     cb();
}
function seven(cb = () => {}) {
    console.log('4')
    update("4")
    cb();
}
function eight(cb = () => {}) {
    console.log('3')
    update("3")

     cb();
}
function nine(cb = () => {}) {
    console.log('2')
    update("2")
     cb();
}
function ten(cb = () => {}) {
    console.log('1')
    update("1")
     cb();
}
function happy(cb = () => {}) {
    console.log('HAPPY INDEPENDENCE DAY')
    update('HAPPY INDEPENDENCE DAY')
     cb();
}



// one(() => two(() => three(() => four(() => five()) )));

function greet() {
  one(() => setTimeout(() => {
     two(() => setTimeout(() => {
       three(() => setTimeout(() => {
       four(() => setTimeout(() => {
       five(() => setTimeout(() => {
       six(() => setTimeout(() => {
       seven(() => setTimeout(() => {
       eight(() => setTimeout(() => {
       nine(() => setTimeout(() => {
       ten(() => setTimeout(() => {
       happy();
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
  }, 1000));
}

function update(message){
    let p = document.getElementById("count")
    p.innerText=message;
}


greet();


