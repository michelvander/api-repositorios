const express = require("express");
const cors = require("cors");
const { uuid } = require('uuidv4');
const { json } = require("express");

// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const like = 0;

  const repositorie = { id: uuid(), title, url, techs, like };
  repositories.push(repositorie);

  return response.json(repositorie);
});

app.put("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const {title, url, techs} = request.body;

  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);

  if(repositorieIndex < 0){
    return response.status(400).json({error: 'repositorie not found'});
  }

  const repositorie = {
    id,
    title,
    url,
    techs,
    like: repositories[repositorieIndex].like
  };
  repositories[repositorieIndex] = repositorie;

  return response.json(repositorie);
});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const repositorieIndex = repositories.findIndex(project => project.id === id);

  if(repositorieIndex < 0){
    return response.status(400).json({error: 'repositorie not found'});
  }

  repositories.splice(repositorieIndex, 1);

  response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params;
  const {title, url, techs} = request.body;

  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);

  if(repositorieIndex < 0){
    return response.status(400).json({error: 'repositorie not found'});
  }

  const repositorie = {
    id,
    title,
    url,
    techs,
    like: repositories[repositorieIndex].like + 1
  };
  repositories[repositorieIndex] = repositorie;

  return response.json(repositorie);
});

module.exports = app;