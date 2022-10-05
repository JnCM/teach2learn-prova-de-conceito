import { REACT_APP_DEV_API_URL, REACT_APP_TEST_API_URL, REACT_APP_PROD_API_URL } from "@env"

const environment = process.env;

let baseUrl = '';
if(environment.NODE_ENV === 'development'){
    baseUrl = REACT_APP_DEV_API_URL;
}else if(environment.NODE_ENV === 'test'){
    baseUrl = REACT_APP_TEST_API_URL;
}else{
    baseUrl = REACT_APP_PROD_API_URL;
}

export default {baseUrl}; 