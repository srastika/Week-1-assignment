/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("wait 1 sec resolved")
        },1*1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("wait 2 sec resolved")
        },2*1000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("wait 3 sec resolved")
        },3*1000)
    })
}
function calculateTime() {
    let start = new Date().getTime()
    let end;
    end = new Date().getTime()
    console.log("Timetaken(s):",(end-start)/1000)
}