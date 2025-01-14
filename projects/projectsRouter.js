const express = require('express')
const Projects = require('../data/helpers/projectModel.js')
const router = express.Router()

// working
router.post('/', async (req, res) => {
  try {
    const project = await Projects.insert(req.body)
    res.status(201).json(project)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "error"
    })
  }
})
// working
router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get()
    res.status(200).json(projects)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error retrieving projects',
    })
  }
})
// sorta working
router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.getProjectActions(req.params.id)
    if (project) {
      res.status(200).json(project)
    } else {
      res.status(404).json({
        message: 'Project not found'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error retrieving project',
    })
  }
})
// working
router.delete('/:id', async (req, res) => {
  try {
    const count = await Projects.remove(req.params.id)
    if (count > 0) {
      res.status(200).json({
        message: 'project has been deleted'
      })
    } else {
      res.status(404).json({
        message: 'project could not be found'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error removing project',
    })
  }
})
// working
router.put('/:id', async (req, res) => {
  try {
    const project = await Projects.update(req.params.id, req.body)
    if (project) {
      res.status(200).json(project)
    } else {
      res.status(404).json({
        message: 'The project could not be found'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error updating project',
    })
  }
})

module.exports = router;