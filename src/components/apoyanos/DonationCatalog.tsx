"use client";

import { motion } from "framer-motion";
import { FaMoneyBillWave, FaBoxOpen, FaDesktop, FaChair, FaHeart, FaGlobe } from "react-icons/fa";
import { useDonation } from "@/providers/DonationProvider";

const categories = [
  { id: 'monetary', title: 'Donaciones Monetarias', description: 'Tu aporte ayuda a comprar materiales y pagar mano de obra', icon: FaMoneyBillWave, color: 'from-green-500 to-emerald-600', items: [{ name: '1 m² de piso', price: 85000 }, { name: 'Kit de materiales básicos', price: 500000 }, { name: 'Donación libre', price: 0 }] },
  { id: 'materials', title: 'Materiales de Construcción', description: 'Done materiales directamente', icon: FaBoxOpen, color: 'from-orange-500 to-red-600', items: [{ name: 'Bulto de cemento', price: 65000 }, { name: 'Ladrillo (100 und)', price: 180000 }, { name: 'Pintura (galón)', price: 95000 }] },
  { id: 'equipment', title: 'Equipos Electrónicos', description: 'Televisores, computadores, equipos', icon: FaDesktop, color: 'from-blue-500 to-indigo-600', items: [{ name: 'Televisor 55"', price: 1200000 }, { name: 'Computador', price: 1500000 }, { name: 'Proyector', price: 1500000 }] },
  { id: 'furniture', title: 'Muebles y Equipamiento', description: 'Sillas, mesas, camas, armarios', icon: FaChair, color: 'from-purple-500 to-pink-600', items: [{ name: 'Silla ergonómica', price: 280000 }, { name: 'Escritorio', price: 650000 }, { name: 'Cama articulada', price: 3500000 }] }
];

export default function DonationCatalog() {
  const { openDonationWidget } = useDonation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">¿Cómo Puedes Ayudar?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Elige cómo contribuir. Aceptamos donaciones monetarias, materiales, equipos y muebles.</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl shadow-lg shadow-gray-200 overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <IconComponent className="text-3xl mb-3" />
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="p-4 border-b border-gray-100"><p className="text-sm text-gray-600">{category.description}</p></div>
                <div className="p-4 space-y-2">
                  {category.items.slice(0, 3).map((item, i) => (
                    <button key={i} onClick={openDonationWidget} className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-bold text-primary">${item.price.toLocaleString('es-CO')}</span>
                    </button>
                  ))}
                </div>
                <div className="p-4 pt-0">
                  <button onClick={openDonationWidget} className={`w-full py-2 bg-gradient-to-r ${category.color} text-white rounded-lg font-medium text-sm`}><FaHeart className="inline mr-2" /> Ver más</button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-secondary to-primary rounded-3xl p-8 md:p-12 text-white text-center">
          <FaGlobe className="text-4xl mx-auto mb-4 text-accent" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Estás fuera de Colombia?</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">Aceptamos donaciones internacionales. Contamos con cuentas bancarias internacionales.</p>
          <button onClick={openDonationWidget} className="px-8 py-3 bg-accent text-primary rounded-full font-bold hover:bg-yellow-400">Donar desde el Exterior</button>
        </motion.div>
      </div>
    </section>
  );
}