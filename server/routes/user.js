import { Router } from 'express';
import * as controller from '../controllers/appControllers.js';

const router = Router();

// POST REQUESTS
router.route('/register').post(controller.register);
router.route('/register-mail').post();
router.route('/auth').post((req, res) => res.end());
router.route('/login').post(controller.login);

// GET REQUESTS
router.route('/user/:username').get(controller.getUser);
router.route('/generate-otp').get(controller.generateOTP);
router.route('/verify-otp').get(controller.verifyOTP);
router.route('/create-reset-session').get(controller.createResetSessions);

// PUT REQUESTS
router.route('/update-user').put(controller.updateUser);
router.route('/reset-password').put(controller.resetPassword);

export default router;