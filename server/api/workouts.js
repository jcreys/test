const router = require('express').Router()
const { models: { User, Workout }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await Workout.findAll({
        where: {userId: user.id}
    }))
  } catch (err) {
    next(err)
  }
})
router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.status(201).send(await Workout.create({...req.body, userId: user.id}))
  } catch (err) {
    next(err)
  }
})
