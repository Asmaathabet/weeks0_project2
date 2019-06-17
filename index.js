
var secondsTensLabel = document.getElementById("secondTens");
var secondsOnesLabel = document.getElementById("secondOnes");
var msHundredsLabel = document.getElementById("msHundreds");
var msTensLabel = document.getElementById("msTens");
var digitsDiv = document.querySelector('.digits');

// Add start button 
var startButton = document.createElement("BUTTON");
startButton.innerHTML = 'Start'; 
startButton.style.height = '50px';
startButton.style.width = '50px';
startButton.style.margin = '20px';
digitsDiv.appendChild(startButton); 

// Add Reset button 
var resetButton = document.createElement("BUTTON");
resetButton.innerHTML = 'Reset'; 
resetButton.style.height = '50px';
resetButton.style.width = '50px';
resetButton.style.margin = '20px';
digitsDiv.appendChild(resetButton);

// Add Stop button 
var stopButton = document.createElement("BUTTON");
stopButton.innerHTML = 'Stop'; 
stopButton.style.height = '50px';
stopButton.style.width = '50px';
stopButton.style.margin = '20px';
digitsDiv.appendChild(stopButton);


startButton.addEventListener('click', () => {
    var totalMilliSeconds = 0;
    intervalId = setInterval(setTime, 1000);

function setTime() {
  ++totalMilliSeconds;
  msTensLabel.innerHTML = pad(totalMilliSeconds % 10);
  msHundredsLabel.innerHTML = (totalMilliSeconds % 10 +1 == 1 ? '1' : '0'); 
  secondsOnesLabel.innerHTML = pad(parseInt(totalMilliSeconds / 10)%10);
  secondsTensLabel.innerHTML = 0;
  
  digitsDiv.style.color = (parseInt(totalMilliSeconds / 10)%10  == 0 && totalMilliSeconds % 10 == 0)? 'red':'black'; 
  
}

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

  });


stopButton.addEventListener('click', () => {
    if (intervalId)
      clearInterval(intervalId);
  });
  
resetButton.addEventListener('click', () => {
    totalMilliSeconds = 0;
    document.getElementById("secondTens").innerHTML= '0';
    document.getElementById("secondTens").innerHTML= '0';
    document.getElementById("msHundreds").innerHTML= '0';
    document.getElementById("msTens").innerHTML= '0';
    
 });