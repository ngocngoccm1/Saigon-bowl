// Transcribed from the restaurant's menu-board photographs in this project.
// Prices are display strings so the printed decimal comma is preserved.
export const restaurant = {
  name: 'Saigon bowl',
  address: 'Georg-Dreke-Ring 60, 17291 Prenzlau',
  phoneDisplay: '+49 1522 1719999',
  phoneHref: 'tel:+4915221719999',
  mapsUrl: 'https://maps.app.goo.gl/hsDQvGHnR7wotJMA7',
};

const classics = [
  ['Nur Gemüse', '9,50 €'], ['Tofu', '9,50 €'],
  ['Hühnerfleisch', '10,50 €'], ['Gebackene Hühnerbrust', '11,00 €'],
  ['Rindfleisch', '11,00 €'], ['Ente kross', '12,50 €'],
  ['Garnelen', '12,90 €'],
];
const wok = [
  ['Tofu', '9,50 €'], ['Hühnerfleisch', '10,90 €'],
  ['Gebackene Hühnerbrust', '11,50 €'], ['Rindfleisch', '11,50 €'],
  ['Ente kross', '12,90 €'], ['Garnelen', '13,50 €'],
];
const vietnameseWok = [
  ['Tofu', '9,50 €'], ['Hühnerfleisch', '10,90 €'],
  ['Gebackene Hühnerbrust', '11,50 €'], ['Rindfleisch', '11,50 €'],
  ['Ente kross', '12,90 €'], ['Garnelen', '13,50 €'],
];

