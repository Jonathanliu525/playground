# 4 Form

> https://reactjs.org/docs/forms.html

## 4.1 Contorlled Component

React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## 4.2 Uncontrolled Component

```js
class App extends Component {
  constructor() {
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = (e) => {
    console.log(this.username.value);
    e.preventDefault();
  };
  render() {
    <form onSubmit={this.onSubmit}>
      <input type="text" ref={(username) => (this.username = username)} />
    </form>;
  }
}
```
