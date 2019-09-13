class Login {
    constructor() {}

    sample() {
        console.log("hey")
    }
    async loginUser(url, data) {
        // console.log('loginnnn')
        // console.log(data)
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        const result = await response.json();
        return result;
    }

    // async post(url, data) {
    //     const response = await fetch(url, 
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-type': 'application/json'
    //       },
    //       body : JSON.stringify(data)
    //     });
    //     const resData = await response.json();
    //     return resData;
}