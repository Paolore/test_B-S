const router = require('express').Router();
const dbTask = require('../db');


router.route('/task')
  .post(async (req, res) => {
    dbTask.createTask(req.body)
    res.status(201).json(dbTask.listTask());
  })
  .get(async (req, res) => {
    res.status(200).json(dbTask.listTask());
  })

router.route('/task/:TaskId')
  .patch(async (req, res) => {
    let { TaskId } = req.params;
    let { checked } = req.body;
    dbTask.editTask(TaskId, checked)
    res.status(200).json(dbTask.listTask());
  })
  .delete(async (req, res) => {
    let { TaskId } = req.params;
    dbTask.deleteTask(TaskId)
    res.status(200).json(dbTask.listTask());
  });

module.exports = router;