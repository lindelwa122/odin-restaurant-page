const generateContent = () => {
  const _createElement = (tagName, options = {}) => {
    const el = document.createElement(tagName);

    if (options.classList) {
      el.classList = options.classList.join(" ");
    }

    if (options.innerHTML) {
      el.innerHTML = options.innerHTML;
    }

    if (options.style) {
      createStyleSheet.addStyle(el, options.style);
    }

    return el;
  };

  const _createImage = (options) => {
    const img = new Image();
    img.src = options.src;
    img.alt = options.alt;

    if (options.style) {
      createStyleSheet.addStyle(img, options.style);
    }

    return img;
  };

  const _createTreeNode = (tree) => {
    const el =
      tree.tagName === "img"
        ? _createImage(tree.options)
        : _createElement(tree.tagName, tree.options);

    if (tree.children) {
      for (const child of tree.children) {
        const childEl = _createTreeNode(child);
        el.appendChild(childEl);
      }
    }

    return el;
  };

  const addTreeToTheDOM = (tree) => {
    const el = _createTreeNode(tree);
    document.querySelector("#content").appendChild(el);
  }

  return { addTreeToTheDOM };
};

export default generateContent().addTreeToTheDOM;

const createStyleSheet = (() => {
  const addStyle = (el, declaration) => {
    for (const val of Object.entries(declaration)) {
      const property = val[0];
      const value = val[1];

      el.style[property] = value;
    }
  }

  const createCSSRule= (style) => {
    for (const val of Object.entries(style)) {
      const selector = val[0];
      const declaration = val[1];

      const el = document.querySelector(selector);
      addStyle(el, declaration);      
    }
  }

  return { addStyle, createCSSRule };
})();

export { createStyleSheet };