let button = document.getElementById("button");

button.addEventListener("click", () => {
    let msg = document.createElement("h2");
    msg.innerText = "Hello , Have a great Day !!";
    msg.style.fontSize = "25px";
    msg.style.fontWeight = "700";

    document.body.appendChild(msg);
})