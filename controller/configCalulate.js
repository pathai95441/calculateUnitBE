const express = require('express');
const router = express.Router();
const { getConfig } = require('../service/configCalulate')

router.get('/' ,  async (req, res, next) => {
    try {
        const badRequest = (error) => {
            return res.status(400).send(error)
        }
        const { name } = req.query

        if(!name){
            badRequest("name not found")
        }

        const config = await getConfig(name)

        if(!config){
            badRequest("name invalid")
        }

        return res.status(200).json(config)
    } catch (error) {
        return res.status(500).send(error.toString())
    }
  })

  module.exports = router;