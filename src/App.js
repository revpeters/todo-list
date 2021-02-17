import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [{ id: 1 + Math.random(), value: "test" }, { id: 1 + Math.random(), value: "test2" }]
    }
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create item with uniq id
    //{id: 1.???, value: "test"}
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    console.log(newItem)

    //copy of current list of items
    //save spread of list
    const list = [...this.state.list];

    //add new item to list
    //[{id: 1.???, value: "test"}, {id: 1.???, value: "test2"}]
    list.push(newItem);
    console.log(list)

    //update state with new list and reset newItem input
    //re-render component and children with new list and reset the input value to empty string
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    //copy current list of items
    //save spread of list
    const list = [...this.state.list];

    //filter out item being deleted
    //return elements in array that don't match the item id we provide
    const updatedList = list.filter(item => item.id !== id);

    //re-render component and children with new list
    this.setState({ list: updatedList });
  }

  sendAlert() {
    alert("you clicked a list item");
  }

  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addItem()}
          >
            Add
          </button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id} onClick={this.sendAlert}>
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
