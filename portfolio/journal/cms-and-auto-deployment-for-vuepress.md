---
title: Template Literals
date: 2018-08-09 17:49:28 +0000
excerpt: The Template Literal, introduced in ES6, is a new way to create a string.

---
# Template Literals

Template literals were a part of ES6 that I never found a reason to use until lately. Working for a client that required some Ajax -> html rendering, template literals cleaned up my code and made it so much easier to deal with.

### How to use template literals

To create a template literal, instead of single quotes (`'`) or double quotes (`"`) quotes we use the backtick (```) .

Basic example

    let newString = `A string`

There are lots of ways to use template literals but the most revelatory to me was HTML templates.

The javascript function:

    function createMarkup(item) {
        return `
            <article class="card">
                <h3>${item.name}</h3>
                <p>${item.name} has a base weight of ${data.size}</p>
            </article>
        `
    }

JSON:

    {
        "id": 1,
        "name": "Widget",
        "height": 7,
        "order": 1,
        "weight": 14,
        ...
    }

Result:

    <script>
    const item = {
        "id": 1,
        "name": "Widget",
        "height": 7,
        "weight": 14,
        ...
    }
    createMarkup(item)
    </script>
    
    <article class="card">
    	<h3>Widget</h3>
    	<p>Widget has a base weight of 14</p>
    </article>

In effect, we have a built-in _Handlebars.js-like_ template rendering engine! So cool.