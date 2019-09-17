class Validation {
    constructor() {}

    //validates elements
    check(elements, errorMessage) {
        //variable for invalid elements
        let invalidElement = [];

        elements.forEach((element, index) => {
            //validate element value
            if (element.value.trim().length == 0) {

                //add invalid element value to invalidElement variable
                invalidElement.push(element);

                //show error corresponding to element and errorMessage array
                this.showError(element, errorMessage[index]);
                
            }
        });

        //return invalidElement value
        return invalidElement
    }

    showError(element, message) {
        // getting parent element of element
        const parentElement = element.parentElement;

        // creating div for showing error
        const div = document.createElement("div");

        // adding class for div error
        div.className = "invalid-feedback";

        // adding text content for div error
        div.textContent = message;

        element.className = "form-control is-invalid";
        parentElement.className = "form-group has-danger";        
        parentElement.appendChild(div)

        console.log();
    }
}