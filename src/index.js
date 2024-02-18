const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// app.get('/middleware',
//     function(req, res, next) {
//         if (['vethuong', 'vevip'].includes(req.query.ve)) {
//             req.face = 'gach gach gach!!!'
//             return next();
//         }
//         res.status(403).json({message: "Access denied"});
//     },
//     function(req, res, next) {
//         res.json({
//             message: 'Successfully',
//             face: req.face
//         });
//     }
// )

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {return a + b}
        }
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

// 127.0.0.1
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
