'use strict';
const express = require('express');
const router = express.Router();
const { userModel }=require('../models/index');
const bcrypt = require('bcrypt');
const base64 = require('base-64')
const basicMiddleware = require('../middleware/basic')

router.get('/users',getAllUsers)
router.delete('/user/:id',deleteUser)
router.post("/signup",adduser);
router.post('/signin',basicMiddleware,siginUser)


async function getAllUsers(req,res){
    const URL = await userModel.read()
    res.status(200).send(URL)
}

async function deleteUser (req,res){
    const URL = await userModel.delete(req.params.id)
    res.status(204).json(URL)
}

async function adduser(req,res){
    const URL = await userModel.createUser(req.body.username,req.body.password);
    res.status(201).json(URL);
};

async function siginUser(req,res){
    let coded =  base64.encode(`${req.body.username}:${req.body.password}`)
    const URL = await userModel.signin(coded)
    res.status(200).json(URL)
}

module.exports = router;