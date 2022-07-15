const {portfolio} = require('../db.json')

//desc  GET works
//route /portfolio
const getProjects = async(req, res) => {
    const works = await portfolio
    res.status(200).json(works)
}

//desc  GET a single work
//route /portfolio
const getProject = async(req, res) => {
//    const { id } = req.params
//    const work = await portfolio.filter(function(portfolio)
//    {
//       return (portfolio['id'] == id);
//   })
// const work = portfolio.find((work) => work.id === Number(req.params.id))
const { id } = req.params
// const { name } = req.body

const work = await portfolio.find((work) => work.id === Number(id))
//    if(!work){
//     return  res.status(404).json({error: 'No Such Projects'})
// }
   res.status(200).json(work)
}

module.exports = {
    getProjects,
    getProject
}