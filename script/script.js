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

const ClientWidth  = document.documentElement.clientWidth;
const ClientHeight = document.documentElement.clientHeight;

const layer_background = new Layer('#layer-background');;
const layer_1          = new Layer('#layer-1');
const layer_2          = new Layer('#layer-2');
const layer_3          = new Layer('#layer-3');
const layer_4          = new Layer('#layer-4');
const layer_5          = new Layer('#layer-5');
const layer_6          = new Layer('#layer-6');
const layer_7          = new Layer('#layer-7');
const layer_8          = new Layer('#layer-8');
const layer_9          = new Layer('#layer-9');

if (window.innerWidth < 768){         
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
    
    Axis(layer_3,270,event.gamma,'X',0,60);
    Axis(layer_3,170,event.beta,'Y',0,60);
    
    Axis(layer_4,300,event.gamma,'X',0,60);
    Axis(layer_4,50,event.beta,'Y',0,60);
    
    Axis(layer_5,10,event.gamma,'X',0,60);
    Axis(layer_5,10,event.beta,'Y',0,60);
    
    Axis(layer_6,180,event.gamma,'X',0,60);
    Axis(layer_6,180,event.beta,'Y',0,60);
    
    });
}
if(window.innerWidth > 768){
layer_background.elem.style.width  = `${ ClientWidth * 3 }px`;
layer_background.elem.style.height = `${ ClientHeight * 3}px`;


function axisX(obj,px,position){
    let ratePosition = ClientWidth/100/2;
    if(position>(ClientWidth/2) && position != 0){
        position = position - ClientWidth/2;
        let rate = ((position * 100)/(ClientWidth/2));
        obj.setLeft(obj.left-(px*(rate/100)));
    } else if(position<(ClientWidth/2) && position != 0){
        let rate = 100 - ((position * 100)/(ClientWidth/2));
        obj.setLeft(obj.left+(px*(rate/100)));
    } 
}
function axisY(obj,px,position){
    let ratePosition = ClientHeight/100/2;
    if(position>(ClientHeight/2) && position != 0){
        position = position - ClientHeight/2;
        let rate = ((position * 100)/(ClientHeight/2));
        obj.setTop(obj.top-(px*(rate/100)));
    } else if(position<(ClientHeight/2) && position != 0){
        let rate = 100 - ((position * 100)/(ClientHeight/2));
        obj.setTop(obj.top+(px*(rate/100)));
    } 
}

function mouse(event){
     axisX(layer_background,700,event.clientX);
     axisX(layer_1,500,event.clientX); 
     axisX(layer_2,500,event.clientX); 
     axisX(layer_3,500,event.clientX); 
     axisX(layer_4,100,event.clientX); 
     axisX(layer_5,ClientWidth,event.clientX); 
     axisX(layer_6,200,event.clientX); 
     axisX(layer_7,500,event.clientX); 
     axisX(layer_8,500,event.clientX); 
     axisX(layer_9,500,event.clientX); 
     
     axisY(layer_background,500,event.clientY);
     axisY(layer_1,300,event.clientY);
     axisY(layer_2,500,event.clientY);
     axisY(layer_3,500,event.clientY);
     axisY(layer_4,100,event.clientY);
     axisY(layer_5,ClientHeight,event.clientY);
     axisY(layer_6,200,event.clientY);
     axisY(layer_7,500,event.clientY);
     axisY(layer_8,500,event.clientY);
     axisY(layer_9,500,event.clientY);
}
}





   
