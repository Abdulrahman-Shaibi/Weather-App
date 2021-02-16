
// Celsius / Fahrenheit click Event
const temp = document.getElementById('current');
const tempSpan = document.getElementById('tempSpan');

//Celsius to Fahenheit formula 
// const celsius = (temp - 32) * (5 / 9);


temp.addEventListener('click', ()=>{
  if(tempSpan.textContent === "F"){
    tempSpan.textContent = "C"
    
  }else{
    tempSpan.textContent = "F";
    
  }
});