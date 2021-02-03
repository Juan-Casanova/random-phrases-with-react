import React from 'react';

import Data from '../quotes.json';

var numberRandom = 0;
var textPhrase = "";
var autorPhrase = "";

function generateRandom () {
    numberRandom = Math.floor(Math.random() * 102);
}

function changePhrase () {
    generateRandom();
    textPhrase = Data.quotes[numberRandom].quote;
    autorPhrase = Data.quotes[numberRandom].author;
}

export default function Phrase() {

   window.onload = changePhrase();
    return (
        <div>
            <p id="textPhrase"> {textPhrase} </p>
            <p id="textPhrase"> {autorPhrase} </p>  
        </div>               
    );
}