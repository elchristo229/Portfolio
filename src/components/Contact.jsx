import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Contact depuis Portfolio')}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950 cyber-grid-dense border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CANAUX DE COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Entrons en Contact
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Une opportunité de stage, une collaboration technique ou une question sur mes projets ? Je vous réponds rapidement.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Quick Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl glass-card border border-cyan-500/20 hover:border-cyan-500/40 transition flex items-center justify-between group">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Personnel</div>
                  <a href={`mailto:${personal.email}`} className="text-sm font-bold text-white hover:text-cyan-300 transition">
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition"
                title="Copier l'email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl glass-card border border-cyan-500/20 hover:border-cyan-500/40 transition flex items-center justify-between group">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Téléphone / WhatsApp</div>
                  <a href={`https://wa.me/${personal.phoneRaw}?text=Bonjour%20Gille-Christ,%20j'ai%20consult%C3%A9%20votre%20portfolio`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-emerald-300 transition">
                    {personal.phone}
                  </a>
                </div>
              </div>
              <div className="flex space-x-1.5">
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-300 border border-slate-800 transition"
                  title="Copier le numéro"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`https://wa.me/${personal.phoneRaw}?text=Bonjour%20Gille-Christ,%20j'ai%20consult%C3%A9%20votre%20portfolio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition"
                  title="Ouvrir WhatsApp"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl glass-card border border-cyan-500/20 hover:border-cyan-500/40 transition flex items-center justify-between group">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 group-hover:scale-110 transition">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Dépôts & Code Source</div>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-cyan-300 transition">
                    github.com/{personal.githubUsername}
                  </a>
                </div>
              </div>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
                title="Consulter le profil GitHub"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-card border border-cyan-500/20 hover:border-cyan-500/40 transition flex items-center space-x-3.5">
              <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Localisation</div>
                <div className="text-sm font-bold text-white">
                  {personal.location}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-3xl glass-card border border-cyan-500/20 shadow-2xl shadow-cyan-950/30">
              <h3 className="text-xl font-bold text-white font-display mb-1.5">
                Envoyer un message direct
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Le formulaire préparera automatiquement votre client de messagerie favori sans intermédiaire.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Votre Nom</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Votre Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@entreprise.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Objet de l'échange</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Opportunité de Stage / Projet Cybersécurité"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Votre Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Bonjour Gille-Christ, nous avons consulté votre portfolio et souhaitons échanger..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre le Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
