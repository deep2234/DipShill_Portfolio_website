const counter = document.querySelector("#counter-number");

async function updateCounter() {
    let response = await fetch("");
    let data = await response.json();
    counter.innerHTML = `views: ${data}`;
}

updateCounter();



module.exports = {
    darkMode: 'class', // Make sure this is set
    // ...other config
};
  