class Category{

    constructor(){
        this.rootNode = $("category-first-level-head");
        this.layers = [
            "second",
            "other"
        ];
        this.count = 0;
    };

    activation(node = this.rootNode, layer = 0){
        console.log("hell")
        node.on("mouseover", (e) => {
            let childnode = $(e.currenttarget).child("category-" + this.layers[layer] + "-level-head")
            if(childnode !== undefined){
                childnode.css("display", "block")
                this.activation(childnode, ++this.count);
            }
        })
        node.on("mouseout", (e) => {
            let childnode = $(e.currenttarget).child("category-" + this.layers[layer] + "-level-head")
            if(childnode !== undefined){
                childnode.css("display", "none")
                this.activation(childnode, --this.count);
            }
        })
    }

//function recursiveCategories(node){
//    let childHead = $(e.currentTarget).child("category-second-level-head")
//    if(childHead !== undefined){
//        childHead.css("display", "block")
//        childHead.on("mouseover", (l) => {
//            console.log(l)
//        })
//    }
}

//$("category-first-level-head").on("mouseover", (e) => { 
//    let childHead = $(e.currentTarget).child("category-second-level-head")
//    if(childHead !== undefined){
//        childHead.css("display", "block")
//        childHead.on("mouseover", (l) => {
//            console.log(l)
//        })
   //     console.log($(e.currentTarget).child("category-second-level-element"))
//   }
//
let category = new Category();
category.activation();

