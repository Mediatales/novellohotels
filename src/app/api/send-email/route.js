import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { email, roomName, orderId, amount , name , phone } = await request.json();

        // Create a transporter for sending emails
        const transporter = nodemailer.createTransport({
            service: "gmail", // Use your email service (e.g., Gmail, SendGrid, etc.)
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email.join(","),
            subject: `Booking Confirmation for ${roomName}`,
            text: `Thank you for your booking!\n\nRoom: ${roomName}\nOrder ID: ${orderId}\nAmount: INR ${amount / 100}\n\nWe look forward to hosting you!`,
            html: `<p>Thank you for your booking!</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Room:</strong> ${roomName}</p>
             <p><strong>Order ID:</strong> ${orderId}</p>
             <p><strong>Amount:</strong> INR ${amount / 100}</p>
             <p>We look forward to hosting you!</p>`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return Response.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({ message: "Failed to send email", error: error.message }, { status: 500 });
    }
}