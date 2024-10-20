import { exec } from 'child_process'
import { readFile } from 'fs/promises'
import readline from 'readline'

async function getCommitMessage() {
	return new Promise((resolve) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		})
		rl.question('Введите сообщение коммита: ', (answer) => {
			rl.close()
			resolve(answer)
		})
	})
}

async function commitAndPush() {
	try {
		const packagePath = './package.json'
		const packageJson = JSON.parse(await readFile(packagePath, 'utf-8'))
		const versionParts = packageJson.version
		let commitMessage = process.argv.slice(2).join(' ')

		if (!commitMessage) {
			commitMessage = (await getCommitMessage()) + ` (${versionParts})`
		}

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
