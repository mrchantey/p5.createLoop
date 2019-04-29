Write-Output "building project.."
npm.cmd run build
Write-Output "patching version.."
npm.cmd version patch
Write-Output "updating README version.."
node ./scripts/updatereadme.js
Write-Output "updating git.."
git.exe add .
git.exe commit -m 'patch'
git.exe push origin master
Write-Output "publishing.."