const { deterministicPartitionKey } = require('./dpk');
const crypto = require('crypto');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  it('Returns the event hashed if no partitionKey is provided', () => {
    const testEvent = 'not even an object';
    const trivialKey = deterministicPartitionKey(testEvent);

    const data = JSON.stringify(testEvent);
    let candidate = crypto.createHash('sha3-512').update(data).digest('hex');

    expect(trivialKey).toBe(candidate);
  });

  it('Returns the partitionKey if one is provided on the event object', () => {
    const testEvent = { partitionKey: 12 };
    const trivialKey = deterministicPartitionKey(testEvent);

    const candidate = JSON.stringify(testEvent.partitionKey);

    expect(trivialKey).toBe(candidate);
  });
});
