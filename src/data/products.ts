export interface Product {
  id: string;
  name: string;
  category: string;
  sizes: string[];
  description: string;
  image: string;
}

export const productCategories = [
  "All Products",
  "Iron Bars (TMT)",
  "Round Bars",
  "Cement",
  "Round Pipes",
  "Gas Cylinders",
  "Water Tanks",
  "Hollow Sections",
  "Angle Bars",
  "Aluminium Gauge",
];

export const products: Product[] = [
  {
    id: "tmt-bars",
    name: "TMT Bars (Iron Bars)",
    category: "Iron Bars (TMT)",
    sizes: ["8mm", "10mm", "12mm", "16mm"],
    description: "High-strength TMT bars suitable for foundations, slabs, beams, and heavy structural reinforcement. Deliver superior tensile strength and durability for both residential and commercial construction.",
    image: "/src/assets/product-tmt-bars.jpg",
  },
  {
    id: "round-bars",
    name: "Round Bars",
    category: "Round Bars",
    sizes: ["6mm", "7mm", "8mm", "10mm", "12mm", "16mm"],
    description: "Smooth steel round bars used for fabrication, grill work, light reinforcement, and general-purpose construction needs.",
    image: "/src/assets/product-tmt-bars.jpg",
  },
  {
    id: "cement",
    name: "Cement",
    category: "Cement",
    sizes: ["Simba Cement", "Tororo C2", "Tororo C4"],
    description: "Premium-grade cement brands known for strength, consistency, and reliable curing — ideal for masonry, block work, plastering, and large-scale projects.",
    image: "/src/assets/product-cement.jpg",
  },
  {
    id: "round-pipes",
    name: "Round Pipes (RT)",
    category: "Round Pipes",
    sizes: [
      "RT 16×1mm", "RT 16×1.2mm", "RT 16×1.5mm",
      "RT 20×1mm", "RT 20×1.2mm", "RT 20×1.5mm",
      "RT 25×1mm", "RT 25×1.2mm", "RT 25×1.5mm", "RT 25×2mm",
      "RT 30×1mm", "RT 30×1.2mm", "RT 30×1.5mm", "RT 30×2mm",
      "RT 40×1mm", "RT 40×1.2mm", "RT 40×1.5mm", "RT 40×2mm",
      "RT 50×1mm", "RT 50×1.2mm", "RT 50×1.5mm", "RT 50×2mm", "RT 50×3mm",
      "RT 60×2mm", "RT 60×3mm",
      "RT 75×2mm", "RT 75×3mm",
      "RT 100×3mm",
    ],
    description: "Steel round pipes ideal for fabrication, gate work, frames, scaffolding, and industrial structures. Provide excellent dimensional accuracy and corrosion resistance.",
    image: "/src/assets/product-pipes.jpg",
  },
  {
    id: "gas-cylinders",
    name: "Shell Gas Cylinders",
    category: "Gas Cylinders",
    sizes: ["6KG", "12KG", "45KG"],
    description: "Reliable Shell-branded LPG cylinders suitable for household kitchens, restaurants, and industrial gas requirements.",
    image: "/src/assets/product-pipes.jpg",
  },
  {
    id: "water-tanks",
    name: "Gentex Water Tanks",
    category: "Water Tanks",
    sizes: ["500L", "1000L", "1500L", "2000L", "3000L", "5000L", "10000L"],
    description: "Heavy-duty, UV-resistant water tanks ideal for residential, commercial, and agricultural storage solutions.",
    image: "/src/assets/product-tanks.jpg",
  },
  {
    id: "hollow-sections",
    name: "Hollow Sections (LWT)",
    category: "Hollow Sections",
    sizes: [
      "16×16×1", "16×16×1.2", "16×16×1.5",
      "20×20×1", "20×20×1.2", "20×20×1.5",
      "25×25×1", "25×25×1.2", "25×25×1.5",
      "30×30×1", "30×30×1.2", "30×30×1.5",
      "40×20×1", "40×20×1.2", "40×20×1.5",
      "40×25×1", "40×25×1.2", "40×25×1.5",
      "40×40×1", "40×40×1.2", "40×40×1.5",
    ],
    description: "High-quality hollow steel profiles used in construction, fabrication, fencing, furniture, and support structures.",
    image: "/src/assets/product-hollow-sections.jpg",
  },
  {
    id: "angle-bars",
    name: "Angle Bars (LWT)",
    category: "Angle Bars",
    sizes: [
      "25×25×3",
      "35×35×3",
      "40×40×3", "40×40×4", "40×40×5", "40×40×6",
      "40×49×2.5",
      "50×50×3", "50×50×4", "50×50×5", "50×50×6",
    ],
    description: "Structural angle bars perfect for reinforcement, trusses, framing, workshop fabrication, and heavy-duty applications.",
    image: "/src/assets/product-hollow-sections.jpg",
  },
  {
    id: "aluminium-gauge",
    name: "Aluminium Gauge",
    category: "Aluminium Gauge",
    sizes: ["28mm", "30mm", "32mm"],
    description: "Lightweight, corrosion-resistant aluminium sheets and coils used for roofing, cladding, and ventilation works.",
    image: "/src/assets/product-hollow-sections.jpg",
  },
];
