const result = document.getElementById("result");
const btn = document.getElementsByClassName("btn");

function changeFunc() {
    alert("Hello World");
    result.style.display = "block";

    setInterval((e) => {
        location.reload()
    }, 5000)
}
