const countDown = () => {
   const futureDate = new Date("April 24, 2022 00:00:00").getTime();
   const currentDate = new Date().getTime();
   const timeDelta = futureDate - currentDate;

   const second = 1000;
   const minute = second * 60;
   const hour   = minute * 60;
   const day    = hour * 24;

   const returnedDay = Math.floor(timeDelta / day);
};

countDown();