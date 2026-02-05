
import { Experience, Education, SkillCategory, StrategicService } from './types';

export const PERSONAL_INFO = {
  name: "Abhiroop Cheema",
  title: "Senior Financial Operations & Strategy Leader",
  location: "Surrey, BC",
  email: "abhiroopcheema@live.ca",
  phone: "778-822-5791",
  // Using a stable, high-end "Wall Street" style faceless professional image as the primary URL
  photoUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071",
  summary: "Accomplished finance professional with over 9 years of experience delivering accurate, insightful financial reporting and analysis across diverse industries including logistics, brokerage and healthcare. Adept at managing multi-entity operations, leading ERP system transitions, and driving process improvements that enhance efficiency and compliance."
};

export const STRATEGIC_SERVICES: StrategicService[] = [
  {
    title: "Tax Compliance & Advisory",
    description: "Expert handling of business and individual tax requirements, including T4/T5 preparation, corporate filings, and strategic tax planning to ensure compliance and maximize efficiency.",
    icon: "tax",
    tags: ["T4/T5 Filing", "Tax Planning", "Compliance"]
  },
  {
    title: "FP&A, Budgeting & Forecasting",
    description: "Architecting robust financial models, multi-year forecasts, and granular budgets. I specialize in turning complex data into boardroom-ready business plans that secure stakeholder approval.",
    icon: "strategy",
    tags: ["Business Planning", "Budgeting", "Forecasting"]
  },
  {
    title: "Workflow Automation & Orchestration",
    description: "Leveraging n8n and advanced integration frameworks to architect seamless, automated workflows. I help organizations eliminate manual data entry and connect disparate SaaS ecosystems.",
    icon: "automation",
    tags: ["n8n", "API Integration", "Process Design"]
  },
  {
    title: "AI Implementation & Optimization",
    description: "Strategic integration of AI models into business frameworks. From LLM training to custom prompt engineering, I enable teams to leverage AI for data synthesis and decision-making.",
    icon: "ai",
    tags: ["LLM Training", "AI Workflows", "Strategy"]
  }
];

export const CAREER_INDUSTRIES = [
  { name: "Healthcare & SaaS", icon: "healthcare" },
  { name: "Logistics & Supply Chain", icon: "logistics" },
  { name: "International Brokerage", icon: "brokerage" },
  { name: "Customs & Trade", icon: "trade" }
];

export const CORE_CONTRIBUTIONS = [
  {
    title: "Multi-Entity Financial Management",
    description: "Expertly managed full-cycle accounting for multi-entity, multi-currency operations including high-volume US subsidiaries, ensuring seamless consolidation and reporting."
  },
  {
    title: "ERP System Transformation",
    description: "Led large-scale technical ERP transitions, most notably from Great Plains to MS Dynamics 365 Business Central, optimizing data integrity and operational speed."
  },
  {
    title: "Regulatory Compliance & Audit Leadership",
    description: "Successfully navigated complex GST and payroll audits with zero material findings. Oversaw internal SOX compliance and maintained rigorous reporting standards."
  },
  {
    title: "Strategic Financial Reporting",
    description: "Prepared and presented comprehensive financial statements and variance analysis for executive management, providing the data necessary for informed strategic decisions."
  },
  {
    title: "Process Optimization",
    description: "Redesigned corporate commission structures and automated AR/AP segments, significantly reducing manual overhead and improving collection cycles."
  },
  {
    title: "Executive Collaboration",
    description: "Actively participated in management and executive strategy sessions, translating complex financial data into actionable insights for diverse business sectors."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "CPABC – CPA Candidate",
    degree: "CPA Designation",
    period: "September 2021 – Present",
    details: "Modules Completed | 2026"
  },
  {
    institution: "Douglas College",
    degree: "Bachelor of Accounting",
    period: "September 2017 – December 2020"
  },
  {
    institution: "British Columbia Institute of Technology",
    degree: "Financial Management Diploma",
    period: "September 2012 – June 2015"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Financial & Technical",
    skills: ["Advanced Excel (Pivot, X & V LOOKUPS)", "ERP: Dynamics 365, SAP, Great Plains", "Budgeting & Financial Reporting", "SOX Compliance", "Multi-currency Consolidation"]
  },
  {
    title: "Software Ecosystem",
    skills: ["QuickBooks", "Xero", "Sage 50", "NetSuite", "MS Office Suite", "Google Suite"]
  },
  {
    title: "Personal & Leadership",
    skills: ["Process Optimization", "Client Relationship Management", "Strategic Problem Solving", "Leadership & Mentoring", "Collaborative Teamwork"]
  },
  {
    title: "Digital & Operational",
    skills: ["Workflow Automation (n8n)", "AI Model Implementation", "Business Plan Development", "Strategic Forecasts", "Tax Planning (T4/T5)"]
  }
];
