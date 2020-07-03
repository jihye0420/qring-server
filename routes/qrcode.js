const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const qrcodeController = require('../controllers/qrcode');
const meetingModel = require('../models/meeting');
const moment = require('moment');
const { success } = require('../modules/util');

/**
 * QR 코드 생성
 */
router.get('/:meetingId', auth.checkToken, qrcodeController.makeQrcode);

/**
 * 웹 출석 폼 제출
 */
router.post('/:meetingId', qrcodeController.submitForm);

module.exports = router;