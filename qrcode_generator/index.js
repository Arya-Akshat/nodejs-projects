const QRCode = require('qrcode');
const readline = require('readline');

// Create interface to read input from user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for website link
rl.question('Enter a website URL to convert into a QR code: ', (url) => {
  // Generate QR code and save it as an image
  QRCode.toFile('qrcode.png', url, {
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    }
  }, function (err) {
    if (err) {
      console.error('Error generating QR Code:', err);
    } else {
      console.log('✅ QR Code saved as "qrcode.png"');
    }
    rl.close();
  });
});
