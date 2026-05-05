import React from 'react';
import { useNavigate } from 'react-router-dom';

const labs = [
  {
    id: 'vyos',
    label: 'VyOS',
    subtitle: 'Network OS · Router & Firewall Simulator',
    description: 'Practice VyOS router configuration, firewall rules, BGP/OSPF routing, and NAT in an interactive CLI environment.',
    color: '#22d3ee',
    accent: 'border-cyan-500/40 hover:border-cyan-400/70',
    badge: 'bg-cyan-500/10 text-cyan-400',
    route: '/vyos',
    icon: '🌐',
  },
  {
    id: 'cisco',
    label: 'Cisco IOS',
    subtitle: 'Switch & Router · IOS Command Simulator',
    description: 'Train on Cisco IOS commands, VLANs, STP, routing protocols, and ACLs with a realistic terminal experience.',
    color: '#f97316',
    accent: 'border-orange-500/40 hover:border-orange-400/70',
    badge: 'bg-orange-500/10 text-orange-400',
    route: '/cisco',
    icon: '🔀',
  },
  {
    id: 'ubuntu',
    label: 'Ubuntu Linux',
    subtitle: 'Linux CLI · Command Line Simulator',
    description: 'Learn Linux fundamentals, bash scripting, file permissions, networking commands, and system administration.',
    color: '#a78bfa',
    accent: 'border-violet-500/40 hover:border-violet-400/70',
    badge: 'bg-violet-500/10 text-violet-400',
    route: '/ubuntu',
    icon: '🐧',
  },
];

export default function LabSelector() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12"
      style={{ backgroundColor: '#0D1117' }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <img
          src="https://media.base44.com/images/public/69f216b16981978d3ddba26a/f9ebb8e3c_src_logo.png"
          alt="ATS Logo"
          className="w-24 mx-auto mb-6 opacity-80"
        />
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight mb-2">
          Network Lab
        </h1>
        <p className="text-slate-400 text-sm font-mono">
          Advanced Technological Solutions · Select a training environment
        </p>
      </div>

      {/* Lab cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {labs.map((lab) => (
          <button
            key={lab.id}
            onClick={() => navigate(lab.route)}
            className={`text-left rounded-xl border bg-slate-900/60 p-6 transition-all duration-200 cursor-pointer group ${lab.accent}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{lab.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-slate-100">{lab.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${lab.badge}`}>
                    Lab
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono mt-0.5">{lab.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{lab.description}</p>
            <div
              className="mt-5 text-xs font-mono flex items-center gap-1.5 transition-colors"
              style={{ color: lab.color }}
            >
              <span>Launch terminal</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-10 text-xs text-slate-600 font-mono">
        © Advanced Technological Solutions · Network Training Platform
      </p>
    </div>
  );
}