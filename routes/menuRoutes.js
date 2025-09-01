const express = require('express');

const router = express.Router();


router.post('/', async (req, res) => {

    try {

        const data = req.body // assume request body contain the person data

        // Create newMenu item document using mongoose model
        const menuItem = new menu(data);

        // Save menuItem to database
        const response = await menuItem.save();

        console.log("Data Saved Succesfully");
        res.status(200).json({ response });

    }
    catch (err) {
        console.log("Error saving person", err);
        res.status(500).json({ error: "Server error" })
    }

})




router.get('/', async (req, res) => {
    try {
        const data = await menu.find();
        console.log("Data Fetched");
        res.status(200).json({ data });

    } catch (err) {
        console.log("Error saving person", err);
        res.status(500).json({ error: "Server error" })
    }
})



// In company GET use like this for privacy


router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.workType;
        
        if(taste == 'Sweet' || taste == 'Sour' || taste == 'Spicy'){
            const response = await menu.find({swad : taste});
            console.log('response fetched');
            res.status(200).json({response});
        }else{
            res.status(404).json({error : "Bhai ye konsa Taste hai"});
        }
    } catch (err) {
        console.log("Error saving person", err);
        res.status(500).json({ error: "Server error" })
    }
})
