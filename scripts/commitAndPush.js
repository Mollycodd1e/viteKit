import { exec } from 'child_process'
import { readFile } from 'fs/promises'

const packagePath = './package.json'
const packageJson = JSON.parse(await readFile(packagePath, 'utf-8'))

const versionParts = packageJson.version
exec(
	`git add . && git commit -m "Release ${versionParts}" && git push origin master && npm publish`,
	(error, stdout, stderr) => {
		if (error) {
			console.error(`Error executing command: ${error}`)
			return
		}
		console.log(`stdout: ${stdout}`)
		console.error(`stderr: ${stderr}`)
	}
)

