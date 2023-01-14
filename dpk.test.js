const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();

    expect(trivialKey).toBe("0");
  });

  it("returns a string of hexadecimal characters when given no partition key", () => {
    const event = { data: "sampleData" };
    const result = deterministicPartitionKey(event);

    expect(typeof result).toBe("string");
    expect(result).toMatch(/^[a-f0-9]+$/);
  });

  it("returns the partition key when given a partition key with less than 256 characters", () => {
    const event = { partitionKey: "samplePartitionKey", data: "sampleData" };
    const result = deterministicPartitionKey(event);

    expect(result).toBe(event.partitionKey);
  });

  it("returns a string of hexadecimal characters when given a partition key that exceeds 256 characters", () => {
    const longString = "a".repeat(257);
    const event = { partitionKey: longString, data: "sample" };
    const result = deterministicPartitionKey(event);

    expect(typeof result).toBe("string");
    expect(result).toMatch(/^[a-f0-9]+$/);
  });
});


