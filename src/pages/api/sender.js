import sendgrid from "@sendgrid/mail";

export default async function sendEmail(req, res) { 
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    const {name, email, message} = req.body;
    await sendgrid.send({
      to: "robby.j.lem@hotmail.com",  // Your email where you'll receive emails
      from: "info@verdandi.ai",  // your website email address here
      subject: `Contact Email from ${name}`,
      html: `
      <div>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      </div>
      `,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}