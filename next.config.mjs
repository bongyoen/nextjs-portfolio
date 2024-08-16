/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'standalone',
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
