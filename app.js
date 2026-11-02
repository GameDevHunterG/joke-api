const express = require('express');
const app = express();
const port = 3000

const jokes = [
    { id: 1, joke: "Why did two Java methods get a divorce?", punchline: "Because they had constant arguements." },
    { id: 2, joke: "Why did the edge server go bankrupt?", punchline: "Because it ran out of cache." },
    { id: 3, joke: "How many developers does it take to screw in a lightbulb?", punchline: "None. It's a hardware problem." },
    { id: 4, joke: "Why did the private classes break up?", punchline: "Because they never saw each other." },
    { id: 5, joke: "Why did the Java developer teach his young kids about single quotes?", punchline: "Because they build charactrer." },
    { id: 6, joke: "Why do most Java programmers wear glasses?", punchline: "Because they don't see sharp." },
    { id: 7, joke: "What's the first step in understanding recursion?", punchline: "To understand recursion, you must first understand recursion." },
    { id: 8, joke: "Why did the Java developer quit his job?", punchline: "Because he didn't get arrays." },
    { id: 9, joke: "Why do submarines all run Linux?", punchline: "Because you can't open Windows under water." },
    { id: 10, joke: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs." }
]

app.get("/api/v1/random-joke", (_, response) => {
    index = Math.floor(Math.random() * jokes.length)
    response.send(jokes[index])
})