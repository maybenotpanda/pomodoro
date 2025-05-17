const pkg = require('./package.json')
const port = process.env.PORT

module.exports = {
	apps: [
		{
			name: `${pkg.name}:${port}`,
			script: 'npx',
			args: `serve -s -l ${port} build`,
			interpreter: 'none',
			watch: false,
			merge_logs: true,
			env: {
				PORT: port
			}
		}
	]
}
