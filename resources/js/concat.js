class jsLib {


    constructor(selector)
    {   
       this.collection = document.getElementsByClassName(selector);
	}

	html(htmlContent) {
		for (const el of this.container) {
			el.innerHTML = htmlContent;
		}

		return this;
	}

	text(textContent) {
		if (textContent === undefined) {
			const el = Array.from(this.container)[0];
			return el.textContent;
		}

		for (const el of this.container) {
			el.textContent = textContent;
		}

		return this;
	}

	on(name, handler) {
		for (const el of this.container) {
			el.addEventListener(name, (e) => handler(e));
		}

		return this;
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
		for (const el of this.container) {
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
			for (const el of this.container) {
				el.style[propertyName] = value;
			}
//		}
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

