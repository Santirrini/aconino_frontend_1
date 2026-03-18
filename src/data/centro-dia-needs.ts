import { ConstructionProgress } from '@/types/centro-dia';

export const initialProgress: ConstructionProgress = {
  goal: 500000000,
  raised: 45000000,
  donors: 127,
  zones: [
    {
      id: 'area-therapy',
      name: 'Sala de Terapia',
      description: 'Espacio especializado para neurorehabilitación',
      icon: 'FaHandHoldingMedical',
      totalNeeded: 80000000,
      totalRaised: 15000000,
      needs: [
        { id: 't1', name: 'Piso flotante', description: 'Piso laminado de alta resistencia', unitPrice: 85000, unit: 'm²', quantityNeeded: 120, quantityDonated: 45, type: 'material' },
        { id: 't2', name: 'Espejo grande', description: 'Espejo de cuerpo entero para terapia', unitPrice: 450000, unit: 'und', quantityNeeded: 4, quantityDonated: 1, type: 'equipment' },
        { id: 't3', name: 'Silla de terapia', description: 'Sillas ergonómicas especiales', unitPrice: 280000, unit: 'und', quantityNeeded: 12, quantityDonated: 3, type: 'furniture' },
        { id: 't4', name: 'Televisor 55"', description: 'Para terapia visual y entretenimiento', unitPrice: 1200000, unit: 'und', quantityNeeded: 2, quantityDonated: 0, type: 'equipment' },
      ]
    },
    {
      id: 'area-dormitory',
      name: 'Dormitorios',
      description: 'Habitaciones para descanso de pacientes',
      icon: 'FaBed',
      totalNeeded: 120000000,
      totalRaised: 8000000,
      needs: [
        { id: 'd1', name: 'Cama articulada', description: 'Cama médica articulada electrically', unitPrice: 3500000, unit: 'und', quantityNeeded: 8, quantityDonated: 2, type: 'furniture' },
        { id: 'd2', name: 'Colchón viscoelástico', description: 'Colchón ortopédico', unitPrice: 450000, unit: 'und', quantityNeeded: 10, quantityDonated: 2, type: 'furniture' },
        { id: 'd3', name: 'Armario', description: 'Armario empotrado para cada habitación', unitPrice: 800000, unit: 'und', quantityNeeded: 6, quantityDonated: 0, type: 'furniture' },
        { id: 'd4', name: 'Baño completo', description: 'Equipamiento de baño adaptado', unitPrice: 2500000, unit: 'und', quantityNeeded: 4, quantityDonated: 1, type: 'material' },
      ]
    },
    {
      id: 'area-kitchen',
      name: 'Cocina Comunal',
      description: 'Cocina para preparación de alimentos',
      icon: 'FaUtensils',
      totalNeeded: 45000000,
      totalRaised: 12000000,
      needs: [
        { id: 'k1', name: 'Estufa industrial', description: 'Estufa de 4 quemadores', unitPrice: 1800000, unit: 'und', quantityNeeded: 1, quantityDonated: 0, type: 'equipment' },
        { id: 'k2', name: 'Refrigerador', description: 'Nevera industrial grande', unitPrice: 2500000, unit: 'und', quantityNeeded: 1, quantityDonated: 0, type: 'equipment' },
        { id: 'k3', name: 'Mesón de cocina', description: 'Mesón de acero inoxidable', unitPrice: 1200000, unit: 'und', quantityNeeded: 2, quantityDonated: 1, type: 'furniture' },
        { id: 'k4', name: 'Juego de sillas', description: 'Sillas para comedor', unitPrice: 180000, unit: 'und', quantityNeeded: 20, quantityDonated: 5, type: 'furniture' },
        { id: 'k5', name: 'Televisor', description: 'Televisor para sala común', unitPrice: 1100000, unit: 'und', quantityNeeded: 1, quantityDonated: 0, type: 'equipment' },
      ]
    },
    {
      id: 'area-multimedia',
      name: 'Sala Multiuso',
      description: 'Espacio para actividades y reuniones',
      icon: 'FaTv',
      totalNeeded: 60000000,
      totalRaised: 5000000,
      needs: [
        { id: 'm1', name: 'Televisor 65"', description: 'Pantalla grande para presentaciones', unitPrice: 1800000, unit: 'und', quantityNeeded: 2, quantityDonated: 0, type: 'equipment' },
        { id: 'm2', name: 'Proyector', description: 'Proyector HD para capacitaciones', unitPrice: 1500000, unit: 'und', quantityNeeded: 1, quantityDonated: 0, type: 'equipment' },
        { id: 'm3', name: 'Mesa de reuniones', description: 'Mesa grande para 12 personas', unitPrice: 2200000, unit: 'und', quantityNeeded: 1, quantityDonated: 0, type: 'furniture' },
        { id: 'm4', name: 'Sillas ejecutivas', description: 'Sillas ergonómicas', unitPrice: 350000, unit: 'und', quantityNeeded: 15, quantityDonated: 0, type: 'furniture' },
      ]
    },
    {
      id: 'area-admin',
      name: 'Zona Administrativa',
      description: 'Oficinas y recepción',
      icon: 'FaBriefcase',
      totalNeeded: 35000000,
      totalRaised: 5000000,
      needs: [
        { id: 'a1', name: 'Escritorio', description: 'Escritorio de oficina', unitPrice: 650000, unit: 'und', quantityNeeded: 4, quantityDonated: 1, type: 'furniture' },
        { id: 'a2', name: 'Silla de oficina', description: 'Silla ergonómica', unitPrice: 280000, unit: 'und', quantityNeeded: 6, quantityDonated: 1, type: 'furniture' },
        { id: 'a3', name: 'Computador', description: 'Computador para administración', unitPrice: 1500000, unit: 'und', quantityNeeded: 3, quantityDonated: 0, type: 'equipment' },
        { id: 'a4', name: 'Impresora', description: 'Impresora multifuncional', unitPrice: 800000, unit: 'und', quantityNeeded: 1, quantityDonated: 0, type: 'equipment' },
      ]
    }
  ]
};
