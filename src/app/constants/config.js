import CONST from "./index";

const STAG_ENV = {
  URL: "https://api.abhisharjangir.com/",
  env: "Staging"
};

const PROD_ENV = {
  URL: "https://api.abhisharjangir.com/",
  env: "Production"
};

const LOCAL_ENV = {
  URL: "https://api.abhisharjangir.com/",
  env: "Local"
};

const COMMON_ENV = {
  // Add here if there is any `COMMON ENVIRONMENT VARIABLES`
};

let app_env = process.env.REACT_APP_ENV;

let ENV = {};

switch (app_env) {
  case CONST.ENV_TYPES.PROD:
    ENV = { ...PROD_ENV, ...COMMON_ENV };
    break;

  case CONST.ENV_TYPES.STAG:
    ENV = { ...STAG_ENV, ...COMMON_ENV };
    break;

  case CONST.ENV_TYPES.LOCAL:
    ENV = { ...LOCAL_ENV, ...COMMON_ENV };
    break;

  default:
    ENV = { ...STAG_ENV, ...COMMON_ENV };
    break;
}

export default ENV;
