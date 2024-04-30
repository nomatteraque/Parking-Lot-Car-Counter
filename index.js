let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let flag = false

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let prefix = "-"
    if(!flag) {
        prefix = ""
        flag = true
    }
    let countStr = prefix + count
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
