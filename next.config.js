require('dotenv').config();
module.exports = ({
    // typescript: {
    //     ignoreDevErrors: true,
    // },
    target: "serverless", // Next.js 빌드 대상을 "serverless"로 설정하여 서버리스 빌드를 활성화 한다.
     webpack: (config, options) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty",
        };
        return config;
    },
    env: {
        VERSION : process.env.REACT_APP_SERVICE_VERSION,
        API_BASE_URL : process.env.REACT_APP_API_SERVER_BASEURL,
        HOME : process.env.NEXT_PUBLIC_HOME
    },
});
