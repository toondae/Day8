const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", addContent);

function addContent(){
    console.log("It's work")
    const text = document.getElementById("textInput").value
    const result = document.getElementById("result")
    result.innerHTML += `<h1>${text}</h1>`
}
    fetch('https://jsonplaceholder.typicode.com/posts/1')

    async function fetchData() {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        console.log(data);
        const json = await data.json()
        console.log(json);
    }
