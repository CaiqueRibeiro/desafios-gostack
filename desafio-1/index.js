const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

function checkProjectExists(req, res, next) {

  const { id } = req.params;

  if(projects.findIndex(project => project.id == id) < 0) {
    return res.status(400).json({ error: "ID does not exists"});
  };

  return next();

};

app.use((req, res, next) => {
  console.count('Requisitions');

  next();
})

app.get('/projects', (req, res) => {
    return res.json(projects);
});

app.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id: id,
    title: title,
    tasks: []
  };

  projects.push(project);

  return res.json(projects);

});

app.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  let project = projects.map(project => {

      if(project.id == id) {
        project.title = title;
      }

  });

  app.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    projects.splice(projectIndex, 1);

    return res.send();

  });

  return res.json(projects);
});

app.post('/projects/:id/tasks', checkProjectExists, (req, res) => {

  const { id } = req.params;
  const { task } = req.body;

  const project = projects.find(project => project.id == id);

  project.tasks.push(task);

  return res.json(project);

})


app.listen(3000);
