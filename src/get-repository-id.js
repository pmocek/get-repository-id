/**
 * Function to get the ID of the specified repo
 */
const core = require('@actions/core')
const github = require('actions/github')
const { inputHelper } = require('./input-helper')
const token = core.getInput('token')
const octokit = github.getOctokit(token)

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
  const result = await octokit.graphql(query, variables)
  const repoId = result.repository.id
  return repoId
}

module.exports = {
  getRepositoryId
}
