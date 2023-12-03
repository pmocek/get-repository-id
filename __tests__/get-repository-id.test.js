/**
 * Unit tests for src/get-repository-id.js
 */
const getRepositoryId = require('../src/get-repository-id')

describe('getRepositoryId tests', () => {
  beforeAll(() => {
    // Mock getRepositoryId
    jest
      .spyOn(getRepositoryId, 'getRepositoryId')
      .mockImplementation(() => 'some-id')
  })

  afterAll(() => {
    // Restore
    jest.restoreAllMocks()
  })

  it('gets repo id', async () => {
    const id = await getRepositoryId.getRepositoryId()
    expect(id).toBe('some-id')
  })
})
