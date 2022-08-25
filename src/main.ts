import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const pkg = core.getInput('package') || 'main'
    core.debug(`package = ${pkg}`)

    const version = core.getInput('version', {required: true})
    core.debug(`version = ${version}`)

    const variable = core.getInput('variable') || 'Version'
    core.debug(`variable = ${variable}`)

    const goFlags = process.env['GOFLAGS'] || ''
    core.exportVariable(
      'GOFLAGS',
      `${goFlags} -ldflags="-X '${pkg}.${variable}=${version}'"`
    )
    return
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
