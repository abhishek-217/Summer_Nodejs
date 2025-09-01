const express = require('express');
const router = express.Router();


const person = require('./../models/person');

//  Data save for Person 

// In router file just app renamed router

router.post('/', async (req, res) => {

    try {

        const data = req.body // assume request body contain the person data

        // Create newPerson document using mongoose model
        const newPerson = new person(data);

        // Save newPerson to database
        const response = await newPerson.save();
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
        const data = await person.find();
        console.log("Data Fetched");
        res.status(200).json({ data });

    } catch (err) {
        console.log("Error saving person", err);
        res.status(500).json({ error: "Server error" })
    }
}) 

// In company GET use like this for privacy 


// router.get('/:workType', async (req, res) => {
//     try {
//         const workType = req.params.workType;  //"req" use to get param from url
//         if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
//             const response = await person.find({ work: workType });
//             console.log('response fetched');
//             res.status(200).json({ response });
//         } else {
//             res.status(404).json({ error: 'Invalid work type' });
//         }
//     } catch (err) {
//         console.log("Error saving person", err);
//         res.status(500).json({ error: "Server error" })
//     }
// })


router.put('/:id',async(req,res) =>{
    try{
        const personId = req.params.id; //Extract id from URL
        const updatedPersonData = req.body;

        const response = await person.findByIdAndUpdate(personId,updatedPersonData, {
            new : true, //Return updated document
            runValidators : true, // Run mongoose validation

        })

        if(!response){
            return res.status(404).json({error: 'Person not found'});

        }
        
        console.log('Data updated');
        res.status(200).json(response);
    }catch(err){
        console.log("Error saving person", err);
        res.status(500).json({ error: "Server error" });
    }
    
    
})


router.delete('/:id', async(req,res)=>{
    try{
        const PersonID = req.params.id;
        
        const response = await person.findByIdAndDelete(PersonID);
        
        if(!response){
            return res.status(404).json({error: 'Person not found'});
            
        }
        console.log('Data deleted');
        res.status(200).json({message : "Person Deleted Successfully"});

    }catch(err){
        console.log("Error saving person", err);
        res.status(500).json({ error: "Server error" });

    }
})

module.exports = router;