const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'callhub'
});


exports.populateDatabase = (req,res) => {
    let tickets = req.body;
    let sql;
        sql = `INSERT INTO support (issue_by,issue,status,category,created_at,updated_at) VALUES ?`;
        console.log(tickets)
        temp = tickets.map(data => [data.issue_by,data.issue,data.status,data.category,data.created_at,data.updated_at])
        connection.query(sql, [temp],(error, results, fields) => {
        console.log("query executed")
        //connection.end(err => (err) ? console.log("Error occurred",err) : console.log("Connection Ended"));
        if (error) return res.json({error: error});
        return res.json({result: results});
    });
}


exports.getAllTickets = (req,res) => {
    let sql;
    sql =  `select * from support`
    if(req.query.order){
        sql = `select * from support order by title ${req.query.order}`;
    }
    if (req.query.orderby && req.query.order) {
        sql = `select * from support order by ${req.query.orderby} ${req.query.order}`;
    }
    connection.query(sql,(error, results, fields) => {
        //connection.end();
        if (error) return res.json({error: error});
        return res.json({result: results});
    });
}

exports.search = (req,res) => {
    sql = `select * from support where ${req.query.key} LIKE '%${req.query.value}%'`
    connection.query(sql, (error, results, fields) => {
        //connection.end();
        if (error) return res.json({ error: error });
        return res.json({ result: results });
    });
}

exports.newticket = (req,res) => {
    let newTicket = req.body;
    console.log(newTicket)
    sql = `INSERT INTO support SET ?`
    connection.query(sql, newTicket, (error, results, fields) => {
        //connection.end();
        if (error) return res.json({ error: error });
        return res.json({ result: results });
    });
}

exports.deleteTicket = (req,res) => {
    sql = `DELETE from support where id = '${req.params.id}'`
    connection.query(sql, (error, results, fields) => {
        //connection.end();
        if (error) return res.json({ error: error });
        return res.json({ result: results });
    });
}

exports.update = (req,res) => {
    console.log
    let tickets = req.body;
    console.log(tickets,"tickets")

    sql = `UPDATE support SET ? where id=${tickets.id}`
    connection.query(sql, tickets, (error, results, fields) => {
        //connection.end();
        if (error) return res.json({ error: error });
        return res.json({ result: results });
    });
}
