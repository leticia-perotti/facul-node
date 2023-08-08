import express from "express";

const app = express();

app.use(express.json());

const port = 3030;

app.post("/imc", (request, response) => {
  const { peso, altura } = request.body

  const imc = peso / (Math.pow(altura, 2));

  return response.json({ retorno: "Seu IMC é " + imc.toFixed(2) });
});

app.post("/par-impar", (request, response) => {
  const { numero } = request.body

  const par = numero % 2 == 0
  const parImpar = par ? "par": "impar" 

  return response.json({ retorno: "O número é " + parImpar });
});

app.post("/media-3", (request, response) => {
  const { primeiro, segundo, terceiro } = request.body

  const media = (primeiro + segundo + terceiro) / 3

  return response.json({ retorno: "A média é  " + media.toFixed(2) });
});

app.post("/maior-numero", (request, response) => {
  const { primeiro, segundo, terceiro } = request.body

  let maior = 0

  if (segundo >= primeiro && segundo >= terceiro) {
    maior = segundo
  }else if(primeiro >= terceiro && primeiro>= segundo){
    maior = primeiro
  }else if(terceiro >= primeiro && terceiro >= segundo){
    maior = terceiro
  }
  
  return response.json({ retorno: "O maior nímero é  " + maior.toFixed(2) });
});

app.post("/menor-numero", (request, response) => {
  const { primeiro, segundo, terceiro } = request.body

  let menor = 0

  if (segundo <= primeiro && segundo <= terceiro) {
    menor = segundo
  }else if(primeiro <= terceiro && primeiro<= segundo){
    menor = primeiro
  }else if(terceiro <= primeiro && terceiro <= segundo){
    menor = terceiro
  }
  
  return response.json({ retorno: "O menor nímero é  " + menor.toFixed(2) });
});


app.listen(port, () => console.log(`Server is running at port ${port}`));
