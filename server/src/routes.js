module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', async (req, res) => {
    const artwalks = await db.getArtwalks();
    res.json(artwalks);
  });

  router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const artwalk = await db.getArtwalk(id);
    res.json(artwalk);
  });

  router.post('/', async (req, res) => {
    const artwalk = {
      name: req.body.name,
      bilds: [] // Empty bild array
    };
    const newArtwalk = await db.createArtwalk(artwalk);
    res.json(newArtwalk);
  });

  router.post('/:id/bilds', async (req, res) => { 
    const updatedArtwalk = await db.addBild(req.params.id, req.body.bild);
    console.log("updatedArtwalk", updatedArtwalk);
    res.json(updatedArtwalk);
  });

  return router;
};