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

// get user from local storage
const getUserFrmLS = _ => {
    if (localStorage.getItem("user") === null) {
        location.href = "login.html"
    } else {
        userDetail = JSON.parse(localStorage.getItem("user"));
        loadUserDataToView(userDetail)
    }
    loadProducts(userDetail._id);
    // console.log(userDetail);
}

// load user data from local storage to HTML view
const loadUserDataToView = user => {
    let user_name = document.getElementById("user_name");
    user_name.textContent = `Hello Koya, ${user.username}`;
    console.log(user_name)
}

// load product template to table
const loadToTable = (productsTemplate) => {
    let productDiv = document.getElementById("product-list");
    // let productTable = document.getElementById("product-list");
    // productTable.getElementsByTagName("tbody") = '' ;
    let productTable = document.createElement("table");
    productTable.className = "table";
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody");
    thead.innerHTML 
        = `<tr>
            <th width="40%">Product Image</th>
            <th>Product Name</th>
            <th>Product Desct</th>
            <th>Price</th>
            <th>QTY</th>
            <th>Action</th>
        </tr>`
    tbody.innerHTML = productsTemplate
    productTable.appendChild(thead);
    productTable.appendChild(tbody);
    productDiv.appendChild(productTable);
    // productTable.appendChild(productsTemplate)
    // console.log(productTable);
}

// load product from api
const loadProducts = (user_id) => {
    console.log("called load product")
    product
        .getProductsByUser(`http://localhost:8080/product/getproductbyuserid/${user_id}`)
        .then(result => {
            // empty array for product templates
            let productsTemp = [];
            if (result.success) {
                const products = result.products;

                products.forEach(product => {
                    let productTemp = loadProductToView(product);
                    productsTemp.push(productTemp);
                });
            } else {
                alert("Empty product list")
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