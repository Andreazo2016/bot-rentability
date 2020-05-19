const express = require("express");
const cors = require("cors")

const app = express()

app.use(cors({
    origin: '*'
}))

app.use(express.json())

const data = {
    totalRentability:0,
    rentability: 0,
    operations: 0,
    amount: 0,
    investiment: 30000
}

app.post('/rentabilities', (req, res) => {

    const { rentability, operations } = req.body;

    const amount = Number(data.investiment) * (Number(rentability) / 100);
    data.rentability = rentability;
    data.totalRentability = Number(data.totalRentability) + rentability;
    data.amount = Number(data.amount) + amount;
    data.operations =  operations;

    return res.json(data)

})

app.get('/rentabilities', (req, res) => {

    return res.json(data)

})

app.listen(3333)