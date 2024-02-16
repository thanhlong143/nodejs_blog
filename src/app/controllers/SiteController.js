const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({})
        .then(courses => {
            res.json(courses);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
