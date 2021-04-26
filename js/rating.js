const ratingLowHigh = document.getElementById('lowToHighRating');
const ratingHighLow = document.getElementById('highToLowRating');


function getById(val){
    return document.getElementById(val)
}
//rating system
function sortRate(sortParam){
    const rating = document.getElementById("rating");
    const toSort = Array.prototype.slice.call(parent.children, 0);

    ProductList.sort(function(a, b) {
        // sort two elements
        if (sortParam === 'lowToHighRating'){
            return (a.rate > b.rate ) ? 1 : -1;
        } else{
            return (a.rate > b.rate) ? -1 : 1;
        }
    });
    appendChildHtml(ProductList, list_items)
}

ratingLowHigh.addEventListener("click", function sortFunc(e){
    sort('lowToHighRating')
});