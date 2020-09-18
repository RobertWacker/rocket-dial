import './assets/styles/common.sass';

const boardElement = document.getElementById('board');
const modalElement = document.getElementById('Modal');
const addPinElement = document.getElementById('AddPin');
const currencyElement = document.getElementById('currency');
const btnNewPinElement = document.getElementById('btnNewPin');


function showModal() {
    modalElement.style.display = 'block';
    modalElement.addEventListener('click', hideModal);
}

function hideModal() {
    modalElement.style.display = 'none';
}

function getCurrency() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR', true);
    xhr.send()
    xhr.onload = function() {
        currencyElement.innerText = xhr.response;
    };
}

function createNewPin() {
    chrome.storage.local.set({'key': 'value'}, function() {
        console.log('Value is set to ' + value);
    });
}


addPinElement.addEventListener('click', showModal);
btnNewPinElement.addEventListener('click', createNewPin);
getCurrency();