function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(res=>{
			if(res.ok){
				resolve(res.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var fetchedData=loadjson("data.json");
fetchedData.then(data=>{
	console.log(data);
})