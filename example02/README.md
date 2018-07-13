# Example 02

This is a simple example how you can make a compound component.

## How it works

In this case we are using [Context](https://reactjs.org/docs/context.html), which is a way to pass data through the component tree without having to pass props down manually at every level.

Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

To use Context we have to build our components with 3 important properties: childContextTypes, getChildContext, and contextTypes.

- childContextTypes is an object that describes what the content of getChildContext looks like on the parent component.

- getChildContext is where we set the properties we want the child component to have access to.

- contextTypes is an object that describes what part of the parent component’s context the child component needs

**Example**

```js
const B = (props, context) => {
    return (
        <div>
            {context.name}
        </div>
    )
}
B.contextTypes = {
    name: PropTypes.string.isRequired
}


class C extends Component {
    render () {
        return (
            <div>{this.context.name}</div>
        )
    }
}
C.contextTypes = {
    name: PropTypes.string.isRequired
}

class A extends Component {
    static childContextTypes = {
         name: PropTypes.string.isRequired
    }

    getChildContext () {
        return { name: "Ricardo Canelas" };
    }

    render () {
        return (
            <div>
                <B/>
                <C/>
            </div>
        );
    }
}
```

*Note: try to use 'Context' when the content/data don't need update*

## Check More

- [Context](https://reactjs.org/docs/context.html)
- [Legacy-Context](https://reactjs.org/docs/legacy-context.html)

## Changelog

### .V1
Create the compound component

### .V2

- Problem: moved sub-component (e.g: `<Toggle.On>`) to in a sub-element (e.g: `<div>...</div>`)
- Solution: Added more flexibility with Context

### .V3

- Problem: create your own button, but using the logic of the component
- Solution: Added a HOC 'withToggle'

### .V4

- Problem: using the same property of the context
- Solution: Added a variable called 'toggleContext' to our context, with this we don't have problem with overide our properties

### .V5

- Problem: when inspect the code using the React devtools, the name of the elements/components are the same.
- Solution: add `Component.displayName = ''` in your custom component and added displayName in withToggle (line: 33). Also create a variable separete for the components of use the withToggle (line: 38, 39, 40)

### .V6

- Problem: when a HOC component need create a ref.
- Solution: Create a new property `innerRef`

### .V7

- Problem: when we have our own custom component (Toggle) and there are new statics methods, the 'withToggle' not recognize or not overwrite.
- Solution: use the `Hoist Non React Statics` library
- Extra: [Static methods must be copied over](https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over)