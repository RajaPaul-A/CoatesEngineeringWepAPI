import { db } from '../db';
const createError = require('http-errors');

export function addUser(req: any, res: any){
    let user = db.addUser(req.body)
    res.status(201).json(user);
}

export function getAllUsers(req: any, res: any){
    let users = db.getAllUsers();
    if(users.length < 1) res.send("users not found... Please add user")
    res.send(users);
}

export function getUserById(req: any, res: any, next: any){
    let user = db.getUserById(req.params.id);
    if (!user) {
        return next(createError(404, 'Not Found'));
    }
    res.json(user);
}

export function deleteUserById(req: any, res: any){
    let id = db.deleteUserById(req.params.id);
    if(id == 0) res.send(`user with id: ${req.params.id} not found`)
    res.send(`user with id: ${id} deleted successfully`)
}