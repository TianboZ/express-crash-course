import express from 'express';
const  uuid = require('uuid'); // import ... does not work for uuid package
import members from "../../Members"

const router = express.Router();

// get all members
router.get('/', (req, res) => {
    // return json format

    res.cookie('username', 'tainbo'); // write cookie
    res.json(members)
});

// get all individual member (url parameter)
router.get('/:id', (req, res) => {
    // return json format
    //res.send(req.param.id)
    console.log(req.params.id)
    res.json(members.filter(member =>
        member.id === parseInt(req.params.id)
    ));
});

// create member
router.post('/', (req, res) => {
    //res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active',
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({message: 'please include a name and email'}); // 400 is bad request
    }

    members.push(newMember);
    res.json(members);
})
export default router;
//module.exports = router;