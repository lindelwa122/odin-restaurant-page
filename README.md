# Restaurant Page

A restaurant build using webpack. HTML and CSS generated using CSS and I can navigate to other pages without the website reloading.

## Live Preview

For a live preview click [here](https://lindelwa122.github.io/odin-restaurant-page).

## How to install

1. [Fork](https://github.com/lindelwa122/odin-restaurant-page/fork) this repository.

2. Clone the repository to your computer by running on of the following compands:

    * SSH:
        ```
        git clone git@github.com:<your-username>/odin-restaurant-page.git
        ```
    * HTTPS:
        ```
        git clone https://github.com/<your-username>/odin-restaurant-page.git
        ```

3. Switch to the `gh-pages` branch by running:

    ```
    git checkout gh-pages
    ```

4. Install all the dependencies:
    
    ```
    npm install
    ```

5. Open the app in your browser by running one of the following commands:

    ```
    npm build
    ```

    or 

    ```
    npm start
    ```

## What I Learned

* Learned **webpack** and how to use it to **organize JS code**.
* Learned how to **configure webpack** and **create scripts**.
* Reinforced my **factory functions** and **module patterns** knowledge.
* Build the entire Document Object Model and stylesheet with JavaScript.

## How do it works

### Creating the DOM

Let's take a look at some code from **index.js**:

```javascript
import generateContent, { createStyleSheet, router } from "./module/generateContent";
import home from "./routes/home";
import "normalize.css";

import routes from "./routes/router";

generateContent(home);
```

For now, let's only just focus on `generateContent(home)`. But for us to understand what is happening, let's look at what we are importing from `./routes/home`.

```javascript
import navbar from "../components/navbar";
import hero from "../components/heroSection";
import informationSection from "../components/informationSection";
import officeHours from "../components/officeHoursSection";

const home = {
  tagName: "div",
  children: [navbar(), hero(), informationSection(), officeHours()],
};

export default home;
```

As you can see from the above code, home is just a JS object. In fact all the other components functions return a JS Object. This is how the `generateContent()` function works, it needs an object and from that object it creates elements and append them to the HTML page.

An object that's passed into `generateContent` can look like this:

```javascript
{
    tagName: "div",
    options: {
        classList: ["class-1", "class-2"],
    }, 
    children: [...]
}
```

It only requires a `tagName`, `options` which can include a lot of other things and `children` which will be objects as well.

Now, let's take a look at how `generateContent()` use these objects:

```javascript
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

    if (tree.options && tree.options.router) {
      router.configRouter(
        Object.assign({}, tree.options.router, { element: el })
      );
    }

    tree.options && tree.options.pageId && router.pages.push(tree);

    return el;
  };

  const addTreeToTheDOM = (tree) => {
    const el = _createTreeNode(tree);
    // clear content
    document.querySelector("#content").innerHTML = "";
    document.querySelector("#content").appendChild(el);
    createStyleSheet.reRenderCSSRules();
  };

  return { addTreeToTheDOM };
};
```
`addTreeToTheDOM` uses `_createTreeNode` to recursively create the element and its children. When it's done creating the document tree, it is appended to the DOM.

### Styling

The are two ways we can add styling to our elements:

1. Using the `options` property:

```javascript
const div = () => ({
    tagName: "div",
    options: {
      innerHTML: "PeanutButter Cookies",
      style: {
        color: "#f9faf8",
        fontFamily: "'Dancing Script', cursive",
        fontSize: "24px",
        fontWeight: 700,
      }
    },
});
```

2. Using the `createCSSRule()` function:

```javascript
createStyleSheet.createCSSRule({
  "*": {
    boxSizing: "border-box"
  },

  "body": {
    fontFamily: "'Inter', sans-serif",
    fontSize: "18px",
  },

  ".hero-section h2": {
    color: "#f9faf8",
    fontSize: "48px",
    fontWeight: 900,
  },

  ".hero-section p": {
    lineHeight: "30px",
  },
 
  ".information-section h2": {
    color:" #1f2937",
    fontSize: "36px",
    fontWeight: 900,
    marginTop: 0,
  },

  ".price": {
    fontWeight: 500,
  },
});

```

```createStyleSheet```:

```javascript
const createStyleSheet = (() => {
  const addStyle = (el, declaration) => {
    for (const val of Object.entries(declaration)) {
      const property = val[0];
      const value = val[1];

      el.style[property] = value;
    }
  };

  const _CSSRules = [];
  const reRenderCSSRules = () => {
    for (const rule of _CSSRules) {
      createCSSRule(rule, false);
    }
  };

  const createCSSRule = (style, save=true) => {
    save && _CSSRules.push(style);

    for (const val of Object.entries(style)) {
      const selector = val[0];
      const declaration = val[1];

      const elements = document.querySelectorAll(selector);

      elements.length > 0 &&
        elements.forEach((el) => {
          addStyle(el, declaration);
        });
    }
  };

  return { addStyle, createCSSRule, reRenderCSSRules };
})();
```

`createCSSRule()` receives an object and it assumes the keys are the `selectors` and the values to be `declarations`. It selects all the elements matching the selector and iterates over the elements to apply the rule using `addStyle()`.

`addStyle()` expects two parameters, an element and its declaration. It then iterates over the declaration to get the `property` and a `value` and add them to the elements styles one by one using `element.style[property] = value`.

`reRenderCSSRules()` reapplies the CSS rules to elements that are just added to the DOM. For example if you write this rule: 

```javascript
".content": {
    backgroundColor: "red",
    color: "yellow",
}
```

If `.content` does not exist yet, this rule won't be applied and the styles will be saved. When the `.content` is added to the page the `reRenderCSSRules()` will apply the style to content.

### Routing

You can easily move from one page to another without ever reloading the page, here's how it works.

```javascript
import menu from "./menu";
import home from "./home";
import contacts from "./contacts";

const routes = [
  { id: "menu", route: menu },
  { id: "home", route: home },
  { id: "contacts", route: contacts }
];

router.register(routes);
```

The above code registers the routes and requires them to have a unique ID. This is to enable easy access to these routes/pages. Let's say you are currently in the home page and you wanted to route to menu. This is how you can achive that:

```javascript
const li = (content) => ({
    tagName: "li",
    options: {
        innerHTML: content,
        router: {
            name: "navigation",
            to: "menu",
        }
    },
});
```

Clicking on the above `list item` will trigger an event listener and `menu` will be open. It's that simple.

Let's take a look at the code that makes this functionality possible:

```javascript
const router = (() => {
  const pages = [];
  const _routers = [];

  const configRouter = (info) => {
    _routers.push(info);

    info.element.addEventListener("click", () => {
      _deactive(info.name);
      console.log({ ele: info.element })
      info.element.classList.add("active");

      let to;
      for (const page of pages) {
        if (page.id === info.to) {
          to = page.route;
        }
      }

      generateContent().addTreeToTheDOM(to);
    });
  };

  const _deactive = (name) => {
    for (const router of _routers) {
      if (router.name === name) {
        router.element.classList.remove("active");
      }
    }
  };

  const register = (routes) => {
    for (const route of routes) {
      pages.push(route);
    }
  };

  return { configRouter, register, pages };
})();
```

`configRouter()` is called when the element is created and if it has router in as an option. A click event listener will be added to the element, so `generateContent()` can add the appropriate content to the DOM when the element is clicked. Don't worry about the other things in the above module, most parts don't work that well and I am still to fix them.

## Credits

* This [project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) is part of the Odin Project's [curriculum](https://www.theodinproject.com).
* Project is inspired by the [Peanut Butter Restaurant Landing Page](https://github.com/lindelwa122/odin-landing-page) project.
* Images taken from:
    - Bing Image Creator.
    - [Unsplash](https://unsplash.com).
    - [Casey Chae](https://unsplash.com/@chaseycasey).
    -  [Jeniffer Pallian](https://unsplash.com/@foodess).
    - [Mae Mu](https://unsplash.com/@picoftasty).

## Conclusion

Feel free to give this repository a star and use the code as you please.

Happy Coding :)
