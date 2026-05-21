import p01 from "@/assets/products/p01.jpg";
import p02 from "@/assets/products/p02.jpg";
import p03 from "@/assets/products/p03.jpg";
import p04 from "@/assets/products/p04.jpg";
import p05 from "@/assets/products/p05.jpg";
import p06 from "@/assets/products/p06.jpg";
import p07 from "@/assets/products/p07.jpg";
import p08 from "@/assets/products/p08.jpg";
import p09 from "@/assets/products/p09.jpg";
import p10 from "@/assets/products/p10.jpg";
import p11 from "@/assets/products/p11.jpg";
import p12 from "@/assets/products/p12.jpg";
import p13 from "@/assets/products/p13.jpg";
import p14 from "@/assets/products/p14.jpg";
import p15 from "@/assets/products/p15.jpg";
import p16 from "@/assets/products/p16.jpg";
import p17 from "@/assets/products/p17.jpg";
import p18 from "@/assets/products/p18.jpg";
import p19 from "@/assets/products/p19.jpg";
import p20 from "@/assets/products/p20.jpg";
import p21 from "@/assets/products/p21.jpg";
import p22 from "@/assets/products/p22.jpg";
import p23 from "@/assets/products/p23.jpg";
import p24 from "@/assets/products/p24.jpg";
import p25 from "@/assets/products/p25.jpg";
import p26 from "@/assets/products/p26.jpg";
import p27 from "@/assets/products/p27.jpg";
import p28 from "@/assets/products/p28.jpg";
import p29 from "@/assets/products/p29.jpg";
import p30 from "@/assets/products/p30.jpg";
import p31 from "@/assets/products/p31.jpg";
import p32 from "@/assets/products/p32.jpg";
import p33 from "@/assets/products/p33.jpg";
import p34 from "@/assets/products/p34.jpg";
import p35 from "@/assets/products/p35.jpg";
import p36 from "@/assets/products/p36.jpg";
import p37 from "@/assets/products/p37.jpg";
import p38 from "@/assets/products/p38.jpg";
import p39 from "@/assets/products/p39.jpg";
import p40 from "@/assets/products/p40.jpg";
import p41 from "@/assets/products/p41.jpg";
import p42 from "@/assets/products/p42.jpg";
import p43 from "@/assets/products/p43.jpg";
import p44 from "@/assets/products/p44.jpg";
import p45 from "@/assets/products/p45.jpg";

export type Product = {
  id: number;
  name: string;
  image: string;
  height?: string;
  width?: string;
  length?: string;
  weight?: string;
  status?: "available" | "sold-out" | "defect";
};

