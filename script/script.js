const layer_1 = document.querySelector('#layer-1');
const layer_2 = document.querySelector('#layer-2');
const layer_3 = document.querySelector('#layer-3');
const layer_4 = document.querySelector('#layer-4');
const layer_5 = document.querySelector('#layer-5');

let arr = [[],[],[],[]];
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


let ClientWidth  = document.documentElement.clientWidth;
let ClientHeight = document.documentElement.clientHeight;

layer_4.style.width  = `${ ClientWidth  }px`;
layer_4.style.height = `${ ClientHeight }px`;

layer_5.style.width  = `${ ClientWidth  }px`;
layer_5.style.height = `${ ClientHeight }px`;

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
     axisX(arr[0],10,event.clientX);
     axisX(arr[1],30,event.clientX);
     axisX(arr[2],50,event.clientX);
     axisX(arr[3],85,event.clientX);
    
     axisY(arr[0],10,event.clientY);
     axisY(arr[1],30,event.clientY);
     axisY(arr[2],50,event.clientY);
     axisY(arr[3],85,event.clientY);
}

window.addEventListener('deviceorientation', function(event) {
    AxisX(arr[0],25,event.gamma);
    AxisX(arr[1],5,event.gamma);
    AxisX(arr[2],65,event.gamma);
    
    AxisY(arr[0],25,event.beta);
    AxisY(arr[1],5,event.beta);
    AxisY(arr[2],65,event.beta);
});
   
