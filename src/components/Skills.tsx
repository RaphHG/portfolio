import { Server, Shield, Network, Cloud, Terminal, Database, Settings, Users } from 'lucide-react';

const skills = [
  {
    icon: Server,
    title: "Administration Système",
    description: "Windows Server, Linux, Active Directory, DHCP, DNS",
  },
  {
    icon: Network,
    title: "Réseaux",
    description: "TCP/IP, VLAN, Routage, Switch, VPN",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Firewall, IDS/IPS, Sécurité réseau",
  },
  {
    icon: Cloud,
    title: "Virtualisation & Cloud",
    description: "VMware, Proxmox",
  },
  {
    icon: Database,
    title: "",
    description: "",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Gestion de parc, Support utilisateur",
  },
  {
    icon: Users,
    title: "Gestion de projet",
    description: "Documentation",
  },
];

export default function Skills() {
  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border border-gray-100"
            >
              <skill.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}