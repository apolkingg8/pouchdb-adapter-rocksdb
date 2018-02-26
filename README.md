# pouchdb-adapter-rocksdb

A simple PouchDB adapter for [Level/rocksdb](https://github.com/Level/rocksdb), 
port from [pouchdb-adapter-memory](https://github.com/pouchdb/pouchdb/tree/master/packages/node_modules/pouchdb-adapter-memory).

### Usage
```$xslt
yarn add pouchdb-adapter-rocksdb
```
```js
PouchDB.plugin(require('pouchdb-adapter-rocksdb'));
var db = new PouchDB('mydb', {adapter: 'rocksdb'});
```

### License
MIT