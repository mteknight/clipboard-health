const crypto = require("crypto");


const createHash = (data) => {
    const algorithm = "sha3-512";
    const encoding = "hex";

    return crypto
        .createHash(algorithm)
        .update(data)
        .digest(encoding);
};

const createHashFromEvent = event => {
    let data = JSON.stringify(event);
    return createHash(data);
};

const getPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    if (!event) {
        return TRIVIAL_PARTITION_KEY;
    }

    return event.partitionKey ?? createHashFromEvent(event);
};

exports.deterministicPartitionKey = (event) => {
    const MAX_PARTITION_KEY_LENGTH = 256;
    let partitionKey = getPartitionKey(event);

    return partitionKey.length > MAX_PARTITION_KEY_LENGTH
        ? createHash(partitionKey)
        : partitionKey;
};