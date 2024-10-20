import { exec } from 'child_process'
import { readFile } from 'fs/promises'

async function commitAndPush() {
	try {
		const packagePath = './package.json'
		const packageJson = JSON.parse(await readFile(packagePath, 'utf-8'))
		const versionParts = packageJson.version
		const commitMessage = process.argv.slice(2).join(' ') || `Release version ${versionParts}`

		exec(
			`git add . && git commit -m "${commitMessage}" && git push origin master`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`Error during git operations: ${error}`)
					return
				}
				console.log(`stdout: ${stdout}`)
				console.error(`stderr: ${stderr}`)
			}
		)
	} catch (err) {
		console.error('Error reading package.json:', err)
	}
}

commitAndPush()
