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
    
// take 2: move to second direction 
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
     const x = document.querySelector('.gamer');
     const y = document.querySelector('.gamer');
     console.log(BirdJS, y);
     
     x.style.left = BirdJS.x +'px';
     x.style.right = BirdJS.x +'px';
     y.style.top = BirdJS.y +'px';
     
    }

    static KeySupport(BirdJS, event){
     
        if (event.key === 'ArrowLeft'){
            BirdJS.left();
            Move.RenderBird(BirdJS);
        }else if
        (event.key === 'ArrowRight'){
            BirdJS.right();
            Move.RenderBird(BirdJS);
        }else if
            (event.key === 'ArrowDown'){
            BirdJS.down();
            Move.RenderBird(BirdJS);
        }else if
        (event.key === 'ArrowUp'){
        BirdJS.up();
        Move.RenderBird(BirdJS);
 
        }
        /*
        1. switch
        2. odświeżenie funkcji Render
        */
        }
    }


Move.RenderBird(Gamer);

document.addEventListener('keydown', (event) => Move.KeySupport(BirdJS, event));

