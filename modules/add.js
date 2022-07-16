const uuid = require('uuid');
const fs = require('fs');
const path = require('path');



class Add {
  constructor(nameItem, priority, finsh) {
        this.nameItem = nameItem
        this.priority = priority
        this.finsh = finsh
        this.id = uuid.v4()
  }


  toJson() {
    return {
        nameItem: this.nameItem,
        priority: this.priority,
        finsh: this.finsh,
        id: this.id
    }
  }

  async save() {
    const items = await Add.getAll()
    items.push(this.toJson())
    return new Promise((resolve, reject) => {
        fs.writeFile(
            path.join(__dirname, '..' , 'data' , 'data.json'),
            JSON.stringify(items),
            (err) => {
                if(err) {
                    reject()
                } else {
                    resolve()
                }
            }
        )
    })
  }

  static getAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(
            path.join(__dirname, '..' , 'data' , 'data.json'),
            'utf-8', 
            (err, content) => {
                if(err) {
                    reject(err, "redsa")
                } else{
                    resolve(JSON.parse(content))
                }
            }
        )
        
    })
  }


}






module.exports = Add