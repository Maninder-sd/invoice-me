express=require('express')

router=express.Router()

router.get('/',(req,res)=>{
    console.log('inside invoice')
    res.status(200).json({
        message:'hello'
    })
})

module.exports = router;