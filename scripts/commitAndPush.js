import { exec } from 'child_process';

exec('git add . && git commit -m "Release ${npm_package_version}" && git push origin master && npm publish', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
