const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const apiKey = urlParams.get('apiKey');

const apiUrl = `https://log-api.newrelic.com/log/v1?Api-Key=${apiKey}`;

const textElem = document.getElementById('textInput') || document.getElementById('orderPreference');

const messageObj = {
  event: 'NRUG',
  src: 'webForm',
  message: ''
}

function submit() {

  let orderDetails = textElem.value;
  if (!orderDetails) {
    return;
  }

  messageObj.message = `NEW ORDER SUBMITTED. ${orderDetails}`;
  
  

  sendData(data);

}

function sendText() {

  const freeText = textElem.value;

  if (!freeText) {
    return;
  }
  
  //console.log(firstName + '\n' + pizza + '\n' + drink)
  
  messageObj.message = freeText;

  sendData(data);

}

function sendData(data) {

  const data = JSON.stringify([ messageObj ]);

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
    
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
    
  xhr.open("POST", apiUrl);  
    
  xhr.send(data);

  // var getValue= document.getElementById("textInput");
  // if (getValue.value !="") {
  //     getValue.value = "";
  // }

  }

function enableButton(button) {
  button.disabled = false;
  button.classList.remove('is-light');
}
  
function tempDisableButton(button) {
  console.log(button.classList);
  //button.disabled = true;
  button.classList.add('is-light');
  setTimeout(enableButton, 750, button);
}

function nextPage() {

  location.href = `./food.html?apiKey=${apiKey}`;

}

function prevPage() {
  location.href = `./?apiKey=${apiKey}`;
}