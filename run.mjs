
import fs from 'fs';
import child_process from 'child_process';
import os from 'os';

const _dirname = process.cwd();
const isWindows = os.type().startsWith('Windows');
const viewsPath = isWindows ? `${_dirname}\\src\\views\\` : `${_dirname}/src/views/`;
const templatePath = isWindows ? `${_dirname}\\template` :  `${_dirname}/template`;
const moduleName = process.argv.slice(2)[0];
const moduleDirPath = viewsPath + moduleName;

if ( fs.existsSync(`${viewsPath}${(isWindows ? '\\' : '/')}${moduleName}`) ) {
  console.log(`WARNING：${moduleName} folder is exist!`);
} else {
  console.log('starting');
  child_process.exec('chmod -R 777' + _dirname);
  child_process.exec(`mkdir ${moduleName + (isWindows ? '\\' : '/')  + 'components'}`);
  child_process.exec(`mv -f ${moduleName} ${viewsPath}`);
  console.log(`mkdir aaa/components`);

  fs.readdir(templatePath, (err, files) => {
    if (err) {
      console.log(err);
    }
    let filePath = '',
      fileContent = '';
    files && files.forEach(file => {
      filePath = isWindows ? `${templatePath}\\${file}` : `${templatePath}/${file}`;
      fileContent = fs.readFileSync(filePath);
      console.log(`start write ${file}`);
      fs.writeFileSync(moduleDirPath + (isWindows ? '\\' : '/') + file, fileContent);
    });
    console.log(`create new module ${moduleName} finish`);
  });
  child_process.exec(`-rm -rf ${moduleName}`);
  child_process.exec(`-rm -rf -p`);
}



