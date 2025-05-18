const controller = {};
const { emotions } = require("../models/data");


controller.show = (req, res) => {
    let emotion = req.query.emotion;
    let selectedEmotions = emotions.filter((item) => item.title === emotion);
    let quotePath = "/task1/default.jpg"
    if (selectedEmotions.length > 0) {
        quotePath = selectedEmotions[0].quotePath;
    }
    // console.log(emotion);
    // console.log(quotePath);
    
    res.locals.emotions = emotions;
    res.locals.quotePath = quotePath;
    res.render("task1");
};

module.exports = controller;