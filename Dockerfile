# Imagen Base
FROM node

# Crear directorio donde va a vivir mi aplicación
WORKDIR /app

# Copiar el package.json
COPY package*.json ./

# Instalar los Node Modules
RUN npm install

# Copiar archivos de mi local al contenedor
COPY . .

# COmando de inicio de contenedor
CMD ["node", "app.js"]