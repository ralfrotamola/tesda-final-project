const item = new Item;
const product = new Product;

product
    .getProducts('http://localhost:8080/product/getproducts')
    .then(response => {
        const products = response.products;
        if (products.length > 0) {
            item.setLayouts(products);
            filterItem();
            console.log(products)
        } else {
            console.log("empty product")
        }
    })
    .catch(error => console.log(error));

// products = [
//     {img_path: "https://embrostitch.com/wp-content/uploads/Builder_Patrick_Star_embroidery_design_embrostich.jpg", 
//     name: "sabon ni koya pat1", desc: "sample desc", price: "699", qty: "5"},
//     {img_path: "https://embrostitch.com/wp-content/uploads/Builder_Patrick_Star_embroidery_design_embrostich.jpg",
//     name: "sabon ni koya pat2", desc: "sample desc", price: "799", qty: "5"},
//     {img_path: "https://embrostitch.com/wp-content/uploads/Builder_Patrick_Star_embroidery_design_embrostich.jpg",
//     name: "sabon ni koya pat2", desc: "sample desc", price: "799", qty: "5"},
//     {img_path: "https://embrostitch.com/wp-content/uploads/Builder_Patrick_Star_embroidery_design_embrostich.jpg",
//     name: "sabon ni koya pat2", desc: "sample desc", price: "799", qty: "5"},
//     {img_path: "https://embrostitch.com/wp-content/uploads/Builder_Patrick_Star_embroidery_design_embrostich.jpg",
//     name: "sabon ni koya pat2", desc: "sample desc", price: "799", qty: "5"},
//     {img_path: "https://embrostitch.com/wp-content/uploads/Builder_Patrick_Star_embroidery_design_embrostich.jpg",
//     name: "sabon ni koya pat2", desc: "sample desc", price: "799", qty: "5"},
//     {img_path: "https://embrostitch.com/wp-content/uploads/Builder_Patrick_Star_embroidery_design_embrostich.jpg",
//     name: "sabon ni koya pat3", desc: "sample desc", price: "899", qty: "5"}
// ]

// prototype function
const searchProduct = (e) => {
    console.log(e.target.value);
    let filterText = e.target.value.toLowerCase();

    document.querySelectorAll('.card-title').forEach(product => {
        const productTitle = product.textContent.toLowerCase();
        if(productTitle.indexOf(filterText) >= 0 ) {
            product.parentElement.parentElement.parentElement.style.display = 'block';
          } else {
            product.parentElement.parentElement.parentElement.style.display = 'none';
          }
        console.log(productTitle)
    })
}
const searchInput = document.getElementById("search-product");
searchInput.addEventListener("keyup", searchProduct);