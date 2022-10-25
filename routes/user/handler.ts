import { Request, Response, NextFunction } from 'express';
import User from '../../models/service.ts/users.model';
import Add from './add';
import Get from './get';
import Update from './update';

class UserHandler {
    async list(req: Request, res: Response) {
        const { page = 1, limit = 10 } = req.query;
        const response = await Get.list(page, limit);
        return res.json(response).status(200);
    }

    async get(req: Request, res: Response) {
        const userId = req.params.id;
        const response = await Get.get(userId);
        return res.json(response).status(200);
    }

    async create(req: Request, res: Response) {
        const data = req.body;
        const response = await Add.user(data);
        return res.json(response).status(200);
    }
    
    async update(req: Request, res: Response) {
        const data = req.params.id;
        const response = await Update.user(data);
        return res.json(response).status(200);
    }


}


module.exports = {
    list: new UserHandler().list,
    get: new UserHandler().get,
    create: new UserHandler().create,
    update: new UserHandler().update
};