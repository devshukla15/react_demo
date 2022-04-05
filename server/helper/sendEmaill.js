import nodemailer from 'nodemailer';

const sendEmail = async (email, firstName) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'ifour.shukla@gmail.com',
			pass: 'DearBeen85',
		},
	});

	var mailOptions = {
		from: 'ifour.shukla@gmail.com',
		to: email,
		subject: 'Sending Email using Node.js',
		text: `Hey ${firstName},

I’m Dev, the founder of Traveller and I’d like to personally thank you for signing up to our service.


I’d love to hear what you think of Traveller and if there is anything we can improve. If you have any questions, please reply to this email. I’m always happy to help!

Dev`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};

export default sendEmail;
