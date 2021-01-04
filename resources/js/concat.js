class jsLib {


    constructor(selector)
    {   
        let value = document.getElementsByClassName(selector);
        if(value.length > 1){
            this.collection = value;
//            this.is_one = false;
		}else{
			this.collection = selector;
//            this.is_one = true;
		}
    }

	html(htmlContent) {
        for (const el of this.collection) {
			el.innerHTML = htmlContent;
		}

		return this;
	}

	text(textContent) {
		if (textContent === undefined) {
			const el = Array.from(this.collection)[0];
			return el.textContent;
		}

		for (const el of this.collection) {
			el.textContent = textContent;
		}

		return this;
	}

	on(name, handler) {
//        if(this.is_one)
 //           this.collection.addEventListener(name, handler)
//        else{
		    for (const element of this.collection) {
			    element.addEventListener(name, handler);
		    }
  //      }

		return this;
	}

    child(selector){
        this.collection = this.collection.getElementsByClassName(selector)
        return this
    }

//	attr(name, value) {
//		if (value === undefined) {
//			const el = Array.from(this.container)[0];
//			return el.getAttribute(name);
//		} else {
//			for (const el of this.container) {
//				el.setAttribute(name, value);
//			}
//		}

//		return this;
//	}

//	click(handler) {
//		if (handler === undefined) {
//			for (const el of this.container) {
//				el.click();
//			}
//		} else {
//			for (const el of this.container) {
//				el.addEventListener("click", handler);
//			}
//		}

//		return this;
//	}

	addClass(className) {
		for (const el of this.collection) {
			el.classList.add(className);
		}

		return this;
	}

//	each(callback) {
//		const container = Array.from(this.container);
//
//		for (let i = 0; i < container.length; i++) {
//			const result = callback.call(container[i], i, container[i]);
//
//			if (result === false) {
//				break;
//			}
//		}

//		return this;
//	}

	css(propertyName, value) {
//		if (value === undefined) {
//			const el = Array.from(this.container)[0];
//			return el.style[propertyName];
//		} else {
//        if(this.is_one){
//			this.collection.style[propertyName] = value;
//       }else{
			for (const element of this.collection) {
				element.style[propertyName] = value;
			}
//        }
//
		return this;
	}

//	is(cssSelector) {
//		const elems = Array.from(document.querySelectorAll(cssSelector));
//		const container = Array.from(this.container);
//
//		for (const el of container) {
//			if (!elems.includes(el)) {
//				return false;
//			}
//		}
//
//		return true;
//	}
//}
}
const $ = (selector) => new jsLib(selector);

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

