const express=require('express');
const router=express.Router();
const usercontroller=require('../controllers/users_controller');

router.get('/profile',usercontroller.profile);
router.get('/points',usercontroller.profilepoints);
router.get('/sign-up',usercontroller.signUp);
router.get('/sign-in',usercontroller.signIn);
router.post('/create',usercontroller.create);
module.exports=router;