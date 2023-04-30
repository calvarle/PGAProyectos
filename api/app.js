const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');





const app = express();
// ...

require("./swagger")(app);

// ...
// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pgaproyectos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));
//incluye las rutas de users.js

//const usersRouter=require('./routes/users');
// API routes
app.use('/api/users', require('./routes/users'));
//app.use('/api/organizations', require('./routes/organizations'));
app.use('/api/translations', require('./routes/translations'));
//app.use('/api/clients', require('./routes/clients'));
app.use('/api/time_zones', require('./routes/time_zones'));
//app.use('/api/cost_centers', require('./routes/costCenters'));
//app.use('/api/projects', require('./routes/projects'));
//app.use('/api/project_tasks', require('./routes/projectTasks'));
//app.use('/api/invoices', require('./routes/invoices'));
//app.use('/api/payments', require('./routes/payments'));
//app.use('/api/languages', require('./routes/languages'));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
