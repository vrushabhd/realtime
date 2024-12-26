console.log('Starting server...');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Get all employees
app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});
// Update employee metrics
app.put('/employees/:id', (req, res) => {
    const { id } = req.params;
    const { productivity, collaboration, communication } = req.body;
    if (productivity < 0 || collaboration < 0 || communication < 0) {
        return res.status(400).send('Metrics cannot be negative');
    }
    db.query(
        'UPDATE employees SET productivity = ?, collaboration = ?, communication = ? WHERE id = ?',
        [productivity, collaboration, communication, id],
        (err, results) => {
            if (err) return res.status(500).send(err);
            res.send('Employee updated successfully');
        }
    );
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));