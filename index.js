class Gamer{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
// take 2: move to second direction 
    left(){     
        this.x -=1
    }
    right(){     
        this.x +=1
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
    }

    static KeySupport(ludzikJS, event){
     
        if (event.key === 'ArrowLeft'){
            ludzikJS.left();
            Move.RenderLudzik(ludzikJS);
        }else if
        (event.key === 'ArrowRight'){
            ludzikJS.right();
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

