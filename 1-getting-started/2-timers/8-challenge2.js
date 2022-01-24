// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.



let counter=0;

const timerId = setInterval(
    () =>  {

        console.log('Hello World')
        counter += 1;

        if(counter === 5){
            clearInterval(timerId);
            console.log("done");
        }
    },
    1000
);










