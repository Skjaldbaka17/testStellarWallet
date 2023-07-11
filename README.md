### Run

````
npm run build
````

And you get the following warnings:

`````
./node_modules/@walletconnect/keyvaluestorage/dist/cjs/node-js/db.js
Module not found: Can't resolve 'lokijs' in '/Users/thorduragustsson/Programming/Projects/test_stellar_wallet/node_modules/@walletconnect/keyvaluestorage/dist/cjs/node-js'

Import trace for requested module:
./node_modules/@walletconnect/keyvaluestorage/dist/cjs/node-js/db.js
./node_modules/@walletconnect/keyvaluestorage/dist/cjs/node-js/index.js
./node_modules/@walletconnect/keyvaluestorage/dist/cjs/index.js
./node_modules/@walletconnect/core/dist/index.cjs.js
./node_modules/@walletconnect/sign-client/dist/index.cjs.js
./node_modules/stellar-wallets-kit/build/main/lib/walletconnect.js
./node_modules/stellar-wallets-kit/build/main/lib/stellar-wallets-kit.js
./node_modules/stellar-wallets-kit/build/main/index.js
./app/page.tsx

./node_modules/ws/lib/buffer-util.js
Module not found: Can't resolve 'bufferutil' in '/Users/thorduragustsson/Programming/Projects/test_stellar_wallet/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/buffer-util.js
./node_modules/ws/lib/websocket.js
./node_modules/ws/index.js
./node_modules/@walletconnect/jsonrpc-ws-connection/dist/cjs/utils.js
./node_modules/@walletconnect/jsonrpc-ws-connection/dist/cjs/ws.js
./node_modules/@walletconnect/jsonrpc-ws-connection/dist/cjs/index.js
./node_modules/@walletconnect/core/dist/index.cjs.js
./node_modules/@walletconnect/sign-client/dist/index.cjs.js
./node_modules/stellar-wallets-kit/build/main/lib/walletconnect.js
./node_modules/stellar-wallets-kit/build/main/lib/stellar-wallets-kit.js
./node_modules/stellar-wallets-kit/build/main/index.js
./app/page.tsx

./node_modules/ws/lib/validation.js
Module not found: Can't resolve 'utf-8-validate' in '/Users/thorduragustsson/Programming/Projects/test_stellar_wallet/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/validation.js
./node_modules/ws/lib/receiver.js
./node_modules/ws/index.js
./node_modules/@walletconnect/jsonrpc-ws-connection/dist/cjs/utils.js
./node_modules/@walletconnect/jsonrpc-ws-connection/dist/cjs/ws.js
./node_modules/@walletconnect/jsonrpc-ws-connection/dist/cjs/index.js
./node_modules/@walletconnect/core/dist/index.cjs.js
./node_modules/@walletconnect/sign-client/dist/index.cjs.js
./node_modules/stellar-wallets-kit/build/main/lib/walletconnect.js
./node_modules/stellar-wallets-kit/build/main/lib/stellar-wallets-kit.js
./node_modules/stellar-wallets-kit/build/main/index.js
./app/page.tsx

./node_modules/pino/lib/tools.js
Module not found: Can't resolve 'pino-pretty' in '/Users/thorduragustsson/Programming/Projects/test_stellar_wallet/node_modules/pino/lib'

Import trace for requested module:
./node_modules/pino/lib/tools.js
./node_modules/pino/pino.js
./node_modules/@walletconnect/logger/dist/cjs/index.js
./node_modules/@walletconnect/sign-client/dist/index.cjs.js
./node_modules/stellar-wallets-kit/build/main/lib/walletconnect.js
./node_modules/stellar-wallets-kit/build/main/lib/stellar-wallets-kit.js
./node_modules/stellar-wallets-kit/build/main/index.js
./app/page.tsx
`````

Is that something that is fixable?