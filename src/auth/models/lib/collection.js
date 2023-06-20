
const base64 = require('base-64')
const bcrypt = require('bcrypt');
class Collection {
    constructor(model){
        this.model = model;
    }

async readUsername (username) {
        let records = null;
        
            records = await this.model.findOne({ where: { username:username } });
       
        return records;
    }

async read(data_id) {
        let records = null;
        if (data_id) {
            records = await this.model.findOne({ where: { id: data_id } });

        } else {
            records = await this.model.findAll();
        }
        return records;
    }
async createUser(username,password){
    const hashedPassword = await bcrypt.hash(password,5)
        let record = await this.model.create({
            username : username,
            password : hashedPassword
        });
        return record
    }
async create(ReqBody){
        let record = await this.model.create(ReqBody);
        return record
    }
async update(id,ReqBody){
        let record = await this.model.findOne({where:{id:id}})
        let result = await record.update(ReqBody)
        return result
    }
async delete(id){
        let record = await this.model.destroy({where:{id:id}})
        return record
    }
async signin(coded){
        console.log(coded)
        let splitted = coded.split(' ')
        let code = splitted.pop()
        let uncoded = base64.decode(code)
        let [username,password] = uncoded.split(':')
        let record = await this.model.findOne({where:{username:username}})
       return record

    }
    // async signin(coded){
    //     let splitted = coded.split(' ')
    //     let code = splitted.pop()
    //     let uncoded = base64.decode(code)
    //     let [username,password] = uncoded.split(':')
    //     let record = await this.model.findOne({where:{username:username}})
    //     if(record){
    //     if (await bcrypt.compare(password,record.password)){
    //     return record
    //     }else return("Invalid Login : wrong password")
    // } else return ("Invalid Login : this user is not exist")

    // }







}
module.exports = Collection