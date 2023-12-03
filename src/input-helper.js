/**
 * Function to get input
 */
const core = require('@actions/core')
const github = require('@actions/github')

async function inputHelper() {
  // Qualified repository
  const qualifiedRepository =
    core.getInput('repository') ||
    `${github.context.repo.owner}/${github.context.repo.repo}`
  core.debug(`qualified repository = '${qualifiedRepository}'`)
  const splitRepository = qualifiedRepository.split('/')
  if (splitRepository.length !== 2) {
    core.setFailed(
      `Invalid repository '${qualifiedRepository}'. Expected format {owner}/{repo}.`
    )
  }
  const variables = {
    owner: `nvaccess`,
    name: `nvda`
  }
  return variables
}

module.exports = {
  inputHelper
}
