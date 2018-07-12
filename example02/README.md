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