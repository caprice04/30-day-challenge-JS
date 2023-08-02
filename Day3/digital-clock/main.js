 const Hour= document.querySelector('.hours')
 const Minute= document.querySelector('.minutes')
 const Second= document.querySelector('.seconds')
 const Months= document.querySelector('.months')
 const Days= document.querySelector('.days')
 const Year= document.querySelector('.year')

 function setDate() {

    
 }


     const now = new Date()
     const MM = now.getMonth()
     const DD = now.getDate()
     const YY = now.getFullYear()

     const sec = now.getSeconds()
     const min = now.getMinutes()
     const hrs = now.getHours()

     const monthName = ['January', 'February', 'March', 'April',
     'May', 'June', 'July', 'August', 'September',
     'October', 'November', 'December'];

     //time is less than 10 then one zero will be added and then that time will be seen in the webpage

    if(hrs< 10){
        Hour.innerHTML = '0' + hrs
    } else{
        Hour.innerHTML = hrs
    }

    if(sec< 10){
        Second.innerHTML = '0' +sec
    } else{
        Second.innerHTML = sec
    }

    if(min<10){
        Minute.innerHTML = '0' + min
    } else{
        Minute.innerHTML = min
    }

    Months.innerHTML = monthName[MM]
    Days.innerHTML = DD
    Year.innerHTML = YY

    setInterval(setDate,1000);
    
   
    setInterval(() => {
    window.location.reload();
    
    },1000)

 
