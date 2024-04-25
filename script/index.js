var formDataArray = [];

document.getElementById("userFormStep3").addEventListener("submit" , function(event) {
    var form = event.target;
    // Logjiken e validimit
    if(!form.checkValidity()){
    event.preventDefault();
    event.stopPropagation();
    }

    console.log("form",form)

    if(form.checkValidity()) {
        event.preventDefault();
        var formData = new FormData(form)
        var formDataObject = {};
        formData.forEach(function (value, key){
            formDataObject[key] = value;
        });
        
        formDataArray.push(formDataObject);

    }

    document.getElementById("step3").classList.remove("active")
})

document.querySelectorAll(".next").forEach(function (button) {
    button.addEventListener("click", function () {
        var currentStep = button.closest(".step-content");
        currentStep.classList.remove("active");
        currentStep.nextElementSibling.classList.add("active")
    })
}
)

document.querySelectorAll(".prev").forEach(function (button) {
button.addEventListener("click", function () {
    var currentStep = button.closest(".step-content");
    currentStep.classList.remove("active");
    currentStep.previousElementSibling.classList.add("active");
})
});