import CoreLevelPouch from 'pouchdb-adapter-leveldb-core'
import rocksdb from 'rocksdb'

function RocksAdapter(opts, callback) {
    let newOpts = Object.assign({
        db: rocksdb
    }, opts)
    let TempPouch = CoreLevelPouch

    if(typeof TempPouch.call !== "function") {
        TempPouch = CoreLevelPouch.default
    }

    TempPouch.call(this, newOpts, callback)
}

RocksAdapter.valid = function () {
    return true
}

RocksAdapter.use_prefix = false

export default function (PouchDB) {
    PouchDB.adapter('rocksdb', RocksAdapter, true);
}