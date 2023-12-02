const db = require('../db')

const getAllArticles = (req, res) => {
    db.all('SELECT * FROM Article', (err, articles) => {
        if (err) {
            res.status(500).json({ message: err.message })
        } else {
            res.json(articles)
        }
    })
}

getArticle = (req, res) => {
    db.get('SELECT * FROM Article WHERE id = ?', [req.params.id], (err, article) => {
        if (err) {
            res.status(500).json({ message: err.message })
        } else if (!article) {
            res.status(404).json({ message: `Article ${req.params.id} not found` })
        } else {
            res.json(article)
        }
    })
}

createArticle = (req, res) => {
    const { title, content, author } = req.body
    db.run('INSERT INTO Article (title, content, author) VALUES (?, ?, ?)', [title, content, author], function (err) {
        if (err) {
            res.status(500).json({ message: err.message })
        } else {
            db.get('SELECT * FROM Article WHERE id = ?', [this.lastID], (err, article) => {
                if (err) {
                    res.status(500).json({ message: err.message })
                } else {
                    res.status(201).json(article)
                }
            })
        }
    })
}

modifyArticle = (req, res) => {
    const { title, content, author } = req.body
    db.run('UPDATE Article SET title = COALESCE(?, title), content = COALESCE(?, content), author = COALESCE(?, author) WHERE id = ?', [title, content, author, req.params.id], function (err) {
        if (err) {
            res.status(500).json({ message: err.message })
        } else {
            db.get('SELECT * FROM Article WHERE id = ?', [req.params.id], (err, article) => {
                if (err) {
                    res.status(500).json({ message: err.message })
                } else {
                    res.json(article)
                }
            })
        }
    })
}

const deleteArticle = (req, res) => {
    db.run('DELETE FROM Article WHERE id = ?', [req.params.id], function (err) {
        if (err) {
            res.status(500).json({ message: err.message })
        } else {
            res.json({ message: `Article ${req.params.id} deleted` })
        }
    })
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    modifyArticle,
    deleteArticle
}