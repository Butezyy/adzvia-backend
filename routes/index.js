const express = require('express');
const router = express.Router();
const admin = require('../firebase');
const db = admin.firestore();

router.get('/', (req, res) => {
  res.json({ message: 'AdzVia backend running' });
});

router.get('/test', async (req, res) => {
  try {
    await db.collection('test').doc('status').set({ live: true });
    res.json({ success: true, message: 'Firebase working' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Firebase failed' });
  }
});

module.exports = router;
