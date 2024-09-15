import { randomBytes } from "crypto";

// Generate a secure random token
const generateToken = (length = 64) => {
  // Define a character set that includes alphanumeric characters and special symbols
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  const charsetLength = charset.length;

  // Generate random bytes
  const randomBuffer = randomBytes(length);

  // Convert random bytes to characters from the charset
  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = randomBuffer[i] % charsetLength;
    token += charset[randomIndex];
  }

  return token;
};

// Generate the token
const token = generateToken(64);
console.log("Generated Secure Token:", token);
