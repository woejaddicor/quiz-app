const logger = (req) => {
	console.log(req.method, req.originalUrl);
};

module.exports = logger;
