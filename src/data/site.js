
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
  Bot,
  Workflow,
  Search,
  Headset,
} from 'lucide-react';

export const CONTACT = {
  whatsappDisplay: '+92 319 0117384',
  whatsappBase: 'https://wa.me/92319011738',
  email: 'craftwavedigital@gmail.com',
  website: 'craftwave.digital',
};

export const wa = (message) =>
  `${CONTACT.whatsappBase}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = wa(
  'Hi Craftwave Digital, I would like to discuss how your digital solutions can help my business grow.'
);

export const WA_PORTFOLIO = wa(
  'Hi Craftwave Digital, I would like to see more of your work and portfolio.'
);

export const WA_QUOTE = wa(
  'Hi Craftwave Digital, I would like a free consultation and quote for my project.'
);

export const WA_AI = wa(
  'Hi Craftwave Digital, I am interested in adding an AI chatbot to my business website.'
);

export const whyWebsite = [
  'Build credibility and make a professional first impression.',
  'Turn website visitors into potential customers.',
  'Showcase your products, services, and expertise.',
  'Make it easier for customers to contact your business.',
  'Stay accessible to potential customers around the clock.',
  'Create a digital foundation that grows with your business.',
];

export const services = [
  {
    title: 'Business Websites',
    desc: 'Professional, conversion-focused websites that establish credibility, showcase your services, and help attract new customers.',
    icon: Building2,
    spec: 'Grow your business',
  },
  {
    title: 'E-commerce Solutions',
    desc: 'Powerful online stores with product management, secure checkout, payment integrations, and streamlined order management.',
    icon: ShoppingCart,
    spec: 'Sell online',
  },
  {
    title: 'AI Chatbots & Assistants',
    desc: 'AI-powered website assistants that answer customer questions, provide information, capture enquiries, and support your business around the clock.',
    icon: Bot,
    spec: '24/7 assistance',
  },
  {
    title: 'Landing Pages',
    desc: 'High-converting landing pages designed for advertising campaigns, lead generation, product launches, and service promotions.',
    icon: Rocket,
    spec: 'Generate leads',
  },
  {
    title: 'Custom Web Applications',
    desc: 'Tailored digital platforms, dashboards, booking systems, portals, and interactive applications built around your workflow.',
    icon: LayoutDashboard,
    spec: 'Custom solutions',
  },
  {
    title: 'Website Redesign & Optimization',
    desc: 'Transform outdated websites with modern design, better user experiences, improved responsiveness, and performance enhancements.',
    icon: RefreshCw,
    spec: 'Modernize your site',
  },
  {
    title: 'WordPress & WooCommerce',
    desc: 'Flexible WordPress websites and WooCommerce stores that you can manage, update, and scale without technical complexity.',
    icon: Layers,
    spec: 'Flexible management',
  },
  {
    title: 'Business Automation',
    desc: 'Connect forms, websites, CRMs, booking systems, and third-party tools to reduce repetitive tasks and streamline operations.',
    icon: Workflow,
    spec: 'Work smarter',
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
    title: 'Focused on business growth',
    desc: 'We create digital experiences with clear business objectives: building trust, generating enquiries, and helping businesses grow.',
  },
  {
    icon: Smartphone,
    title: 'Designed for every screen',
    desc: 'Every website is built with responsive layouts and a smooth experience across mobile phones, tablets, and desktops.',
  },
  {
    icon: Bot,
    title: 'AI-powered solutions',
    desc: 'We combine modern web development with practical AI integrations to help businesses improve customer communication.',
  },
  {
    icon: MessagesSquare,
    title: 'Direct communication',
    desc: 'Work directly with the developer. Discuss your requirements, receive updates, and stay involved throughout the project.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality you can rely on',
    desc: 'We focus on functionality, testing, performance, and a smooth launch, with agreed post-launch support.',
  },
  {
    icon: Wallet,
    title: 'Transparent pricing',
    desc: 'Clear project scopes, straightforward pricing, and agreed milestones before development begins.',
  },
];

export const pricing = [
  {
    name: 'Starter Website',
    price: 'PKR 15,000',
    priceNote: 'Starting price',
    desc: 'Everything a small business needs to establish a professional online presence.',
    features: [
      'Up to 5 website pages',
      'Professional responsive design',
      'Contact and enquiry form',
      'WhatsApp integration',
      'Basic on-page SEO setup',
      'Social media integration',
      'Basic website security setup',
      'Launch assistance',
    ],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Business Growth',
    price: 'PKR 20,000',
    priceNote: 'Starting price',
    desc: 'A more complete digital presence designed to help businesses attract and engage customers.',
    features: [
      'Up to 10 website pages',
      'Customized website design',
      'Mobile and tablet optimization',
      'Contact and lead generation forms',
      'WhatsApp integration',
      'Basic AI chatbot setup included',
      'Basic on-page SEO setup',
      'Social media integration',
      'Launch assistance',
    ],
    cta: 'Choose business',
    featured: true,
  },
  {
    name: 'E-commerce Store',
    price: 'Custom pricing',
    priceNote: 'Based on requirements',
    desc: 'Launch an online store with the essential tools to manage products and receive orders.',
    features: [
      'WooCommerce store setup',
      'Product and category pages',
      'Shopping cart and checkout',
      'Payment gateway integration where supported',
      'Order management',
      'WhatsApp integration',
      'Responsive store design',
      'Store launch assistance',
    ],
    cta: 'Build my store',
    featured: false,
  },
  {
    name: 'Custom Digital Solutions',
    price: 'Custom pricing',
    priceNote: 'Tailored to your business',
    desc: 'Advanced solutions for businesses that need more than a standard website.',
    features: [
      'Custom web applications',
      'AI chatbots and assistants',
      'Booking and appointment systems',
      'Business dashboards and portals',
      'API and third-party integrations',
      'Workflow automation',
      'Custom functionality',
      'Ongoing support options',
    ],
    cta: 'Discuss my project',
    featured: false,
  },
];

export const steps = [
  {
    n: '01',
    title: 'Tell us about your business',
    desc: 'Share your business, target audience, goals, and what you want to achieve.',
  },
  {
    n: '02',
    title: 'Get a free consultation',
    desc: 'We discuss your requirements, recommend the right solution, and provide a transparent quote.',
  },
  {
    n: '03',
    title: 'Design & development',
    desc: 'We design and build your solution while keeping you updated throughout the process.',
  },
  {
    n: '04',
    title: 'Review & launch',
    desc: 'Review the finished project, complete agreed revisions, and take your digital presence live.',
  },
];

export const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Our website packages start at PKR 15,000 for a starter website and PKR 20,000 for a business website. E-commerce stores and custom projects are priced according to their requirements.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A standard website can typically be completed within 5–10 working days, depending on its scope, content availability, and feedback. More complex projects may require additional time.',
  },
  {
    q: 'Do you offer AI chatbot integration?',
    a: 'Yes. We build AI-powered website assistants that can answer frequently asked questions, provide business information, and help capture customer enquiries. Basic chatbot setup is included in our Business Growth package. Third-party API or usage charges, if applicable, are separate.',
  },
  {
    q: 'Will my website work on mobile phones?',
    a: 'Yes. Our websites are designed to work across mobile phones, tablets, laptops, and desktop screens.',
  },
  {
    q: 'Can I update my website myself?',
    a: 'Yes. WordPress websites include an admin dashboard where you can manage text, images, products, and other content without needing a developer.',
  },
  {
    q: 'Do you provide e-commerce solutions?',
    a: 'Yes. We develop WooCommerce stores with product management, shopping carts, checkout, order management, and supported payment integrations.',
  },
  {
    q: 'Do you provide website maintenance?',
    a: 'Yes. Ongoing maintenance, updates, backups, and technical support can be arranged according to your requirements.',
  },
  {
    q: 'What is your payment process?',
    a: 'Payment milestones are agreed before the project begins. We share the project scope, cost, and timeline before starting development.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We can modernize your existing website, improve its layout, responsiveness, user experience, and functionality.',
  },
  {
    q: 'Do you work with businesses internationally?',
    a: 'Yes. We work remotely with businesses and clients across different locations. Project communication and delivery can be handled online.',
  },
];

export const serviceOptions = [
  'Business website',
  'E-commerce store',
  'AI chatbot / AI assistant',
  'Landing page',
  'Custom web application',
  'WordPress / WooCommerce',
  'Website redesign',
  'Business automation',
  'Not sure yet',
];

export const budgetOptions = [
  'Under PKR 15,000',
  'PKR 15,000 – 20,000',
  'PKR 20,000 – 40,000',
  'PKR 40,000 – 75,000',
  'PKR 75,000+',
  'Need guidance',
];

export const timelineOptions = [
  'As soon as possible',
  'Within 1–2 weeks',
  'Within a month',
  'Flexible',
];

export const contactReasons = [
  {
    title: 'Start a project',
    desc: 'Tell us what you want to build.',
    href: WA_DEFAULT,
  },
  {
    title: 'Request a free consultation',
    desc: 'Discuss your business goals and requirements.',
    href: WA_QUOTE,
  },
  {
    title: 'Explore AI solutions',
    desc: 'Find out how AI can help your business.',
    href: WA_AI,
  },
];
