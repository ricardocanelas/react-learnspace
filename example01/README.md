# Example 01

This is a simple example using HOC and Render Props with the same component.

## How it works

**Render Props**

```js
const YourComponent = (props) => {
    // ...loading Posts
    return (
        <div>
            { props.render({ posts: 'dummy data' }) }
        </div>
    )
}

// Using:
<YourComponent render=(data => {
    return (
        <div>{data.posts}</div>
    )
}) />
```

**HOC**

```js
const withVersionAPP = (Component) => (props) => {
    return (
        <div>
            <Component {...props} version='1.0'>
        </div>
    )
}

const AnotherComponent = (props) => {
    return (
        <div>
            {...props.version}
        </div>
    )
}

// Using:
export default withVersionAPP(AnotherComponent)
```

## Check More

- [Render Props](https://reactjs.org/docs/render-props.html)
- [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)