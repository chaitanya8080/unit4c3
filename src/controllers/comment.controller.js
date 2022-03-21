

const express = require("express");

const User = require("../model/comment.model");

const router = express.Router();

router.post("",async (req,res)=>{
    try {
        const post = await User.create(req.body);
        return res.send(post);
    } catch (error) {
        return res.send(error);
    }
});

router.get("",async (req,res)=>{
    try {
        const one = await User.findById(req.params.id).lean().exec();
        return res.send(one);
    } catch (error) {
        return res.send(error);
    }
});

module.exports = router;