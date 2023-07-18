/* eslint-disable */
const { withPlugins } = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([withImages], {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
	async redirects() {
		return [
			{
				source: "/1313117183871387!&*#&#&!",
				destination: "https://github.com/SlipBey",
				permanent: true,
			},
			{
				source: "/nahhh!*#&!",
				destination: "https://blog.slipyme.xyz",
				permanent: true,
			},
			{
				source: "/dadwkldlkwklwdawldawdkalwjkeeiawejiakdaj!",
				destination: "https://www.instagram.com/SlipBey",
				permanent: true,
			},
			{
				source: "/dwdjkawdjkawkjdkwlajdkwlljawdljkwjlkalk18318!",
				destination: "https://youtube.com/c/AngelCraftNW",
				permanent: true,
			},
			{
				source: "/invite",
				destination:
					"https://discord.com/api/oauth2/authorize?client_id=768724682483433482&permissions=1633160654679&scope=bot%20applications.commands",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/sutyc2R5PN",
				permanent: true,
			},
		];
	},
});
