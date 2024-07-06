const show = document.getElementById("show");
const rgbValue = document.getElementById("rgb-value");
const hexValue = document.getElementById("hex-value");
let copyValue;
rgbValue.addEventListener("click", ()=>{
    const range = document.createRange();
    range.selectNode(rgbValue);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    rgbValue.innerText = "Color copied!!";
    setTimeout(()=>{
        rgbValue.innerText = copyValue;
    }, 2000);
});
const colorSelect = ()=>{
    const red = document.getElementById("r");
    const green = document.getElementById("g");
    const blue = document.getElementById("b");
    const alpha = document.getElementById("alpha");
    const rgbaValue = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`;
    show.style.backgroundColor = rgbaValue;
    rgbValue.innerText = rgbaValue;
    copyValue = rgbaValue;
    colorOf(red.value, green.value, blue.value, alpha.value);
};
window.addEventListener("load", colorSelect);
document.addEventListener("change", colorSelect);
function colorOf(r, g, b, a) {
    hexValue.innerText = `#${parseInt(r).toString(16).padStart(2, "0")}${parseInt(g).toString(16).padStart(2, "0")}${parseInt(b).toString(16).padStart(2, "0")}${parseInt(a).toString(16).padStart(2, "0")}`;
}

//# sourceMappingURL=index.579125c3.js.map
