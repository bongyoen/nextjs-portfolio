/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	output: 'standalone',
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
