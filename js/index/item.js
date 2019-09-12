class Item {
    constructor() {

    }

    setLayouts = (products) => {

        let layouts = [];
        products.forEach(product => {
            let layout = this.itemLayout(product);
            layouts.push(layout);
        })
        
        // console.log(layouts);
        document.getElementById("item-list").innerHTML = layouts;
        this.loadItemReference();
    }
    
    itemLayout = (product) => {
        let layout = 
        `<div class='col-sm-3 item'>
            <div class='card mb-3 border-primary'>
                <div class='card-body'>
                    <h5 class='card-title'>${product.name}</h5>
                </div>
                <img style='height: 200px; width: 100%; display: block;' src='${product.img_path}' alt='Card image'>
                <div class='card-body'>
                    <p class='card-text'>${product.price}</p>
                </div>
            </div>       
        </div>`;
        
        // console.log(layout);
        return layout
    }
    
    loadItemReference = _ => {
        console.log("item reference called")
        const items = document.querySelectorAll(".item");
    
        items.forEach(item => {
            item.addEventListener('click', e => {
                alert(`item clicked: ${e.target}`)
                location.href = 'item-description.html';
            });   
        })    
    }

    // products.forEach(product => {
//     console.log(product.title);
// })



// setLayouts();
// setTimeout(function(){

// }, 1000);
}