export const products: Product[] = [
  { id: 1, name: "Blue Pot (Underwater)", image: p01, height: "30 cm", width: "11 cm", weight: "1.9 kg" },
  { id: 2, name: "Misfit (Red Pot)", image: p02, height: "17 cm", width: "9 cm", weight: "650 g" },
  { id: 3, name: "Misfit (Blue Pot)", image: p03, height: "16 cm", width: "9 cm", weight: "650 g" },
  { id: 4, name: "Small Coiling Pot A", image: p04, height: "12 cm", width: "4 cm", weight: "300 g" },
  { id: 5, name: "Small Coiling Pot B", image: p05, height: "12 cm", width: "5 cm", weight: "300 g" },
  { id: 6, name: "Small Coiling Pot C", image: p06, height: "12 cm", width: "5 cm", weight: "300 g" },
  { id: 7, name: "Small Coiling Pot D", image: p07, height: "12 cm", width: "5 cm", weight: "300 g" },
  { id: 8, name: "Small Coiling Pot E", image: p08, height: "12 cm", width: "5 cm", weight: "300 g" },
  { id: 9, name: "Slab Bowl", image: p09, height: "6 cm", width: "22 cm", weight: "600 g" },
  { id: 10, name: "Trinklit Plate", image: p10, height: "1.5 cm", width: "14 cm", weight: "150 g" },
  { id: 11, name: "Salad Bowl", image: p11, height: "6.3 cm", width: "15.5 cm", weight: "450 g" },
  { id: 12, name: "Dessert Plate", image: p12, height: "2.5 cm", width: "16.5 cm", weight: "250 g" },
  { id: 13, name: "Envelope Card Holder A", image: p13, height: "5.5 cm", width: "9.3 cm", weight: "210 g" },
  { id: 14, name: "Envelope Card Holder B", image: p14, height: "5.5 cm", width: "9.3 cm", weight: "210 g" },
  { id: 15, name: "Envelope Card Holder C", image: p15, height: "5.5 cm", width: "9.3 cm", weight: "210 g" },
  { id: 16, name: "Envelope Card Holder D", image: p16, height: "5.5 cm", width: "9.3 cm", weight: "210 g" },
  { id: 17, name: "Envelope Polaroid A", image: p17, height: "4.4 cm", width: "7 cm", weight: "110 g" },
  { id: 18, name: "Envelope Polaroid B", image: p18, height: "4.4 cm", width: "7 cm", weight: "110 g" },
  { id: 19, name: "Envelope Polaroid C", image: p19, height: "4.4 cm", width: "7 cm", weight: "110 g" },
  { id: 20, name: "Dip Bowl", image: p20, height: "4 cm", width: "9 cm", weight: "150 g" },
  { id: 21, name: "Autumn Field Pot", image: p21, height: "39 cm", width: "21.3 cm", weight: "3.6 kg" },
  { id: 22, name: "Very Big Envelope", image: p22, height: "6.7 cm", width: "14.5 cm", length: "30 cm", weight: "600 g" },
  { id: 23, name: "Dewed Daffodil", image: p23, height: "42 cm", width: "20 cm", weight: "4 kg" },
  { id: 24, name: "Lavender (Big)", image: p24, height: "16.5 cm", width: "40 cm", weight: "1.3 kg" },
  { id: 25, name: "Lavender (Small)", image: p25, height: "17 cm", width: "11 cm", weight: "900 g" },
  { id: 26, name: "Cup (60 ml)", image: p26, height: "6.4 cm", weight: "100 g" },
  { id: 27, name: "Coaster", image: p27, width: "11.5 cm", weight: "200 g" },
  { id: 28, name: "Wavy Bowl A (160 ml)", image: p28, height: "6 – 6.5 cm", width: "19 cm", weight: "300 g" },
  { id: 29, name: "Wavy Bowl B (160 ml)", image: p29, height: "6 – 6.5 cm", width: "19 cm", weight: "300 g" },
  { id: 30, name: "Green Cup (160 ml)", image: p30, height: "8 cm", width: "8.5 cm", weight: "300 g" },
  { id: 31, name: "Box A", image: p31, height: "10.5 cm", width: "10.5 cm", weight: "800 g" },
  { id: 32, name: "Still Life", image: p32, height: "8 cm", width: "35 cm", weight: "790 g", status: "defect" },
  { id: 33, name: "Good Vibe", image: p33, height: "9.5 cm", width: "9.5 cm", weight: "500 g" },
  { id: 34, name: "Pastel Pot", image: p34, height: "15.5 cm", width: "12 cm", weight: "1 kg" },
  { id: 35, name: "Chocolate Flow", image: p35, height: "13 cm", width: "9.5 cm", weight: "500 g" },
  { id: 36, name: "Spoon Rest A", image: p36, width: "14 cm", weight: "150 g" },
  { id: 37, name: "Still Life Bowl", image: p37, height: "7.5 – 15 cm", width: "25 cm", length: "32 cm", weight: "1.15 kg", status: "sold-out" },
  { id: 38, name: "Still Life Bowl", image: p38, height: "8 – 13 cm", width: "20 cm", length: "27 cm", weight: "1.2 kg", status: "defect" },
  { id: 39, name: "Candle Dish", image: p39, height: "3.5 cm", width: "14.5 cm", weight: "300 g" },
  { id: 40, name: "Sunflower Tray", image: p40, width: "12.5 cm", length: "23.5 cm", weight: "400 g" },
  { id: 41, name: "Tray A", image: p41, width: "12.5 cm", length: "23.5 cm", weight: "400 g", status: "defect" },
  { id: 42, name: "Green Big Pot", image: p42, height: "32.5 cm", width: "27.5 cm", weight: "3 kg", status: "sold-out" },
  { id: 43, name: "Goblet Set – Pair (150 ml)", image: p43, height: "12.5 cm", width: "8 cm", weight: "400 g", status: "defect" },
  { id: 44, name: "Tray B", image: p44, width: "12.5 cm", length: "32.5 cm", weight: "400 g", status: "defect" },
  { id: 45, name: "Spoon Rest B", image: p45, width: "14 cm", weight: "150 g" },
];