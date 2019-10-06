const news1 = {id: 1,
    image: "IMAGE1", 
    title: "TITLE1",
    subtitle: "SUBTITLE1"}

const news2 = {id: 2,
    image: "IMAGE2", 
    title: "TITLE2",
    subtitle: "SUBTITLE2"}

const news3 = {id: 3,
    image: "IMAGE3", 
    title: "TITLE3",
    subtitle: "SUBTITLE3"}

const news4 = {id: 4,
    image: "IMAGE4", 
    title: "TITLE4",
    subtitle: "SUBTITLE4"}

const allNews = [news1, news2, news3, news4]

module.exports = {
    
    //Buscar todas as informacoes.
    news: function(req, res) {
            
            res.send(allNews)
    },

    //Buscar informacoes especificas.
    searchNews: function(req, res) {
        const idNews = req.param('idNews')

        const searchResponse = allNews.filter(p => { return p.id == idNews})

        if (searchResponse.length > 0) {
            res.send(searchResponse[0])
        } else {
            res.send("Id nao foi encontrado em nossa base de dados")
        }
    },

    //Criar informacoes/
    created: function(req, res) {
        const objectCreated = {id: 6, image:"IMAGE6", title: "TITLE6", subtitle: "SUBTITLE6"}

        const search = allNews.filter(p => { return p.id == objectCreated.id})

        console.log(search)
            if  (search.length == 0) {
                allNews.push(objectCreated)
                res.send(allNews)
            } else {
                res.send("Este ID já existe, não é possivel criar um novo objeto")
            }
        res.end()
    }
}