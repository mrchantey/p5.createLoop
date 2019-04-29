Write-Output "patching version.."
git.exe add .
git.exe commit -m 'patch'
npm.cmd version patch
npm.cmd version
Write-Output "building project.."
npm.cmd run build
Write-Output "updating README version.."
node ./scripts/update-readme.js
Write-Output "updating git.."
git.exe add .
git.exe commit -m 'patch'
git.exe push origin master
Write-Output "publishing.."