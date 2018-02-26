const CoreLevelPouch = require('pouchdb-adapter-leveldb-core')
const rocksdb =  require('rocksdb')

function RocksPouch(opts, callback) {
    let newOpts = Object.assign({
        db: rocksdb
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

exports.default = function (PouchDB) {
    PouchDB.adapter('rocksDB', RocksPouch, true);
}