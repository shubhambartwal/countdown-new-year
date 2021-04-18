 const daysel =document.getElementById('days');
 const hoursel =document.getElementById('hours');
 const minel =document.getElementById('min');
 const secel =document.getElementById('sec');
const newYear="1 jan 2022";
function countdown(){
    const newYearDate= new Date(newYear);
    const currDate=new Date();
   const second=(newYearDate-currDate)/1000;
   const days=Math.floor(second/3600/24);
   const hours=Math.floor(second/3600)%24;
   const minutes=Math.floor(second/60)%60;
   const sec=Math.floor(second)%60;
  // console.log(days,hours,minutes,sec);
   daysel.innerHTML=days;
   hoursel.innerHTML=hours;
   minel.innerHTML=minutes;
   secel.innerHTML=sec;
}
countdown();//initial call
setInterval(countdown,1000);
