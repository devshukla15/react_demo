import cron from 'node-cron';
import nodemailer from 'nodemailer';
import User from '../models/user.js';

const bookTable = async () => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'ifour.shukla@gmail.com',
			pass: 'DearBeen85',
		},
	});

	let arr = await User.find();

	let emails = [];

	emails = arr.map((item) => {
		return item.email;
	});

	console.log(emails);

	var mailOptions = {
		from: 'ifour.shukla@gmail.com',
		to: emails,
		subject: 'BOOK A Table',
		text: `Hey Dev,


Hurry Up there are restaurants and hotels around the world waiting for you,

Book a Restaurant or Hotel you like around the world on Traveller

 http://localhost:3000/ `,
	};

	cron.schedule('* * * * *', () => {
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
	});
};

export default bookTable;
