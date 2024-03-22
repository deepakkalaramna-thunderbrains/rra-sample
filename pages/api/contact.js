import nodeMailer from "nodemailer"
const transporter = nodeMailer.createTransport({
    host: "smtp.freesmtpservers.com",
    port: 25,
    secure: false, 
});
export default async function  handler(req, res) {
    try {
        const {name, lastName, companyName, email, telephone, message} = req.body
        await transporter.sendMail({
          from: 'kDeepakwebdev@gmail.com', 
          to: 'kDeepakwebdev@gmail.com',
          subject: 'testing',
          html: `
            <p>${name}</p>
            <p>${lastName}</p>
            <p>${companyName}</p>
            <p>${email}</p>
            <p>${telephone}</p>
            <p>${message}</p>
            `
        });
        console.log('Email sent successfully!');
        return res.status(200).json({messae: "email sent successfully"})
      } catch (error) {
        console.error('Error sending email:', error);
        return res.status(400).json({messae: "an error occured while sending the mail"})
      }
}