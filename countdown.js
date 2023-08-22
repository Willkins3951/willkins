function displayTime(){

    var dateTime= new Date(); 
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var session=document.getElementById("session");
    
Seconds= sec <=9? "0"+ sec:sec;



 if(hrs>=12){
    session.innerHTML="PM"
 }else{
 session="AM"}

    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec; 

}
setInterval(displayTime,10);





























