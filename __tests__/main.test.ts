import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {fileURLToPath} from 'url'
import {test} from '@jest/globals'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

test('test runs', () => {
  process.env['INPUT_VERSION'] = '0.0.0'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'dist', 'index.cjs')
  const options: cp.ExecFileSyncOptions = {
    env: process.env,
    cwd: path.join(__dirname, '..')
  }

  cp.execFileSync(np, [ip], options)
})
