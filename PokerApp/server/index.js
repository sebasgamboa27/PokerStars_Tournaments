const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const { ESRCH } = require('constants');
const app = express();


let dbConnString = `mssql://SA:<Poker1234>@localhost/Poker`;

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Theather server listening on port 3000!');
});

app.post('/getPlayers', async function (req, res) {
  await sql.connect(dbConnString);
  
  const result = await sql.query(`SELECT * FROM Players`);                

  res.send(result.recordset);
});

app.post('/getTournaments', async function (req, res) {
  await sql.connect(dbConnString);
  
  const result = await sql.query(`SELECT * FROM Tournaments`);                

  res.send(result.recordset);
});


app.post('/insertTournament', async function (req, res) {
  await sql.connect(dbConnString);

  const Name = req.body.Name;
  const Date = req.body.Date
  
  const result = await sql.query(`INSERT INTO Tournaments VALUES ('${ Date }',0,'${ Name }')`);                

  res.send(result.recordset);
});


app.post('/getPlayerID', async function (req, res) {
  await sql.connect(dbConnString);

  const Name = req.body.Name;
  
  const result = await sql.query(`SELECT ID FROM Players where Name = '${ Name }'`);                

  res.send(result.recordset);
});


app.post('/getTournamentID', async function (req, res) {
  await sql.connect(dbConnString);

  const Name = req.body.Name;
  
  const result = await sql.query(`SELECT ID FROM Tournaments where Name = '${ Name }'`);                

  res.send(result.recordset);
});

app.post('/getWins', async function (req, res) {
  await sql.connect(dbConnString);

  const PlayerID = req.body.PlayerID;
  
  const result = await sql.query(`SELECT COUNT(*) FROM Winners WHERE First = ${PlayerID}`);                

  res.send(result.recordset);
});

app.post('/getParticipations', async function (req, res) {
  await sql.connect(dbConnString);

  const PlayerID = req.body.PlayerID;
  
  const result = await sql.query(`SELECT COUNT(*) FROM Participations WHERE PlayerID = ${PlayerID}`);                

  res.send(result.recordset);
});


app.post('/getTournamentWinner', async function (req, res) {
  await sql.connect(dbConnString);

  const TournamentID = req.body.TournamentID;
  
  const result = await sql.query(`SELECT p.Name FROM Winners as w, Players as p WHERE w.TournamentID = ${TournamentID} AND w.First = p.ID`);                

  res.send(result.recordset);
});


app.post('/insertParticipation', async function (req, res) {
  await sql.connect(dbConnString);

  const PlayerID = req.body.PlayerID;
  const TournamentID = req.body.TournamentID
  
  const result = await sql.query(`INSERT INTO Participations VALUES ('${ PlayerID }','${ TournamentID }')`);                

  res.send(result.recordset);
});

app.post('/insertWinners', async function (req, res) {
  await sql.connect(dbConnString);

  const FirstPlace = req.body.FirstPlace;
  const SecondPlace = req.body.SecondPlace;
  const TournamentID = req.body.TournamentID
  
  const result = await sql.query(`INSERT INTO Winners VALUES (${ TournamentID },${ FirstPlace },${ SecondPlace })`);                

  res.send(result.recordset);
});


app.post('/updatePlayersMoney', async function (req, res) {
  await sql.connect(dbConnString);

  const PlayerID = req.body.PlayerID;
  const Money = req.body.Money;
  
  const result = await sql.query(`UPDATE Players SET Money += ${Money} WHERE ID = ${PlayerID};`);                

  res.send(result.recordset);
});

app.post('/updateTournamentMoney', async function (req, res) {
  await sql.connect(dbConnString);

  const TournamentID = req.body.TournamentID;
  const Money = req.body.Money;
  
  const result = await sql.query(`UPDATE Tournaments SET Money += ${Money} WHERE ID = ${TournamentID};`);                

  res.send(result.recordset);
});