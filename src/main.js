/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
const core = require('@actions/core')
const { getRepositoryId } = require('./get-repository-id')

async function run() {
  const repoId = await getRepositoryId()
  if (!repoId) {
    core.setFailed('ID is undefined')
  }
  core.setOutput('repo-id', repoId)
}

module.exports = {
  run
}
