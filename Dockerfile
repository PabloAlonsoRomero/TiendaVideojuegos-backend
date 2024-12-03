# Imagen Base
FROM node

# Crear directorio donde va a vivir mi aplicación
WORKDIR /app

# Copiar el package.json
COPY package*.json ./

# Instalar los Node Modules
RUN npm install

RUN npm install bcryptjs

# Copiar archivos de mi local al contenedor
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# COmando de inicio de contenedor
CMD ["node", "app.js"]