const box = document.querySelector(".box")
const thiep= document.querySelector("body > div > div.bia")
const nap = document.querySelector("body > div > div.nap");
const lixi = document.querySelector("body > div > div.li-xi")
const song = document.getElementById("song")
const heart = document.createElement("div")

const text = ['Tuy','anh','nghèo','nhưng','anh','tốt','nên','2023','này',"hãy","để","anh","lì","xì","đời","trai","này","cho","em","nhé!",";3",'❤❤❤']
nap.addEventListener("click",open)

function open(){
    nap.style.animation='open linear 3s forwards';
    setTimeout(function(){lixi.style.animation='push-up linear 4s forwards';   
    song.play()
    song.loop = true;
    nap.style.zIndex=0;},3000)
    setTimeout(function(){
        thiep.style.animation='disappeared linear 2s forwards'
        box.style.background= 'transparent'
        nap.style.animation='disappeared linear 2s forwards'
        setInterval(() => {
         nap.remove()
         thiep.remove()
        }, 3000);
    },7000)
    setTimeout(function(){
    
        box.style.width="auto"
   /*      lixi.innerHTML='bt' */
        lixi.style.animation='sizeup linear 3s forwards'
            setTimeout(() => {
            for (let i = 0; i < text.length; i++){
                setTimeout(() => {
                    lixi.innerHTML += text[i]+" "
                }, i*1000);
            }
            }, 4000);
            document.body.style.animation="changecolor linear 1s forwards"
     
        setInterval(function(){
            heart.innerHTML="❤"
            heart.classList.add("heart")
            document.body.appendChild(heart)
            heart.style.left =(Math.random()*100)+"vw"
        },1500)
},10000)
}

