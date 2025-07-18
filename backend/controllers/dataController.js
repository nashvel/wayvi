// @desc    Get admin-only data
// @route   GET /api/data/admin
// @access  Private (Admin, Superadmin)
exports.getAdminData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'This is protected data for admins and superadmins',
    user: req.user, // The protect middleware attaches the user here
  });
};
