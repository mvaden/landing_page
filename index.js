const countDown = () => {
   const futureDate = new Date("April 24, 2022 00:00:00").getTime();
   const currentDate = new Date().getTime();
   const timeDelta = futureDate - currentDate;

   const second = 1000;
   const minute = second * 60;
   const hour   = minute * 60;
   const day    = hour * 24;

   const returnedDay = Math.floor(timeDelta / day);
   const returnedHour = Math.floor((timeDelta % day) / hour);
   const returnedMinute = Math.floor((timeDelta % hour) / minute);
   const returnedSecond = Math.floor((timeDelta % minute) / second);


   document.getElementById("days").innerText = returnedDay; 
   document.getElementById("hours").innerText = returnedHour;
   document.getElementById("minutes").innerText = returnedMinute;
   document.getElementById("seconds").innerText = returnedSecond;
};

setInterval(() => countDown(), 1000);