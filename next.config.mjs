const isDeployed = process.env.IS_DEPLOYED != null ? process.env.IsDeployed : false;

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: process.env.BASE_PATH || '',
    assetPrefix: isDeployed ? process.env.SUB_DOMAIN : '',
    compress: true,
};

export default nextConfig;
