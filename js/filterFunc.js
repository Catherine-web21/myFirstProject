//get element from html by ID
const priceRange = getById('PriceRange')

priceRange.addEventListener("change", getFilter);

// the function to get value from different price range
function getFilter(e){
    filter(e.target.value)
}

// convert the string into number
function getPureNumber(val){
    return parseFloat(val.replace('$',''))
}
function getById(val){
    return document.getElementById(val)
}

// the filter fuction that uses if to create 4 options
function filter(val){
    const parent = getById('list-items');
    const toFilter = Array.prototype.slice.call(parent.children, 0);
    toFilter.filter(function(data) {
        const price = getPureNumber(data.children[2].innerText)
        CheckIdWithStyle(data.id, 'none')
        if (val === 'Range0' ||
            (val === 'Range1' && price < 5) ||
            (val === 'Range2' && price >= 5 && price < 10) ||
            (val === 'Range3' && price >= 10 && price < 20) ||
            (val === 'Range4' && price >= 20)
        ){
            CheckIdWithStyle(data.id, 'block')
        }
    });
}

// the function to look into 5 ranges from range0 to range4
function CheckIdWithStyle(nameId, style){
    const id = document.getElementById(nameId)
    if (id){ id.style.display = style }
}
