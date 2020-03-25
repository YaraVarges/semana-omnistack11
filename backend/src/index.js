const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //importando as rotas

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//colando rota e passando função como parametro primeiro paramentro requisição e segundo resposta
/*app.get('/', (request, response) => {
    return response.send('Hello Word!');
});
*/

/**
 * metodos HTTP:
 * GET: buscar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


app.listen(3333);
