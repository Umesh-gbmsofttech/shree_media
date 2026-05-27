import imgWedding from '../assets/weeding.jpg';
import imgBirthday from '../assets/birthday.jpg';
import imgLetterhead from '../assets/letterhead.jpg';
import imgStamp from '../assets/stamp.webp';
import imgPostcard from '../assets/postcard.jpg';
import imgBusinessCard from '../assets/businesscard.jpg';
import imgFlyer from '../assets/flyer.webp';
import imgBrochure from '../assets/promotional.jpg';
import imgCert from '../assets/certificate.jpg';
import imgIdCard from '../assets/idcard.webp';
import imgBanner from '../assets/banner1.jpg';
import imgStandy from '../assets/standy.avif';
import imgStickers from '../assets/sticker.jpg';
import imgMenu from '../assets/menu.avif';

export const products = [
  { id: 1, title: 'Expo Stall Print', tag: 'Industrial', category: 'Industrial Printing', price: 'INR 2,500.00', qty: '1', img: imgWedding, description: 'Custom printed expo stall graphics for events and exhibitions.' },
  { id: 2, title: 'Visiting Card', tag: 'Popular', category: 'Industrial Printing', price: 'INR 350.00', qty: '100', img: imgBusinessCard, description: 'Premium visiting cards with matte or glossy finish.' },
  { id: 3, title: 'Brochure Print', tag: 'Featured', category: 'Industrial Printing', price: 'INR 1,200.00', qty: '100', img: imgBrochure, description: 'High-quality brochures for product and service promotions.' },
  { id: 4, title: 'Flyer Print', tag: 'Bulk', category: 'Industrial Printing', price: 'INR 800.00', qty: '500', img: imgFlyer, description: 'Bulk flyer printing for campaigns and launches.' },
  { id: 5, title: 'ID Card Print', tag: 'Essential', category: 'Industrial Printing', price: 'INR 60.00', qty: '1', img: imgIdCard, description: 'Durable PVC ID cards for staff and students.' },
  { id: 6, title: 'Rollup Standee', tag: 'Featured', category: 'Industrial Printing', price: 'INR 1,399.00', qty: '1', img: imgStandy, description: 'Portable rollup standees for retail and events.' },
  { id: 7, title: 'Packaging Box Print', tag: 'Packaging', category: 'Packaging Printing', price: 'INR 900.00', qty: '100', img: imgMenu, description: 'Custom packaging boxes for soap, cake, sweets, medicine and more.' },
  { id: 8, title: 'Sticker / Label Print', tag: 'Labels', category: 'Packaging Printing', price: 'INR 110.00', qty: '30', img: imgStickers, description: 'Round, self, food, cosmetic and medicine label printing.' },
  { id: 9, title: 'Center Seal Pouch', tag: 'Packaging', category: 'Packaging Printing', price: 'INR 1,500.00', qty: '100', img: imgPostcard, description: 'Center seal, standup and window pouch printing solutions.' },
  { id: 10, title: 'Gift Printing Set', tag: 'Gift', category: 'Gift Printing', price: 'INR 499.00', qty: '20', img: imgBirthday, description: 'Custom gift items like keychains, diaries, t-shirts, caps and mugs.' },
  { id: 11, title: 'Outdoor Flex Banner', tag: 'Outdoor', category: 'Outdoor Printing', price: 'INR 450.00', qty: '1', img: imgBanner, description: 'Outdoor flex, vinyl, pole banner and backlight board printing.' },
  { id: 12, title: 'Indoor Branding Kit', tag: 'Indoor', category: 'Indoor Printing', price: 'INR 1,000.00', qty: '1', img: imgLetterhead, description: 'Indoor glass prints, vinyl with foam, UV frames and one-way vision.' },
  { id: 13, title: 'Letterhead Print', tag: 'Office', category: 'Industrial Printing', price: 'INR 120.00', qty: '10', img: imgLetterhead, description: 'Professional letterhead printing for office use.' },
  { id: 14, title: 'Rubber Stamp', tag: 'Office', category: 'Industrial Printing', price: 'INR 150.00', qty: '1', img: imgStamp, description: 'Self-inking stamps for billing and document authentication.' },
  { id: 15, title: 'Certificate Print', tag: 'Popular', category: 'Industrial Printing', price: 'INR 299.00', qty: '5', img: imgCert, description: 'Premium certificate printing for institutions and events.' }
];

export const filters = ['all printing', 'Packaging printing', 'Gift printing', 'Outdoor printing', 'indoor printing', 'Industrial Printing', 'sticker', 'box'];
