import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { 
            email, 
            roomName, 
            orderId, 
            amount, 
            name, 
            phone, 
            checkInDate, 
            checkOutDate, 
            adult, 
            children, 
            roomCount 
        } = await request.json();

        // Validation checks remain the same
        if (!email || !roomName || !orderId || !amount || !name) {
            return Response.json({ message: "All fields are required." }, { status: 400 });
        }

        if (!Array.isArray(email)) {
            return Response.json({ message: "Email should be an array of recipients." }, { status: 400 });
        }

        const user = process.env.EMAIL_USER;
        const pass = process.env.EMAIL_PASSWORD;

        if (!user || !pass) {
            console.error("Missing email credentials in environment variables.");
            return Response.json({ message: "Internal server error." }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user, pass },
        });

        // Format dates if they exist
        const formatDate = (dateString) => {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        };

        // Enhanced HTML template
        const htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        background-color: #4a90e2;
                        color: white;
                        padding: 20px;
                        text-align: center;
                        border-radius: 8px 8px 0 0;
                    }
                    .content {
                        padding: 20px;
                    }
                    .booking-details {
                        background-color: #f8f9fa;
                        padding: 15px;
                        border-radius: 4px;
                        margin: 20px 0;
                    }
                    .detail-row {
                        padding: 8px 0;
                        border-bottom: 1px solid #eee;
                    }
                    .detail-row:last-child {
                        border-bottom: none;
                    }
                    .footer {
                        text-align: center;
                        padding: 20px;
                        color: #666;
                        font-size: 14px;
                    }
                    .thank-you {
                        font-size: 24px;
                        color: #4a90e2;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .cta-button {
                        display: inline-block;
                        padding: 12px 24px;
                        background-color: #4a90e2;
                        color: white;
                        text-decoration: none;
                        border-radius: 4px;
                        margin: 20px 0;
                    }
                    .section-title {
                        color: #4a90e2;
                        margin-top: 15px;
                        margin-bottom: 10px;
                        font-size: 18px;
                    }
                    .stay-details {
                        background-color: #fff8dc;
                        padding: 15px;
                        border-radius: 4px;
                        margin: 20px 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Booking Confirmation</h1>
                    </div>
                    <div class="content">
                        <p class="thank-you">Thank you for your booking, ${name}!</p>
                        <p>We're excited to confirm your reservation and look forward to hosting you.</p>
                        
                        <h3 class="section-title">Guest Information</h3>
                        <div class="booking-details">
                            <div class="detail-row">
                                <strong>Guest Name:</strong> ${name}
                            </div>
                            <div class="detail-row">
                                <strong>Phone Number:</strong> ${phone || 'Not provided'}
                            </div>
                            <div class="detail-row">
                                <strong>Email:</strong> ${email.join(', ')}
                            </div>
                        </div>

                        <h3 class="section-title">Stay Details</h3>
                        <div class="stay-details">
                            <div class="detail-row">
                                <strong>Check-in Date:</strong> ${formatDate(checkInDate)}
                            </div>
                            <div class="detail-row">
                                <strong>Check-out Date:</strong> ${formatDate(checkOutDate)}
                            </div>
                            <div class="detail-row">
                                <strong>Room Type:</strong> ${roomName}
                            </div>
                            <div class="detail-row">
                                <strong>Number of Rooms:</strong> ${roomCount || 1}
                            </div>
                            <div class="detail-row">
                                <strong>Adults:</strong> ${adult || 1}
                            </div>
                            <div class="detail-row">
                                <strong>Children:</strong> ${children || 0}
                            </div>
                        </div>

                        <h3 class="section-title">Payment Details</h3>
                        <div class="booking-details">
                            <div class="detail-row">
                                <strong>Order ID:</strong> ${orderId}
                            </div>
                            <div class="detail-row">
                                <strong>Amount Paid:</strong> INR ${amount / 100}
                            </div>
                        </div>

                        <p>Your booking has been successfully confirmed. Please keep this email for your records.</p>
                        
                        

                        <p>If you have any questions or need to make changes to your reservation, please don't hesitate to contact us.</p>
                    </div>
                    <div class="footer">
                        <p>© 2025 Novello by Hotel Evergreen. All rights reserved.</p>
                        <p></p>
                        <p>Contact: +91 84455 81177</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const mailOptions = {
            from: user,
            to: email.join(","),
            subject: `Booking Confirmation for ${roomName}`,
            text: `Thank you for your booking!\n\n
                Guest Information:\n
                Name: ${name}\n
                Phone: ${phone || 'Not provided'}\n\n
                Stay Details:\n
                Check-in: ${formatDate(checkInDate)}\n
                Check-out: ${formatDate(checkOutDate)}\n
                Room Type: ${roomName}\n
                Number of Rooms: ${roomCount || 1}\n
                Adults: ${adult || 1}\n
                Children: ${children || 0}\n\n
                Payment Details:\n
                Order ID: ${orderId}\n
                Amount: INR ${amount / 100}\n\n
                We look forward to hosting you!`,
            html: htmlTemplate,
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({ message: "Failed to send email", error: error.message }, { status: 500 });
    }
}