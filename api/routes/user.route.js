import express from 'express';
import { deleteUser, test, update,getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test' ,test)
router.post('/update/:id' ,verifyToken,update)
router.delete('/delete/:id' ,verifyToken,deleteUser)
router.get('/listings/:id' ,verifyToken,getUserListings)

export default router;
