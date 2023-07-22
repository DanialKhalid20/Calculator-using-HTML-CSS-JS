bracket1=document.querySelector('#bracket1')
bracket2=document.querySelector('#bracket2')


seven=document.querySelector('#seven')
eight=document.querySelector('#eight')
nine=document.querySelector('#nine')
mode=document.querySelector('#mode')
four=document.querySelector('#four')
five=document.querySelector('#five')
six=document.querySelector('#six')
mul=document.querySelector('#mul')
divide=document.querySelector('#divide')
one=document.querySelector('#one')
two=document.querySelector('#two')
three=document.querySelector('#three')
add=document.querySelector('#add')
sub=document.querySelector('#sub')
dot=document.querySelector('#dot')
zero=document.querySelector('#zero')


output=document.querySelector('.output')
id=document.querySelector('#enterb')
ans=document.querySelector('#ans')
del=document.querySelector('#del')
input=document.querySelector('.input')
clear=document.querySelector('.firstrow #clear')
enterbutton=document.querySelector('#enterb')
underroot=document.querySelector('#underroot');
plusminus=document.querySelector('#plusminus')
// addEventListener('click',function(e){
// input.innerText=bracket1.innerHTML;



// })

// x=document.querySelectorall('.firstrow button');
// for(i=0; i<x.length; i++){
// if(x[i].click()){
// input.innerText=x[i].innerHTML;
// }

    
// }

var string='',Ans='',x='';
var button_frstr =  document.querySelectorAll('.firstrow #bracket1,#bracket2')

button_frstr.forEach(function(button) {
    button.addEventListener('click', function() {
      string=string+button.innerHTML;
      input.innerHTML=string;
     
    });
  });
  



var buttons = document.querySelectorAll('.secondrow #sb');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if(button.innerHTML=='√'){
        string=string+'*';
    }
    else{
    string=string+button.innerHTML;
    }
      input.innerText=string;
     
  });
});

var buttons_tr = document.querySelectorAll('.tr button');

buttons_tr.forEach(function(button) {
  button.addEventListener('click', function() {
    if(button.innerHTML=='x'){
        string=string+'*';
    }
    else if(button.innerHTML=='÷'){
      string=string+'/';
      
    }
    else{
    string=string+button.innerHTML;
    }
      input.innerText=string;
      
  });
});

var buttons_fr = document.querySelectorAll('.fr button');

buttons_fr.forEach(function(button) {
  button.addEventListener('click', function() {
    string=string+button.innerHTML;
      input.innerText=string;

  });
});

var button_fifthr =  document.querySelectorAll('.fifthr #dot,#zero')

button_fifthr.forEach(function(button) {
    button.addEventListener('click', function() {
        string=string+button.innerHTML;
        input.innerText=string;
       
       

    });
  });

  
  
  enterbutton.addEventListener('click',function(){
    
    string=eval(string);
    output.innerText=string;
     Ans=string;
  })

  clear.addEventListener('click',function(){
     string ='';
    input.innerText=string;
    output.innerText=string;
    
  })

  del.addEventListener('click',function(){
    string=string.slice(0,-1)
    input.innerText=string;

  })

  ans.addEventListener('click',function(){
    input.innerText=Ans;
    string=Ans;

  })


  plusminus.addEventListener('click',function(){
    if(string[0]==='-' ){
      
      string=string.substring(1)
  }
   else if(string[0]!=='-' ){
    
        string='-' + string;
       
    }
  
    input.innerText=string;
  })
  



