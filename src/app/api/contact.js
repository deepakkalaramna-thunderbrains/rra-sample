// export const runtime = 'nodejs';
// export const maxDuration = 100;



// const nodemailer = require("nodemailer");

// exports.handler = async (event, context) => {
//     try {
//         const { name, lastName, companyName, email, telephone, message } = JSON.parse(event.body);
//         console.log(name)
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 465,
//             secure: true, 
//             auth: {
//                 user: "import@rragroup.ca",
//                 pass: "lf@C5QHz8B$QL9S3"
//             }
//         });

//         // Send email asynchronously
//         await transporter.sendMail({
//             from: "import@rragroup.ca",
//             to: "deepakit.k03@gmail.com",
//             subject: 'Testing',
//             html: `
//                 <p>${name}</p>
//                 <p>${lastName}</p>
//                 <p>${companyName}</p>
//                 <p>${email}</p>
//                 <p>${telephone}</p>
//                 <p>${message}</p>
//             `
//         });

//         console.log(name);
//         console.log('Email sent successfully!');

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ name, message: "Email sent successfully" })
//         };
//     } catch (error) {
//         console.error('Error sending email:', error);

//         return {
//             statusCode: 500,
//             body: JSON.stringify({ message: "An error occurred while sending the email" })
//         };
//     }
// };


