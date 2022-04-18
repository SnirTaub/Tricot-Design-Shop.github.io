
// Adding Logo animation
const rollingLogo = [
  { transform: 'rotate(0) scale(0)'},
  { transform: 'rotate(0deg) scale(1)' }
];

const logoTiming = {
  duration: 2000,
  iterations: 1
};

let logo = document.querySelector(".logo");
logo.animate(rollingLogo, logoTiming);


// Adding fade animation to "Welcome to my world" text 

  const animatedText = document.querySelector(".fancytext");
  const strText = animatedText.textContent;
  
  const splitText = strText.split("");
  
  animatedText.textContent = "";
  for(let i=0; i < splitText.length; i++){
    animatedText.innerHTML += "<animated>" + splitText[i] + "</animated>";
  }
  
  let char = 0;
  let timer = setInterval(onTick, 50);
  
  function onTick(){
    const animated = animatedText.querySelectorAll('animated')[char];
    animated.classList.add('text-fade');
    char++;
    if(char === splitText.length){
      complete();
      return;
    }
  }
  
  function complete(){
    clearInterval(timer);
    timer = null;
  }
  
// Changing the Policy and about me buttons color

  function changeColor()
  {
    document.getElementById("policy").style.color = "white"; // forecolor
    document.getElementById("policy").style.backgroundColor = "black"; // backcolor
  }
  function changeColor2()
  {
    document.getElementById("policy2").style.color = "white"; // forecolor
    document.getElementById("policy2").style.backgroundColor = "black"; // backcolor
  }

    





	
