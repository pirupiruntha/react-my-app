import axios from "axios/index";

export function getDataService() {
    return new Promise(((resolve, reject) => {
        axios({
            method:'GET',
            url:'http://aathiagathiar.com/api/news/',
            timeout: 60000
        }).then((res)=>{
            resolve(res);
            console.log("success",res);
        }).catch((error)=> {
            reject(error);
        });
    }));

}
export function postData(data) {
    return new Promise(((resolve ,reject)=>{
        axios({
            method: 'POST',
            url: 'http://localhost:8080/api/book',
            data:data,
            timeout: 60000
        }).then((res)=>{
            resolve(res);
        }).catch((error)=>{
            reject(error);
        })
    }))
}