require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// if (process.env.LOG_REQUEST_AND_RESPONSE_BODY === 'true') {
//     app.use((req, res, next) => {
//         console.log(req.query);
//         console.log(req.body);
//         next();
//     });
// }
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1/', indexRouter);
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     res.status(404).send({ message: 'The page you are looking for is not found!' });
// });
// // error handler
// app.use(function (err, req, res, next) {
//     console.log('err: ', err);
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.send({ message: 'Server Error !' });
// });
module.exports = app;
