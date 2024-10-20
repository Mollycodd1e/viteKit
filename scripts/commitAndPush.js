import { exec } from 'child_process'
import { readFile } from 'fs/promises'
import readline from 'readline'

async function getCommitMessage() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})

	return new Promise((resolve) => {
		rl.question('Введите сообщение коммита: ', (message) => {
			rl.close()
			resolve(message)
		})
	})
}

async function commitAndPush() {
	try {
		const packagePath = './package.json'
		const packageJson = JSON.parse(await readFile(packagePath, 'utf-8'))
		const versionParts = packageJson.version
		const commitMessage =
			process.argv[2] || (await getCommitMessage()) || `Release version ${versionParts}`

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
