export const COMPANY = {
  name: 'Repair Center Kuwait',
  phone: '97616252',
  phoneDisplay: '+965 9761 6252',
  whatsapp:
    'https://api.whatsapp.com/send/?phone=96597616252&text=Hello%2C+I+am+interested+in+your+services.+Can+you+please+assist+me%3F&type=phone_number&app_absent=0',
  email: 'support@repaircenterkwt.com',
  area: 'Serving all governorates of Kuwait',
  hours: '24/7 — Every day of the week',
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: string; // lucide icon name
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'ac-repair',
    title: 'AC Repair & Maintenance',
    short:
      'Fast and reliable repair, installation, and maintenance for split and central air conditioning systems across Kuwait.',
    description:
      'From cooling failures to gas recharge and full installations, our certified technicians keep your split and central AC systems running at peak efficiency — even in Kuwait\u2019s harshest summers.',
    features: [
      'Split & central AC repair',
      'Gas recharge & leak detection',
      'Full installation & uninstallation',
      'Annual maintenance contracts',
      'Compressor & coil replacement',
    ],
    icon: 'Wind',
    image:
      'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'washing-machine',
    title: 'Washing Machine Repair',
    short:
      'Expert repair for fully automatic, front-load, and top-load washing machines with quick diagnosis and lasting solutions.',
    description:
      'We fix drum issues, drainage problems, motor failures, and electronic control boards for every major washing machine brand — restoring your laundry routine the same day.',
    features: [
      'Front-load & top-load repair',
      'Drum, motor & pump fixes',
      'Drainage & spin cycle issues',
      'Electronic board diagnostics',
      'All major brands supported',
    ],
    icon: 'WashingMachine',
    image:
      'https://images.pexels.com/photos/4700400/pexels-photo-4700400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'refrigerator',
    title: 'Refrigerator & Freezer Repair',
    short:
      'Professional repair for cooling failures, compressor issues, and gas leaks — keeping your food fresh and safe.',
    description:
      'When your fridge stops cooling or your freezer builds frost, our team diagnoses compressor, thermostat, and refrigerant issues fast and gets your appliance back to full efficiency.',
    features: [
      'Cooling & gas leak repair',
      'Compressor replacement',
      'Thermostat & sensor fixes',
      'No-frost system service',
      'Commercial freezer support',
    ],
    icon: 'Refrigerator',
    image:
      'https://images.pexels.com/photos/7601069/pexels-photo-7601069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const BRANDS = [
  'Daikin',
  'LG',
  'Samsung',
  'Panasonic',
  'Midea',
  'Whirlpool',
];

export const TESTIMONIALS = [
  {
    name: 'Sureshsk Sureshsk',
    text: 'Very good work in Kuwait. This company is excellent — all the team is good and quick services across all Kuwait. Repair Center Kuwait does good work.',
  },
  {
    name: 'Sureka Weerakoon',
    text: 'I contacted Mr. Ali regarding a fridge issue, and he handled it efficiently and resolved the problem within half a day. Swift, effective service and reasonable pricing. Highly recommended!',
  },
  {
    name: 'Muhammad Hamza',
    text: 'My split AC was not cooling properly. They responded very fast and fixed it the same day. The technician was skilled and polite, and the charges were fair. Highly recommend their AC repair service.',
  },
  {
    name: 'Binoy KT',
    text: 'Very good service. Thanks for the quick support — fast and professional from start to finish.',
  },
  {
    name: 'Muhammad Din',
    text: 'One of the best repair centers in Kuwait. Quick service and honest staff. The quality of work is impressive and they really care about customer satisfaction.',
  },
  {
    name: 'Ayesha Ali',
    text: 'This company provides the best services. They fixed my AC and washing machine with the best work and low price. Highly recommended!',
  },
];

export const STATS = [
  { label: 'Successful Repairs', value: 5000, suffix: '+' },
  { label: 'Happy Customers', value: 3200, suffix: '+' },
  { label: 'Years Experience', value: 12, suffix: '+' },
  { label: 'Governorates Covered', value: 6, suffix: '' },
];

export const STEPS = [
  {
    title: 'Book Your Service',
    description:
      'Call us, message on WhatsApp, or fill out the booking form. Tell us what needs fixing and your area.',
    icon: 'PhoneCall',
  },
  {
    title: 'Same-Day Visit',
    description:
      'A certified technician is dispatched to your location — often the same day, anywhere in Kuwait.',
    icon: 'Truck',
  },
  {
    title: 'Diagnose & Repair',
    description:
      'We diagnose the issue transparently, quote a fair price up front, then repair using genuine parts.',
    icon: 'Wrench',
  },
  {
    title: 'Quality Guaranteed',
    description:
      'We test everything before we leave and back our work with a service warranty for your peace of mind.',
    icon: 'ShieldCheck',
  },
];
