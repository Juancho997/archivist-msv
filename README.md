# Archivist Microservice

Microservicio JavaScript, creado con NestJS, que se encarga de consumir eventos y almacenarlos en una base de datos MongoDB.

Cada vez que se crea, modifica o elimina un usuario desde [Customer Microservice](https://github.com/Juancho997/customer-msv), se emite un evento ("CREATED", "UPDATED" o "DELETED") a un cluster de servidores de [Cloud Karafka](https://www.cloudkarafka.com), un servicio en la nube de Kafka. Archivist consume y almacena automátiamente en base de datos estos eventos, creando "archivos" de los mismos, los cuales pueden ser solicitados utilizando el playground de GraphQL para mostrar la información deseada.

## Esquema de los microservicios
![Microservices Schema](https://user-images.githubusercontent.com/89111705/200440061-6c7fb5a4-8db4-479d-9f3e-e454ff649c5c.png)

### Instrucciones

1º Clonar este proyecto y [Customer Microservice](https://github.com/Juancho997/customer-msv), y seguir las instrucciones dadas en su [Readme](https://github.com/Juancho997/customer-msv/blob/main/README.md).

2º Colocar los mismos datos de CloudKarafka en el archivo .env.example (no olvides borrar el ".example"!). De esta forma, nos aseguramos de que Archivist se comunique con Customer por el mismo cluster de servidores.

3º Crear una base de datos en MongoDB y añadir el URI de conexión al archivo .env.

4º Ejecutar los comandos

```
npm install
npm run build
npm run start:dev
```

5º Realizar peticiones desde Customer MSV para poblar la base de datos en MongoDB.

6º En el navegador, dirigirse a http://localhost:3000/graphql para acceder al playground de GraphQL y realizar las queries según la información que desees recuperar.

![Group 1 (1)](https://user-images.githubusercontent.com/89111705/200449994-331f11a6-171f-4e59-b275-58fbfa0a26b4.png)
