
setInterval(()=>{
    const hour = document.getElementById("hour");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
   let date = new Date();
   let hours = date.getHours();
   let minut = date.getMinutes();
   let second = date.getSeconds();

   let hRotation = 30*hours + minut/2;
   let mRotation = 6*minut
   let sRotation = 6*second;

   hour.style.transform = `rotate(${hRotation}deg)`;
   min.style.transform = `rotate(${mRotation}deg)`;
   sec.style.transform = `rotate(${sRotation}deg)`;
},1000)