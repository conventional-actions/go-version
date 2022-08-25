# go-version

A GitHub Action for setting `GOFLAGS` to inject version information.

## Usage

To use the GitHub Action, add the following to your job:

```yaml
- uses: conventional-actions/go-version@v1
  with:
    version: ${{steps.version.outputs.version}}
    package: main
    variable: Version
```

You must have an existing variable with the given name.

### Inputs

| Name       | Default   | Description                                                                |
|------------|-----------|----------------------------------------------------------------------------|
| `package`  | `main`    | go package to write to                                                     |
| `version`  | required  | the version to write                                                       |
| `variable` | `Version` | the variable name to write the version to                                  |

### Outputs

No outputs

### Example

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - id: version
        name: Determine next version
        uses: conventional-actions/next-version@v1
      - uses: conventional-actions/go-version@v1
        with:
          version: ${{steps.version.outputs.version}}
          package: main
          variable: Version
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).
