const fs = require('fs');
const path = require('path');



class SaveData {
    constructor(data) {
        this.data = data
    }


    save() {
        const data = this.data;
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..' , 'data' , 'data.json'),
                JSON.stringify(data),
                (err) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }
}
module.exports = SaveData