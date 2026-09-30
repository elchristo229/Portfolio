import React, { useEffect, useRef, useState } from 'react';

const cvDocument = {
  id: 'cv-securite',
  title: 'CV — GANSE Kpèhoué Gille-Christ',
  subtitle: 'Sécurité Informatique & Réseaux',
  pages: 3,
  previewPrefix: 'cv-securite',
  fileUrl: './CV_GANSE_Kpehoue_Gille-Christ.pdf',
};

export default function Terminal({ onOpenDoc }) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'GANSE Security Terminal [Version 3.0.0-release]' },
    { type: 'output', text: 'IFRI Defense Security Environment - Ready.' },
    { type: 'output', text: "Tapez 'help' pour afficher la liste des commandes disponibles." },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const commandHistory = useRef([]);
  const historyPosition = useRef(0);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (event) => {
    event.preventDefault();
    const command = inputVal.trim().toLowerCase();
    if (!command) return;

    const nextHistory = [...history, { type: 'input', text: `user@sec-lab:~$ ${inputVal}` }];
    commandHistory.current.push(inputVal);
    historyPosition.current = commandHistory.current.length;

    switch (command) {
      case 'help':
        nextHistory.push({
          type: 'output',
          text: `Commandes disponibles :
  about       : Présentation rapide de Gille-Christ
  whoami      : Alias de about
  certifs     : Détails des certifications ANSSI, Cursa, SQL
  projects    : Liste des projets et hackathons
  skills      : Compétences clés en cybersécurité et web
  cv          : Ouvrir le CV Sécurité en ligne
  contact     : Coordonnées de contact direct (email, tél, GH)
  sudo        : Vérifier l'accès privilégié
  clear       : Effacer l'écran du terminal`,
        });
        break;
      case 'whoami':
      case 'about':
        nextHistory.push({
          type: 'output',
          text: `GANSE Kpèhoué Gille-Christ
-> Étudiant inscrit en troisième année de Licence de Sécurité Informatique (IFRI / UAC, Bénin)
-> Objectif : Analyste SOC / Ingénieur SSI
-> Spécialités : Protocoles réseaux, Cryptographie, EBIOS RM, Dev Full-Stack`,
        });
        break;
      case 'certifs':
        nextHistory.push({
          type: 'output',
          text: `[1] SecNumacadémie - ANSSI (France) | Moyenne : 88.5% (Panorama SSI 90%, Auth 86%, Web 84%, Postes 94%)
[2] Introduction à la Cyber Sécurité - Sec Academy / Cursa (u7051280)
[3] Introduction to SQL - Sololearn (CC-S3EOR7OR)`,
        });
        break;
      case 'projects':
        nextHistory.push({
          type: 'output',
          text: `[*] MediProof : Hackathon Bitcoin Mastermind 2026 (Intégrité SHA-256 & Bitcoin)
[*] EBIOS RM : Rapport complet d'audit des risques Fintech (16 pages)
[*] SaaS DAO : Stage Quantum Tech (Django, Supabase, AWS EC2)
[*] Forensique Réseau : Analyse Wireshark ICMP/ARP (18 pages) & VPN Cisco`,
        });
        break;
      case 'skills':
        nextHistory.push({
          type: 'output',
          text: `> SSI & Crypto : GnuPG (RSA 4096), EBIOS RM, ANSSI, JWT, ISO 27005
> Réseaux      : TCP/IP, Wireshark, VPN (PPTP/L2TP), BIND9 DNS, Cisco IOS
> Web & Data   : Next.js 15, React, Python, Django, PostgreSQL, Prisma
> Systèmes     : Linux (Debian, Ubuntu, Kali), Bash, Git, AWS EC2`,
        });
        break;
      case 'cv':
        nextHistory.push({ type: 'output', text: 'Ouverture du lecteur de CV...' });
        onOpenDoc(cvDocument);
        break;
      case 'contact':
        nextHistory.push({
          type: 'output',
          text: `Email    : kpehoue@gmail.com
Téléphone: +229 01 67 96 93 40
GitHub   : github.com/elchristo229
Localité : Abomey-Calavi / Cotonou, Bénin`,
        });
        break;
      case 'sudo':
      case 'sudo su':
        nextHistory.push({ type: 'output', text: '[ACCESS DENIED] Incident rapporté au journal de sécurité IFRI.' });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        nextHistory.push({ type: 'output', text: `bash: ${command}: commande introuvable. Tapez 'help' pour la liste.` });
    }

    setHistory(nextHistory);
    setInputVal('');
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      historyPosition.current = Math.max(0, historyPosition.current - 1);
      setInputVal(commandHistory.current[historyPosition.current] || '');
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      historyPosition.current = Math.min(commandHistory.current.length, historyPosition.current + 1);
      setInputVal(commandHistory.current[historyPosition.current] || '');
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const commands = ['help', 'about', 'whoami', 'skills', 'projects', 'certifs', 'cv', 'contact', 'clear', 'sudo'];
      const matches = commands.filter((availableCommand) => availableCommand.startsWith(inputVal.toLowerCase()));
      if (matches.length === 1) setInputVal(matches[0]);
    }
  };

  return (
    <section id="terminal" className="py-20 relative overflow-hidden bg-slate-950/90 border-t border-slate-900 cyber-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
            CONSOLE INTERACTIVE EN DIRECT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">Terminal Cyber Interactif</h2>
          <p className="text-xs text-slate-400 font-mono mt-1">Testez les commandes comme dans un environnement Linux</p>
        </div>

        <div className="border border-cyan-500/30 bg-cyber-950/95 shadow-2xl shadow-cyan-950/40 overflow-hidden font-mono text-xs sm:text-sm">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs text-slate-400">/bin/zsh — 80x24 · user@sec-lab:~</span>
            </div>
            <span className="text-[11px] text-cyan-400 font-mono">[SSH: ACTIVE]</span>
          </div>

          <div className="p-5 h-80 overflow-y-auto space-y-2 bg-slate-950/90 scanline">
            {history.map((item, index) => (
              <div key={index} className={item.type === 'input' ? 'text-cyan-400 font-bold' : 'text-slate-300 font-light whitespace-pre-line'}>
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-slate-900/80 border-t border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0 mr-2">user@sec-lab:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(event) => setInputVal(event.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Tapez 'help', 'about', 'skills', 'projects'..."
              className="flex-1 min-w-0 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs sm:text-sm"
              style={{ caretColor: '#00f0ff' }}
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="px-2 py-1 text-cyan-400 hover:text-white border border-transparent hover:border-cyan-500/30 transition">
              Exécuter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}