searchInput();

document.searchBar.addEventListener("input", searchInput);

function searchInput(){
    let keyword = $("input[name=container-searchbox]").val();
    $.ajax({
        type: "GET",
        url: "get_list.php",
        data: {keyword:keyword},
        dataType: "json",
        success: function(res){
            let list_items = document.getElementById("list-items");
            let ProductList = res;
            appendChildHtml(ProductList, list_items)
        }
    });
}


function appendChildHtml (ProductList, list_items) {
    list_items.innerHTML = '';
    for(let i = 0, l = ProductList.length; i < l; i++) {
        var innerHtml = '<a href="product_detail.php?id=' + ProductList[i].id + '" ><img class="image' + i + '" src="Asset/Product/'+ ProductList[i].img + '" width="180" height="250"></a>';
        innerHtml += '<div class="name">' + ProductList[i].name + '</div>';
        innerHtml += '<div class="price">$ ' + ProductList[i].price + '</div>';
        innerHtml += '<span class="fa fa-star ' + (ProductList[i].review >= 1 ? 'checked' : '') +'"></span>';
        innerHtml += '<span class="fa fa-star ' + (ProductList[i].review >= 2 ? 'checked' : '') +'"></span>';
        innerHtml += '<span class="fa fa-star ' + (ProductList[i].review >= 3 ? 'checked' : '') +'"></span>';
        innerHtml += '<span class="fa fa-star ' + (ProductList[i].review >= 4 ? 'checked' : '') +'"></span>';
        innerHtml += '<span class="fa fa-star ' + (ProductList[i].review >= 5 ? 'checked' : '') +'"></span>';
        var div = document.createElement('div');
        div.id = ProductList[i].id;
        div.className = "column";
        div.innerHTML = innerHtml;
        list_items.appendChild(div);
    }
}


/*

const ProductList = [
    'MeshGroceryBag',
    'BambooRazor',
    'TakeOutContainer',
    'BabmbooToothbrush',
    'EssenceOil',
    'OrganicSoap',
    'BambooBrush',
	'BambooCultery',
	'BambooRemoverPad',
	'StainlessStraw',
]
// document.searchBar.addEventListener("input", searchInput);
function searchInput(e){

    for (let i = 0; i < ProductList.length; i++) {
        CheckIdWithStyle(ProductList[i], 'block')
    }
    const arrHideItems = ProductList.filter(item => !item.toLowerCase().includes(e.target.value));
    for (let i = 0; i < arrHideItems.length; i++) {
        console.log(arrHideItems)
        CheckIdWithStyle(arrHideItems[i], 'none')
    }
}

function CheckIdWithStyle(nameId, style){
    const id = document.getElementById(nameId)
    if (id){ id.style.display = style }
}*/
