window.onload = function() {

    const rateLowToHigh = document.getElementById('ratinglowToHigh');
    const rateHighToLow = document.getElementById('ratinghighToLow');
    const list_items = document.getElementById("list-items");
    const ProductList = [
        {id: 'MeshGroceryBag', name: 'Mesh Grocery Bag', href: 'Grocerybag.html', price: '$8.99', rate: 4.1, imageSrc: 'Asset/category/meshbag1.jpg'},
        {id: 'BambooRazor', name: 'Bamboo Razor', href: 'razor.html', price: '$29.99', rate: 4.2, imageSrc: 'Asset/category/razor2.jpg'},
        {id: 'BambooCultery', name: 'Bamboo Cultery', href: 'cultery.html', price: '$4.99', rate: 4.5, imageSrc: 'Asset/Product/cutlery.jpg'},
        {id: 'BambooRemoverPad', name: 'Bamboo Makeup Remover Pad', href: 'pads.html', price: '$19.99', rate: 4.3, imageSrc: 'Asset/Product/pad1.jpg'},
        {id: 'StainlessStraw', name: 'Stainless Straw', href: 'straws.html', price: '$5.99', rate: 5, imageSrc: 'Asset/Product/straw1.jpg'}
    ]
  appendChildHtml(ProductList, list_items)


//rating system
function sort(sortParam){
    const parent = getById('list-items');
    const list_items = document.getElementById("list-items");
    ProductList.sort(function(a, b) {
        // sort two elements
        if (sortParam === 'ratinglowToHigh'){
            return (a.rate > b.rate ) ? 1 : -1;
            appendChildHtml(ProductList, list_items)
        } else{
            return (a.rate > b.rate) ? -1 : 1;
            
        }
    });
    parent.innerHTML = "";
    appendChildHtml(ProductList, list_items)
}


function appendChildHtml (ProductList, list_items) {
    for(let i = 0, l = ProductList.length; i < l; i++) {
        var innerHtml = '<a href = ' + ProductList[i].href + '><img class="image' + i + '" src= '+ ProductList[i].imageSrc + ' width="180" height="250"></a>';
        innerHtml += '<div class="name">' + ProductList[i].name + '</div>';
        innerHtml += '<div class="price">' + ProductList[i].price + '</div>';
        innerHtml += '<div class="price">' +"Raing "+ ProductList[i].rate + '</div>';
        // innerHtml += '<span class="fa fa-star ' + (ProductList[i].rate >= 1 ? 'checked' : '') +'"></span>';
        // innerHtml += '<span class="fa fa-star ' + (ProductList[i].rate >= 2 ? 'checked' : '') +'"></span>';
        // innerHtml += '<span class="fa fa-star ' + (ProductList[i].rate >= 3 ? 'checked' : '') +'"></span>';
        // innerHtml += '<span class="fa fa-star ' + (ProductList[i].rate >= 4 ? 'checked' : '') +'"></span>';
        // innerHtml += '<span class="fa fa-star ' + (ProductList[i].rate >= 5 ? 'checked' : '') +'"></span>';
         var div = document.createElement('div');
         div.id = ProductList[i].id;
        div.className = "column";
        div.innerHTML = innerHtml;
        list_items.appendChild(div);
    }
   
}
rateLowToHigh.addEventListener("click", function ratingsort(e){
    sort('ratinglowToHigh')
});

rateHighToLow.addEventListener("click", function ratingsort(e){
    sort('ratinghighToLow')
});
}