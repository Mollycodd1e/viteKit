import { readdir, copyFile, mkdir } from 'fs/promises';
import { join } from 'path';

async function copyDir(src, dest) {
  try {
    const entries = await readdir(src, { withFileTypes: true });

    await mkdir(dest, { recursive: true });

    for (let entry of entries) {
      const srcPath = join(src, entry.name);
      const destPath = join(dest, entry.name);

      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath); // Рекурсивное копирование подпапок
      } else {
        await copyFile(srcPath, destPath); // Копирование файлов
      }
    }
  } catch (err) {
    console.error('Error copying directory:', err);
  }
}

async function copyComponentsAndShared(src, dest) {
  try {
    // Пути к папкам components и shared
    const componentsPath = join(src, 'components');
    const sharedPath = join(src, 'shared');

    // Копирование папки components
    await copyDir(componentsPath, join(dest, 'components'));

    // Копирование папки shared
    await copyDir(sharedPath, join(dest, 'shared'));

    console.log('Components and shared copied successfully!');
  } catch (err) {
    console.error('Error copying components and shared:', err);
  }
}

// Вызов функции для копирования components и shared целиком
copyComponentsAndShared('src', 'lib');

