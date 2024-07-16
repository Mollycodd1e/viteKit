import { rm } from 'fs/promises';

async function cleanLib() {
  try {
    await rm('lib', { recursive: true, force: true });
    console.log('lib folder cleaned');
  } catch (err) {
    console.error('Error cleaning lib folder:', err);
  }
}

cleanLib();