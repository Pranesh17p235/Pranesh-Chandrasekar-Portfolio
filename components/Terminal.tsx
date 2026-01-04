
import React, { useState, useEffect, useRef } from 'react';
import { RESUME_DATA } from '../data';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Kernel: v6.2.0-secure-pranesh',
    'Initializing local system...',
    'Decrypting personal_data.bin...',
    'Login successful as: ADMIN',
    '',
    'Welcome back, Pranesh. System integrity 100%.',
    'Type "help" for a list of valid protocols.',
    ''
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response = '';

    setHistory(prev => [...prev, `root@pranesh:~# ${input}`]);

    switch (cmd) {
      case 'help':
        response = 'CORE PROTOCOLS: \n- ls: List modules\n- whoami: User profile\n- certs: View credentials\n- fetch: Load experience\n- clear: Purge buffer\n- exit: Close terminal';
        break;
      case 'whoami':
        response = `SUBJECT: ${RESUME_DATA.name}\nROLE: Cybersecurity Analyst\nFOCUS: Boundary Protection & Identity`;
        break;
      case 'ls':
        response = 'about.md  experience.json  skills.sh  education.pdf  certs.key';
        break;
      case 'certs':
        response = RESUME_DATA.certifications.map(c => `[VALID] ${c}`).join('\n');
        break;
      case 'fetch':
        response = 'FETCHING LATEST DEPLOYMENTS...\n' + RESUME_DATA.experience.map(exp => `>> ${exp.role} @ ${exp.company}`).join('\n');
        break;
      case 'clear':
        setHistory(['Buffer purged. Terminal ready.', '']);
        setInput('');
        return;
      case 'exit':
        response = 'Logout procedure initiated... Session closed.';
        break;
      default:
        response = `Protocol error: "${cmd}" is not recognized. Try "help".`;
    }

    setHistory(prev => [...prev, response, '']);
    setInput('');
  };

  return (
    <div className="bg-black/90 border border-green-500/30 rounded p-4 font-mono text-[13px] h-[350px] overflow-y-auto shadow-[inset_0_0_20px_rgba(0,59,0,0.5)] scrollbar-hide">
      <div className="flex flex-col gap-1">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-tight">
            {line.startsWith('root@') ? (
              <span className="text-white font-bold">{line}</span>
            ) : line.includes('VALID') || line.includes('SUBJECT') ? (
              <span className="text-cyan-400">{line}</span>
            ) : line.includes('Protocol error') ? (
              <span className="text-red-500">{line}</span>
            ) : (
              <span className="text-green-500">{line}</span>
            )}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2">
          <span className="text-white font-bold">root@pranesh-sec:~#</span>
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-green-400 flex-1 caret-green-500"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
