const express = require('express');
const router = express.Router();

const ticket = require('../controller/ticket')

router.use((req,res,next) => console.log(Date.now()) || next());

router.post('/', ticket.populateDatabase)

router.post('/newticket', ticket.newticket)

router.get('/', ticket.getAllTickets)

router.get('/sort', ticket.getAllTickets)

router.get('/search', ticket.search)

router.patch('/', ticket.update)

router.delete('/delete/:id', ticket.deleteTicket)


module.exports = router;
