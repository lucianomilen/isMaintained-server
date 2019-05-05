{
  search(query: "all", type: REPOSITORY, first: 10) {
    data: edges {
      repository: node {
        ... on Repository {
          name
          owner {
            login
          }
          forkCount
          openIssues: issues(states: [OPEN]) {
            totalCount
          }
          closedIssues: issues(states: [CLOSED]) {
            totalCount
          }
          openPRs: pullRequests(states: [OPEN]) {
            totalCount
          }
          closedPRs: pullRequests(states: [CLOSED]) {
            totalCount
          }
          mergedPRs: pullRequests(states: [MERGED]) {
            totalCount
          },
          releases {
            totalCount
          }
        }
      }
    }
  }
}
