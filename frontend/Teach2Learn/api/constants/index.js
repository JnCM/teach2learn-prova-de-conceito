import { REACT_APP_DEV_MODE, REACT_APP_PROD_MODE } from "@env"

const environment = process.env;
const baseUrl = environment.NODE_ENV === 'development'
                ? REACT_APP_DEV_MODE
                : REACT_APP_PROD_MODE;

export default {baseUrl}; 