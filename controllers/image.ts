const fs = require('fs');

// Function to convert QR code URL to PNG and save it
async function saveQRCode() {
  try {
    // Read the QR code URL from file
    const qrCodeUrl = fs.readFileSync('qrcode-url.txt', 'utf-8');

    // Convert base64 data to binary buffer
    const base64Data = qrCodeUrl.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Save the buffer to a PNG file
    fs.writeFileSync('qrcode.png', buffer);

    console.log('QR Code image saved as qrcode.png');
  } catch (error) {
    console.error('Error saving QR code image:', error);
  }
}

// Call the function to save the QR code
saveQRCode();