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
          }
          releases {
            totalCount
          }
          commits: defaultBranchRef {
            target {
              ... on Commit {
                history(since: "2019-04-04T01:00:00", until: "2019-04-04T23:00:00") {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
}
