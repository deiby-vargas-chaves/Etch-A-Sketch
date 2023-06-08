const container = document.querySelector('.container')
const btnRgb = document.createElement('button')
const btnEraser = document.createElement('button')
const btnReset = document.createElement('buttons')
const section = document.querySelector('.section');
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons');



function createDiv(col , rows) {
    for(let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
createDiv(16,16)

function Eraser() { 
    
    const boxs = container.querySelectorAll('.box')
    btnEraser.textContent = "Eraser"
    btnEraser.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let Eraser = 'rgb(255,255,255)'
            box.style.background = Eraser;
        }))
    })
    buttonsContainer.appendChild(btnEraser).classList.add('btn')
}
Eraser()

function RGBcolor() { 
    
    const boxs = container.querySelectorAll('.box')
    btnRgb.textContent = "RGB"
    btnRgb.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
            box.style.background = rgbColor;
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn')
}
RGBcolor()


function Reset() { 
    
    const boxs = container.querySelectorAll('.box')
    btnReset.textContent = "Reset"
    btnReset.addEventListener('click', () => {
        var white = 'rgb(255, 255, 255)'; // El valor RGB correcto para el color blanco es (255, 255, 255)
        boxs.forEach((box) => {
          box.style.background = white;
        });
      });
    buttonsContainer.appendChild(btnReset).classList.add('btn')
}
Reset()



function reSize() {
   
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let user = prompt('WHAT SIZE YOU WANT YOUR GRID TO BE?')
        if(user === null || user < 1){
            Reset();
            createDiv(16,16);
            grayColor();
            RGBcolor();
            blackColor();
        } else { 
            Reset();
            createDiv(user,user);
            grayColor();
            RGBcolor();
            blackColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()
