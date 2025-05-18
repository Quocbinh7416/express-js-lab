const controller = {};


controller.show = (req, res) => {
    // GET METHOD
    // let salary = isNaN(req.query.salary) ? 0 : parseFloat(req.query.salary);

    res.render("task2");
};

controller.showSalary = (req, res) => {
    // POST METHOD => using body
    let salary = isNaN(req.body.salary) ? 0 : parseFloat(req.body.salary);
    let jar55 = (salary * 0.55).toFixed(2);
    let jar10 = (salary * 0.1).toFixed(2);
    let jar5 = (salary * 0.05).toFixed(2);
    res.render("task2", {jar55, jar10, jar5});
}

module.exports = controller;