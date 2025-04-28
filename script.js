function getvalue() {
    let a = document.getElementById("input").value;
    return a;
}

const img = document.getElementById("img");

function qrcode() {
    let val = `https://quickchart.io/qr?text=${getvalue()}`;
    img.src = val;
}
