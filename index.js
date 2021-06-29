const countDown = () => {
   /**
    * @description
    * Create date objects for future date and current date. Then find the delta between them.
    */
   const futureDate = new Date("April 24, 2022 00:00:00").getTime();
   const currentDate = new Date().getTime();
   const timeDelta = futureDate - currentDate;

   /**
    * @description
    * Create units of time by milliseconds.
    */
   const second = 1000;
   const minute = second * 60;
   const hour   = minute * 60;
   const day    = hour * 24;

   /**
    * @description
    * Then convert each unit of time from Unix epoch (milliseconds) to ISO 8601 specification.
    */
   const returnedDay = Math.floor(timeDelta / day);
   const returnedHour = Math.floor((timeDelta % day) / hour);
   const returnedMinute = Math.floor((timeDelta % hour) / minute);
   const returnedSecond = Math.floor((timeDelta % minute) / second);

   /**
    * @description
    * And append each unit to their respective DOM elements as text.
    */
   document.getElementById("days").innerText = returnedDay; 
   document.getElementById("hours").innerText = returnedHour;
   document.getElementById("minutes").innerText = returnedMinute;
   document.getElementById("seconds").innerText = returnedSecond;
};

/**
 * @function
 * Finally, run countdown() every 1 second indefinitely.
 */
setInterval(() => countDown(), 1000);