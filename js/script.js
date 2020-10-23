const fields = document.querySelectorAll("[required]")

function validateField(field) {
    function verifyErrors() {
        let foundError = false
        console.log(field);
        for(let error in field.validity){
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError
    }

    function customMessage(typeError) {
        const messages = {

            text: {
                valueMissing: "Preencha"
            },
            email: {
                valueMissing: "Email Obrig",
                typeMismatch: "Preencha"
            },
            password: {
                valueMissing: "Password cannot be empty"
            }
        }

        return messages[field.type][typeError]
    }

    function setMessage(message){
        const smallError = field.parentNode.querySelector("small.msg-error")
        if (message) {
            smallError.classList.add("active")
            smallError.innerHTML = message
        } else {
            smallError.classList.remove("active")
            smallError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()
        console.log();
        if(error) { 
            const message = customMessage(error)

            field.style.borderColor = "hsl(0, 100%, 74%)"
            setMessage(message)            
        } else {
            field.style.borderColor = "hsl(249, 10%, 26%)"
            setMessage()
        }
    }
}

function validation(event) {

    const field = event.target
    const validation = validateField(field)

    validation()

}

for(let field of fields){
    field.addEventListener("invalid", event => {
        event.preventDefault() 

        validation(event)
    })
    field.addEventListener("blur", validation)
}












const firstname = document.querySelector("#first-name")
const lastname = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const efirstname = document.querySelector("#error-firstn")
const elastname = document.querySelector("#error-lastn")
const erroremail = document.querySelector("#error-email")
const epassword = document.querySelector("#error-pass")