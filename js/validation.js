class Validation {
    constructor() {}

    //validates elements
    check(elements) {
        //variable for invalid elements
        let invalidElement = [];

        elements.forEach(element => {
            //validate element value
            if (element.value.trim().length == 0) {

                //add invalid element value to invalidElement variable
                invalidElement.push(element);
            }
        });

        //return invalidElement value
        return {
            invalidElement
        }
    }
}