import { Network, Server, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-4 mb-6">
            <Network className="h-12 w-12 text-blue-400" />
            <Server className="h-12 w-12 text-green-400" />
            <Shield className="h-12 w-12 text-red-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6">BTS SIO Option SISR</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Étudiant en Solutions d'Infrastructure, Systèmes et Réseaux.
          </p>
          <div className="flex gap-4">
            <a 
              href="#projets" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="border border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg transition"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}