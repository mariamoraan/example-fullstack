const saySomething = (req, res, next) => {
    res.json({
        body: 'Hello from the server!'
    });
};

export default saySomething;