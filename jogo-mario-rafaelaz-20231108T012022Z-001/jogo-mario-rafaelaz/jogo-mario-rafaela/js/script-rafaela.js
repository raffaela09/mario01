const mario = document.querySelector('.mario');
const pipepos = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
    mario.classList.remove('jump');    
    }, 500);
}

const loop = setInterval(() => {
    const pipe = pipepos.offsetLeft;
    const marioPos = window
    .getComputedStyle(mario)
    .getPropertyValue("bottom")
    .replace ("px", "")
  
    if (pipe < 90 && marioPos <= 153 && pipe >= 1) {
      pipepos.style.animation = "none";
      pipepos.style.left = `${pipe}px`
      mario.style.left = `${marioPos}px`
      mario.style.animation = "none";
      mario.src = "./img/mario-morto.png";
      mario.style.width = "75px";

  
      clearInterval(loop);
      
    }
  });
  

document.addEventListener('keydown', jump);