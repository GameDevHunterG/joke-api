(async () => {
const jokeElement = document.querySelector("#joke")
const punchlineElement = document.querySelector("#punchline")

const getJoke = async () => {
    const response = await fetch("/api/v1/random-joke")
    const joke = await response.json()
    jokeElement.textContent = joke.joke
    punchlineElement.textContent = joke.punchline
}

getJoke()
})()