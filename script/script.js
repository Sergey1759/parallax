const layer_background = document.querySelector('#layer-background');
const layer_1 = document.querySelector('#layer-1');
const layer_2 = document.querySelector('#layer-2');
const layer_3 = document.querySelector('#layer-3');
const layer_4 = document.querySelector('#layer-4');
const layer_5 = document.querySelector('#layer-5');
const layer_6 = document.querySelector('#layer-6');
const layer_7 = document.querySelector('#layer-7');
const layer_8 = document.querySelector('#layer-8');
const layer_9 = document.querySelector('#layer-9');


let ClientWidth  = document.documentElement.clientWidth;
let ClientHeight = document.documentElement.clientHeight;

if (window.innerWidth < 768){
layer_4.style.width  = `${ ClientWidth*2  }px`;
layer_4.style.height = `${ ClientHeight*2 }px`;
    
layer_background.style.width  = `${ ClientWidth  }px`;
layer_background.style.height = `${ ClientHeight }px`;
}

layer_background.style.width  = `${ ClientWidth * 3 }px`;
layer_background.style.height = `${ ClientHeight * 3}px`;

let arr = [[],[],[],[],[],[],[],[],[],[]];
arr[0][0] = layer_1;
arr[0][1] =  parseInt(getComputedStyle(layer_1).left);
arr[0][2] =  parseInt(getComputedStyle(layer_1).top);

arr[1][0] = layer_2;
arr[1][1] =  parseInt(getComputedStyle(layer_2).left);
arr[1][2] =  parseInt(getComputedStyle(layer_2).top);

arr[2][0] = layer_3;
arr[2][1] =  parseInt(getComputedStyle(layer_3).left);
arr[2][2] =  parseInt(getComputedStyle(layer_3).top);

arr[3][0] = layer_4;
arr[3][1] =  parseInt(getComputedStyle(layer_4).left);
arr[3][2] =  parseInt(getComputedStyle(layer_4).top);

arr[4][0] = layer_background;
arr[4][1] =  parseInt(getComputedStyle(layer_background).left);
arr[4][2] =  parseInt(getComputedStyle(layer_background).top);

arr[5][0] = layer_5;
arr[5][1] =  parseInt(getComputedStyle(layer_5).left);
arr[5][2] =  parseInt(getComputedStyle(layer_5).top);

arr[6][0] = layer_6;
arr[6][1] =  parseInt(getComputedStyle(layer_6).left);
arr[6][2] =  parseInt(getComputedStyle(layer_6).top);

arr[7][0] = layer_7;
arr[7][1] =  parseInt(getComputedStyle(layer_7).left);
arr[7][2] =  parseInt(getComputedStyle(layer_7).top);

arr[8][0] = layer_8;
arr[8][1] =  parseInt(getComputedStyle(layer_8).left);
arr[8][2] =  parseInt(getComputedStyle(layer_8).top);

arr[9][0] = layer_9;
arr[9][1] =  parseInt(getComputedStyle(layer_9).left);
arr[9][2] =  parseInt(getComputedStyle(layer_9).top);

function axisX(arr,px,position){
    let ratePosition = ClientWidth/100/2;
    if(position>(ClientWidth/2) && position != 0){
        position = position - ClientWidth/2;
        let rate = ((position * 100)/(ClientWidth/2));
        arr[0].style.left = (arr[1]-(px*(rate/100)))+'px';
    } else if(position<(ClientWidth/2) && position != 0){
        let rate = 100 - ((position * 100)/(ClientWidth/2));
        arr[0].style.left = (arr[1]+(px*(rate/100))) + 'px';
    } 
}

function axisY(arr,px,position){
    let ratePosition = ClientHeight/100/2;
    if(position>(ClientHeight/2) && position != 0){
        position = position - ClientHeight/2;
        let rate = ((position * 100)/(ClientHeight/2));
        arr[0].style.top = (arr[2]-(px*(rate/100)))+'px';
    } else if(position<(ClientHeight/2) && position != 0){
        let rate = 100 - ((position * 100)/(ClientHeight/2));
        arr[0].style.top = (arr[2]+(px*(rate/100))) + 'px';
    } 
}

function AxisX(arr,px,position){   
    if(position > 0 && position < 60){
        let rate = ((position * 100)/60);
        arr[0].style.left = (arr[1]-(px*(rate/100)))+'px';
    } else if(position < 0 && position > -60){
        position *= -1;
        let rate =((position * 100)/60);
        arr[0].style.left = (arr[1]+(px*(rate/100))) + 'px';
    } 
}
function AxisY(arr,px,position){   
    if(position > 0 && position < 60){
        let rate = ((position * 100)/60);
        arr[0].style.top = (arr[2]-(px*(rate/100)))+'px';
    } else if(position < 0 && position > -60){
        position *= -1;
        let rate =((position * 100)/60);
        arr[0].style.top = (arr[2]+(px*(rate/100))) + 'px';
    } 
}


function mouse(event){
     axisX(arr[4],700,event.clientX);
     axisX(arr[0],500,event.clientX);
     axisX(arr[1],500,event.clientX);
     axisX(arr[3],100,event.clientX);
     axisX(arr[2],500,event.clientX);
     axisX(arr[5],ClientWidth,event.clientX);
     axisX(arr[6],200,event.clientX);
     axisX(arr[7],500,event.clientX);
     axisX(arr[8],500,event.clientX);
     axisX(arr[9],500,event.clientX);
     
     axisY(arr[4],500,event.clientY);
     axisY(arr[0],300,event.clientY);
     axisY(arr[1],500,event.clientY);
     axisY(arr[3],100,event.clientY);
     axisY(arr[2],500,event.clientY);
     axisY(arr[5],ClientHeight,event.clientY);
     axisY(arr[6],200,event.clientY);
     axisY(arr[7],500,event.clientY);
     axisY(arr[8],500,event.clientY);
     axisY(arr[9],500,event.clientY);
}

if (window.innerWidth < 768){
    window.addEventListener('deviceorientation', function(event) {
        AxisX(arr[0],35,event.gamma);
        AxisX(arr[1],15,event.gamma);
        AxisX(arr[4],100,event.gamma);
        AxisX(arr[3],100,event.gamma);
        AxisX(arr[2],100,event.beta);
    
        AxisY(arr[0],35,event.beta);
        AxisY(arr[1],15,event.beta);
        //AxisY(arr[2],45,event.beta);
        AxisY(arr[3],100,event.beta);
        AxisY(arr[4],100,event.beta);
    });
}




   
