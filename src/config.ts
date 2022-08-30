import * as core from '@actions/core'

type Config = {
  pkg: string
  version: string
  variable: string
  goFlags: string
}

export async function getConfig(): Promise<Config> {
  return {
    pkg: core.getInput('package') || 'main',
    version: core.getInput('version', {required: true}),
    variable: core.getInput('variable') || 'Version',
    goFlags: process.env['GOFLAGS'] || ''
  }
}
