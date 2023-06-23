document.getElementById('generateBtn').addEventListener('click', generateCertificate);

function generateCertificate() {
  const name = prompt('Enter recipient name:');
  const additionalDetails = prompt('Enter additional details:');

  if (name && additionalDetails) {
    const recipientDetails = `Name: ${name}\nAdditional Details: ${additionalDetails}`;

    document.getElementById('name').textContent = name;
    document.getElementById('additional-details').textContent = additionalDetails;

    const certificate = document.getElementById('certificate');
    certificate.classList.add('print-animation');

    setTimeout(() => {
      const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: recipientDetails,
        width: 128,
        height: 128
      });

      window.print();
      certificate.classList.remove('print-animation');
    }, 1000);
  }
}

function generateCertificateId() {
  // Generate a unique certificate ID here
  // You can use a library or custom logic to generate a unique ID
  return 'ABC123';
}
