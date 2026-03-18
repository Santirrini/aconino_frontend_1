"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserShield, FaChevronDown } from "react-icons/fa";

interface AdminPersonData {
    name?: string;
    description?: string;
}

interface AdminRoleData {
    position?: string;
    name?: string;
    description?: string;
    people?: AdminPersonData[];
}

interface Props {
    data?: {
        subtitle?: string;
        title?: string;
        roles?: AdminRoleData[];
    } | null;
}

const defaultAdminRoles = [
    { 
        position: "DIRECTORA EJECUTIVA", 
        people: [
            { name: "Bertha Brunal Soto", description: "Lidera la gestión operativa de la asociación." }
        ]
    },
    { 
        position: "SUBDIRECTORA ADMINISTRATIVA Y FINANCIERA", 
        people: [
            { name: "Zuleima Leonor Beltrán García", description: "Gestiona recursos financieros y presupuestos." }
        ]
    },
    { 
        position: "COORDINADORA DE ATENCIÓN INTEGRAL", 
        people: [
            { name: "María Claudia Rosas Mesa", description: "Coordina servicios de atención a beneficiarios." },
            { name: "Alexandra Paz Ortega", description: "Administra citas y evaluaciones de pacientes." }
        ]
    },
    { 
        position: "CONTADORA", 
        people: [
            { name: "Rocío Rodríguez Piraquive", description: "Gestiona estados financieros y reportes contables." }
        ]
    },
    { 
        position: "REVISOR FISCAL", 
        people: [
            { name: "Hernan Yepes Castro", description: "Audita estados financieros y verifica cumplimiento." },
            { name: "Mauricio López Soto", description: "Suplente del revisor fiscal principal." }
        ]
    },
];

function normalizeRole(role: AdminRoleData): { position: string; people: AdminPersonData[] } {
    if (role.people && Array.isArray(role.people) && role.people.length > 0) {
        return {
            position: role.position || "",
            people: role.people
        };
    }
    
    if (role.name) {
        return {
            position: role.position || "",
            people: [{ name: role.name, description: role.description }]
        };
    }
    
    return {
        position: role.position || "",
        people: []
    };
}

function PersonCard({ person, isExpanded, onToggle }: { 
    person: AdminPersonData; 
    isExpanded: boolean; 
    onToggle: () => void;
}) {
    if (!person.name) return null;
    
    return (
        <div className="group">
            <div 
                className={`flex items-center justify-between py-2 ${person.description ? 'cursor-pointer' : ''}`}
                onClick={person.description ? onToggle : undefined}
            >
                <h5 className="text-primary font-extrabold text-2xl md:text-3xl leading-tight">
                    {person.name}
                </h5>
                {person.description && (
                    <div className={`flex items-center gap-2 text-sm transition-colors ${isExpanded ? 'text-accent' : 'text-gray-400 group-hover:text-accent'}`}>
                        <span className="text-xs hidden md:inline">{isExpanded ? "Ocultar" : "Más info"}</span>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <FaChevronDown className="text-xs" />
                        </motion.div>
                    </div>
                )}
            </div>
            <AnimatePresence initial={false}>
                {isExpanded && person.description && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, restDelta: 0.01 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4 mt-2">
                            {person.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function RoleCard({ role, roleIndex, expandedPerson, onTogglePerson }: { 
    role: { position: string; people: AdminPersonData[] };
    roleIndex: number;
    expandedPerson: string | null;
    onTogglePerson: (id: string) => void;
}) {
    if (!role.position) return null;
    
    const people = role.people || [];
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl border-b-4 border-transparent hover:border-accent transition-all duration-500 transform hover:-translate-y-2"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-2xl bg-primary/5 group-hover:bg-accent group-hover:text-white transition-colors duration-300 w-fit">
                    <FaUserShield className="text-primary group-hover:text-white text-xl md:text-2xl transition-colors" />
                </div>
                <h4 className="text-gray-400 font-black text-xs md:text-sm tracking-widest uppercase">{role.position}</h4>
            </div>
            
            <div className="space-y-4">
                {people.map((person, personIdx) => {
                    const personId = `${roleIndex}-${personIdx}`;
                    return (
                        <PersonCard 
                            key={personIdx}
                            person={person}
                            isExpanded={expandedPerson === personId}
                            onToggle={() => onTogglePerson(personId)}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
}

export default function NosotrosAdmin({ data }: Props) {
    const subtitle = data?.subtitle || "Gestión y Liderazgo";
    const title = data?.title || "Equipo Administrativo";
    const adminRoles = data?.roles && data.roles.length > 0 ? data.roles : defaultAdminRoles;
    
    const normalizedRoles = useMemo(() => {
        return adminRoles.map(role => normalizeRole(role));
    }, [adminRoles]);
    
    const [expandedPerson, setExpandedPerson] = useState<string | null>(null);

    const togglePerson = (id: string) => {
        setExpandedPerson(expandedPerson === id ? null : id);
    };

    const midPoint = Math.ceil(normalizedRoles.length / 2);
    const leftColumn = normalizedRoles.slice(0, midPoint);
    const rightColumn = normalizedRoles.slice(midPoint);

    return (
        <section className="bg-gray-50 relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] bg-accent w-12"></div>
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">{subtitle}</span>
                        <div className="h-[2px] bg-accent w-12"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary drop-shadow-sm">
                        {title}
                    </h2>
                </motion.div>

                <motion.div 
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 relative z-10"
                >
                    <div className="flex flex-col gap-6">
                        {leftColumn.map((role, idx) => (
                            <RoleCard 
                                key={idx} 
                                role={role}
                                roleIndex={idx}
                                expandedPerson={expandedPerson}
                                onTogglePerson={togglePerson}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col gap-6">
                        {rightColumn.map((role, idx) => (
                            <RoleCard 
                                key={idx + midPoint} 
                                role={role}
                                roleIndex={idx + midPoint}
                                expandedPerson={expandedPerson}
                                onTogglePerson={togglePerson}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
                <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path 
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.26,192.4,103.5,237.93,91.68,280.9,74.5,321.39,56.44Z" 
                        className="fill-[#1b2b65]" 
                    />
                </svg>
            </div>
        </section>
    );
}
