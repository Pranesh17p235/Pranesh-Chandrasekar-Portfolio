import { PortfolioData } from './types';

export const RESUME_DATA: PortfolioData = {
  name: "PRANESH CHANDRASEKAR",
  summary: "Cybersecurity analyst with a strong background in boundary protection, endpoint protection, and IT support. Proven ability to troubleshoot technical issues, ensure compliance with security policies, and deliver seamless user experiences during enterprise level software transitions. Strong communicator with a focus on documentation, user training, and operational efficiency",
  experience: [
    {
      id: "exp1",
      role: "ISS Security Technology Operations L2",
      company: "Wipro Technologies",
      period: "Mar 2023 - Aug 2024",
      responsibilities: [
        "Orchestrated McAfee ePO, ENS, and Drive Encryption for 150,000+ endpoints and 20,000 servers.",
        "Engineered endpoint authentication and firewall policies for 100,000+ devices using Cisco ISE.",
        "Managed 6,000+ network switches and WIPS configurations for enterprise WiFi security.",
        "Automated MS Defender deployments via Intune and PowerShell scripting.",
        "Resolved critical Akamai traffic incidents and hardened WAF policies."
      ]
    },
    {
      id: "exp2",
      role: "ISS Security Technology Operations L1",
      company: "Wipro Technologies",
      period: "June 2021 - Mar 2023",
      responsibilities: [
        "Executed proxy policy hardening (IP/URL blocking) based on real-time threat intelligence.",
        "Conducted deep log analysis to preemptively neutralize threats at the perimeter.",
        "Leveraged Cisco Talos for advanced URL categorization and risk mitigation.",
        "Utilized Splunk SaaS for monitoring and mitigating domain-level security incidents."
      ]
    },
    {
      id: "exp3",
      role: "Wersec Inc (Internship)",
      company: "Wersec Inc",
      period: "July 2025 - Present",
      responsibilities: [
        "Facilitated seamless Azure AD onboarding and Outlook migrations.",
        "Performed forensic log analysis on antivirus installations across distributed endpoints.",
        "Authored technical blogs on emerging cybersecurity trends and awareness.",
        "Supported migration workflows for enterprise-grade antivirus solutions."
      ]
    }
  ],
  skills: {
    tools: ["ServiceNow", "Cisco Ironport", "Cisco ISE", "Splunk (SIEM)", "RSA NetWitness", "McAfee ePO", "Tanium", "Arista WIPS", "Microsoft Defender", "Imperva DAM", "Netskope CASB"],
    technical: ["Python", "PowerShell", "Azure Security", "Identity Mgmt", "Log Analysis", "Cloud Infrastructure"],
    soft: ["Crisis Response", "Strategic Threat Modeling", "Analytical Problem Solving", "Continuous Learning"]
  },
  education: [
    {
      degree: "Masters of Science in Cybersecurity",
      institution: "DePaul University, Chicago, IL",
      period: "Expected May 2026"
    },
    {
      degree: "B.E Computer Science and Engineering",
      institution: "Karpagam College, Coimbatore, India",
      period: "Mar 2017 - May 2021"
    }
  ],
  certifications: [
    "SC-200: Microsoft Security Operations Analyst",
    "SC-300: Microsoft Identity and Access Administrator",
    "AZ-900: Microsoft Azure Fundamentals",
    "Netskope Cloud Security Specialist"
  ],
  awards: [
    "Wipro CRS Best CollegeToCorporate (April-2022)",
    "Wipro CRS Highflyer Award (April-2024)"
  ]
};