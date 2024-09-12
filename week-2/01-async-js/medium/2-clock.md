Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


```javascript
let counter = 0


setInterval(()=>{
  let time = new Date()
  console.log( (time.getHours() >12 ? time.getHours() - 12 : time.getHours()) + " : " + time.getMinutes() + " : " + time.getSeconds() + " " + (time.getHours() >= 12 ? "PM" : "AM"))
}, 1000)