if (!(Test-Path -Path ./compressed)) {
    New-Item -ItemType directory -Path ./examples/images_compressed
}
Copy-Item -r -Force ./examples/images/*.gif -Destination ./examples/images_compressed
npx.cmd gifsicle -O2 --colors 32 --batch ./examples/images_compressed/*.gif