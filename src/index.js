function showPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
      strings: response.data.answer,
      cursor: "",
      autoStart: true,
      delay: 35,
    });
}


function generatePoem(event) {
    event.preventDefault();

    let userInput = document.querySelector("#user-input");

    new Typewriter("#poem", {
      strings: `Your poem is being generated now... please wait`,
      cursor: "",
      autoStart: true,
      delay: 30,
    });

    let apiKey = "dfc9t54e5b10fea0dcae14f3826ob4e6";
    let prompt = `Your instructions are to write a short, cute, and creative Haiki style poem with a title based off of the topic "${userInput.value}" submitted that is fitting for all audiences. The poem must be provided in HTML format, example: <p> <h2> Poem Title </h2> This poem </br> has multiple lines </br> inserted here</p>. Do not allow any html characters to appear in the final text and sign the poem with "~Written by SheCodes AI" inside a <strong> element on a new line after the poem`;
    let context =
      "You are a very creative person who loves to write poems in a haiki structure. Please write a short poem using the instructions and topic provided";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    
    axios.get(apiUrl).then(showPoem);


}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);