import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();


app.use(cors());


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


let cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', color: 'White', price: 20000 },
  { id: 2, brand: 'Honda', model: 'Civic', color: 'Black', price: 22000 },
];


app.get('/api/cars', (req, res) => {
  res.json(cars);
});


app.post('/api/cars', (req, res) => {
  const newCar = { id: cars.length + 1, ...req.body };
  cars.push(newCar);
  res.status(201).json(newCar);
});

app.delete('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  cars = cars.filter(car => car.id !== id);
  res.status(204).send();
});

app.put('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const carIndex = cars.findIndex(car => car.id === id);
  if (carIndex !== -1) {
    cars[carIndex] = { id, ...req.body };
    res.json(cars[carIndex]);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
