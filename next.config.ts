import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
    return [
      { source: '/o-livro', destination: '/book' },
      { source: '/sobre', destination: '/about' },
      { source: '/contato', destination: '/contact' },
      { source: '/simulador-de-renda-na-aposentadoria', destination: '/simulators/retirement' },
      { source: '/simuladores/simulador-de-sonhos-e-projetos', destination: '/simulators/dreams' },
      { source: '/lgpd', destination: '/privacy-policy' },
      { source: '/termos-de-uso', destination: '/terms-of-use' },
    ]
  }
};

export default nextConfig;
