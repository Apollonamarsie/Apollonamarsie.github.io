npm install
npm run build
rm -r docs/
cp -r dist/ docs/
mkdir docs/src
mkdir docs/src/assets
cp -r src/assets/* docs/src/assets/