import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	// baseURL: 'http://localhost:7542/2.0/',
	withCredentials: true
})


//api
export const registrationAPI = {
	signUp(parameters: SignUpType) {
		return instance.post<SignUpType>('auth/register', parameters)
	}
}

//type
export type SignUpType = {
	email: string
	password: string
}

