

// detecting button press
for(i=0;i<=document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

     var buttonInnerHtml = this.innerHTML;

        makesound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);


//detecting keyboard press

        document.addEventListener("keypress" , function(Event){
            makesound(Event.key);
            buttonAnimation(Event.key)
        });

        function makesound(key){

            switch(key){
                case "w":
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break;  
        
                case "a":
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
        
                case "s":
                    var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                    break;  
        
                case "d":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
        
                 case "j":
                    var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;  
        
                case "k":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
        
                case "l":
                    var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;
        
                default: console.log(buttonInnerHtml)    
             }
        }
    });
}

function buttonAnimation(currentKey){
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add('pressed');

    setTimeout(function(){
        activebutton.classList.remove('pressed');
    },1000)
}


/*High order function exmaple
  function add(num1 , num2){
    return num1 + num2;
}

function mul(num1 , num2){
    return num1 * num2;
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}   

Higher order functions are functions that can take other functions as inputs..

*/

/***************************************************************************************************/

/*Ojects with constructor. */

/* function Students(name,age,enroledcorse,languages,introduceurself){
     this.name = name;
     this.city = age;
     this.enroledcorse = enroledcorse;
     this.languages = this.languages;
     this.introduceurself = function(){                     this is method
        alert("OK , My name is .............")
     }
 }

 var student1 = new Students("Madhu",24 ,"MERN developer",["Telugu", "english", "hindi"]);

 var student2 = new Students("Charith",10,"java",["hindi","tamil","telugu"])

 student1.introduceurself();

 console.log(student1.age)
 console.log(student2.languages)*/