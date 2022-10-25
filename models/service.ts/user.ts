import { rejects } from 'assert';
import { resolve } from 'path';
import userTable from '../service.ts/users.model';
class User {

    async count() {
        const count = await userTable.countDocuments() || 0;
        return count;
    }

    async list(page: any, limit: any) {
        return new Promise(async (resolve, reject) => {
            const query = userTable.find()
            .limit(limit * 1)
            .skip((page - 1) * limit);

            query.then((users) => {
                resolve(users);
            }).catch(err => {
                reject(err);
            })
        })
    }

    async get(id: string) {
        return new Promise(async (resolve, reject) => {
            const query = userTable.findById(id);
            query.then((users) => {
                resolve(users);
            }).catch(err => {
                reject(err);
            })
        })
    }

    async save(data: any) {
        return new Promise((resolve, reject) => {
            userTable.create(data,(err: any, item: any) => {
                if(err) {
                    reject(err);
                } else if(item) {
                    resolve(item);
                } else {
                    resolve(null);
                }
            })
        });
    }

    async update(id) {
        return new Promise((resolve, reject) => {
            userTable.findByIdAndUpdate(id, (err, item) => {
                if(err) {
                    reject(err);
                } else if(item) {
                    resolve(item);
                } else {
                    resolve(null);
                }
            })
        })
    }

    async delete(id) {
        return new Promise((resolve, reject) => {
            userTable.findByIdAndRemove(id, (err, item)=> {
                if(err) {
                    reject(err);
                } else if(item) {
                    resolve(item);
                } else {
                    resolve(null);
                }
            })
        })
    }

    async dbRequest(fn: Function, arg: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fn(arg);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        })
    }
}


export default {
    count: (new User()).count,
    list: (new User()).list,
    get: (new User()).get,
    save: (new User()).save,
    update: (new User()).update,
    delete: (new User()).delete,
    dbRequest: (new User()).dbRequest
}