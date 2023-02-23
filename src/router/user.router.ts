import { addUser, getAllUsers, getUserById, deleteUserById } from "../controller/user.controller";
var express = require('express');
export var userRoute = express.Router({mergeParams: true});

userRoute.post('/', addUser);
userRoute.get('/', getAllUsers)
userRoute.get('/:id', getUserById);
userRoute.delete('/:id', deleteUserById);
