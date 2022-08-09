echo "publishing createLoop"
npm publish
echo "updating and publishing p5.createLoop"
cd ../p5.createLoop
npm run update-dependencies
npm publish
cd ../createLoop