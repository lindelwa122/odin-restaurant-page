const generateContent = () => {
  const _createElement = (tagName, options = {}) => {
    const el = document.createElement(tagName);

    if (options.classList) {
      el.classList = options.classList.split(" ");
    }

    if (options.innerHTML) {
      el.innerHTML = options.innerHTML;
    }

    return el;
  };

  const _createImage = (options) => {
    const img = new Image();
    img.src = options.src;
    img.alt = options.alt;
    return img;
  };

  const _createTreeNode = (tree) => {
    const el =
      tree.tagName === "img"
        ? _createImage(tree.options)
        : _createElement(tree.tagName, tree.options);

    for (const child of tree.children) {
      const childEl = _createTreeNode(child);
      el.appendChild(childEl);
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
