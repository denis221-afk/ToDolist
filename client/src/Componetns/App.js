import { Component } from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Search from "./search/Search";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    await this.getItems();
   }
   componentDidUpdate(prevProps, prevState) {
    if(this.state.data.length > prevState) {
      this.getItems();
    }
   }

  getItems = async () => {
    await axios
    .get('http://localhost:5000/list')
    .then(res => this.setState({
     data: res.data
    }))
  }


  onPriority = async (id) => {
   await this.setState(({data}) => {
      const index = data.findIndex(item => item.id == id)

      const old = data[index]
      const newItem = {...old, priority: !old.priority}
      const newArry = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newArry
      }
    })

   await this.saveData();
  }


  
  onFinish = async (id) => {
   await this.setState(({data}) => {
      const index = data.findIndex(item => item.id == id)

      const old = data[index]
      const newItem = {...old, finsh: !old.finsh}
      const newArry = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newArry
      }
    })
    this.saveData();
  }

onDelete = async (id) => {
 await this.setState(({data}) => {
    const index = data.findIndex(item => item.id == id);
    const before = data.slice(0, index);
    const after = data.slice(index + 1);
    const newArr = [...before, ...after];

    return{
      data:newArr
    }
  })
  this.saveData();
}
  

  saveData = async () => {
  const data = this.state.data
    await axios
        .post('http://localhost:5000/changeData', data).catch(err => console.log(err))
 }


 searchItem = (term) => {
  const data = this.state.data;
  const oldData = data;
    if(term.length > 0) {
      const items = data.filter(item => {
          return item.nameItem.indexOf(term) > -1
      })
      console.log(term.length)
      this.setState({
        data: items
    })
    } else{
      this.getItems();
    }
 }

  render() {
    const {data} = this.state
    const indexAllData = this.state.data.length
    const priorityIndex = this.state.data.filter(item => item.priority)
    const finishIndex = this.state.data.filter(item => item.finsh)
    return (
      <div className="App">
          <Header indexAll={indexAllData}  priorityIndex={priorityIndex} finishIndex={finishIndex}/>
          <Search onSearch={this.searchItem}/>
          <Body data={data} onToglePriority={this.onPriority}  onTogleFinish={this.onFinish} onDelete={this.onDelete}/>
          <Footer  getItems={() => this.getItems()}/>
      </div>
    );
  }  

}

export default App;
