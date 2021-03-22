## 2.9 Style

### 2.9.1 Inline Style

```js
class App extends Component {
  render() {
    const style = { width: 200, height: 200, backgroundColor: 'red' };
    return <div style={style}></div>;
  }
}
```

### 2.9.2 Imported Style

```js
import styles from './Button.module.css';
class Button extends Component {
  render() {
    return <div className={styles.error}>Error Button</div>;
  }
}
```

### 2.2.3 Global style

```js
import './styles.css';
```

## 2.10 ref

> https://reactjs.org/docs/refs-and-the-dom.html

### 2.10.1 createRef

This would set a connection between this.inputRef and Dom element

```jsx
class Input extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => console.log(this.inputRef.current)}>
          button
        </button>
      </div>
    );
  }
}
```

### 2.10.2 function attributes

/为当前的 component 添加一个属性值,input,而这个值就是 input Dom Elment 对象

```jsx
class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.input = input)} />
        <button onClick={() => console.log(this.input)}>button</button>
      </div>
    );
  }
}
```

### 2.10.3 ref String (Not suggested)

```jsx
class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="username" />
        <button onClick={() => console.log(this.refs.username)}>button</button>
      </div>
    );
  }
}
```

### 2.10.4 Get the component instance

click an button and let input get focused

```js
//Input.js
class Input extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.focusInput = this.focusInput.bind(this);
  }
  focusInput() {
    this.inputRef.current.focus();
  }
  render(){
      return(
          <div>
          <input type='text' ref={this.inputRef}>
          </div>
      )
  }
}
```

```js
class App extends Component {
  constructor() {
    super();
    this.inputComponentRef = React.createRef();
  }
  render() {
    return (
      <div className="App">
        <Input ref={this.inputComponentRef} />
        <button onClick={() => this.inputComponentRef.current.focusInput()}>
          Button
        </button>
      </div>
    );
  }
}
```
