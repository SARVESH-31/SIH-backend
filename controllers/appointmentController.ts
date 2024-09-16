// import { PrismaClient } from '@prisma/client';
// import * as qrcode from 'qrcode';


// const prisma = new PrismaClient();

// async function generateQrCodeForAppointment(appointmentId: number, patientId: number) {
//     try {
//         // Fetch appointment, patient, doctor, and treatment details using Prisma
//         const appointment = await prisma.appointment.findFirst({
//             where: {
//                 a_id: appointmentId,
//                 p_id: patientId
//             },
//             include: {
//                 Patient: true,
//                 Doctor: true
//             }
//         });

//         const treatment = await prisma.treatment.findFirst({
//             where: {
//                 t_id: appointment?.p_id
//             }
//         });

//         if (!appointment || !treatment) {
//             console.log('No data found for the given appointmentId and patientId.');
//             return;
//         }

//         // Prepare data for the QR code
//         const qrData = {
//             patientID: patientId,
//             appointmentID: appointmentId
//         };

//         const qrString = JSON.stringify(qrData);

//         // Generate the QR code and save it
//         const qrCodeImagePath = `./qr_codes/appointment_${appointmentId}.png`;
//         await qrcode.toFile(qrCodeImagePath, qrString);

//         console.log('QR code generated and saved as:', qrCodeImagePath);

//         // Save the QR code URL in the Ticket table
//         await prisma.ticket.create({
//             data: {
//                 appointmentId: appointmentId,
//                 qrImage: qrCodeImagePath
//             }
//         });

//         console.log('Ticket created and QR code stored in the database.');
//     } catch (error) {
//         console.error('Error generating QR code:', error);
//     } finally {
//         await prisma.$disconnect();
//     }
// }

// // Example usage
// generateQrCodeForAppointment(1, 1);

const qrcode = require('qrcode');
const fs = require('fs');

// Function to generate QR code and save the URL to a file
async function generateQRCode() {
  try {
    // Mock appointment data for testing
    const appointmentData = {
      id: 123,
      patientName: 'John Doe',
      doctorName: 'Dr. Smith',
      appointmentDate: '2024-09-11',
    };

    // Generate QR code with mock data
    const qrData = `Appointment ID: ${appointmentData.id}, Patient: ${appointmentData.patientName}, Doctor: ${appointmentData.doctorName}, Date: ${appointmentData.appointmentDate}`;
    const qrCodeUrl = await qrcode.toDataURL(qrData);

    // Save the QR code URL to a file
    fs.writeFileSync('qrcode-url.txt', qrCodeUrl);

    console.log('QR Code URL saved to qrcode-url.txt');
  } catch (error) {
    console.error('Error generating QR code URL:', error);
  }
}

// Call the function to generate QR code URL
generateQRCode();