let container = document.getElementById("container")
let one = document.getElementById("one")
let x = 1;
let submit = document.getElementById("submit")
let score = document.getElementById("score")
let result = document.getElementById("result")



function togetuserone() {
    const Paris = document.getElementById("Paris").checked
    const London = document.getElementById("london").checked
    const Berlin = document.getElementById("berlin").checked
    marks = Paris ? x++ : London ? '0' : Berlin ? '0' : 'Please select any option'

    const mars = document.getElementById("mars").checked
    const venus = document.getElementById("venus").checked
    const jupiter = document.getElementById("jupiter").checked
    marks = mars ? x++ : venus ? '0' : jupiter ? '0' : ''

    const elephant = document.getElementById("elephant").checked
    const blue = document.getElementById("blue").checked
    const giraffe = document.getElementById("giraffe").checked
    marks = blue ? x++ : elephant ? '0' : giraffe ? '0' : ''
    return marks
}

submit.addEventListener("click", function () {
    let marks = togetuserone()
    container.style.display = "none"
    result.style.display = "block"
    score.textContent = "Score:" + marks
})
