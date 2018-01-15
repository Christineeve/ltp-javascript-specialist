"use strict";

window.onload=function() {
  document.getElementById('consoleButton').addEventListener('click', firstResponse);
    
  document.getElementById('browserButton').addEventListener('click', secondResponse);    
    
};

function firstResponse(e){
    console.log('Thanks for clicking the counsole button!')
}

function secondResponse(e){
    document.write('Thanks for clicking the browser button!')
}
