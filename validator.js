// Expected output for validation
const expectedOutput = "010010000101010001000010011110110011010001011111010001110011000000110000011001000101111101000011011011010011000000110101010111110011001101111000001101000110110101110000011011000011001101111101";

function validateOutput(userOutput) {
    // Check if the output is a string
    if (typeof userOutput !== 'string') {
        return false;
    }

    // Check if the output matches the expected binary string
    return userOutput === expectedOutput;
} 