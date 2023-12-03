/**
 * Function to get the ID of the specified repo
 */
const core = require('@actions/core')
const { Octokit, App } = require('octokit')
const { inputHelper } = require('./input-helper')

async function getRepositoryId() {
  const repo = inputHelper()
  const query = `query($owner:String!, $name:String!) {
    repository(owner:$owner, name:$name){
      id
    }
  }`
  const variables = {
    owner: repo.owner,
    name: repo.name
  }
  const result = await Octokit.graphql(query, variables)
  const repoId = result.repository.id
  return repoId
}

module.exports = {
  getRepositoryId
}
