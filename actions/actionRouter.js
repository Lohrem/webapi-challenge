const express = require('express')
const Actions = require('../data/helpers/actionModel')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const actions = await Actions.get(req.query)
    res.status(200).json(actions)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error retrieving actions',
    })
  }
})

module.exports = router;
