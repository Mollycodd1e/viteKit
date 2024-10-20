import { readdir, copyFile, mkdir } from 'fs/promises'
import { join } from 'path'

async function copyDir(src, dest) {
	try {
		const entries = await readdir(src, { withFileTypes: true })

		await mkdir(dest, { recursive: true })

		for (let entry of entries) {
			const srcPath = join(src, entry.name)
			const destPath = join(dest, entry.name)

			if (entry.isDirectory()) {
				await copyDir(srcPath, destPath)
			} else {
				await copyFile(srcPath, destPath)
			}
		}
	} catch (err) {
		console.error('Error copying directory:', err)
	}
}

async function copyComponentsAndShared(src, dest) {
	try {
		// Paths to the components and shared folders
		const componentsPath = join(src, 'components')
		const sharedPath = join(src, 'shared')
		const mainFilePath = join(src, 'main.ts')

		// Copy the components folder
		await copyDir(componentsPath, join(dest, 'components'))

		// Copy the shared folder
		await copyDir(sharedPath, join(dest, 'shared'))

		// Copy the main.ts file
		await copyFile(mainFilePath, join(dest, 'main.ts'))

		console.log('Components, shared, and main.ts copied successfully!')
	} catch (err) {
		console.error('Error copying components, shared, and main.ts:', err)
	}
}

// Call the function to copy components, shared, and main.ts
copyComponentsAndShared('src', 'lib')

