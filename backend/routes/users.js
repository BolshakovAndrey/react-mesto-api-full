const router = require('express').Router();

const {
  getUsers,
  getCurrentUser,
  getUserById,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

const {
  validateUserId,
  validateProfileUpdate,
  validateAvatarUpdate,
} = require('../middlewares/validators');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validateUserId, getUserById);
router.patch('/me', validateProfileUpdate, updateProfile);
router.patch('/me/avatar', validateAvatarUpdate, updateAvatar);

module.exports = router;
