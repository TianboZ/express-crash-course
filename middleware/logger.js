import moment from "moment"

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} :${moment().format()}`);
    next(); // call next middleware function in the stack
}

export default logger;