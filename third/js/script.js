const container=document.querySelector(".container");


setInterval(function(){
  let currentDate=new Date();
  let hour=currentDate.getHours();
  let minute=currentDate.getMinutes();
  let seconds=currentDate.getSeconds();
  if(seconds<10){
    seconds="0"+seconds;
  }
  if(hour<10){
    hour="0"+hour;
  }
  if(minute<10){
    minute="0"+minute;
  }
  
  let time=hour+" : "+minute+" : "+seconds;
  container.innerHTML=time
},1000)