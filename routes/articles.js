const express = require('express')
const router = express.Router()

const controller = require('../controllers/articles.js')

// GET /articles
// Récupérer tous les articles (pas de paramètres, pas de body dans la requête)
router.get('/', (req, res) => {
    controller.getAllArticles(req, res)
})

// GET /articles/:id
// Récupérer un article en particulier (paramètre: id de l'article, pas de body dans la requête)
router.get('/:id', (req, res) => {
    controller.getArticle(req, res)
})

// POST /articles
// Créer un nouvel article (pas de paramètres, body: titre, contenu, auteur)
router.post('/', (req, res) => {
    controller.createArticle(req, res)
})

// PUT /articles/:id
// Modifier un article (paramètre: id de l'article, body: titre, contenu, auteur)
router.put('/:id', (req, res) => {
    controller.modifyArticle(req, res)
})

// DELETE /articles/:id
// Supprimer un article (paramètre: id de l'article, pas de body dans la requête)
router.delete('/:id', (req, res) => {
    controller.deleteArticle(req, res)
})

module.exports = router