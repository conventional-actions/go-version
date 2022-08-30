import * as core from '@actions/core'
import {getConfig} from './config'

async function run(): Promise<void> {
  try {
    const config = await getConfig()

    core.exportVariable(
      'GOFLAGS',
      `${config.goFlags} -ldflags=-X=${config.pkg}.${config.variable}=${config.version}`
    )
    return
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
