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
  if (
    splitRepository.length !== 2 ||
    !splitRepository[0] ||
    !splitRepository[1]
  ) {
    core.setFailed(
      `Invalid repository '${qualifiedRepository}'. Expected format {owner}/{repo}.`
    )
  }
  const result = {}
  result.owner = splitRepository[0]
  result.name = splitRepository[1]
  return result
}

module.exports = {
  inputHelper
}
