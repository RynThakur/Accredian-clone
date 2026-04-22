import React from "react";
import { 
  Lightbulb, Target, Box, Settings, Network, ArrowLeftRight, UserCheck,
  BrainCircuit, Users, BarChart3, Globe, Wallet,
  MonitorPlay, MonitorOff, GraduationCap, Briefcase, Image as ImageIcon
} from "lucide-react";

export default function AccredianEdge() {
  return (
    <section id="accredian-edge" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              The <span className="text-blue-600">Accredian Edge</span>
            </h2>
            <p className="text-gray-600 font-medium">Key Aspects of <span className="text-blue-600">Our Strategic Training</span></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            <EdgeItem icon={<Lightbulb size={28}/>} title="Tailored Solutions" desc="Programs customized to your organization's goals and challenges." />
            <EdgeItem icon={<Settings size={28}/>} title="Innovative Framework" desc="Proprietary methods for impactful, application-driven results." />
            <EdgeItem icon={<ArrowLeftRight size={28}/>} title="Diverse Offerings" desc="Courses across industries, skill levels, and emerging fields." />
            <EdgeItem icon={<Box size={28}/>} title="Flexible Delivery" desc="Online and offline options tailored to your needs." />
            <div className="hidden lg:block lg:col-span-4 flex justify-center gap-12 mt-4">
               <div className="flex justify-center gap-24 w-full px-24">
                  <EdgeItem icon={<UserCheck size={28}/>} title="Expert Guidance" desc="Learn from industry leaders with real-world success." />
                  <EdgeItem icon={<Network size={28}/>} title="Advanced Technology" desc="State-of-the-art LMS for seamless learning experiences." />
                  <EdgeItem icon={<Target size={28}/>} title="Proven Impact" desc="Trusted by leading organizations for measurable ROI." />
               </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Our <span className="text-blue-600">Domain Expertise</span>
            </h2>
            <p className="text-gray-600 font-medium"><span className="text-blue-600">Specialized Programs</span> Designed to Fuel Innovation</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            <DomainCard icon={<Lightbulb />} text="Product & Innovation Hub" />
            <DomainCard icon={<BrainCircuit />} text="Gen-AI Mastery" />
            <DomainCard icon={<Users />} text="Leadership Elevation" />
            <DomainCard icon={<BarChart3 />} text="Tech & Data Insights" />
            <DomainCard icon={<Settings />} text="Operations Excellence" />
            <DomainCard icon={<Globe />} text="Digital Enterprise" />
            <DomainCard icon={<Wallet />} text="Fintech Innovation Lab" />
          </div>
        </div>
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Tailored <span className="text-blue-600">Course Segmentation</span>
            </h2>
            <p className="text-gray-600 font-medium">Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CourseCard title="Program Specific" desc="Certificate, Executive, Post Graduate Certificate" color="from-blue-100 to-blue-50" />
            <CourseCard title="Industry Specific" desc="IT, Healthcare, Retail, Finance, Education, Manufacturing" color="from-purple-100 to-purple-50" />
            <CourseCard title="Topic Specific" desc="Machine Learning, Design, Analytics, Cybersecurity, Cloud" color="from-indigo-100 to-indigo-50" />
            <CourseCard title="Level Specific" desc="Senior Leadership, Mid-Career Professionals, Freshers" color="from-sky-100 to-sky-50" />
          </div>
        </div>
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="md:w-1/3 relative z-10">
            <p className="text-blue-100 font-medium mb-2">Who Should Join?</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">Strategic Skill Enhancement</h2>
            <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center justify-center">
              <ImageIcon size={48} className="text-white/50 mb-2" />
              <p className="text-sm text-white/70">Professional Image</p>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            <RoleItem icon={<MonitorPlay size={32}/>} title="Tech Professionals" desc="Enhance expertise, embrace tech, drive innovation." />
            <RoleItem icon={<MonitorOff size={32}/>} title="Non-Tech Professionals" desc="Adapt digitally, collaborate in tech environments." />
            <RoleItem icon={<GraduationCap size={32}/>} title="Emerging Professionals" desc="Develop powerful skills for rapid career growth." />
            <RoleItem icon={<Briefcase size={32}/>} title="Senior Professionals" desc="Strengthen leadership, enhance strategic decisions." />
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        </div>

      </div>
    </section>
  );
}
function EdgeItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-50 shadow-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-gray-100">
        {icon}
      </div>
      <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function DomainCard({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all w-full sm:w-[250px] group">
      <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, { size: 36 })}
      </div>
      <span className="font-semibold text-gray-800 text-center">{text}</span>
    </button>
  );
}

function CourseCard({ title, desc, color }: { title: string, desc: string, color: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow group">
      <div className={`h-40 bg-gradient-to-br ${color} flex items-center justify-center relative overflow-hidden`}>
        <ImageIcon size={40} className="text-blue-900/20" />
        <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div className="p-6 text-center">
        <h4 className="text-xl font-bold text-blue-600 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function RoleItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="mb-4 bg-white/10 p-3 rounded-lg border border-white/20">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}