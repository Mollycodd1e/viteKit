import { readFile, writeFile } from 'fs/promises'

async function versionUpdate() {
  try {
    const packagePath = './package.json'
    const packageJson = JSON.parse(await readFile(packagePath, 'utf-8'))

    const versionParts = packageJson.version.split('.')

    packageJson.version = versionParts.join('.')
    await writeFile(packagePath, JSON.stringify(packageJson, null, 2), 'utf-8')

    console.log(`Version updated to ${packageJson.version}`)
  } catch (err) {
    console.error('Error updating version:', err)
  }
}

versionUpdate()

