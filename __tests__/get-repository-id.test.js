/**
 * Unit tests for src/get-repository-id.js
 */
const github = require('@actions/github')
const getRepositoryId = require('../src/get-repository-id')

describe('getRepositoryId tests', () => {
  beforeAll(() => {
    // Mock getRepositoryId
    jest.spyOn(getRepositoryId, 'getRepositoryId').mockImplementation(() => {
      const gh = github.getOctokit('_')
      jest.spyOn(gh, 'graphql')
      return 'some-id'
    })
  })

  afterAll(() => {
    // Restore.mockImplementation(jest.fn())
    jest.restoreAllMocks()
  })

  it('gets repo id', async () => {
    const id = await getRepositoryId.getRepositoryId()
    expect(id).toBe('some-id')
  })
})
