const express = require('express')
const Actions = require('../data/helpers/actionModel.js')
const router = express.Router()

// working
router.get('/', async (req, res) => {
  try {
    const actions = await Actions.get()
    res.status(200).json(actions)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error retrieving actions',
    })
  }
})
// working
router.delete('/:id', async (req, res) => {
  try {
    const count = await Actions.remove(req.params.id)
    if (count > 0) {
      res.status(200).json({
        message: 'action has been deleted'
      })
    } else {
      res.status(404).json({
        message: 'action could not be found'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error removing action',
    })
  }
})
// working
router.post('/:id', async (req, res) => {
  try {
    const project = await Actions.insert({
      project_id: req.params.id,
      description: req.body.description,
      notes: req.body.notes
    })
    res.status(201).json(project)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "error"
    })
  }
})
// working
router.put('/:id', async (req, res) => {
  try {
    const action = await Actions.update(req.params.id, req.body)
    if (action) {
      res.status(200).json(action)
    } else {
      res.status(404).json({
        message: 'The action could not be found'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error updating action',
    })
  }
})

module.exports = router;