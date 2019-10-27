class Gamer{
    constructor(x,y){
        this._x=x;
        this._y=y;
    }
    get x(){
      return this._x;
    }
    get y(){
      return this._y;
    }
    
    left(){     
        this._x -=10
    }
    right(){     
        this._x +=10
        }
    up(){
        this._y -=10
    }
    down(){
        this._y +=10
    }
}
const BirdJS = new Gamer(350,300);

class Move {           
    static RenderBird(BirdJS){
    const BirdDom = document.querySelector('.gamer');
    //  const y = document.querySelector('.gamer');
    //  console.log(BirdJS);
     BirdDom.style.left = BirdJS.x +'px';
     BirdDom.style.right = BirdJS.x +'px';
     BirdDom.style.top = BirdJS.y +'px';
    }

    static KeySupport(BirdJS, event){
      switch(event.code){
        case 'ArrowLeft':
          BirdJS.left();
          Move.RenderBird(BirdJS);
          break;
        case 'ArrowRight':
          BirdJS.right();
          Move.RenderBird(BirdJS);
          break;
        case 'ArrowUp':
          BirdJS.up();
          Move.RenderBird(BirdJS);
          break;
        case 'ArrowDown':
          BirdJS.down();
          Move.RenderBird(BirdJS);
          break;
        default:
          Move.RenderBird(BirdJS);
      }
    }         
     
    static OutOfCage(BirdJS){
      if (BirdJS.x === 0 || BirdJS.x === 680 || BirdJS.y === 0 || BirdJS.y === 580){   
          document.querySelector('.board').style.background = 'skyblue';
          document.querySelector('.board').style.border = 'none';
          document.querySelector('.gamer').style.width = '50px';
          setTimeout(eyeBlink, 150); 
          function eyeBlink(){
            alert('Bird has escaped from the cage');
            location.reload();}
        // }else{
        //   Move.RenderBird(BirdJS);
        }
    }
  }

Move.RenderBird(BirdJS);
document.addEventListener('keydown', (event) => Move.KeySupport(BirdJS, event));
document.addEventListener('keydown', (event) => Move.OutOfCage(BirdJS, event));

