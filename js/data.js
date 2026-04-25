const blogPosts = [
  {
    id: 1,
    title: "Building Scalable REST APIs with Node.js",
    description:
      "Learn how to design and build production-ready REST APIs using Node.js, Express, and modern best practices for scalability.",
    content: `<p>Building a REST API that can handle thousands of requests per second requires careful architectural decisions from the start. In this guide, we'll walk through the essential patterns and practices that separate toy projects from production-grade APIs.</p>

<h2>Setting Up the Foundation</h2>
<p>Every scalable API starts with a solid project structure. We organize our code into controllers, services, and data access layers to maintain separation of concerns. This makes it easier to test individual components and swap out implementations as requirements evolve.</p>

<p>Express.js remains the go-to framework for Node.js APIs due to its minimal footprint and extensive middleware ecosystem. Combined with a process manager like PM2, you can leverage all available CPU cores through clustering.</p>

<h2>Database Design Matters</h2>
<p>Your database schema is the backbone of your API. We use indexing strategically on frequently queried fields and implement connection pooling to avoid the overhead of creating new database connections for every request. For read-heavy workloads, adding a Redis caching layer can reduce database load by up to 80%.</p>

<h2>Rate Limiting and Security</h2>
<p>No production API is complete without rate limiting. We implement a token bucket algorithm that allows burst traffic while preventing abuse. Combined with helmet.js for security headers and input validation using Joi, our API is resilient against common attack vectors.</p>

<h2>Monitoring and Logging</h2>
<p>Structured logging with Winston and distributed tracing with OpenTelemetry give us full visibility into our API's behavior. We set up health check endpoints and integrate with monitoring dashboards to catch issues before they affect users.</p>

<p>By following these patterns, you'll build APIs that are not just functional, but truly production-ready — capable of scaling with your user base while remaining maintainable for your team.</p>`,
    category: "Coding",
    date: "2026-04-15",
    author: "Raziullah",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: 2,
    title: "Exploring the Streets of Tokyo: A Developer's Travel Diary",
    description:
      "From Akihabara's electric town to serene temples — a tech enthusiast's journey through Tokyo's vibrant culture and innovation.",
    content: `<p>Tokyo is a city that defies expectations at every corner. As a developer, I was drawn here by the tech scene, but what kept me exploring was the seamless blend of tradition and futurism that defines every neighborhood.</p>

<h2>Akihabara: Electric Town</h2>
<p>The famous electronics district lives up to its reputation. Multi-story arcades, component shops where you can buy individual resistors, and retro gaming stores that feel like museums. I spent an entire afternoon in a tiny shop building a custom mechanical keyboard with the owner, who spoke no English but communicated perfectly through shared enthusiasm for technology.</p>

<h2>Shibuya and the Startup Scene</h2>
<p>Shibuya isn't just about the famous crossing. The neighborhood has become Tokyo's startup hub, with coworking spaces and incubators occupying floors above the bustling retail streets. I attended a local meetup where Japanese developers shared their approaches to building mobile-first applications — fascinating to see how the mobile-dominant culture here shapes software design decisions.</p>

<h2>Finding Peace in Chaos</h2>
<p>What surprised me most was how easy it is to find tranquility. Step off a main road into a side street, and you might find a 400-year-old shrine surrounded by moss-covered stone lanterns, completely silent despite being meters from the urban rush. These moments of contrast became my favorite part of the trip.</p>

<h2>The Food Scene</h2>
<p>Every meal in Tokyo feels like an event. From standing ramen bars where you order via vending machine tickets, to tiny izakayas with just eight seats and a chef who has been perfecting the same dishes for decades. The attention to craft here mirrors the best software engineering — obsessive focus on getting every detail right.</p>

<p>Tokyo taught me that the best innovations come from deeply understanding tradition before trying to disrupt it. A lesson I've carried back into my coding practice.</p>`,
    category: "Travel",
    date: "2026-04-10",
    author: "Raziullah",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    id: 3,
    title: "Understanding CSS Grid: The Complete Visual Guide",
    description:
      "Master CSS Grid layout with practical examples, visual diagrams, and real-world use cases that go beyond basic tutorials.",
    content: `<p>CSS Grid transformed how we build layouts on the web. Unlike Flexbox, which excels at one-dimensional layouts, Grid gives us true two-dimensional control over both rows and columns simultaneously. Let's dive deep into what makes it powerful.</p>

<h2>The Mental Model</h2>
<p>Think of CSS Grid as placing items on a spreadsheet. You define the rows and columns (the grid tracks), and then place items into specific cells or let them flow automatically. This mental model helps when designing complex layouts — sketch it on graph paper first, then translate directly to CSS.</p>

<h2>Defining Your Grid</h2>
<p>The <code>grid-template-columns</code> and <code>grid-template-rows</code> properties are your starting point. The <code>fr</code> unit is Grid's secret weapon — it distributes available space proportionally, making responsive layouts trivial without media queries in many cases.</p>

<h2>Named Grid Areas</h2>
<p>One of Grid's most underused features is <code>grid-template-areas</code>. You can literally draw your layout in CSS using named strings. This makes your layout code readable at a glance and simplifies responsive redesigns — just redefine the area template in a media query.</p>

<h2>Auto-Fit and Auto-Fill</h2>
<p>The <code>repeat(auto-fit, minmax(250px, 1fr))</code> pattern is perhaps the most powerful single line in all of CSS. It creates a responsive grid that automatically adjusts the number of columns based on available space, with no media queries needed. Every developer should have this pattern memorized.</p>

<h2>Alignment and Gaps</h2>
<p>Grid provides six alignment properties that give you precise control over how items sit within their cells and how tracks are distributed within the container. Combined with the <code>gap</code> property, you can create perfectly spaced layouts without margin hacks.</p>

<p>CSS Grid isn't just a tool — it's a paradigm shift in how we think about web layouts. Master it, and you'll find yourself writing less CSS while creating more sophisticated designs.</p>`,
    category: "Coding",
    date: "2026-04-05",
    author: "Raziullah",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
  },
  {
    id: 4,
    title: "The Rise of AI in Everyday Technology",
    description:
      "How artificial intelligence is quietly transforming the tools we use daily — from email filters to photo editing and beyond.",
    content: `<p>Artificial intelligence isn't coming — it's already here, woven into the fabric of tools we use without a second thought. Understanding where and how AI operates in our daily tech stack helps us make better decisions about the tools we build and use.</p>

<h2>The Invisible AI Layer</h2>
<p>Every time your email client separates spam from legitimate messages, AI is at work. Modern spam filters use natural language processing and behavioral analysis that would have been considered cutting-edge research just a decade ago. Gmail's Smart Reply feature takes this further, generating contextually appropriate response suggestions by understanding the content and tone of incoming messages.</p>

<h2>Photography and Computer Vision</h2>
<p>Your smartphone camera is a marvel of AI engineering. Computational photography uses neural networks to merge multiple exposures, enhance details, blur backgrounds with accurate depth estimation, and even remove unwanted objects from photos. What required hours of expert Photoshop work five years ago now happens in milliseconds on a phone.</p>

<h2>Code Completion and Development</h2>
<p>As developers, we interact with AI daily through code completion tools. These systems understand code context, suggest entire functions, catch bugs before they compile, and even generate tests. The key is treating these tools as assistants that augment our thinking rather than replacements for understanding.</p>

<h2>Recommendation Engines</h2>
<p>From Netflix suggesting your next show to Spotify creating personalized playlists, recommendation algorithms analyze patterns in your behavior and preferences. These systems use collaborative filtering and deep learning to find connections between millions of users and items.</p>

<h2>The Ethical Dimension</h2>
<p>With great power comes responsibility. AI systems can perpetuate biases present in their training data, and their decisions often lack transparency. As technologists, we have an obligation to understand these limitations and advocate for responsible AI development.</p>

<p>The most profound technologies are those that disappear into the background of daily life. AI is well on its way to becoming that invisible layer that makes everything work just a little bit better.</p>`,
    category: "Tech",
    date: "2026-03-28",
    author: "Raziullah",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: 5,
    title: "Backpacking Through Southeast Asia on a Budget",
    description:
      "Practical tips and unforgettable experiences from a month-long backpacking adventure through Vietnam, Thailand, and Cambodia.",
    content: `<p>Southeast Asia remains one of the best regions in the world for budget travelers. With careful planning, you can explore three countries in a month for less than you'd spend on two weeks in Europe. Here's what I learned from my journey.</p>

<h2>Vietnam: The Unexpected Favorite</h2>
<p>Vietnam stole my heart with its intensity. Hanoi's Old Quarter is a sensory overload — motorbikes flowing like water around pedestrians, street food vendors grilling meats on tiny sidewalk stalls, and the constant soundtrack of honking and conversation. A bowl of pho on the street costs about $1.50 and rivals anything you'd pay ten times more for back home.</p>

<p>The overnight train from Hanoi to Hue is an experience in itself — falling asleep to the rhythmic clacking of rails and waking up to misty mountain landscapes sliding past your window.</p>

<h2>Thailand: The Well-Worn Path</h2>
<p>Thailand's backpacker infrastructure is unmatched. You can find quality hostels for $8-15 per night, and the bus and train networks connect every corner of the country. Chiang Mai's digital nomad scene is thriving — dozens of cafes cater to remote workers with fast WiFi, good coffee, and all-day breakfast.</p>

<p>Beyond the tourist trail, Thailand's national parks offer incredible hiking and wildlife spotting. Khao Sok National Park's jungle lakes felt like stepping into another world entirely.</p>

<h2>Cambodia: Raw and Powerful</h2>
<p>Angkor Wat at sunrise lives up to every superlative written about it. But Cambodia offers much more than temples. Phnom Penh's history is heavy but essential — the Tuol Sleng Museum and the Killing Fields provide crucial context for understanding the country's resilience. The emerging food and art scene in Siem Reap shows a country looking forward while honoring its past.</p>

<h2>Budget Tips</h2>
<p>Eat where locals eat. Take overnight buses to save on accommodation. Learn basic phrases in each language — it transforms interactions from transactional to genuinely warm. And always carry a reusable water bottle with a filter — it saves money and reduces plastic waste.</p>

<p>Travel doesn't have to be expensive to be transformative. Sometimes the cheapest experiences leave the richest memories.</p>`,
    category: "Travel",
    date: "2026-03-20",
    author: "Raziullah",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
  },
  {
    id: 6,
    title: "Why Every Developer Should Learn TypeScript in 2026",
    description:
      "TypeScript adoption is at an all-time high. Here's why adding static types to your JavaScript workflow is no longer optional.",
    content: `<p>The debate is over. TypeScript has won. With adoption rates exceeding 80% in new JavaScript projects and major frameworks like Angular, Next.js, and SvelteKit using it by default, TypeScript proficiency has become a baseline expectation for frontend and full-stack developers.</p>

<h2>The Case for Types</h2>
<p>JavaScript's dynamic typing is both its greatest strength and its most dangerous trap. TypeScript adds a safety net without removing the flexibility. You catch entire categories of bugs at compile time — null reference errors, typos in property names, incorrect function arguments — that would otherwise only surface in production.</p>

<h2>Developer Experience</h2>
<p>The real selling point isn't safety — it's productivity. TypeScript-aware editors provide autocompletion that actually works, inline documentation from type definitions, and refactoring tools that can rename a symbol across an entire codebase with confidence. Once you experience this level of tooling support, going back to plain JavaScript feels like coding blindfolded.</p>

<h2>Gradual Adoption</h2>
<p>You don't need to convert your entire codebase overnight. TypeScript is designed for gradual adoption — rename files from .js to .ts, start with loose type checking, and tighten the rules as your team gets comfortable. Even adding types to just your API boundaries and shared interfaces provides enormous value.</p>

<h2>The Ecosystem</h2>
<p>DefinitelyTyped hosts type definitions for virtually every popular npm package. Modern packages ship their own type definitions. The ecosystem has reached critical mass where not having TypeScript support is the exception rather than the rule.</p>

<h2>Learning Path</h2>
<p>Start with the basics — primitive types, interfaces, and generics. Then explore utility types like Partial, Required, and Pick. Advanced patterns like discriminated unions and template literal types can wait until you encounter specific problems they solve. The official TypeScript handbook is excellent and free.</p>

<p>TypeScript isn't a different language — it's JavaScript with guardrails. Those guardrails let you move faster with more confidence, which is exactly what modern development demands.</p>`,
    category: "Coding",
    date: "2026-03-15",
    author: "Raziullah",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
  {
    id: 7,
    title: "Smart Home Setup: Automating Your Life with IoT",
    description:
      "A hands-on guide to building a smart home ecosystem — from choosing the right hub to writing custom automations.",
    content: `<p>The smart home promise has finally matured beyond gimmicky voice commands. Modern IoT ecosystems let you build genuinely useful automations that save time, energy, and money. Here's how to build one that actually works.</p>

<h2>Choosing Your Hub</h2>
<p>The hub is the brain of your smart home. Home Assistant running on a Raspberry Pi gives you the most flexibility and privacy — all processing stays local. If you prefer simplicity, Apple HomeKit or Google Home offer polished experiences with less tinkering. The key decision is whether you value customization or convenience more.</p>

<h2>Start with Lighting</h2>
<p>Smart lighting is the gateway drug of home automation. Zigbee-based bulbs from IKEA or Philips Hue are reliable and affordable. Set up motion-activated lights in hallways and bathrooms — once you experience lights that just work when you walk in, you'll never go back to switches.</p>

<h2>Climate Control</h2>
<p>A smart thermostat pays for itself within a year through energy savings. Program it to lower heating when you leave for work and warm up before you return. Add temperature sensors in different rooms to avoid the common problem of heating or cooling based on a single room's temperature.</p>

<h2>Custom Automations</h2>
<p>The real power emerges when devices work together. My favorite automation: when my alarm goes off in the morning, the bedroom lights gradually brighten to simulate sunrise, the coffee maker starts, and the thermostat adjusts to my "awake" temperature — all without touching a single button.</p>

<h2>Security and Privacy</h2>
<p>Every connected device is a potential attack surface. Use a separate WiFi network for IoT devices, keep firmware updated, and prefer local-processing solutions over cloud-dependent ones. Your smart home should make you feel more secure, not less.</p>

<p>Home automation is a journey, not a destination. Start small, automate one annoyance at a time, and resist the urge to automate everything at once. The best smart home is one you forget is smart — it just works.</p>`,
    category: "Tech",
    date: "2026-03-08",
    author: "Raziullah",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
  },
  {
    id: 8,
    title: "Hiking the Inca Trail: 4 Days to Machu Picchu",
    description:
      "A detailed account of trekking the classic Inca Trail — the highs, the altitude sickness, and the life-changing sunrise at the Sun Gate.",
    content: `<p>The Inca Trail is more than a hike — it's a pilgrimage through history. Four days of walking ancient stone paths through cloud forests and mountain passes, culminating in one of humanity's greatest architectural achievements. Here's the unfiltered reality of the experience.</p>

<h2>Day 1: The Easy Lie</h2>
<p>The first day lulls you into false confidence. A gentle walk along the Urubamba River valley, past small Inca ruins and eucalyptus groves. The altitude (2,600m) feels manageable, and you wonder what all the fuss is about. Enjoy this feeling — it won't last.</p>

<h2>Day 2: Dead Woman's Pass</h2>
<p>Day two is the crucible. A relentless climb to Dead Woman's Pass at 4,215 meters — the trail's highest point. The air thins noticeably above 3,500m. Each step becomes a negotiation with your lungs. The porters, carrying 25kg packs, pass you effortlessly while you gasp and lean on your trekking poles. Humbling doesn't begin to describe it.</p>

<p>Reaching the pass brings tears — partly from achievement, partly from the wind cutting through every layer you're wearing. The descent to camp is steep and technical, and your knees will remind you of every step the next morning.</p>

<h2>Day 3: The Beautiful Middle</h2>
<p>Often called the most scenic day, day three winds through cloud forest filled with orchids and hummingbirds. You pass through Inca tunnels carved through solid rock and visit ruins that would be headline attractions anywhere else but are mere footnotes on this trail. The campsite at Wiñay Wayna sits on a cliff edge with views that make you forget all of yesterday's suffering.</p>

<h2>Day 4: The Sun Gate</h2>
<p>You wake at 3:30 AM for the final push. Headlamps bobbing in the darkness, the line of hikers moves through the pre-dawn cold to reach the Sun Gate for sunrise. When the clouds part and Machu Picchu appears below you, bathed in golden light, the four days of effort crystallize into a single perfect moment. No photo captures it. No words describe it. You just stand there, breathing, grateful.</p>

<p>The Inca Trail teaches you that the journey matters as much as the destination — a cliche that becomes viscerally true when you've earned every step of it.</p>`,
    category: "Travel",
    date: "2026-02-25",
    author: "Raziullah",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
  },
];

const categories = ["All", "Tech", "Travel", "Coding"];
