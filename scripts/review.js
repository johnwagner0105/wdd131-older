const addCounter=()=>{
    console.log("Hi from add function")
    let counter=localStorage.getItem('counter') || 0;
    counter++;
    localStorage.setItem('counter',counter);
}

const checkFormSubmission=()=>{
    if(document.referrer && document.referrer!==window.location.href){
        console.log("Hi from check function")
        addCounter();
    }
}

window.onload=checkFormSubmission;
console.log("Hi from review")