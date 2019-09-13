const product = new Product;

// product
//     .getProducts('http://localhost:8080/product/getproducts')
//     .then(response => {
//         const products = response.products;
//         if (products.length > 0) {
//             // console.log(products)
//         } else {
//             console.log("empty product")
//         }
//     })
//     .catch(error => console.log(error));

let userDetail = {}
const getUserFrmLS = _ => {
    if (localStorage.getItem("user") === null) {
        location.href = "login.html"
    } else {
        userDetail = JSON.parse(localStorage.getItem("user"));
        loadUserData(userDetail)
    }
    loadProducts(userDetail._id);
    // console.log(userDetail);
}

const loadUserData = user => {
    let user_name = document.getElementById("user_name");
    user_name.textContent = `Hello Koya, ${user.username}`;
    console.log(user_name)
}

const loadToTable = (productsTemp) => {
    let productDiv = document.getElementById("product-list");
    // let productTable = document.getElementById("product-list");
    // productTable.getElementsByTagName("tbody") = '' ;
    console.log(productDiv);
}

const loadProducts = (user_id) => {
    console.log("called load product")
    product
        .getProductsByUser(`http://localhost:8080/product/getproductbyuserid/${user_id}`)
        .then(result => {
            let productsTemp = [];
            if (result.success) {
                const products = result.products;

                products.forEach(product => {
                    let productTemp = loadProductToView(product);
                    productsTemp.push(productTemp);
                });
            }
            loadToTable(productsTemp);
            // console.log(result)
        })
        .catch(error => console.log(error));
}

const loadProductToView = (product) => {
    // const productTable = document.getElementById("product-list");
    // console.log(productTable.getElementsByTagName("tbody"));

    const productTemplate = 
        `<tr>
            <td>
                <img style="width: 30%; height: 30%;" src=${product.img_path} alt="">
            </td>
            <td>${product.name}</td>
            <td>${product.desc}</td>
            <td>${product.price}</td>
            <td>${product.qty}</td>
            <td>
                <div class="form-group-inline">
                    <button class="btn btn-success"><i class="fa fa-eye"></i></button>
                    <button class="btn btn-primary"><i class="fa fa-edit"></i></button>
                    <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                </div>
            </td>
        </tr>`;

        // console.log(productTemplate);

        return productTemplate;
}

getUserFrmLS();