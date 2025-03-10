import express from 'express'
import { createListing,deleteuserLisitng,updateuserLisitng,getLisitng ,getUserListings} from '../controllers/listing.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.post('/create',verifyToken,createListing)
router.delete('/delete/:id',verifyToken,deleteuserLisitng)
router.post('/update/:id',verifyToken,updateuserLisitng)
router.get('/get/:id',getLisitng)
router.get('/get', getUserListings);

export default router;