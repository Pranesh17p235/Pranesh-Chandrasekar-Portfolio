
import React, { useState, useEffect } from 'react';
import MatrixBackground from './components/MatrixBackground';
import Terminal from './components/Terminal';
import Section from './components/Section';
import ProfileImage from './components/ProfileImage';
import { RESUME_DATA } from './data';

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsBooted(true), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSecureChat = () => {
    // User provided email address
    const email = "praneshpranu00@gmail.com";
    const subject = "OFFER LETTER";
    
    // Construct direct Gmail compose URL for browser-based access
    // view=cm: Compose mode
    // fs=1: Fullscreen/standalone compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    
    // Open in a new tab to ensure it uses the browser session
    window.open(gmailUrl, '_blank');
  };

  const handleDownloadDossier = () => {
    const dossierContent = `
============================================================
SECURE DATA DOSSIER: PRANESH CHANDRASEKAR
CLASSIFICATION: UNCLASSIFIED // AUTHORIZED ACCESS
============================================================

SUMMARY:
${RESUME_DATA.summary}

EXPERIENCE LOGS:
${RESUME_DATA.experience.map(exp => `
[${exp.period}]
ROLE: ${exp.role}
ORG: ${exp.company}
TASKS:
${exp.responsibilities.map(r => `  - ${r}`).join('\n')}
`).join('\n')}

CERTIFICATIONS:
${RESUME_DATA.certifications.map(c => `[VALID] ${c}`).join('\n')}

TECHNICAL TOOLKIT:
${RESUME_DATA.skills.technical.join(', ')}
${RESUME_DATA.skills.tools.join(', ')}

============================================================
EOF // TRANSMISSION TERMINATED
============================================================
    `;
    const blob = new Blob([dossierContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'PRANESH_SEC_DOSSIER.log';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isBooted) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center font-mono text-green-500 p-8 z-[100]">
        <div className="max-w-md w-full">
          <div className="mb-4 text-[10px] leading-tight">
            [ OK ] System Check: Secure Boot Enabled<br/>
            [ OK ] Core: 12-Core ARM Processor Detected<br/>
            [ OK ] Network: VPN Tunnel Established<br/>
            [ OK ] Memory: High-Encryption Buffer Initialized<br/>
            [ OK ] Security: SC-200/SC-300 Protocol Loading...<br/>
          </div>
          <div className="w-full h-1 bg-green-950 mb-2 overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-300 ease-out"
              style={{ width: `${bootProgress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-bold tracking-[0.2em]">
            <span>LOADING IDENTITY...</span>
            <span>{bootProgress}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pb-20 selection:bg-green-500 selection:text-black bg-black text-green-500 font-mono">
      <MatrixBackground />

      <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-green-500/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flicker flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#00ff41]"></div>
            <span className="text-green-500">PRANESH.C</span>
            <span className="text-[10px] text-green-400 border border-green-500/40 px-2 ml-2 py-0.5 rounded font-mono uppercase tracking-widest bg-green-500/5">Cybersecurity Analyst</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-mono uppercase tracking-[0.3em] text-green-800">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-green-400 hover:tracking-[0.4em] transition-all cursor-pointer">/Dossier</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-green-400 hover:tracking-[0.4em] transition-all cursor-pointer">/Ops_History</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-green-400 hover:tracking-[0.4em] transition-all cursor-pointer">/Toolkit</a>
            <a href="#edu" onClick={(e) => scrollToSection(e, 'edu')} className="hover:text-green-400 hover:tracking-[0.4em] transition-all cursor-pointer">/Academics</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <div id="about" className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 mb-32 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 border border-green-500/20 text-green-500 text-[10px] font-mono uppercase tracking-widest bg-green-500/5">
              Access Granted: Authorized Analyst
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight leading-none">
              PRANESH <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 uppercase">CHANDRASEKAR</span>
            </h1>
            <p className="text-sm md:text-base text-green-300/60 mb-10 max-w-xl font-mono leading-relaxed border-l-2 border-green-500/20 pl-6 italic">
              "{RESUME_DATA.summary}"
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleSecureChat}
                className="bg-green-600 hover:bg-green-500 text-black px-8 py-3 font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:scale-105 active:scale-95"
              >
                Initiate Secure_Chat
              </button>
              <button 
                onClick={handleDownloadDossier}
                className="border border-green-900 hover:bg-green-500/10 text-green-500 px-8 py-3 font-bold text-xs uppercase tracking-widest transition-all hover:border-green-400"
              >
                Download_Dossier.log
              </button>
            </div>
          </div>
          <div className="relative">
            <ProfileImage />
            <div className="mt-8">
               <Terminal />
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <Section title="Operations History" id="experience">
          <div className="space-y-16">
            {RESUME_DATA.experience.map((exp) => (
              <div key={exp.id} className="relative group p-8 bg-green-950/5 border border-green-900/20 rounded-sm hover:border-green-500/30 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(0,59,0,0.1)]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="text-green-500 font-mono text-sm tracking-widest uppercase">{exp.company}</div>
                  </div>
                  <div className="text-[10px] font-mono bg-green-500/10 px-4 py-2 text-green-400 border border-green-500/20 mt-2 md:mt-0">
                    PERIOD_TOKEN: {exp.period}
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-4 text-sm group/item">
                      <span className="text-green-500/40 group-hover/item:text-green-500 transition-colors">0x0{i+1}</span>
                      <span className="text-green-100/70 group-hover/item:text-green-100 transition-colors leading-relaxed">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications Section */}
        <Section title="Encryption Keys (Certs)" id="certs" className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESUME_DATA.certifications.map((cert, i) => (
              <div key={i} className="bg-black/40 border border-green-900/40 p-5 hover:border-green-400 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] hover:bg-green-500/10 transition-all duration-300 group cursor-default relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-[10px] text-green-900 font-mono uppercase group-hover:text-green-500 transition-colors">Key_0{i+1}</div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse group-hover:shadow-[0_0_12px_#00ff41] group-hover:bg-white transition-all"></div>
                  </div>
                  <div className="text-sm font-bold text-green-100 group-hover:text-green-400 transition-colors leading-snug">
                    {cert}
                  </div>
                  <div className="mt-4 flex gap-1">
                    {[1,2,3,4,5].map(dot => (
                      <div key={dot} className="h-1 flex-1 bg-green-900/30 group-hover:bg-green-500 transition-colors" style={{transitionDelay: `${dot * 50}ms`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="System Toolkit" id="skills" className="mt-20">
          <div className="grid md:grid-cols-3 gap-10">
            {Object.entries(RESUME_DATA.skills).map(([category, items]) => (
              <div key={category} className="group">
                <h4 className="text-green-500 font-bold mb-6 uppercase text-xs tracking-[0.4em] flex items-center gap-3">
                  <span className="w-1 h-3 bg-green-500/20 group-hover:bg-green-500 transition-all"></span>
                  {category.replace(/([A-Z])/g, '_$1')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="text-[11px] font-mono bg-green-950/20 px-3 py-1 border border-green-900/30 text-green-300 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all cursor-crosshair">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education & Awards */}
        <div className="grid md:grid-cols-2 gap-20 mt-20">
          <Section title="Academic Archives" id="edu">
            <div className="space-y-10">
              {RESUME_DATA.education.map((edu, i) => (
                <div key={i} className="relative pl-6 border-l border-green-900/50 group">
                  <div className="absolute top-0 left-[-4px] w-[8px] h-[8px] bg-green-900 group-hover:bg-green-500 transition-colors"></div>
                  <h4 className="font-bold text-lg text-white group-hover:text-green-400 transition-colors">{edu.degree}</h4>
                  <div className="text-sm text-green-700 font-mono uppercase tracking-wider">{edu.institution}</div>
                  <div className="text-xs font-mono text-green-900 mt-2 italic">{edu.period}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="System Medals">
            <div className="space-y-4">
              {RESUME_DATA.awards.map((award, i) => (
                <div key={i} className="flex items-center gap-4 bg-green-500/5 p-4 border border-green-900/20 hover:border-green-500/40 transition-all">
                   <div className="p-2 border border-green-500/20 text-green-500">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   </div>
                   <div className="text-xs font-mono text-green-300/80 leading-snug">
                     {award}
                   </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>

      <footer className="mt-40 border-t border-green-500/10 py-16 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">
          <div className="text-left">
            <div className="text-[10px] font-mono uppercase tracking-[0.8em] text-green-900 mb-6">Security_Verification_Successful</div>
            <div className="text-green-400 text-sm font-mono font-bold uppercase mb-2">PRANESH_SEC // CYBER_INTEL_V6</div>
            <div className="text-green-900 text-[10px] max-w-md leading-relaxed uppercase mb-8">
              Encrypted transmission complete. Subject identity: PRANESH CHANDRASEKAR. Role: Cybersecurity Analyst. System status nominal.
            </div>
            
            {/* Social Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a 
                href="https://www.linkedin.com/in/pranesh-chandrasekar-6487411aa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 border border-green-900/30 hover:border-green-500/50 bg-green-500/5 transition-all flex flex-col gap-1"
              >
                <span className="text-[10px] text-green-900 uppercase tracking-widest group-hover:text-green-400 transition-colors">/Social/LinkedIn</span>
                <span className="text-[11px] text-green-600 font-bold group-hover:text-white transition-colors truncate">linkedin.com/in/pranesh-chandrasekar</span>
              </a>
              <a 
                href="https://github.com/Pranesh17p235" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 border border-green-900/30 hover:border-green-500/50 bg-green-500/5 transition-all flex flex-col gap-1"
              >
                <span className="text-[10px] text-green-900 uppercase tracking-widest group-hover:text-green-400 transition-colors">/Social/GitHub</span>
                <span className="text-[11px] text-green-600 font-bold group-hover:text-white transition-colors truncate">github.com/Pranesh17p235</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 text-[10px] font-mono text-green-900 uppercase tracking-widest md:text-right">
            <div className="flex flex-col gap-1">
              <span className="text-green-700">/Latency_Metrics</span>
              <span className="text-green-400">0.012s // 4 HOP_TRANSIT</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-green-700">/Encryption_Standard</span>
              <span className="text-green-400">AES_256_GCM</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-green-700">/Identity_Status</span>
              <span className="text-green-500 animate-pulse">ACTIVE_SESSION_VERIFIED</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-16 text-[9px] text-green-900 uppercase tracking-widest opacity-40 border-t border-green-900/10 pt-8 flex justify-between">
          <span>© {new Date().getFullYear()} ROOT_DOMAIN:PRANESH_CHANDRASEKAR</span>
          <span>ALL_TRAFFIC_LOGGED_BY_PORTFOLIO_V6</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
