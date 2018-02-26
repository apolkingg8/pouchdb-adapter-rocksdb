import * as CoreLevelPouch from 'pouchdb-adapter-leveldb-core';
import * as rocksDB from 'rocksdb';

function RocksPouch(opts, callback) {
    let newOpts = Object.assign({
        db: rocksDB
    }, opts)
    let TempPouch = CoreLevelPouch

    if(typeof TempPouch.call !== "function") {
        TempPouch = CoreLevelPouch.default
    }

    TempPouch.call(this, newOpts, callback)
}

RocksPouch.valid = function () {
    return true
}

RocksPouch.use_prefix = false

export default function (PouchDB) {
    PouchDB.adapter('rocksDB', RocksPouch, true);
}