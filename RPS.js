var scissor1=document.getElementById("scissor");
var rock1=document.getElementById("rock");
var paper1=document.getElementById("paper");
var reset1=document.getElementById("reset");


var userSelect=document.getElementById("user");     
var computer1=document.getElementById("computer");
var cnt=0;



scissor1.onclick=function(){
  var numbera=Math.random();
  var numberb=Math.floor(3*numbera);
  userSelect.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/scissor.jpg";
                       
 if(numberb==0){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/scissor.jpg";
    document.getElementById("output").innerHTML="The deuce!" ;  
}
                       
  if(numberb==1){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/rock.jpg";
    document.getElementById("output").innerHTML="You lost!" ;     
}
           
  if(numberb==2){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/paper.jpg";
    document.getElementById("output").innerHTML="You won!" ;
    cnt=cnt+1;
    document.getElementById("CNT").innerHTML=cnt;
}               
}


rock1.onclick=function(){
  var numbera=Math.random();
  var numberb=Math.floor(3*numbera);
  userSelect.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/rock.jpg";
                       
   if(numberb==0){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/scissor.jpg";
    document.getElementById("output").innerHTML="You won!" ; 
    cnt=cnt+1;
    document.getElementById("CNT").innerHTML=cnt;
}
                       
  if(numberb==1){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/rock.jpg";
    document.getElementById("output").innerHTML="The deuce!" ;     
}
           
  if(numberb==2){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/paper.jpg";
    document.getElementById("output").innerHTML="You lost!" ;    
}       
}

paper1.onclick=function(){
  var numbera=Math.random();
  var numberb=Math.floor(3*numbera);
  userSelect.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/paper.jpg";
  
  if(numberb==0){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/scissor.jpg";
    document.getElementById("output").innerHTML="You lost!" ;  
}
                       
  if(numberb==1){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/rock.jpg";
    document.getElementById("output").innerHTML="You won!" ; 
    cnt=cnt+1;
    document.getElementById("CNT").innerHTML=cnt;
}
           
  if(numberb==2){
    computer1.src="https://www.cc.puv.fi/~e2102220/JS/pictures/RPS/paper.jpg";
    document.getElementById("output").innerHTML="The deuce!" ;    
} 
}


reset1.onclick=function(){ 
   userSelect.src="";
   computer1.src="" ; 
   document.getElementById("output").innerHTML="" ;  
}
