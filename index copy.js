import OpenAI from 'openai'

// Only use for Front-End AI development
// const openai = new OpenAI({
//     dangerouslyAllowBrowser: true
// })

// const textEnglish = document.getElementById("userInput");
// const langChoice = document.querySelector('input[name="language":checked').value;
// const outputArea = document.getElementById("langOutput");

function getLanguage(lang) {
  if (lang === 'fr') {
    return "French"
  } else if (lang === 'es') {
    return "Spanish"
  } else if (lang === 'ja') {
    return "Japanese"
  } else return "English";
}

const messages = [
    {
      role: 'system',
      content: ''
    },
    {
      role: 'user',
      content: `Please translate the following text into ${language}. ${textEnglish}`
    }
]

// const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo', // or use 'gpt-4'
//     messages: messages
// })

document.getElementById("translateButton").addEventListener("click", () => {
  // const prompt = document.getElementById("instruction").value
  // generateImage(prompt)
  // const textEnglish = document.getElementById("userInput");
  // const langChoice = document.querySelector('input[name="language":checked').value;
  // const language = getLanguage(langChoice);
  // const content = `Please translate the following text into ${language}. ${textEnglish}`;
  const outputArea = document.getElementById("langOutput");
  outputArea.style.visibility = hidden;

  // translate(content);
  // const outputArea = document.getElementById("langOutput");

})

async function translate(prompt) {
  try {
    // Only use for Front-End AI development
    // const openai = new OpenAI({
    //     dangerouslyAllowBrowser: true
    // })
    // const response = await openai.chat.completions.create({
    //     model: 'gpt-3.5-turbo', // or use 'gpt-4'
    //     messages: messages,
    //     // prompt: prompt
    // })
    // renderReport(response.choices[0].message.content)

    // document.getElementById("langOutput").style.visibility = visible;
    const outputArea = document.getElementById("langOutput");
    outputArea.style.visibility = hidden;
    outputArea.innerText = "This is a test"
    // outputArea.innerText = response.choices[0].message.content;
  } catch (err) {
    console.log('Error:', err)
    outputArea.innerText = 'Unable to access AI. Please refresh and try again'
  }
}

// function renderReport(output) {
//   loadingArea.style.display = 'none'
//   const outputArea = document.querySelector('.output-panel')
//   const report = document.createElement('p')
//   outputArea.appendChild(report)
//   report.textContent = output
//   outputArea.style.display = 'flex'
// }

// console.log(response) // full response
// console.log(response.choices[0].messages.content) // message content of the first response

// const obj = {role: "assistant", content: "The invention of television was the work of many individuals in the late 19th century and early 20th century. However, Scottish engineer John Logie Baird is often associated with creating the first mechanical television. He demonstrated his working device in January 1926 in London. Concurrently in the United States, Philo Farnsworth is credited with inventing the first fully electronic television in the late 1920s."}


// {id: "chatcmpl-8Go69bvmGWV8JHvZ9uxYXSUAimEb8", object: "chat.completion", created: 1699016517, model: "gpt-4-0613", choices: [{index: 0, message: {role: "assistant", content: "The invention of television was the work of many individuals in the late 19th century and early 20th century. However, Scottish engineer John Logie Baird is often associated with creating the first mechanical television. He demonstrated his working device in January 1926 in London. Concurrently in the United States, Philo Farnsworth is credited with inventing the first fully electronic television in the late 1920s."}, finish_reason: "stop"}], usage: {prompt_tokens: 24, completion_tokens: 86, total_tokens: 110}}
