const {Router} = require("express")
const res = require("express/lib/response")
const BlogSite =  require("../model/BlogSite")

const router = Router()

router.get('/', async (req,res) =>{

    const mySite = await BlogSite.find({}).lean()

    res.render('index', {
        title: 'Todo List',
        isIndex:  true,
        mySite
    })
})


router.get('/create', (req, res) =>{
    res.render('Create List', {
        title: "Todo List",
        isCreate: true
    })
})

router.post('/create', async (req,res) =>{
    const site = new BlogSite({
        title: req.body.title,
    })
    await site.save()

    res.redirect('/')
})


module.exports = router