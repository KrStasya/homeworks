import axios from 'axios';

const instanse=axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/`
})

export const ReguestApi={
    postReguest(success:boolean){
        return instanse.post(`test`, {success: success})
            .then(res=>{
                if (res.status===200) {
                    alert(res.data.info)
                }
            })
            .catch(error=>{
                alert( error.response ? error.response.data.errorText : error.message )
            })
    },
}


