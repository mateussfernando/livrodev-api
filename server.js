// Importa o módulo Express
const express = require('express');
// Importa o pacote CORS para permitir requisições entre origens diferentes
const cors = require('cors');  
// Cria uma instância do aplicativo Express
const app = express();
// Define a porta do servidor. Se não houver uma variável de ambiente PORT, usa a porta 3000.
const port = process.env.PORT || 3000;

// Habilita o CORS para todas as origens, permitindo que outras origens acessem a API
app.use(cors());

// Define o endpoint GET para a raiz ('/') da aplicação
app.get('/', function(req, res) {
  // Retorna uma resposta JSON com duas categorias de livros
  res.json({
    "maisVendidos": [  // Lista de livros mais vendidos
      {
        "title": "JavaScript: O Guia Definitivo",  // Título do livro
        "category": "Lógica & Programação",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/91z1xY4ppaL._SY425_.jpg"  // Imagem do livro
      },
      {
        "title": "Limpeza de Código: A Arte de Produzir Programas Legíveis",  // Título do livro
        "category": "Desenvolvimento de Software",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/71lkViuJFML._SL1408_.jpg"  // Imagem do livro
      },
      {
        "title": "Programador Pragmático",  // Título do livro
        "category": "Desenvolvimento de Software",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/61hewOW+8zL._SY425_.jpg"  // Imagem do livro
      },
      {
        "title": "Estruturas de Dados e Algoritmos em Java",  // Título do livro
        "category": "Algoritmos & Estruturas de Dados",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/91YgfEma0CL._SL1500_.jpg"  // Imagem do livro
      },
      {
        "title": "JavaScript e jQuery: Desenvolvimento de Interfaces Web Interativas",  // Título do livro
        "category": "JavaScript",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/41pSmCOLxKL._SX342_SY445_.jpg"  // Imagem do livro
      }
    ],
    "melhoresAvaliados": [  // Lista de livros mais bem avaliados
      {
        "title": "JavaScript: O Guia Definitivo",  // Título do livro
        "category": "Lógica & Programação",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/91z1xY4ppaL._SY425_.jpg"  // Imagem do livro
      },
      {
        "title": "Limpeza de Código: A Arte de Produzir Programas Legíveis",  // Título do livro
        "category": "Desenvolvimento de Software",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/71lkViuJFML._SL1408_.jpg"  // Imagem do livro
      },
      {
        "title": "Programador Pragmático",  // Título do livro
        "category": "Desenvolvimento de Software",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/61hewOW+8zL._SY425_.jpg"  // Imagem do livro
      },
      {
        "title": "Estruturas de Dados e Algoritmos em Java",  // Título do livro
        "category": "Algoritmos & Estruturas de Dados",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/91YgfEma0CL._SL1500_.jpg"  // Imagem do livro
      },
      {
        "title": "JavaScript e jQuery: Desenvolvimento de Interfaces Web Interativas",  // Título do livro
        "category": "JavaScript",  // Categoria do livro
        "rating": 5,  // Avaliação do livro
        "image": "https://m.media-amazon.com/images/I/41pSmCOLxKL._SX342_SY445_.jpg"  // Imagem do livro
      }
    ]
  });
});

// Inicia o servidor na porta definida e exibe uma mensagem de sucesso
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);  // Mensagem no console indicando que o servidor foi iniciado
});
