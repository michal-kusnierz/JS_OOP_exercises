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
const ludzikJS = new Gamer(350,300);

class Move {           
    static RenderLudzik(ludzikJS){
     const x = document.querySelector('.gamer');
     const y = document.querySelector('.gamer');
     console.log(ludzikJS, y);
     
     x.style.left = ludzikJS.x +'px';
     x.style.right = ludzikJS.x +'px';
     y.style.top = ludzikJS.y +'px';
     
    }

    static KeySupport(ludzikJS, event){
     
        if (event.key === 'ArrowLeft'){
            ludzikJS.left();
            Move.RenderLudzik(ludzikJS);
        }else if
        (event.key === 'ArrowRight'){
            ludzikJS.right();
            Move.RenderLudzik(ludzikJS);
        }else if
            (event.key === 'ArrowDown'){
            ludzikJS.down();
            Move.RenderLudzik(ludzikJS);
        }else if
        (event.key === 'ArrowUp'){
        ludzikJS.up();
        Move.RenderLudzik(ludzikJS);
 
        }
        /*
        1. switch
        2. odświeżenie funkcji Render
        */
        }
    }


Move.RenderLudzik(Gamer);

document.addEventListener('keydown', (event) => Move.KeySupport(ludzikJS, event));

