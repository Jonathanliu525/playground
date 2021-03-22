# Component

## 3.1 What is component

## 3.2 Create Compoent

### 3.2.1 Class Component

```js
class App extends Component {
  render() {
    return <div>Hello</div>;
  }
}
```

### 3.2.2 Functional Component

```js
const Person = () => {
  return <div>Hello</div>;
};
```

Two things need to note

- Capitalize the first letter
- The outer must be a root element

## 3.3 Component Props

### 3.3.1 props

Passing data from parents to children

Notice:

- props cannot be changed by children
- when the source of props changed, props in component will be changed as well

### 3.3.2 default value for props

```js
class App extends Component {
  static defaultProps = {};
}
```

```js
function ThemeButton(props) {}

ThemeButton.defaultProps = {
  theme: 'secondary',
  label: 'Button text',
};
```

### 3.3.3 Component children

```js
<Person>Component</Person>
```

```js
const Person = (props) => {
  return;
  <div>{props.children}</div>;
};
```

## 3.4 Class component state

### 3.4.1

### 3.4.2 change component state

`setState` https://reactjs.org/docs/faq-state.html#what-does-setstate-do

## 3.5 class component lifecycle

> https://reactjs.org/docs/react-component.html >https://aravishack.medium.com/react-js-life-cycle-of-components-6267eb79b564

![](https://miro.medium.com/max/700/1*Q1JUFppwxVg8FgzYbZ-eIA.png)

During Mounting, the following methods are called in order —
constructor → getDerivedStateFromProps →render →componentDidMount.

During Updating, the following methods are called in order —
getDerivedStateFromProps →shouldComponentUpdate(result is true or false), →render, →getSnapshotBeforeUpdate →componentDidUpdate

getSnapshotBeforeUpdate 方法会在组件完成更新之前执行,用于执行某种逻辑或计算,返回值可以再 componentDidUpadte 方法中的第三个参数中获取,就是说在组件更新之后可以拿到这个值再去做其他的事情

```js
getDerivedStateFromProps(prevProps,prevState){
    return 'snapshot'
}
```

During Unmounting, only componentWillUnmount is called.During this time,we can do somehitng to clear like timer

### 3.5 Context

> https://reactjs.org/docs/context.html

Context is designed to share data that can be considered “global” for a tree of React components

```js
//userContext.js
import React from 'react';

const userContext = React.createContext();
export const UserProvider = userContext.Provider;
export const UserConsumer = userContext.Consumer;
```

```js
class App extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Hi this is User context">
          <A />
        </UserProvider>
      </div>
    );
  }
}
```

```js
class A extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(value) => {
            return <div>{value}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}
```
