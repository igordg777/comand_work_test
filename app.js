const express = require("express");
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем views(hbs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Отображаем главную страницу с использованием шаблона "index.hbs"
app.get('/', function (req, res) {
    res.render('index', req.query);
});

// Отображаем контакты с использованием шаблона "contacts.hbs"
app.get('/contacts', function (req, res) {
    res.render('contacts', req.query);
});

// Отображаем контакты с использованием шаблона "about_us.hbs"
app.get('/about_us', function (req, res) {
    res.render('about_us', req.query);
});

// Отображаем контакты с использованием шаблона "profile.hbs"
app.get('/profile', function (req, res) {
    res.render('profile', req.query);
});

// Отображаем Акции с использованием шаблона "promo.hbs"
app.get('/promo', function (req, res) {
    res.render('promo', req.query);
});

// Отображаем контакты с использованием шаблона "about_us.hbs"
app.get('/about_us', function (req, res) {
    res.render('about_us', req.query);
});

// Отображаем контакты с использованием шаблона "profile.hbs"
app.get('/profile', function (req, res) {
    res.render('profile', req.query);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on " + port));