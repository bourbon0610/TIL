const h1 = document.querySelector("h1");

let size = window.size;

document.body.style.backgroundColor = "purple";
h1.style.color = "white";

const initialSize = window.innerWidth;

function checkSize() {
    let currentSize = window.innerWidth;
    console.log(initialSize);
    console.log(currentSize);

    if (currentSize > initialSize + 100) {
        document.body.style.backgroundColor = "yellow";
    } else if (currentSize < initialSize - 100) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "purple"
    };
}

window.addEventListener("resize", checkSize);
