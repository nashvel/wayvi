const express = require('express');
const router = express.Router();
const { getAdminData } = require('../controllers/dataController');
const { protect, authorize } = require('../middleware/auth');

// This route is protected and only accessible by users with the 'admin' or 'superadmin' role.
router.get('/admin', protect, authorize('admin', 'superadmin'), getAdminData);

module.exports = router;
