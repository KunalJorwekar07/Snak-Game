let game = document.querySelector('.game')
let text = document.querySelector('.score')
let xfood;
let yfood;
let xSnake = 13;
let ySnake = 12;
let Xvelo = 0 ;
let Yvelo = 0 ;
let SnakeBody = [] 
let score = 0;


function RandomFood() {
     xfood = Math.floor(Math.random()*25 + 1)
     yfood = Math.floor(Math.random()*25 + 1)
     for (let i = 0; i < SnakeBody.length; i++) {
        if (SnakeBody[i][1]== yfood && SnakeBody[i][0]==xfood) {
            RandomFood()
        }
     }    

}

function gameEleGenrate() {
    
    let update = `<div class="food" style="grid-area: ${yfood}/${xfood};"></div>`
    
    if (xfood == xSnake && yfood == ySnake) {
        SnakeBody.push([xfood,yfood])
        RandomFood()
        score += 10;

    }

     SnakeBody.pop();
     xSnake+=Xvelo;
     ySnake+=Yvelo;

     SnakeBody.unshift([ySnake,xSnake])
    

     if (xSnake == 0 || xSnake==26 || ySnake == 0 || ySnake == 26) {
        GameOver()
     }
     for (let i = 1; i < SnakeBody.length; i++) {
      if (SnakeBody[0][0] == SnakeBody[i][0] && SnakeBody[0][1] == SnakeBody[i][1]) {
          GameOver()
      }
        
     }

     for (let i = 0; i < SnakeBody.length; i++) {
        update += `<div class="snake" style="grid-area: ${SnakeBody[i][0]}/${SnakeBody[i][1]};"></div>`
     }

    
    game.innerHTML = update;
}   

RandomFood()
setInterval(gameEleGenrate,150)

document.addEventListener('keydown',(e)=>{
    text.innerHTML = `Score = ${score}`
    if (e.key == 'ArrowUp' && Yvelo!=1) {
        Yvelo = -1;
        Xvelo = 0;
        
    }else if (e.key == 'ArrowDown' && Yvelo!=-1) {
        Yvelo = 1;
        Xvelo = 0;
        
    }else if (e.key == 'ArrowRight' && Xvelo!=-1) {
        Yvelo = 0;
        Xvelo = 1;
        
    }else if (e.key == 'ArrowLeft'&& Xvelo!=1) {
        Yvelo = 0;
        Xvelo = -1;
    }
})

function GameOver() {
     xSnake = 13;
     ySnake = 12;
     Xvelo = 0 ;
     Yvelo = 0 ;
     RandomFood()
     SnakeBody = [];
     score = 0
     text.innerHTML = '<div class="score1">Hag Diya !!!!</div>'
     
}