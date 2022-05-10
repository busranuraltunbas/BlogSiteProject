const {Router} = require("express")
const res = require("express/lib/response")
const BlogSite =  require("../model/BlogSite")

const router = Router()

router.get('/', async (req,res) =>{

    const mySite = await BlogSite.find({}).lean()

    res.render('index', {
        title: 'Books List',
        isIndex:  true,
        mySite
    })
})


router.get('/library', (req, res) =>{
    res.render('Library List', {
        title: "Books List",
        isLibrary: true
    })
})

router.post('/library', async (req,res) =>{
    const site = new BlogSite({
        title: req.body.title,
    })
    await site.save()

    res.redirect('/')
})



router.get('/technology', (req, res) =>{
    res.render('Technology List', {
        title: "Books List",
        isTechnology: true
    })
})

router.post('/technology', async (req,res) =>{
    const site = new BlogSite({
        title: req.body.title,
    })
    await site.save()

    res.redirect('/')
})


router.get('/toy', (req, res) =>{
    res.render('Toy List', {
        title: "Books List",
        isToy: true
    })
})

router.post('/toy', async (req,res) =>{
    const site = new BlogSite({
        title: req.body.title,
    })
    await site.save()

    res.redirect('/')
})

router.get('/electronic', (req, res) =>{
    res.render('Electronic List', {
        title: "Books List",
        isElectronic: true
    })
})

router.post('/electronic', async (req,res) =>{
    const site = new BlogSite({
        title: req.body.title,
    })
    await site.save()

    res.redirect('/')
})


module.exports = router