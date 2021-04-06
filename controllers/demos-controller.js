module.exports = (app) => {
  const add = (req, res) => {
    const x = parseInt(req.params['x']);
    const y = parseInt(req.params['y']);
    res.send(`${x + y}`);
  }

  const subtract = (req, res) => {
    const a = parseInt(req.query['x']);
    const b = parseInt(req.query['y']);
    res.send(`${a - b}`)
  }

  app.get('/subtract', subtract);

  app.get('/add/:x/:y/', add);

  app.get('/', function (req, res) {
    res.send('Hello World');
  })
}

