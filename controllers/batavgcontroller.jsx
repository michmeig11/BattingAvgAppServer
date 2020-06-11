const router = require('express').Router()

const BatAvg = require('../db').import('../models/battingavg');

router.get('/', (req, res) => {
    BatAvg.findAll()
        .then(bat => res.status(200).json({
            bat: bat
        }))
        .catch(err => res.status(500).json({
            error:err
        }))
})



router.post('/', (req, res) => {
    const batAvgRequest = {
        nameOfBallPark: req.body.nameOfBallPark,
        date: req.body.date,
        location: req.body.location,
        numberOfGames: req.body.numberOfGames,
        numberOfHits: req.body.numberOfHits,
        numberOfAtBats: req.body.numberOfAtBats,
        battingAvg: req.body.battingAvg,

    }

    
    BatAvg.create(batAvgRequest)
        .then(bat => res.status(200).json({
            bat: bat
        }))
        .catch(err => res.status(500).json({
            error: err
        }))

})

router.get('/:id', (req, res) => {
    BatAvg.findOne({
        where: {
            id: req.params.name
        }
    })
        .then(bat => res.status(200).json({
            bat: bat
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.put('/:id', (req, res) => {
    BatAvg.update(req.body, {
        where: {
            id: req.params.id
        }
        .then(bat => res.status(200).json({
            bat: bat
        }))
        .catch (err => res.status(500).json({
            error: err
        }))
    })
})


router.delete('/:id', (req,res) => {
    BatAvg.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(bat => res.status(200).json ({
        bat: bat
    }))
    .catch (err => res.status(500).json({
        error: err
    }))
})

module.exports = router;