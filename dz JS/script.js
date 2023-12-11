

function myFunc(){

    let promptValue = prompt();
    
    if (!isNaN(Number(promptValue))){

        console.log('number');

    }
    else{

        console.log('string');

    }

}
myFunc();