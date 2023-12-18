// import OpenAI from 'openai'

// Only use for Front-End AI development
// const openai = new OpenAI({
//     dangerouslyAllowBrowser: true
// })

// const textEnglish = document.getElementById("userInput");
// const langChoice = document.querySelector('input[name="language":checked').value;
// const outputArea = document.getElementById("langOutput");

function getLanguage() {
  // let lang = "English";
  const langChoices = document.getElementsByName('language');
  for (i=0; i < langChoices.length; i++) {
    if (langChoices[i].checked) {
      return langChoices[i].value;
    }
  }
}

// const messages = [
//     {
//       role: 'system',
//       content: ''
//     },
//     {
//       role: 'user',
//       content: `Please translate the following text into ${language}. ${textEnglish}`
//     }
// ]

const inputArea = document.getElementById("userInput");
const outputArea = document.getElementById("langOutput");

const selectLangArea = document.getElementById('language-section1');

const translateButton = document.getElementById("translateButton");
const startOverButton = document.getElementById("startOverButton");

const originalTextHeader = document.getElementById("originalTextHeader");
const selectLangHeader = document.getElementById("selectLangHeader");
const translatedTextHeader = document.getElementById("translatedTextHeader");

const pointer = '<i class="fas fa-hand-point-down"></i>';
// const pointer = '<i class="fas fa-circle-arrow-down"></i>';

outputArea.hidden = true;
startOverButton.hidden = true;
translatedTextHeader.hidden = true;


translateButton.addEventListener("click", () => {
  // Input
  originalTextHeader.innerHTML = "English text " + pointer;
  inputArea.innerText = "English";
  
  // Language
  const language = getLanguage();
  hideElements(selectLangArea);

  // Output
  outputArea.hidden = false;
  outputArea.innerText = language;
  translatedTextHeader.innerHTML = `Translated to ${language} ${pointer}`;
  translatedTextHeader.hidden = false;

  // Buttons
  translateButton.hidden = true;
  startOverButton.hidden = false;
})

startOverButton.addEventListener("click", () => {

    // Input
    originalTextHeader.innerHTML = "Text to translate " + pointer;
    inputArea.innerText = "";
    
    // Language
    resetSelection(selectLangArea);
    unhideElements(selectLangArea);
  
    // Output
    outputArea.hidden = true;
    outputArea.innerText = "";
    translatedTextHeader.hidden = true;
    translatedTextHeader.innerHTML = "";
    
    // Buttons
    translateButton.hidden = false;
    startOverButton.hidden = true;
})

function hideElements(id) {
  let elements = id.children;
  for (i=0; i<elements.length; i++) {
    elements[i].hidden = true;
  }
}

function unhideElements(id) {
  let elements = id.children;
  for (i=0; i<elements.length; i++) {
    elements[i].hidden = false;
  }
}

function resetSelection(id) {
  document.getElementsByName("language")[0].checked = true;
}