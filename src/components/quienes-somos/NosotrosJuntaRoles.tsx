"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserTie, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface JuntaPersonData {
    name?: string;
    description?: string;
}

interface JuntaRoleData {
    position?: string;
    name?: string;
    description?: string;
    people?: JuntaPersonData[];
}

interface Props {
    data?: JuntaRoleData[] | null;
}

const defaultRoles: JuntaRoleData[] = [
    { 
        position: "PRESIDENTE", 
        people: [
            { name: "Germán Camilo Lleras Echeverry", description: "Lidera la junta directiva y representa legalmente a la asociación." }
        ]
    },
    { 
        position: "VICEPRESIDENTE", 
        people: [
            { name: "Norma Inés Orjuela Deep", description: "Apoya al presidente en sus funciones y asume la dirección en su ausencia." }
        ]
    },
    { 
        position: "SECRETARIA", 
        people: [
            { name: "Myriam Lilia Barrera Castillo", description: "Gestiona la documentación oficial y comunicación institucional." }
        ]
    },
    { 
        position: "VOCAL", 
        people: [
            { name: "Laureano González Barbosa", description: "Representa a los asociados y vela por el cumplimiento de los estatutos." },
            { name: "Jose Ignacio Leiva González", description: "Aporta experiencia en áreas estratégicas." },
            { name: "Juan Carlos Andrade Flórez", description: "Colabora en la supervisión de proyectos y programas." }
        ]
    },
];

function normalizeRole(role: JuntaRoleData): { position: string; people: JuntaPersonData[] } {
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

function PersonCard({ person, isExpanded, onToggle }: { person: JuntaPersonData; isExpanded: boolean; onToggle: () => void }) {
    if (!person.name) return null;
    
    return (
        <div 
            className="group cursor-pointer py-2" 
            onClick={onToggle}
        >
            <div className="flex items-center justify-between">
                <h5 className="text-white font-extrabold text-lg md:text-xl">
                    {person.name}
                </h5>
                {person.description && (
                    <div className={`flex items-center gap-2 text-sm transition-colors ${isExpanded ? 'text-accent' : 'text-white/50 group-hover:text-accent'}`}>
                        <span className="text-xs hidden md:inline">{isExpanded ? "Ocultar" : "Más info"}</span>
                        {isExpanded ? (
                            <FaChevronUp className="text-xs" />
                        ) : (
                            <FaChevronDown className="text-xs" />
                        )}
                    </div>
                )}
            </div>
            <AnimatePresence>
                {isExpanded && person.description && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-300 text-sm mt-2 leading-relaxed border-t border-white/10 pt-2">
                            {person.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function RoleCard({ role, expandedPerson, onTogglePerson }: { 
    role: { position: string; people: JuntaPersonData[] };
    expandedPerson: number | null;
    onTogglePerson: (index: number) => void;
}) {
    if (!role.position) return null;
    
    const people = role.people || [];
    
    return (
        <motion.div 
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="group"
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent transition-colors duration-300">
                    <FaUserTie className="text-white text-sm" />
                </div>
                <h4 className="text-white/70 font-black text-xs tracking-widest uppercase group-hover:text-accent transition-colors">
                    {role.position}
                </h4>
            </div>
            <div className="pl-11 border-l-2 border-white/10 group-hover:border-accent transition-colors duration-300 space-y-1">
                {people.map((person, personIdx) => (
                    <PersonCard 
                        key={personIdx}
                        person={person}
                        isExpanded={expandedPerson === personIdx}
                        onToggle={() => onTogglePerson(personIdx)}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default function NosotrosJuntaRoles({ data }: Props) {
    const roles = data && data.length > 0 ? data : defaultRoles;
    
    const normalizedRoles = useMemo(() => {
        return roles.map(role => normalizeRole(role));
    }, [roles]);
    
    const [expandedPerson, setExpandedPerson] = useState<number | null>(null);

    const togglePerson = (index: number) => {
        setExpandedPerson(expandedPerson === index ? null : index);
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } }
    };

    const allRoles = [...normalizedRoles];
    const midPoint = Math.ceil(allRoles.length / 2);
    const leftColumn = allRoles.slice(0, midPoint);
    const rightColumn = allRoles.slice(midPoint);

    return (
        <section className="bg-primary relative overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
                >
                    <div className="flex flex-col gap-8">
                        {leftColumn.map((role, idx) => {
                            if (!role) return null;
                            return (
                                <RoleCard 
                                    key={idx} 
                                    role={role}
                                    expandedPerson={expandedPerson}
                                    onTogglePerson={togglePerson}
                                />
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-8">
                        {rightColumn.map((role, idx) => {
                            if (!role) return null;
                            return (
                                <RoleCard 
                                    key={idx + midPoint} 
                                    role={role}
                                    expandedPerson={expandedPerson}
                                    onTogglePerson={togglePerson}
                                />
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
