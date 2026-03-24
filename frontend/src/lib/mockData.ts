export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  category: string;
  logo: string;
  postedAt: string;
}

export interface Company {
  name: string;
  logo: string;
  coverImage: string;
}

export const COMPANIES: Company[] = [
  { 
    name: 'Anthropic', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Anthropic.png/600px-Anthropic.png',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Figma', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'OpenAI', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1678382156212-f14d80911762?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Vercel', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Linear', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Linear_Logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Shopify', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
    coverImage: 'https://images.unsplash.com/photo-1556742049-02e4d509d3ee?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Cloudflare', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Scale AI', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Scale_AI_Logo.png',
    coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Stripe', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Airbnb', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Google', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Meta', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Tesla', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    coverImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Netflix', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Uber', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
    coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Slack', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Notion', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Datadog', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Datadog_logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Snowflake', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Roblox', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800'
  },
];

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'Linear',
    location: 'Remote',
    type: 'Full-time',
    category: 'Design',
    salary: '$120k - $160k',
    logo: COMPANIES.find(c => c.name === 'Linear')?.logo || '',
    postedAt: '2h ago'
  },
  {
    id: 2,
    title: 'Senior AI Research Engineer',
    company: 'Anthropic',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$250k - $380k',
    logo: COMPANIES.find(c => c.name === 'Anthropic')?.logo || '',
    postedAt: '4h ago'
  },
  {
    id: 3,
    title: 'Lead Software Architect',
    company: 'Scale AI',
    location: 'SF, USA',
    type: 'Contract',
    category: 'Engineering',
    salary: '$180k - $250k',
    logo: COMPANIES.find(c => c.name === 'Scale AI')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 4,
    title: 'Core Backend Engineer',
    company: 'Stripe',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$160k - $220k',
    logo: COMPANIES.find(c => c.name === 'Stripe')?.logo || '',
    postedAt: '12h ago'
  },
  {
    id: 5,
    title: 'UX Researcher',
    company: 'Airbnb',
    location: 'New York, NY',
    type: 'Full-time',
    category: 'Design',
    salary: '$110k - $150k',
    logo: COMPANIES.find(c => c.name === 'Airbnb')?.logo || '',
    postedAt: '2d ago'
  },
  {
    id: 6,
    title: 'Global Growth Lead',
    company: 'OpenAI',
    location: 'Remote',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$200k - $280k',
    logo: COMPANIES.find(c => c.name === 'OpenAI')?.logo || '',
    postedAt: '6h ago'
  },
  {
    id: 7,
    title: 'Cloud Infrastructure Engineer',
    company: 'Cloudflare',
    location: 'London, UK',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$140k - $190k',
    logo: COMPANIES.find(c => c.name === 'Cloudflare')?.logo || '',
    postedAt: '3h ago'
  },
  {
    id: 8,
    title: 'Senior Frontend Developer',
    company: 'Vercel',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$150k - $210k',
    logo: COMPANIES.find(c => c.name === 'Vercel')?.logo || '',
    postedAt: '5h ago'
  },
  {
    id: 9,
    title: 'Head of Brand Marketing',
    company: 'Netflix',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$180k - $240k',
    logo: COMPANIES.find(c => c.name === 'Netflix')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 10,
    title: 'Safety Systems Engineer',
    company: 'Tesla',
    location: 'Palo Alto, CA',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$170k - $230k',
    logo: COMPANIES.find(c => c.name === 'Tesla')?.logo || '',
    postedAt: '2d ago'
  },
  {
    id: 11,
    title: 'Account Executive',
    company: 'Slack',
    location: 'Remote',
    type: 'Full-time',
    category: 'Sales',
    salary: '$90k - $140k + Commission',
    logo: COMPANIES.find(c => c.name === 'Slack')?.logo || '',
    postedAt: '8h ago'
  },
  {
    id: 12,
    title: 'Product Manager',
    company: 'Notion',
    location: 'SF, CA',
    type: 'Full-time',
    category: 'Product',
    salary: '$160k - $210k',
    logo: COMPANIES.find(c => c.name === 'Notion')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 13,
    title: 'Site Reliability Engineer',
    company: 'Datadog',
    location: 'New York, NY',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$150k - $200k',
    logo: COMPANIES.find(c => c.name === 'Datadog')?.logo || '',
    postedAt: '3h ago'
  },
  {
    id: 14,
    title: 'Data Scientist',
    company: 'Snowflake',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$140k - $190k',
    logo: COMPANIES.find(c => c.name === 'Snowflake')?.logo || '',
    postedAt: '5h ago'
  },
  {
    id: 15,
    title: 'Mobile App Developer (iOS)',
    company: 'Uber',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$150k - $210k',
    logo: COMPANIES.find(c => c.name === 'Uber')?.logo || '',
    postedAt: '2d ago'
  },
  {
    id: 16,
    title: 'Product Marketing Manager',
    company: 'Roblox',
    location: 'San Mateo, CA',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$140k - $180k',
    logo: COMPANIES.find(c => c.name === 'Roblox')?.logo || '',
    postedAt: '4h ago'
  },
  {
    id: 17,
    title: 'DevOps Lead',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$200k - $270k',
    logo: COMPANIES.find(c => c.name === 'Google')?.logo || '',
    postedAt: '1w ago'
  },
  {
    id: 18,
    title: 'Visual Designer',
    company: 'Meta',
    location: 'Menlo Park, CA',
    type: 'Full-time',
    category: 'Design',
    salary: '$130k - $170k',
    logo: COMPANIES.find(c => c.name === 'Meta')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 19,
    title: 'Customer Success Manager',
    company: 'Shopify',
    location: 'Remote',
    type: 'Full-time',
    category: 'Customer Support',
    salary: '$80k - $120k',
    logo: COMPANIES.find(c => c.name === 'Shopify')?.logo || '',
    postedAt: '2d ago'
  },
  {
    id: 20,
    title: 'Sales Development Rep',
    company: 'Snowflake',
    location: 'Austin, TX',
    type: 'Full-time',
    category: 'Sales',
    salary: '$60k - $85k',
    logo: COMPANIES.find(c => c.name === 'Snowflake')?.logo || '',
    postedAt: '3h ago'
  },
  {
    id: 21,
    title: 'Lead Product Designer',
    company: 'Figma',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Design',
    salary: '$180k - $240k',
    logo: COMPANIES.find(c => c.name === 'Figma')?.logo || '',
    postedAt: 'Today'
  },
  {
    id: 22,
    title: 'Backend Node.js Developer',
    company: 'Vercel',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$140k - $190k',
    logo: COMPANIES.find(c => c.name === 'Vercel')?.logo || '',
    postedAt: '4h ago'
  },
  {
    id: 23,
    title: 'Legal Counsel',
    company: 'Airbnb',
    location: 'Remote',
    type: 'Full-time',
    category: 'Admin',
    salary: '$160k - $220k',
    logo: COMPANIES.find(c => c.name === 'Airbnb')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 24,
    title: 'Security Operations Analyst',
    company: 'Cloudflare',
    location: 'Austin, TX',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$110k - $160k',
    logo: COMPANIES.find(c => c.name === 'Cloudflare')?.logo || '',
    postedAt: '12h ago'
  },
  {
    id: 25,
    title: 'Technical Writer',
    company: 'Linear',
    location: 'Remote',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$90k - $130k',
    logo: COMPANIES.find(c => c.name === 'Linear')?.logo || '',
    postedAt: '3h ago'
  },
  {
    id: 26,
    title: 'Creative Director',
    company: 'OpenAI',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Design',
    salary: '$220k - $320k',
    logo: COMPANIES.find(c => c.name === 'OpenAI')?.logo || '',
    postedAt: '5h ago'
  },
  {
    id: 27,
    title: 'Operations Manager',
    company: 'Stripe',
    location: 'Dublin, Ireland',
    type: 'Full-time',
    category: 'Product',
    salary: '$130k - $180k',
    logo: COMPANIES.find(c => c.name === 'Stripe')?.logo || '',
    postedAt: '2d ago'
  },
  {
    id: 28,
    title: 'Mobile App Developer (Android)',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$170k - $230k',
    logo: COMPANIES.find(c => c.name === 'Netflix')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 29,
    title: 'SEO Specialist',
    company: 'Datadog',
    location: 'Remote',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$85k - $125k',
    logo: COMPANIES.find(c => c.name === 'Datadog')?.logo || '',
    postedAt: '4h ago'
  },
  {
    id: 30,
    title: 'VP of Engineering',
    company: 'Notion',
    location: 'SF, CA',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$280k - $400k',
    logo: COMPANIES.find(c => c.name === 'Notion')?.logo || '',
    postedAt: '1w ago'
  },
  {
    id: 31,
    title: 'Recruiting Coordinator',
    company: 'Slack',
    location: 'Remote',
    type: 'Full-time',
    category: 'Admin',
    salary: '$70k - $95k',
    logo: COMPANIES.find(c => c.name === 'Slack')?.logo || '',
    postedAt: '6h ago'
  },
  {
    id: 32,
    title: 'Senior HR Manager',
    company: 'Google',
    location: 'Seattle, WA',
    type: 'Full-time',
    category: 'Admin',
    salary: '$150k - $200k',
    logo: COMPANIES.find(c => c.name === 'Google')?.logo || '',
    postedAt: '2d ago'
  },
  {
    id: 33,
    title: 'QA Automation Engineer',
    company: 'Tesla',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$120k - $170k',
    logo: COMPANIES.find(c => c.name === 'Tesla')?.logo || '',
    postedAt: '5h ago'
  },
  {
    id: 34,
    title: 'Brand Designer',
    company: 'Scale AI',
    location: 'Remote',
    type: 'Contract',
    category: 'Design',
    salary: '$100k - $140k',
    logo: COMPANIES.find(c => c.name === 'Scale AI')?.logo || '',
    postedAt: '12h ago'
  },
  {
    id: 35,
    title: 'Account Manager',
    company: 'Meta',
    location: 'New York, NY',
    type: 'Full-time',
    category: 'Sales',
    salary: '$120k - $180k',
    logo: COMPANIES.find(c => c.name === 'Meta')?.logo || '',
    postedAt: '3d ago'
  },
  {
    id: 36,
    title: 'Head of Content',
    company: 'Vercel',
    location: 'Remote',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$150k - $220k',
    logo: COMPANIES.find(c => c.name === 'Vercel')?.logo || '',
    postedAt: '2h ago'
  },
  {
    id: 37,
    title: 'Solutions Architect',
    company: 'Datadog',
    location: 'Paris, France',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$140k - $190k',
    logo: COMPANIES.find(c => c.name === 'Datadog')?.logo || '',
    postedAt: 'Today'
  },
  {
    id: 38,
    title: 'Internal Audit Lead',
    company: 'Airbnb',
    location: 'Remote',
    type: 'Full-time',
    category: 'Admin',
    salary: '$140k - $190k',
    logo: COMPANIES.find(c => c.name === 'Airbnb')?.logo || '',
    postedAt: '1w ago'
  },
  {
    id: 39,
    title: 'Performance Marketing Pro',
    company: 'Meta',
    location: 'Menlo Park, CA',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$130k - $185k',
    logo: COMPANIES.find(c => c.name === 'Meta')?.logo || '',
    postedAt: '12h ago'
  },
  {
    id: 40,
    title: 'Community Manager',
    company: 'Roblox',
    location: 'Remote',
    type: 'Full-time',
    category: 'Customer Support',
    salary: '$75k - $110k',
    logo: COMPANIES.find(c => c.name === 'Roblox')?.logo || '',
    postedAt: '5h ago'
  },
  {
    id: 41,
    title: 'Junior Technical Support',
    company: 'Vercel',
    location: 'Remote',
    type: 'Part-time',
    category: 'Customer Support',
    salary: '$40k - $60k',
    logo: COMPANIES.find(c => c.name === 'Vercel')?.logo || '',
    postedAt: '1h ago'
  },
  {
    id: 42,
    title: 'Social Media Intern',
    company: 'Figma',
    location: 'Hybrid',
    type: 'Part-time',
    category: 'Marketing',
    salary: '$30k - $45k',
    logo: COMPANIES.find(c => c.name === 'Figma')?.logo || '',
    postedAt: '3h ago'
  },
  {
    id: 43,
    title: 'Senior Cryptography Engineer',
    company: 'Cloudflare',
    location: 'Remote',
    type: 'Remote',
    category: 'Engineering',
    salary: '$190k - $260k',
    logo: COMPANIES.find(c => c.name === 'Cloudflare')?.logo || '',
    postedAt: '12h ago'
  },
  {
    id: 44,
    title: 'Part-time Designer',
    company: 'Notion',
    location: 'Remote',
    type: 'Part-time',
    category: 'Design',
    salary: '$50k - $80k',
    logo: COMPANIES.find(c => c.name === 'Notion')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 45,
    title: 'Backend Infrastructure',
    company: 'Scale AI',
    location: 'Remote',
    type: 'Remote',
    category: 'Engineering',
    salary: '$180k - $240k',
    logo: COMPANIES.find(c => c.name === 'Scale AI')?.logo || '',
    postedAt: '2h ago'
  },
  {
    id: 46,
    title: 'Marketing Associate',
    company: 'Stripe',
    location: 'Remote',
    type: 'Part-time',
    category: 'Marketing',
    salary: '$45k - $70k',
    logo: COMPANIES.find(c => c.name === 'Stripe')?.logo || '',
    postedAt: '4h ago'
  },
  {
    id: 47,
    title: 'Webflow Developer',
    company: 'Linear',
    location: 'Remote',
    type: 'Contract',
    category: 'Engineering',
    salary: '$90k - $130k',
    logo: COMPANIES.find(c => c.name === 'Linear')?.logo || '',
    postedAt: '6h ago'
  },
  {
    id: 48,
    title: 'Documentation Specialist',
    company: 'Anthropic',
    location: 'Remote',
    type: 'Part-time',
    category: 'Admin',
    salary: '$35k - $55k',
    logo: COMPANIES.find(c => c.name === 'Anthropic')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 49,
    title: 'Machine Learning Intern',
    company: 'OpenAI',
    location: 'San Francisco, CA',
    type: 'Part-time',
    category: 'Engineering',
    salary: '$60k - $90k',
    logo: COMPANIES.find(c => c.name === 'OpenAI')?.logo || '',
    postedAt: '12h ago'
  },
  {
    id: 50,
    title: 'Content Strategist',
    company: 'Shopify',
    location: 'Remote',
    type: 'Remote',
    category: 'Marketing',
    salary: '$110k - $160k',
    logo: COMPANIES.find(c => c.name === 'Shopify')?.logo || '',
    postedAt: '2d ago'
  },
  {
    id: 51,
    title: 'Security Researcher',
    company: 'Google',
    location: 'Remote',
    type: 'Remote',
    category: 'Engineering',
    salary: '$180k - $280k',
    logo: COMPANIES.find(c => c.name === 'Google')?.logo || '',
    postedAt: '3h ago'
  },
  {
    id: 52,
    title: 'Brand Illustrator',
    company: 'Airbnb',
    location: 'Remote',
    type: 'Part-time',
    category: 'Design',
    salary: '$55k - $85k',
    logo: COMPANIES.find(c => c.name === 'Airbnb')?.logo || '',
    postedAt: '5h ago'
  },
  {
    id: 53,
    title: 'Support Engineer',
    company: 'Slack',
    location: 'Remote',
    type: 'Remote',
    category: 'Customer Support',
    salary: '$100k - $140k',
    logo: COMPANIES.find(c => c.name === 'Slack')?.logo || '',
    postedAt: '8h ago'
  },
  {
    id: 54,
    title: 'Growth Analyst',
    company: 'Uber',
    location: 'Remote',
    type: 'Part-time',
    category: 'Marketing',
    salary: '$40k - $65k',
    logo: COMPANIES.find(c => c.name === 'Uber')?.logo || '',
    postedAt: '1d ago'
  },
  {
    id: 55,
    title: 'Unity Engine Developer',
    company: 'Roblox',
    location: 'Remote',
    type: 'Remote',
    category: 'Engineering',
    salary: '$160k - $220k',
    logo: COMPANIES.find(c => c.name === 'Roblox')?.logo || '',
    postedAt: 'Today'
  }
];
