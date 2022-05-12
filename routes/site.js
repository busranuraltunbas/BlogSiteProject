const {Router} = require("express")
const res = require("express/lib/response")
const BlogSite =  require("../model/BlogSite")
const mongo = require('mongodb').MongoClient
var assert = require('assert')

var url = 'mongodb://localhost:27017/myFirstDatabase';

const router = Router()

/*const database = 'myFirstDatabase';
const collection = 'book_data';*/


router.get('/get_data', function(req, res) {
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        var cursor = client.db.collection('book_data').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            db.close();
            res.render('/', {items: resultArray});
        });
    })
})

router.post('/insert', function(req, res){
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        db.collection('book_data').insertOne(item, function(err, db){
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        });
    });
})





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