import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import router from './routes/projects.js';

const app = express();

app.use(logger('dev'));
app.use(
    cors(
      {
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
        credentials: true, mode: "no-cors",
    }
    )
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', router);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})


// var whitelist = ["http://example1.com", "http://example2.com"];
// export const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
// };

// app.listen(80, function () {
//     console.log("CORS-enabled web server listening on port 80");
// });


export default app;
