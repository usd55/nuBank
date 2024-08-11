<<<<<<< HEAD
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3500;

app.use(express.json({ limit: '20mb' }));

// Servir a página HTML
app.use('/NU/nu%20testes', express.static(path.join(__dirname, 'NU/nuTestes')));

app.post('/upload', (req, res) => {
    try {
        const imageData = req.body.image.replace(/^data:image\/png;base64,/, '');
        const buffer = Buffer.from(imageData, 'base64');

        fs.writeFile('Comprov.png', buffer, (err) => {
            if (err) {
                console.error('Erro ao salvar a imagem:', err);
                res.status(500).send('Erro ao salvar a imagem');
            } else {
                console.log('Imagem salva com sucesso');
                res.status(200).send('Imagem salva com sucesso');
            }
        });
    } catch (error) {
        console.error('Erro ao processar a imagem:', error);
        res.status(500).send('Erro ao processar a imagem');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em https://f5fnwbgz-5500.brs.devtunnels.ms/NU/nuTestes/html.html`);
});
=======
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3500;

app.use(express.json({ limit: '20mb' }));

// Servir a página HTML
app.use('/NU/nu%20testes', express.static(path.join(__dirname, 'NU/nuTestes')));

app.post('/upload', (req, res) => {
    try {
        const imageData = req.body.image.replace(/^data:image\/png;base64,/, '');
        const buffer = Buffer.from(imageData, 'base64');

        fs.writeFile('Comprov.png', buffer, (err) => {
            if (err) {
                console.error('Erro ao salvar a imagem:', err);
                res.status(500).send('Erro ao salvar a imagem');
            } else {
                console.log('Imagem salva com sucesso');
                res.status(200).send('Imagem salva com sucesso');
            }
        });
    } catch (error) {
        console.error('Erro ao processar a imagem:', error);
        res.status(500).send('Erro ao processar a imagem');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em https://f5fnwbgz-5500.brs.devtunnels.ms/NU/nuTestes/html.html`);
});
>>>>>>> 86aa76a774b5ed8159d01287d299eaed09fdd7f1
