class Product {
    constructor(){}

    // sample(){
    //     console.log('sample')
    // }
    // async getProducts(url) {
    //     const fetchData = await fetch(url, {
    //         method: 'GET',
    //         headers: { 'Content-type': 'application/json' }
    //     });
    //     const response = await fetchData.json()

    //     return response
    // }

    async getProductsByUser(url) {
        const fetchData = await fetch(url, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' }
        });
        const response = await fetchData.json()
        return response
    }


    // getProducts() {
    //     fetch('http://localhost:8080/product/getproducts', {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify()
    //     })
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
    // }
}