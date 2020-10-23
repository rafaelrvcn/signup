const fname = document.querySelector("#first-name")
const lname = document.querySelector("#last-name")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const form = document.querySelector(".signup")
const efname = document.querySelector("#error-firstn")
const elname = document.querySelector("#error-lastn")
const eremail = document.querySelector("#error-email") 
const epass = document.querySelector("#error-pass")

form.addEventListener("submit", event => {
    event.preventDefault()
    let errorsf = ""
    let errorsl = ""
    let errorse = ""
    let errorsp = ""
    let entrarf = false
    let entrarl = false
    let entrare = false
    let entrarp = false

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,4})+$/
    if(fname.value.length < 3) {
        errorsf += `First name cannot be empty`
        entrarf = true
        fname.parentElement.querySelector(".icon").classList.add("error")
    }
    if(lname.value.length < 2) {
        errorsl += `Last name cannot be empty`
        entrarl = true
        lname.parentElement.querySelector(".icon").classList.add("error")
    }
    if(!regexEmail.test(email.value)){
        errorse += `Looks like this is not an email`
        entrare = true
        email.parentElement.querySelector(".icon").classList.add("error")
    }
    if(pass.value.length < 6){
        errorsp += `Password cannot be empty`
        entrarp = true
        pass.parentElement.querySelector(".icon").classList.add("error")
    }
    if(entrarf) {
        efname.innerHTML = errorsf
        fname.style.borderColor = "hsl(0, 100%, 74%)"

    }
    if(entrarl) {
        elname.innerHTML = errorsl
        lname.style.borderColor = "hsl(0, 100%, 74%)"
    }
    if(entrare) {
        eremail.innerHTML = errorse
        email.style.borderColor = "hsl(0, 100%, 74%)"
    }
    if(entrarp) {
        epass.innerHTML = errorsp
        pass.style.borderColor = "hsl(0, 100%, 74%)"
    }
})