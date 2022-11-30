const crypto = require('crypto');

const TRIVIAL_PARTITION_KEY = '0';
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  let partitionKey = JSON.stringify(event.partitionKey);

  if (partitionKey === undefined) {
    return createHash(event);
  }
  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    return createHash(partitionKey);
  }

  return partitionKey;
};

// takes any input and creates a hash based on the input.
const createHash = (key) => {
  return crypto
    .createHash('sha3-512')
    .update(JSON.stringify(key))
    .digest('hex');
};
