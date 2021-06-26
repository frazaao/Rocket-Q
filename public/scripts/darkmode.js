//DARK MODE

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=dark-mode]")

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
    white: getStyle(html, "--white"),
    black: getStyle(html, "--black"),
    background: getStyle(html, "--background")
}

const darkMode = {
    white: "#333333",
    black: "#ffffff",
    background: "#111111"
}

const transformKey = key => "--" + key.replace(/([A-Z])/,"-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])    
    )
}

checkbox.addEventListener("change", ({target})=>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})