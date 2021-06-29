const countDown = () => {
   const futureDate = new Date("April 24, 2022 00:00:00").getTime();
   const currentDate = new Date().getTime();
   const timeDelta = futureDate - currentDate;

};

countDown();