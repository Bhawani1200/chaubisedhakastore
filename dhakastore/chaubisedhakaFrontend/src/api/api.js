import axios from "axios";

const api=axios.create({
    baseURL:`${import.meta.env.VITE_BACK_END_URL}/api`,
    // incase want to include cookie in the frontend its working with
    withCredentials:true
});

export default api;