export const menu = [
  {
    id: 'suppen', title: 'Suppen', source: 'image_1789581264843.jpg',
    items: [
      { number: '1', name: 'Sauer-Scharf-Suppe', description: 'Mit frischem Gemüse, zartem Fleisch und asiatischen Gewürzen.', price: '3,50 €', allergens: 'C, D' },
      { number: '2', name: 'Tom Kha Suppe', description: 'Kokosmilch-Suppe mit Gemüse, Zitronengras, Frühlingszwiebeln und Koriander.', allergens: 'G', options: [['Tofu', '3,50 €'], ['Hühnerfleisch', '4,00 €'], ['Garnelen', '4,90 €']] },
      { number: '3', name: 'Tom Yum Suppe', description: 'Pikante Zitronengras-Suppe mit Gemüse, Sojasprossen, Kräutern und Koriander.', allergens: 'G, F', options: [['Tofu', '3,90 €'], ['Hühnerfleisch', '4,00 €'], ['Garnelen', '4,50 €']] },
      { number: '4', name: 'Wantan Suppe', description: 'Hausgemachte Teigtaschen mit Hühnerfleisch und Garnelen, Gemüse, Pak Choi, Kräutern, Koriander und Sesamöl in Kräuterbrühe.', price: '4,50 €', allergens: 'A1, B, K' },
      { number: '5', name: 'Glasnudelsuppe', description: 'Mit Sternanis, Zimt, Ingwer, Frühlingszwiebeln und Sojasprossen.', allergens: 'F', options: [['Tofu', '3,90 €'], ['Hühnerfleisch', '4,00 €'], ['Garnelen', '4,50 €']] },
    ],
  },
  {
    id: 'vorspeisen', title: 'Vorspeisen', source: 'image_1789581264845.jpg',
    items: [
      { number: '6', name: 'Cha Gio Chay (6 Stk.)', description: 'Vegetarische Mini-Frühlingsrollen.', price: '3,50 €', allergens: 'C' },
      { number: '7', name: 'Nem Ran (2 Stk.)', description: 'Knusprige Reis­papierrollen mit Hackfleisch, Gemüse und Glasnudeln, dazu Limettensauce.', price: '4,50 €', allergens: 'C, D' },
      { number: '8', name: 'Wantan Chien (5 Stk.)', description: 'Knusprige Teigtaschen mit Garnelen, Hähnchen und Gemüse, dazu Süß-Sauer-Dip.', price: '4,50 €', allergens: 'A1, B, 5' },
      { number: '9', name: 'Ga Saté (2 Stk.)', description: 'Marinierte Hühnerspieße mit Erdnuss-Dip.', price: '4,50 €', allergens: 'A1, E, F, 5, 10' },
      { number: '10', name: 'Tom Chien Xu (3 Stk.)', description: 'Gebackene Garnelen im Tempuramantel.', price: '5,00 €', allergens: 'A1, B, C' },
    ],
  },
  {
    id: 'klassiker', title: 'Hauptspeisen', source: 'image_1789581264846.jpg',
    items: [
      { number: '30', name: 'Dunkle Soße', description: 'Mit Gemüse der Saison und Jasmin-Duftreis.', allergens: 'A1, B, F, K, 10', options: classics },
    ],
  },
  {
    id: 'thai', title: 'Thailändische Gerichte', source: 'image_1789581264846.jpg / image_1789581264847.jpg',
    items: [
      { number: '40', name: 'Rotes Curry', description: 'Rotes Curry in cremiger Kokosmilch mit Gemüse der Saison und Jasmin-Duftreis.', allergens: 'G', options: classics },
      { number: '50', name: 'Grünes Curry', description: 'Grünes Curry in cremiger Kokosmilch mit Gemüse der Saison und Jasmin-Duftreis.', allergens: 'G', options: classics },
      { number: '60', name: 'Erdnusssoße', description: 'Mit Kokosmilch, Gemüse der Saison und Jasmin-Duftreis.', allergens: 'E, G', options: classics },
      { number: '70', name: 'Mangosoße', description: 'Mit Kokosmilch, Gemüse der Saison und Jasmin-Duftreis.', allergens: '5', options: classics },
    ],
  },
  {
    id: 'nudeln', title: 'Nudeln & Reis', source: 'image_1789581264839.jpg / image_1789581264849.jpg / image_1789581264850.jpg',
    items: [
      { number: '11', name: 'Gebratene Nudeln', description: 'Serviert mit Soße nach Wahl: rotes Curry, Erdnuss, Süß-Sauer oder dunkle Soße.', options: [['Mini-Frühlingsrollen', '8,50 €'], ['Tofu', '9,50 €'], ['Hühnerfleisch', '9,90 €'], ['Gebackene Hühnerbrust', '10,50 €'], ['Rindfleisch', '10,50 €'], ['Ente kross', '12,00 €'], ['Garnelen', '12,50 €']] },
      { number: '20', name: 'Gebratener Eierreis', description: 'Serviert mit Soße nach Wahl: rotes Curry, Erdnuss, Süß-Sauer oder dunkle Soße.', options: [['Mini-Frühlingsrollen', '8,50 €'], ['Tofu', '9,50 €'], ['Hühnerfleisch', '9,90 €'], ['Gebackene Hühnerbrust', '10,50 €'], ['Rindfleisch', '10,50 €'], ['Ente kross', '12,00 €'], ['Garnelen', '12,50 €']] },
      { number: '80', name: 'Mien Xao', description: 'Gebratene Glasnudeln mit Ei, asiatischem Gemüse, Koriander, Schnittlauch und Röstzwiebeln.', allergens: 'A1, C, F', options: wok },
      { number: '90', name: 'Pho Xao', description: 'Gebratene Nudeln mit Ei, asiatischem Gemüse, Koriander, Schnittlauch und Röstzwiebeln.', allergens: 'A1, C, F', options: [['Nur Gemüse', '9,50 €'], ['Tofu', '9,50 €'], ['Hühnerfleisch', '10,90 €'], ['Gebackene Hühnerbrust', '11,50 €'], ['Rindfleisch', '11,50 €'], ['Ente kross', '12,90 €'], ['Garnelen', '13,50 €']] },
      { number: '100', name: 'Udon Xao', description: 'Gebratene Udon-Nudeln mit asiatischem Gemüse, Koriander, Schnittlauch und Röstzwiebeln.', allergens: 'A1, C, F', options: [['Nur Gemüse', '9,50 €'], ['Tofu', '9,50 €'], ['Hühnerfleisch', '10,90 €'], ['Gebackene Hühnerbrust', '11,50 €'], ['Rindfleisch', '11,50 €'], ['Ente kross', '12,90 €'], ['Garnelen', '13,50 €']] },
      { number: '110', name: 'Pho Ha Noi', description: 'Traditionelle Reisbandnudelsuppe mit Koriander, Frühlingszwiebeln und Sojasprossen.', allergens: 'F', options: [['Tofu', '9,50 €'], ['Hühnerfleisch', '10,50 €'], ['Rindfleisch', '11,50 €'], ['Hühnerfleisch & Rindfleisch', '12,90 €']] },
    ],
  },
  {
    id: 'vietnam', title: 'Vietnamesische Spezialitäten', source: 'image_1789581264851.jpg / image_1789581265211.jpg',
    items: [
      { number: '120', name: 'Bun Bo Nam Bo', description: 'Mariniertes Rindfleisch mit Zitronengras, Chili, Knoblauch und Zwiebeln auf Reisnudeln, Salat, Kräutern und Erdnüssen.', price: '11,50 €', allergens: 'A1, D, E' },
      { number: '121', name: 'Bun Dau Phu Nam Bo', description: 'Reisnudeln mit gebratenem Tofu, Salat, Minze, Koriander, Röstzwiebeln, Erdnüssen und Fischsoße.', price: '9,90 €', allergens: 'A1, D, E, F' },
      { number: '122', name: 'Bun Thit Nuong', description: 'Reisnudeln mit mariniertem Schweinefleisch, Zitronengras, Salat, Minze, Koriander und Erdnüssen.', price: '11,50 €', allergens: 'D, E' },
      { number: '123', name: 'Bun Nem Ha Noi', description: 'Hausgemachte Frühlingsrollen auf Reisnudeln mit Salat, vietnamesischen Kräutern, Erdnüssen und Chili-Limetten-Ingwer-Sauce.', price: '10,90 €', allergens: 'A1, C, D, E' },
      { number: '124', name: 'Bun Cha La Lot (6 Stk.)', description: 'Mariniertes Schweine- und Rindfleisch in Betelblättern gegrillt, mit Reisnudeln, Gemüse, Kräutern, Erdnüssen und Spezialsoße.', price: '10,90 €', allergens: 'A1, E, F' },
      { number: '125', name: 'Bun Vit', description: 'Reisnudeln mit knuspriger Ente, gegrillt in Betelblättern, Zitronengras, Gemüse, Minze, Koriander, Erdnüssen und Spezialsoße.', price: '12,90 €', allergens: 'A1, D, E' },
      { number: '130', name: 'Xao Sa Ot', description: 'Zitronengras- und Limettenblattgericht mit Gemüse und vietnamesischen Kräutern; scharf oder mild.', allergens: 'F, K', options: vietnameseWok },
      { number: '140', name: 'Xao Toi', description: 'Knoblauch-Basilikum-Gericht mit Gemüse und vietnamesischen Kräutern; scharf oder mild.', allergens: 'B, F', options: vietnameseWok },
      { number: '150', name: 'Xao Sot Tieu', description: 'Pfeffersoße mit gebratenem Gemüse und vietnamesischen Kräutern; scharf oder mild.', allergens: 'B, F', options: vietnameseWok },
      { number: '160', name: 'Udon Bowl', description: 'Mit frischem Gemüse und asiatischen Kräutern. Wahlweise rote Curry-, Erdnuss- oder dunkle Soße.', allergens: 'A1', options: vietnameseWok },
      { number: '170', name: 'Bowl', description: 'Wildkräutersalat, Radicchio, Avocado, Gurken, Tomaten, Möhren, Seetang-Salat, Mango, Kräuter und Sesam mit Jasmin-Duftreis.', allergens: 'F, K', options: [['Tofu', '9,50 €'], ['Hühnerfleisch', '10,90 €'], ['Rindfleisch', '11,50 €'], ['Garnelen', '13,50 €']] },
    ],
  },
  {
    id: 'getraenke', title: 'Getränke', source: 'image_1789581265211.jpg',
    items: [
      { name: 'Fritz Cola', description: '0,33 l Fl.', price: '2,50 €', allergens: '1, 3, 4, 5' },
      { name: 'Coca Cola', description: '0,33 l Fl.', price: '2,50 €', allergens: '1, 3, 4, 5' },
      { name: 'Fanta', description: '0,33 l Fl.', price: '2,50 €', allergens: '1, 5, 6' },
      { name: 'Sprite', description: '0,33 l Fl.', price: '2,50 €', allergens: '5' },
      { name: 'Wasser', description: '0,33 l Fl.', price: '2,50 €' },
      { name: 'Eistee', description: '0,33 l Fl.', price: '2,50 €', allergens: '4' },
      { name: 'Asia-Getränke', description: '0,3 l Dose', price: '2,00 €', allergens: '5, 7' },
    ],
  },
];

export const allergenLegend = 'A Glutenhaltiges Getreide · A1 Weizen · A2 Gerste · B Krebstiere · C Eier · D Fische · E Erdnüsse · F Sojabohnen · G Milch · H Schalenfrüchte · I Sellerie · J Senf · K Sesamsamen · L Schwefeldioxid und Sulphite · M Lupinen · N Weichtiere';
export const additiveLegend = '1 Farbstoff · 2 Konservierungsstoff · 3 Süßungsmittel · 4 koffeinhaltig · 5 Säuerungsmittel · 6 Stabilisator · 7 Antioxidationsmittel · 8 chininhaltig · 9 Taurin · 10 Geschmacksverstärker · 11 enthält eine Phenylalaninquelle';
