/** @type {import('next').NextConfig} */
import million from "million/compiler";

const nextConfig = {
  reactStrictMode: true,
  // output: "standalone",
};

export default million.next(nextConfig, {
  auto: { rsc: true },
  rsc: true,
});
