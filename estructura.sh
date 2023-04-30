#!/bin/bash

# Crear directorios
mkdir api
cd api
mkdir controllers
mkdir models
mkdir routes
mkdir validators

# Crear archivos
touch app.js
touch .env
touch .gitignore
touch package-lock.json

# Crear archivo README
echo "# My Project" > README.md

# Crear archivo de configuración de Swagger
touch swagger.json

# Crear archivo de configuración de ESLint
touch .eslintrc.json

# Crear archivo de configuración de nodemon
echo "{
  \"restartable\": \"rs\",
  \"watch\": [\"./**/*.js\"],
  \"ext\": \"js json\",
  \"env\": {
    \"NODE_ENV\": \"development\"
  }
}" > nodemon.json

# Dar permisos de ejecución al archivo de inicio
chmod +x app.js

# Instalar paquetes necesarios
npm init -y
npm install express mongoose body-parser cors dotenv morgan swagger-ui-express eslint nodemon --save
