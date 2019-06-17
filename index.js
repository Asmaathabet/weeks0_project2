
var secondsTensLabel = document.getElementById("secondTens");
var secondsOnesLabel = document.getElementById("secondOnes");
var msHundredsLabel = document.getElementById("msHundreds");
var msTensLabel = document.getElementById("msTens");
var digitsDiv = document.querySelector('.digits');

var totalMilliSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalMilliSeconds;
  msTensLabel.innerHTML = pad(totalMilliSeconds % 10);
  msHundredsLabel.innerHTML = (totalMilliSeconds % 10 +1 == 1 ? '1' : '0'); 
  secondsOnesLabel.innerHTML = pad(parseInt(totalMilliSeconds / 10)%10);
  secondsTensLabel.innerHTML = 0;
  
  digitsDiv.style.color = (parseInt(totalMilliSeconds / 10)%10  == 0)? 'red':'black'; 
  
}
console.log(secondsOnesLabel);
console.log(secondsTensLabel);

function pad(val){
    var valString = val + "";
    if(valString.length < 1)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
} 