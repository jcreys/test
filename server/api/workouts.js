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
router.post('/:id', async (req, res, next) => {
  try {
    console.log('JJJJJJJ', req.body.html)
    const user = await User.findByToken(req.headers.authorization);
    res.status(201).send(await Workout.create({
        title: req.body.title[0].title, 
        html: req.body.html,
        userId: user.id
    }))
  } catch (err) {
    next(err)
  }
})
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const workout = await Workout.findOne({
        where: {
            id: req.params.id,
            userId: user.id
        }
    })
    await workout.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
