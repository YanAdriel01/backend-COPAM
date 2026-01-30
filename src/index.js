const dotenv = require("dotenv");
const app = require("./App");
const Loaders = require("./Loaders/index");

dotenv.config();
Loaders.start();

const PORT = process.env.PORT || 7999

app.listen(PORT, () => console.log("Servidor rodando!"))