import Api from './api'
let status = {
	getStatus: async function(server) {
		let json
		await Api().get(process.env.VUE_APP_API_GATE+'/api/ping/'+server)
		.then((resp) => {
			json = resp.data
		})
		return json
	},
}
export default status 