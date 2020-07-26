import React from 'react';
import logo from './logo.svg';
import Listitem from './Listitem';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }
  render(){
    return(
      <>
      <h1>ToDo</h1>
      <div className="App">
        <header>
          <form id="todo" onSubmit={this.addItem}>
            <input 
              type="text"
              placeholder="Enter text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <Listitem items={this.state.items}
        deleteItem ={this.deleteItem}></Listitem>

        <footer className="footer">
          <p>
            &copy; | Designed by MD FAIZ |
          </p>
        </footer>

      </div>
      </>
    );
  }
}

export default App;
