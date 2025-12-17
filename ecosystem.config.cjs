module.exports = {
	apps: [
		{
			name: "gala",
			script: "bun",
			args: "./build/index.js",
			interpreter: "none",
			env: {
				PORT: 3001
			},
		},
	],
};
