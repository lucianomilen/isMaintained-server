const queries = {
  searchMostTop10Star: `{
    search(query: "stars:>10000", type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
        ... on Repository {
            name,
            owner {
              login
            }
          }
        }
      }
    }
  }`,
  commits3m: (owner, name) => `{
    repository(owner: "${owner}", name: "${name}") {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            history(since: "2019-04-04T01:00:00", until: "2019-04-04T23:00:00") {
              totalCount
            }
          }
        }
      }
    }
  }`,
  forks3m: (owner, name) => `{
    repository(owner: "${owner}", name: "${name}") {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            history(since: "2019-04-04T01:00:00", until: "2019-04-04T23:00:00") {
              totalCount
            }
          }
        }
      }
    }
  }`
}

export default queries
