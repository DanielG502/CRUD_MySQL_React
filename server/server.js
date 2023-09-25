import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'React-CRUD-MySQL-NodeJs',
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM Student';
    db.query(sql, (err, result) => {
        if (err) return res.json({ Mesagge: 'Error inside Server' });
        return res.json(result);
    });
});

app.post('/Student', (req, res) => {
    const sql = 'INSERT INTO Student (`Name`, `Email`) VALUES (?)';
    const vlaues = [req.body.name, req.body.email];

    db.query(sql, [vlaues], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.get('/Read/:ID', (req, res) => {
    const sql = 'SELECT * FROM Student WHERE ID = ?';
    const ID = req.params.ID;

    db.query(sql, [ID], (err, result) => {
        if (err) return res.json({ Mesagge: 'Error inside Server' });
        return res.json(result);
    });
});

app.put('/Edit/:ID', (req, res) => {
    const sql = 'UPDATE Student SET `Name`=?, `Email`=? WHERE ID=?';
    const id = req.params.ID;

    db.query(sql, [req.body.name, req.body.email, id], (err, result) => {
        if (err) return res.json({ Mesagge: 'Error inside Server: AppEdit' });
        return res.json(result);
    });
});

app.delete('/Delete/:ID', (req, res) => {
    const sql = 'DELETE FROM Student WHERE ID = ?';
    const id = req.params.ID;

    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Mesagge: 'Error inside Server: AppDelete' });
        return res.json(result);
    });
});

app.listen(8081, () => {
    console.log('Listening');
});
