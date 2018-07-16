# Example 03

This is a simple example about how to use Context.

## How it works

In this case we are using the new [Context](https://reactjs.org/docs/context.html) API, which is a way to pass data through the component tree without having to pass props down manually at every level.

**Example**

MyContext.js

```js
const MyContext = React.createContext({ firstName: 'Ricardo' }) // defaultValue

const MyComponent = (props) => (
    <MyContext.Consumer>
        {(data) => (
            <div>{data.firstname}</div>
            <div>{data.lastname || 'do not have lastname'}</div>
        )}
    </MyContext.Consumer>
)

const App = (props) = (
    <MyContent.Provider value={{ firstname: 'Ricardo', lastName: 'Canelas' }}>
        <MyComponent />
    </MyContent.Provider>
)

```

## Futher Reading

- [Context](https://reactjs.org/docs/context.html)
- [Legacy-Context](https://reactjs.org/docs/legacy-context.html)
