import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import * as dotenv from 'dotenv';

dotenv.config();

export const POST = async (request: NextRequest) => {
	const formData = await request.formData();
	const senderName = formData.get('senderName');
	const senderEmail = formData.get('senderEmail');
	const message = formData.get('message');

	const mailData: Mail.Options = {
		to: process.env.AUTH_USER,
		subject: `[포트폴리오 연락] ${senderName}`,
		html: `
    <p>보낸사람 : ${senderName}</p>
    <p>보낸이메일 : ${senderEmail}</p>
    </br>
    <div>${message}</div>
    `,
	};

	await transporter.sendMail(mailData);
	const redirectUrl = new URL('/contact?issend=ok', `${process.env.BASE_URL}`);
	return NextResponse.redirect(redirectUrl);
};

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.AUTH_USER,
		pass: process.env.AUTH_PASS,
	},
});
