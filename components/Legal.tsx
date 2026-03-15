
import React from 'react';
import { Shield, FileText, Code2, AlertTriangle, CheckSquare } from 'lucide-react';

interface LegalProps {
  type: 'privacy' | 'licensing' | 'docs';
}

export const Legal: React.FC<LegalProps> = ({ type }) => {
  const content = {
    privacy: {
      title: "PRIVACY_PROTOCOL",
      subtitle: "Data sovereignty is a human right.",
      icon: Shield,
      sections: [
        {
          head: "0.1 DATA_COLLECTION",
          body: "We only collect the absolute minimum data required to execute your requests. No hidden trackers. No third-party data harvesting. We are engineers, not brokers."
        },
        {
          head: "0.2 ENCRYPTION_STANDARDS",
          body: "All transmitted data is protected by AES-256 encryption. Stored data is siloed and strictly accessible only through audited security protocols."
        },
        {
          head: "0.3 USER_CONTROL",
          body: "You own your data. At any point, you can request a full wipe of your presence in our systems via the transmission portal."
        }
      ]
    },
    licensing: {
      title: "LICENSING_MIT",
      subtitle: "Open source is the foundation of progress.",
      icon: Code2,
      sections: [
        {
          head: "PERMISSIONS",
          body: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files."
        },
        {
          head: "CONDITIONS",
          body: "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
        },
        {
          head: "DISCLAIMER",
          body: "THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. USE AT YOUR OWN RISK. WE BUILD IT TO BE UNBREAKABLE, BUT THE UNIVERSE IS COMPLEX."
        }
      ]
    },
    docs: {
      title: "TECH_DOCUMENTATION",
      subtitle: "Full systems specifications for SpiceUP components.",
      icon: FileText,
      sections: [
        {
          head: "CORE_ARCHITECTURE",
          body: "Our systems utilize a micro-service architecture built primarily on Go for throughput and Rust for memory safety. Frontends are strictly TypeScript/Next.js."
        },
        {
          head: "DEPLOYMENT_STRATEGY",
          body: "We use immutable infrastructure. Every deployment is a fresh build, tested through 4 stages of automated CI before reaching the edge."
        },
        {
          head: "API_POLICIES",
          body: "All APIs are rate-limited and require signed JWT tokens. We adhere to the OpenAPI 3.0 specification for all public and internal interfaces."
        }
      ]
    }
  };

  const active = content[type];

  return (
    <section className="py-24 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <div className="p-6 bg-black text-white tech-border-red">
            <active.icon size={48} strokeWidth={3} className="text-red-500" />
          </div>
          <div>
            <div className="bg-red-500 text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-widest mb-2 w-fit">
              Status: Operational
            </div>
            <h1 className="text-5xl md:text-7xl font-inter font-black uppercase tracking-tighter leading-none">
              {active.title}
            </h1>
          </div>
        </div>

        <p className="text-2xl font-bold uppercase tracking-tight text-gray-500 mb-20 border-l-8 border-black pl-8 italic">
          "{active.subtitle}"
        </p>

        <div className="space-y-16">
          {active.sections.map((section, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-start gap-8">
                <div className="hidden md:block">
                  <div className="text-[10px] font-black text-red-500 font-mono rotate-90 origin-left translate-y-8 tracking-[0.5em]">
                    SEC_PRTCL_{idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
                    <CheckSquare size={20} className="text-red-500" />
                    {section.head}
                  </h2>
                  <div className="bg-gray-100 p-8 border-l-4 border-black tech-border font-mono text-sm leading-relaxed text-gray-700">
                    <div className="mb-4 text-gray-400 opacity-50">/* BEGIN_TRANSMISSION */</div>
                    {section.body}
                    <div className="mt-4 text-gray-400 opacity-50">/* END_TRANSMISSION */</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 border-2 border-black flex items-center gap-6 bg-black text-white tech-border-red">
          <AlertTriangle size={32} className="text-red-500 animate-tech-pulse shrink-0" />
          <p className="text-xs font-black uppercase tracking-widest leading-normal">
            Unauthorized modifications to these protocols are strictly prohibited. These documents are governed by the digital sovereignty laws of the SpiceUP network.
          </p>
        </div>
      </div>
    </section>
  );
};
