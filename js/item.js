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
                    <h5 class='card-title'>${product.title}</h5>
                </div>
                <img style='height: 200px; width: 100%; display: block;' src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' alt='Card image'>
                <div class='card-body'>
                    <p class='card-text'>${product.price}</p>
                </div>
            </div>       
        </div>`;
        
        console.log(layout);
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
}