class Gamer{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
// take 1: one direction for start
    left(){     
        this.x -=1
    }
}
const ludzikJS = new Gamer(350,300);

class Move {           
    static RenderLudzik(ludzikJS){
     const x = document.querySelector('.gamer');
     console.log(ludzikJS, x);
     x.style.left = ludzikJS.x +'px';
     x.style.top = ludzikJS.y +'px';
    }

    static KeySupport(ludzikJS, event){
     
        if (event.key === 'ArrowLeft'){
            ludzikJS.left();
            Move.RenderLudzik(ludzikJS);
        /*
        1. switch
        2. odświeżenie funkcji Render
        */
        }
    }
}

Move.RenderLudzik(Gamer);

document.addEventListener('keydown', (event) => Move.KeySupport(ludzikJS, event));

