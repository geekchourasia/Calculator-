let screen=document.getElementById("screen");
let buttons=document.querySelectorAll("button");

let screenValue="";
let item;

for(item of buttons){
    item.addEventListener("click" ,(e) =>{

        let buttonText=e.target.innerText;

        console.log("inner text is" +buttonText);

        if(buttonText=='X'){
            buttonText='*';

            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;    
        }




    })
}
