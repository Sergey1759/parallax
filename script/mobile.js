if (window.innerWidth < 768){     
function Layer (id){
    this.elem = document.querySelector(id);
    this.top  = parseInt(getComputedStyle(this.elem).top);
    this.left = parseInt(getComputedStyle(this.elem).left);
    this.setLeft = function setLeft(left){
        this.elem.style.left = left+'px';
    }
    this.setTop = function setTop(top){
        this.elem.style.top = top+'px';
    }
}
    
const layer_background = new Layer('#layer-background');
const layer_1          = new Layer('#layer-1');
const layer_2          = new Layer('#layer-2');
const layer_3          = new Layer('#layer-3');
const layer_4          = new Layer('#layer-4');
const layer_5          = new Layer('#layer-5');
const layer_6          = new Layer('#layer-6');
    
const ClientWidth  = document.documentElement.clientWidth;
const ClientHeight = document.documentElement.clientHeight;
    
layer_background.elem.style.width  = `${ ClientWidth  }px`;
layer_background.elem.style.height = `${ ClientHeight }px`;


function Axis(obj,px,position,axis,BeginMovement,EndMovement){   
    let rate = ((position * 100)/EndMovement);
    console.log(rate);
    let start = (axis == 'X') ? obj.left : obj.top;
    let rate_position = px*(rate/100);
    if(position > BeginMovement && position < EndMovement){
        if (axis == 'X') { obj.setLeft(start - rate_position) } else {obj.setTop(start - rate_position)}
    } else if(position < BeginMovement && position > -EndMovement){
        rate_position *= -1;
        if (axis == 'X') { obj.setLeft(start + rate_position) } else {obj.setTop(start +  rate_position)}
    } 
}
    
window.addEventListener('deviceorientation', function(event) {
    Axis(layer_1,60,event.gamma,'X',0,60);
    Axis(layer_1,40,event.beta,'Y',0,60);
    
    Axis(layer_2,20,event.gamma,'X',0,60);
    Axis(layer_2,10,event.beta,'Y',0,60);
    
    Axis(layer_3,470,event.gamma,'X',0,60);
    Axis(layer_3,270,event.beta,'Y',0,60);
    
    Axis(layer_4,300,event.gamma,'X',0,60);
    Axis(layer_4,50,event.beta,'Y',0,60);
    
    Axis(layer_5,10,event.gamma,'X',0,60);
    Axis(layer_5,10,event.beta,'Y',0,60);
    
    Axis(layer_6,180,event.gamma,'X',0,60);
    Axis(layer_6,180,event.beta,'Y',0,60);
    
    });
}