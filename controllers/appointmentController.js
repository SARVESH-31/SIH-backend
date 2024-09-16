// import { PrismaClient } from '@prisma/client';
// import * as qrcode from 'qrcode';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var qrcode = require('qrcode');
var fs = require('fs');
// Function to generate QR code and save the URL to a file
function generateQRCode() {
    return __awaiter(this, void 0, void 0, function () {
        var appointmentData, qrData, qrCodeUrl, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    appointmentData = {
                        id: 123,
                        patientName: 'John Doe',
                        doctorName: 'Dr. Smith',
                        appointmentDate: '2024-09-11',
                    };
                    qrData = "Appointment ID: ".concat(appointmentData.id, ", Patient: ").concat(appointmentData.patientName, ", Doctor: ").concat(appointmentData.doctorName, ", Date: ").concat(appointmentData.appointmentDate);
                    return [4 /*yield*/, qrcode.toDataURL(qrData)];
                case 1:
                    qrCodeUrl = _a.sent();
                    // Save the QR code URL to a file
                    fs.writeFileSync('qrcode-url.txt', qrCodeUrl);
                    console.log('QR Code URL saved to qrcode-url.txt');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error generating QR code URL:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Call the function to generate QR code URL
generateQRCode();
