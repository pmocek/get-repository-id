# Get Repository ID action

This action gets the ID of the specified GitHub repository.

It can be used in other actions, to make calls to the [GitHub GraphQL API](https://docs.github.com/en/graphql/overview/public-schema).

Note that the ID provided by this action won't be the same as `$GITHUB_REPOSITORY_ID`.

## Inputs

### `repository`

A repository to get its ID. Default `${{ github.repository }}`.

### `token`

GitHub token. Defaults `${{ github.token }}`.

## Outputs

### `repo-id`

The ID of the specified repository.

## Example usage

```yaml
- name: Get repo ID
  id: get-repo-id
  uses: nvdaes/get-repository-id@v1
  with:
    repository: owner/repo

- name: Print Output
  id: output
  run: echo "${{ steps.get-repo-id.outputs.repo-id }}"
```
