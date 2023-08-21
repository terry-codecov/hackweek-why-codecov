# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Asset handoff instructions

One time setup:
`npm install -g gltf-pipeline`

1. Receive `.gltf` files from Cassie.
2. Place all files into .raw folder in the root of the project
3. Run the following command: `gltf-pipeline -i .raw/<assetName>.gltf -o ./public/<yourAssetName>.glb --draco.compressionLevel=10`
4. `npm run gltfjsx  -- -o src/components/<yourAssetName>.jsx ./public/<yourAssetName>.glb`
5. To import the new model in the App it's `import {Model as YourModel} from './components/YourModel`, you must wrap it in a Suspense block.

**Note:** gltfjsx is supposed to be a npx command however it's breaking, rather then waiting for a patch I installed it and the missed dependency to fix.
