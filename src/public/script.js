import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const collection = e.target['collection'].value;

        if (collection.trim() !== "") {

            try {
                const res = await fetch("/start/", {
                    method: "POST",
                    body: JSON.stringify({ collection }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                if (res.ok) {
                    const data = await res.json();
                    window.location = data.url;
                }
            } catch (err) {
                console.log(err.message);
            }

        }
    })
}

const socket = io();
console.log("Connexion io lancée");

const inputField = document.querySelector(".my-clipboard");

if (inputField) {
    let isTyping = false;
    const origin = window.location.pathname.split('/collection/').at(-1)

    inputField.addEventListener("input", () => {
        isTyping = true;
        socket.emit("update", {
            content: inputField.innerText,
            origin
        })
        isTyping = false;
    })


    socket.on("saved", (data) => {
        if (data.origin === origin) {
            if (!isTyping)
                inputField.innerHTML = data.content;
        }
    })
}
