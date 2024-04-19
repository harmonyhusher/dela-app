/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/init",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
