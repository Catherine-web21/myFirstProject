document.searchBar.addEventListener("input", searchInput);


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
}