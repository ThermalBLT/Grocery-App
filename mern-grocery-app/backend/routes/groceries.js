const router = require('express').Router();
const Grocery = require('../models/grocery.model');
let User = require('../models/grocery.model');

router.route('/').get((req, res) => {
    User.find()
        .then(groceries => res.json(groceries))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const date = Date.parse(req.body.date);

    const newGrocery = new Grocery({
        name,
        date,
    });

    newGrocery.save()
        .then(() => res.json('Grocery added'))
        .catch(err => json.status(400).json('Error ' + err))
});

router.route('/:id').get((req, res) => {
    Grocery.findById(req.params.id)
        .then(grocery => res.json(grocery))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) => {
    Grocery.findByIdAndDelete(req.params.id)
        .then(grocery => res.json('Grocery Removed'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Grocery.findById(req.params.id)
        .then(grocery => {
            grocery.name = req.body.name;
            grocery.date = Date.parse(req.body.date);

            grocery.save()
                .then(() => res.json('Grocery updated'))
                .catch(err => json.status(400).json('Error ' + err))
        })
        .catch(err => json.status(400).json('Error ' + err))
});

module.exports = router;