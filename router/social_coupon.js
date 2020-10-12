const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken')
const { addsocialcoupons, getCatagoryCoupons, deletesocialcoupons, updatesocialcoupons, getsocialcoupons } = require('../controller/social_coupon');


// router.post('/user/login', getLogin)
router.post('/socialcoupons', addsocialcoupons)
router.get('/socialcoupons', getsocialcoupons)
router.put('/socialcoupon/:id', updatesocialcoupons)
router.delete('/socialcoupon/:id', deletesocialcoupons)
router.get('/socialcoupon/:id', getCatagoryCoupons)


module.exports = router;