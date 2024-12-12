import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white text-slate-900 rounded-xl p-8 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                  placeholder="Votre message..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
              >
                Envoyer
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex justify-center space-x-6">
                <a href="mailto:votre@email.com" className="text-gray-600 hover:text-blue-600 transition">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}