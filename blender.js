document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("blend").addEventListener("click", () => {

        const surname = document.getElementById("surname").value;
        const font = document.getElementById("font").value;
        const color = document.getElementById("color").value;
        const size = document.getElementById("size").value;

        const output = document.getElementById("output");
        output.innerHTML = "";

        let letters = surname.split("");

        const positionType = document.querySelector('input[name="pos"]:checked').value;

        if (positionType === "rev") {
            letters.reverse();
        }

        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;

            span.style.position = "absolute";
            span.style.fontFamily = font;
            span.style.color = color;
            span.style.fontSize = size + "px";

            if (positionType === "rand") {
                span.style.left = Math.random() * 300 + "px";
                span.style.top = Math.random() * 100 + "px";
            } else {
                let pos = (i + 1) * 15;
                span.style.left = pos + "px";
                span.style.top = pos + "px";
            }

            output.appendChild(span);
        });

    });

});
