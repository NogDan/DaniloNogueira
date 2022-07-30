var btn = document.querySelector('#btn');
var sobre = document.querySelector('.me');
var btnF = document.querySelector('#btn-formacao');
var formacao = document.querySelector('#formacao');


btn.addEventListener('click', function(){

    if(sobre.style.display === 'none'){
      sobre.style.display ='block' 
    }else{
        sobre.style.display ='none'
    }
  
    
  }); 


  btnF.addEventListener('click', function(){

    if(formacao.style.display === 'none'){
      formacao.style.display ='block' 
    }else{
        formacao.style.display ='none'
    }
  
    
  }); 