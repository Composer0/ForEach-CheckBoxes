// input class is the one selected for the variable.
const toggles = document.querySelectorAll(".toggle")
const good = document.querySelector("#good")
const cheap = document.querySelector("#cheap")
const fast = document.querySelector("#fast")


// checkboxs require a 'change' event not a 'click'
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))
// e.target means whatever is selected. ex good, cheap, or fast.
// a forEach loop doesn't stop. It is used when there is no intended end.
// forEach loops are dependent on the actions that are occuring within the loop, which may be why a while or for...of loop do not execute the the result of the function passed below.

function doTheTrick(theClickedOne) {
    // check boxes have a value in the DOM that indicates whether the value is checked or not.
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            good.checked = false
        }

        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
}
// theClickedOne is === to e.target by default. That is why is not a named variable because e.target can be named anything as it is being set equal to the previously established variable why are being passed through the forEach statement.