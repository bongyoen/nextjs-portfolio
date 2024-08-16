import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import * as dotenv from 'dotenv'
dotenv.config()

export const POST = async (request: NextRequest) => {
	const mailData: Mail.Options = {
		to: process.env.AUTH_USER,
		subject: `[BLOG] TEST`,
		//	html 옵션 또는 text 옵션 둘중 하나만 사용해야함
		html: `
    <h1>TEST</h1>
    <div>TEST</div>
    </br>
    <p>보낸사람 : TEST</p>
    `,
	};
	console.log('도달1');
	await transporter.sendMail(mailData);
	console.log('도달2');
	return NextResponse.redirect(new URL('/contact?ok', request.url));
};

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		// 초기에 설정해둔 env 데이터
		user: process.env.AUTH_USER,
		pass: process.env.AUTH_PASS,
	},
});
