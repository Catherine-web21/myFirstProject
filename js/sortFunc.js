const lowToHigh = document.getElementById('lowToHigh');
const highToLow = document.getElementById('highToLow');

function getPureNumber(val){
    return parseFloat(val.replace('$',''))
}

function getById(val){
    return document.getElementById(val)
}

function sort(sortParam){
    const parent = getById('list-items');
    const toSort = Array.prototype.slice.call(parent.children, 0);

    toSort.sort(function(a, b) {

        // get price without $
        const priceA = getPureNumber(a.children[2].innerText)
        const priceB = getPureNumber(b.children[2].innerText)
        // sort two elements
        if (sortParam === 'lowToHigh'){
            return (priceA > priceB) ? 1 : -1;
        } else{
            return (priceA > priceB) ? -1 : 1;
        }
    });
    parent.innerHTML = "";

    for(let i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }
}

lowToHigh.addEventListener("click", function sortFunc(e){
    sort('lowToHigh')
});

highToLow.addEventListener("click", function sortFunc(e){
    sort('highToLow')
});
