import {
  Building2,
  ShoppingCart,
  Layers,
  Rocket,
  LayoutDashboard,
  RefreshCw,
  Target,
  Smartphone,
  MessagesSquare,
  ShieldCheck,
  Wallet,
  Gauge,
} from 'lucide-react';

export const CONTACT = {
  whatsappDisplay: '+92 321 2411667',
  whatsappBase: 'https://wa.me/923212411667',
  email: 'craftwavedigital@gmail.com',
  website: 'craftwave.digital',
};

export const wa = (message) =>
  `${CONTACT.whatsappBase}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = wa(
  'Hi Craftwave Digital, I would like to discuss a website for my business.'
);

export const WA_PORTFOLIO = wa(
  'Hi Craftwave Digital, can you share more examples from your portfolio?'
);

export const WA_QUOTE = wa(
  'Hi Craftwave Digital, I would like a quote for a website project.'
);

export const whyWebsite = [
  'Make a strong first impression.',
  'Build credibility and customer trust.',
  'Showcase your services and previous work.',
  'Receive enquiries directly from potential customers.',
  'Make it easier for customers to contact you.',
];

export const services = [
  {
    title: 'Business Websites',
    desc: 'Professional websites for companies, startups, consultants, and service providers.',
    icon: Building2,
    spec: 'Brand / Trust',
  },
  {
    title: 'E-commerce Websites',
    desc: 'Online stores with product pages, shopping carts, payment integrations, and order management.',
    icon: ShoppingCart,
    spec: 'Sell online',
  },
  {
    title: 'WordPress Websites',
    desc: 'Custom WordPress websites with easy content management and flexible functionality.',
    icon: Layers,
    spec: 'Self-managed',
  },
  {
    title: 'Landing Pages',
    desc: 'Conversion-focused landing pages for advertising campaigns, products, and services.',
    icon: Rocket,
    spec: 'Conversion',
  },
  {
    title: 'Custom Web Applications',
    desc: 'Tailored web solutions, dashboards, booking systems, and interactive applications.',
    icon: LayoutDashboard,
    spec: 'Built to spec',
  },
  {
    title: 'Website Redesign',
    desc: 'Give your existing website a modern look, better user experience, and improved mobile responsiveness.',
    icon: RefreshCw,
    spec: 'Rebuild',
  },
];

export const projects = [
  {
    name: 'Easy Calculator',
    url: 'easycalculator.tech',
    href: 'https://easycalculator.tech',
    desc: 'A WordPress web application featuring calculators, unit converters, and everyday online tools.',
    stack: 'WordPress',
    kind: 'tools',
  },
  {
    name: 'Resumi',
    url: 'resumi-builder.vercel.app',
    href: 'https://resumi-builder.vercel.app',
    desc: 'A modern resume builder that helps users create, customize, and export professional resumes.',
    stack: 'React · Vercel',
    kind: 'resume',
  },
  {
    name: 'Lewes Training Centre',
    url: 'lewestraining.ac.uk',
    href: 'https://lewestraining.ac.uk',
    desc: 'An online learning management system for courses, student progress, and AI assistance.',
    stack: 'LMS · AI',
    kind: 'lms',
  },
  {
    name: 'Resurgens Medical',
    url: 'resurgensmedical.com',
    href: 'https://resurgensmedical.com',
    desc: 'A professional healthcare website built using WordPress and Elementor Pro.',
    stack: 'WordPress · Elementor Pro',
    kind: 'medical',
  },
  {
    name: 'Compound HQ',
    url: 'compoundhq.com.au',
    href: 'https://www.compoundhq.com.au',
    desc: 'A WooCommerce store redesign focused on product sales and multi-platform inventory management.',
    stack: 'WooCommerce',
    kind: 'store',
  },
  {
    name: 'MewMew Cafe',
    url: 'mewmewcafe.com',
    href: 'https://mewmewcafe.com',
    desc: 'A cafe website featuring table reservations and event booking functionality.',
    stack: 'Bookings',
    kind: 'cafe',
  },
  {
    name: 'Find Prime Spot',
    url: 'findprimespot.com',
    href: 'https://findprimespot.com',
    desc: 'A property-finding platform with custom location search and Stripe payment integration.',
    stack: 'Custom app · Stripe',
    kind: 'property',
  },
  {
    name: 'Vue Weather',
    url: 'axn-weather.vercel.app',
    href: 'https://axn-weather.vercel.app',
    desc: 'A weather application built with Vue.js, featuring live weather conditions and forecasts.',
    stack: 'Vue.js',
    kind: 'weather',
  },
  {
    name: 'Jona Panels',
    url: 'jonapanels.com',
    href: 'https://jonapanels.com',
    desc: 'A company website showcasing surface protectors and adhesive products.',
    stack: 'WordPress',
    kind: 'industrial',
  },
  {
    name: 'Center Stage Home',
    url: 'centerstagebc.com',
    href: 'https://www.centerstagebc.com',
    desc: 'A website for a home-staging business focused on presenting properties professionally.',
    stack: 'WordPress',
    kind: 'staging',
  },
];

export const whyUs = [
  {
    icon: Target,
    title: 'Business-focused approach',
    desc: 'We understand that your website should support your business goals, not just look attractive.',
  },
  {
    icon: Smartphone,
    title: 'Modern and responsive design',
    desc: 'Your website will be designed to work smoothly across mobile phones, tablets, and desktops.',
  },
  {
    icon: Gauge,
    title: 'Built around your requirements',
    desc: 'We discuss your business, audience, and goals before deciding on the right solution.',
  },
  {
    icon: MessagesSquare,
    title: 'Direct communication',
    desc: 'Work directly with the developer throughout the project.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable support',
    desc: 'We help with website setup, testing, launch, and agreed post-launch support.',
  },
  {
    icon: Wallet,
    title: 'Transparent pricing',
    desc: "You'll know the project scope and cost before development begins.",
  },
];

export const pricing = [
  {
    name: 'Starter Website',
    price: 'Starting at PKR 15,000',
    desc: 'Ideal for individuals, small businesses, and startups.',
    features: [
      'Up to 5 pages',
      'Professional responsive design',
      'Contact form',
      'WhatsApp integration',
      'Basic on-page SEO setup',
      'Social media links',
    ],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Business Website',
    price: 'Starting at PKR 20,000',
    desc: 'For businesses that need a more complete online presence.',
    features: [
      'Up to 10 pages',
      'Customised website design',
      'Mobile and tablet optimisation',
      'Contact and enquiry forms',
      'WhatsApp integration',
      'Basic on-page SEO setup',
      'Social media integration',
    ],
    cta: 'Choose business',
    featured: true,
  },
  {
    name: 'E-commerce Website',
    price: 'Custom pricing',
    desc: 'For businesses looking to sell products online.',
    features: [
      'WooCommerce setup',
      'Product and category pages',
      'Shopping cart and checkout',
      'Payment gateway integration where supported',
      'Order management',
      'Responsive design',
    ],
    cta: 'Discuss my store',
    featured: false,
  },
  {
    name: 'Custom Projects',
    price: "Let's discuss your requirements",
    desc: 'For web applications, booking systems, dashboards, custom functionality, and advanced integrations.',
    features: [],
    cta: 'Brief us on your project',
    featured: false,
  },
];

export const steps = [
  {
    n: '01',
    title: 'Tell us about your business',
    desc: 'Share your business details, website requirements, and goals.',
  },
  {
    n: '02',
    title: 'Get your project quote',
    desc: "We'll discuss the scope, timeline, and estimated cost.",
  },
  {
    n: '03',
    title: 'Design & development',
    desc: 'We build your website and keep you updated throughout the process.',
  },
  {
    n: '04',
    title: 'Review & launch',
    desc: 'Review the completed website, request agreed revisions, and launch your website.',
  },
];

export const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Our website projects start from PKR 15,000. The final price depends on the number of pages, design, and functionality.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A standard business website may take around 5–10 working days, depending on the scope and how quickly content and feedback are provided.',
  },
  {
    q: 'Will my website work on mobile phones?',
    a: 'Yes. We build responsive websites designed for mobile, tablet, and desktop screens.',
  },
  {
    q: 'Can I update my website myself?',
    a: 'Yes. WordPress websites can be managed through an admin dashboard, allowing you to update text, images, and other content.',
  },
  {
    q: 'Do you provide website maintenance?',
    a: 'Yes. Maintenance and ongoing support can be discussed according to your requirements.',
  },
  {
    q: 'Do I need to pay everything upfront?',
    a: 'Payment milestones will be agreed before the project begins.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. We can redesign existing websites, improve their layout, and update their functionality.',
  },
];

export const serviceOptions = [
  'Business website',
  'E-commerce website',
  'WordPress website',
  'Landing page',
  'Custom web application',
  'Website redesign',
  'Not sure yet',
];

export const budgetOptions = [
  'PKR 15,000 – 20,000',
  'PKR 20,000 – 40,000',
  'PKR 40,000+',
  'Need guidance',
];