import axios from 'axios'
import queries from './queries'

const api = () => {
  const endpoint = 'https://api.github.com/graphql'
  const token = '3a06b049a856f66a9bb4ec2a738c26603c72fc96'
  const oauth = { Authorization: 'bearer ' + token }

  let repList = []

  axios.post(endpoint, { query: queries.searchMostTop10Star }, { headers: oauth })
    .then(function (response) {
      // On success, print the response
      repList = response.data.data.search.edges.map(rep => ({
        owner: rep.node.owner.login,
        name: rep.node.name
      }))
    })
    .then(() => repList.map(repository => {
      axios.post(endpoint, { query: queries.commits3m(repository.owner, repository.name) }, { headers: oauth })
        .then(response => console.log(response.data.data.repository.ref))
        .catch(error => console.error(error))
    }))
    .catch(function (error) {
      console.log(error)
    })
}

export default api
