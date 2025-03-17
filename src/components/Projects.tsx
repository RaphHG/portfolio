import { Server, Shield, Network } from 'lucide-react';

const projects = [
  {
    title: "Déploiment de poste informatique automatiser",
    icon: Server,
    description: "Mise en place d'un windows server avec MDT et WDS pour déployer automatique des postes informatique sans intervention humaine.",
    tags: ["VMware", "Windows Server", "Active Directory"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2574"
  },
  {
    title: "Changement de l'environnement Utilisateurs",
    icon: Shield,
    description: "Ajout d'un Windows Serveur en tant que Controleur de domaine, et d'un serveur de fichier (redirection de fichier, lecteur réseau, backup, quota).",
    tags: ["Firewall", "VPN", "IDS/IPS"],
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=2574"
  },
  // {
  //   title: "Infrastructure Cloud",
  //   icon: Network,
  //   description: "Déploiement d'une infrastructure hybride avec Azure et synchronisation AD.",
  //   tags: ["", "Cloud", "Hybride"],
  //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2574"
  // }
];

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <project.icon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}