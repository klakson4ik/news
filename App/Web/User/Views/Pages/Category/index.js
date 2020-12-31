class Category{

    constructor(){
        rootHead = "category-first-level-head";
        layers = {
            "second",
            "other"
        };
        




    }
}

function recursiveCategories(node){
    let childHead = $(e.currentTarget).child("category-second-level-head")
    if(childHead !== undefined){
        childHead.css("display", "block")
        childHead.on("mouseover", (l) => {
            console.log(l)
        })
}

$("category-first-level-head").on("mouseover", (e) => { 
    let childHead = $(e.currentTarget).child("category-second-level-head")
    if(childHead !== undefined){
        childHead.css("display", "block")
        childHead.on("mouseover", (l) => {
            console.log(l)
        })
   //     console.log($(e.currentTarget).child("category-second-level-element"))
    }
})
