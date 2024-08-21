//callback function

function callsYouBack(callback){
    const a ="hello";
    callback (a);
}
callsYouBack(function (a){
    console.log(a);
});

function callbackfunction (b){
    console.log("this is from another funciton",b)
}

callsYouBack(callbackfunction);