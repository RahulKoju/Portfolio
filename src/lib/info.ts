import { Github, Linkedin } from "lucide-react";

export const info = {
  name: "Rahul Koju",
  first_name: "Rahul",
  last_name: "Koju",
  email: "contact@rahulkoju.com.np",
  description: "I build the infrastructure that keeps applications running",
  title: "DevOps Engineer",
  summary: `DevOps engineer with hands-on experience building containerized applications, CI/CD pipelines, and cloud infrastructure on AWS. I design and operate production-grade Kubernetes clusters with automated GitOps deployments, failure recovery, and full-stack observability using Prometheus, Grafana, and Loki. I write Terraform and Ansible IaC to provision repeatable AWS environments and enforce defense-in-depth networking with least-privilege IAM.

I don't just follow tutorials and call it a day. Every pipeline I build, every cluster I break, every deploy that goes sideways — that's where the real learning happens. Always hungry, always improving.`,
  short_summary: `DevOps engineer building CI/CD pipelines, Kubernetes clusters, and cloud infrastructure on AWS — from Terraform provisioning to full-stack observability.`,

  project_description:
    "Infrastructure and deployment systems I've built — from Kubernetes clusters with GitOps delivery to Jenkins CI/CD pipelines with automated rollback. Each one is a real system I designed, broke, fixed, and documented.",
  roles: [
    "building infrastructure that scales",
    "automating repetitive workflows",
    "documenting systems that last",
    "learning through real-world projects",
    "always improving my craft",
    "solving problems with automation",
  ],
  hobby: ["Coding", "Travelling", "Photography"],
  socials: [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/rahul-koju/",
      icon: Linkedin,
    },
    {
      name: "External",
      link: "https://github.com/RahulKoju",
      icon: Github,
    },
  ],
  resume_url: "/Rahul_Koju_DevOps_Resume.pdf",

  skills: {
    cicd_gitops: [
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "ArgoCD",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg",
      },
      {
        name: "Bash",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],

    containers_orchestration: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
      },
      {
        name: "Helm",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg",
      },
    ],

    cloud_iac: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Terraform",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      {
        name: "Ansible",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      },
    ],

    observability: [
      {
        name: "Prometheus",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
      },
      {
        name: "Grafana",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      },
      {
        name: "Loki",
        icon: "https://raw.githubusercontent.com/grafana/loki/main/docs/sources/logo.png",
      },
      {
        name: "Alertmanager",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
      },
    ],

    networking_security: [
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
    ],

    backend: [
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Postgres",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],

    frontend: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],

    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Vim",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
      },
    ],
  },
  projects: [
    {
      uuid: "commit-three-tier",
      visible: true,
      title: "Commit — Three-Tier Web Application",
      subtitle: "Kubernetes · GitOps · Full Observability on AWS",
      description: `
  <p>A personal productivity app (tasks, habits, notes, focus timer) built with <strong>React, Go, and Postgres</strong> — deployed on a production Kubernetes cluster with GitOps delivery, full-stack observability, and automated CI/CD on AWS.</p>

  <ul>
    <li><p>Provisioned the complete AWS environment (<strong>VPC, subnets, security groups, IAM</strong>) using Terraform in ~50 seconds, replacing a multi-hour manual setup with a single repeatable command.</p></li>

    <li><p>Automated node configuration (swap, kernel modules, sysctl tuning) with <strong>Ansible</strong> in ~65s and bootstrapped a 2-node <strong>RKE Kubernetes cluster</strong> with Canal CNI and NGINX Ingress in ~2m 25s — blank AWS account to fully operational cluster in under 10 minutes.</p></li>

    <li><p>Eliminated configuration drift across all environments by authoring <strong>Kubernetes manifests</strong> for 3 application tiers with ConfigMaps, Secrets, and a Postgres StatefulSet backed by persistent storage — replacing ad-hoc kubectl changes with fully declarative, version-controlled configuration.</p></li>

    <li><p>Designed a <strong>GitHub Actions CI/CD pipeline</strong> that builds Docker images tagged with commit SHA and auto-updates deployment manifests, achieving zero-effort releases with consistent sub-3-minute deployments.</p></li>

    <li><p>Implemented <strong>GitOps delivery with ArgoCD</strong>, auto-syncing all 3-tier manifests on every commit with a full audit trail and zero manual kubectl interventions in production.</p></li>

    <li><p>Deployed a full <strong>observability stack</strong> (Prometheus, Grafana, Loki, Alertmanager) covering cluster metrics, pod logs, and application traces — with API latency dashboards and automated email alerting.</p></li>

    <li><p>Documented the complete system architecture using <strong>Mermaid diagrams</strong> covering AWS infrastructure, cluster topology, CI/CD pipeline, GitOps workflow, and the observability stack.</p></li>

    <li><p>Hardened cluster networking with restrictive <strong>AWS Security Groups</strong>, allowlisting only required ports (etcd 2379–2380, kubelet 10250, Canal VXLAN 8472 UDP) and enforcing <strong>least-privilege IAM</strong> throughout.</p></li>
  </ul>
  `,
      start_date: "2026-01-01",
      end_date: null,
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "commit-github",
          link: "https://github.com/RahulKoju/commit",
          label: "GitHub",
        },
        {
          uuid: "commit-live",
          link: "https://commit.rahulkoju.com.np",
          label: "Live",
        },
      ],
    },
    {
      uuid: "two-tier-web-app",
      visible: true,
      title: "Two-Tier Web Application",
      subtitle: "Jenkins CI/CD · Automated Rollback · Incident Response",
      description: `
  <p>A containerized <strong>Next.js/Postgres application</strong> on AWS EC2 with a fully automated Jenkins CI/CD pipeline, zero-touch rollback, and production resilience validated through structured incident response drills.</p>

  <ul>
    <li><p>Engineered a <strong>4-stage Jenkins CI/CD pipeline</strong> (build, test, deploy, verify) with consistent sub-2m30s deployments and a fully automated, zero-touch release track.</p></li>

    <li><p>Implemented <strong>automated rollback</strong> using versioned Docker image tags and a last-known-good marker file — health-check-triggered recovery with no manual intervention, ensuring no failed deployment ever reaches production.</p></li>

    <li><p>Ran <strong>structured incident response drills</strong> across three failure scenarios: ~5s crash recovery (SIGTERM), ~20s database outage with graceful 503 degradation, and ~116s full EC2 reboot recovery — all self-healing, zero manual intervention.</p></li>

    <li><p>Secured Postgres credentials via <strong>Jenkins credential binding</strong>, keeping secrets out of source control and enforcing least-privilege access across all deployment stages.</p></li>

    <li><p>Documented findings through <strong>RCA reports and operational runbooks</strong>.</p></li>
  </ul>

  <p><em>Tech: Next.js, Postgres, Docker Compose, Jenkins, Nginx, AWS EC2, Prisma, Certbot SSL</em></p>
  `,
      start_date: null,
      end_date: "2026-01-01",
      date_format_input_type: "Year",
      links: [
        {
          uuid: "two-tier-github",
          link: "https://github.com/RahulKoju/two-tier-web-app",
          label: "GitHub",
        },
        {
          uuid: "two-tier-live",
          link: "https://task.rahulkoju.com.np",
          label: "Live",
        },
      ],
    },
    {
      uuid: "729d5a41-feeb-4efb-8525-2ddfa36e0266",
      visible: true,
      title: "MeroCV",
      subtitle: "Docker · Monorepo CI/CD · Production Deployment",
      description: `
  <p>A production resume builder serving real users, running as a <strong>2-app Next.js monorepo</strong> — containerized with optimized Docker builds and automated deployment pipelines on AWS.</p>

  <ul>
    <li><p>Cut production Docker image size by <strong>~90%</strong> by authoring <strong>multi-stage Dockerfiles with Turborepo pruning</strong>, shipping only the standalone Next.js bundle in the final stage.</p></li>

    <li><p>Eliminated race-condition failures between 2 interdependent services using <strong>Docker Compose with healthcheck-gated startup ordering</strong>, isolated bridge networking, and environment-variable injection — stable, reproducible deploys across all environments.</p></li>

    <li><p>Reduced per-deploy asset pipeline time by <strong>~40%</strong> with <strong>Python and Bash automation scripts</strong> for image optimization and asset processing, removing manual steps from the release workflow.</p></li>

    <li><p>Maintained <strong>architecture documentation, deployment runbooks, and component SOPs</strong>, reducing onboarding time and establishing a reliable reference for the team.</p></li>
  </ul>
  `,
      start_date: "2025-03-01",
      end_date: null,
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "1d19ac1d-89c9-407e-ba85-37fb87234482",
          link: "https://merocv.com",
          label: "live",
        },
      ],
    },
    {
      uuid: "eb8fe430-9461-4c6b-842f-a2d7c9373df0",
      visible: true,
      title:
        "NLTTA (Nepali Language Translation and Transliteration Automation)",
      subtitle: "Deep Learning · NLP · Information Retrieval",
      description:
        "<p>A deep learning system that translates Romanized and Devanagari Nepali queries into English and retrieves relevant news articles — built with a team of 3.</p><ul><li><p>Designed an <strong>end-to-end NLP pipeline</strong> combining a <strong>fine-tuned mBART transformer</strong> for translation with the <strong>BM25 ranking algorithm</strong> for probabilistic document retrieval.</p></li><li><p>Fine-tuned <strong>mBART</strong> on a Nepali–English parallel corpus, achieving a <strong>BLEU score of 39.84</strong> and <strong>BERT score of 0.9613</strong> — comparable to larger commercial models.</p></li><li><p>Enabled users to search English news content using informal, chat-style Nepali inputs.</p></li></ul>",
      start_date: null,
      end_date: "2025-01-01",
      date_format_input_type: "Year",
      links: [],
    },
    {
      uuid: "e9819aae-5532-4f06-8a27-8eba59e4ff00",
      visible: true,
      title: "HTTP Server",
      subtitle: "Built from Scratch with Raw TCP Sockets",
      description:
        "<p>An HTTP server built from scratch using <strong>Node.js and raw TCP sockets</strong> — no frameworks, no abstractions, just the protocol.</p><ul><li><p>Implemented the full <strong>HTTP/1.1 request-response cycle</strong> manually: parsing headers, routing requests, and serving responses over raw TCP.</p></li><li><p>Added <strong>gzip compression</strong>, structured error handling, and asynchronous file serving.</p></li><li><p>The kind of project that changes how you think about every web server you touch after.</p></li></ul>",
      start_date: null,
      end_date: "2024-07-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "44711cca-3995-40b5-83e4-73f53333dac9",
          link: "https://github.com/RahulKoju/CodeCrafters-HTTP-Server",
          label: "GitHub",
        },
      ],
    },
    {
      uuid: "devops-infra-system",
      visible: false,
      title: "Production Deployment Infrastructure",
      subtitle: "Self-Hosted DevOps System on AWS",
      description: `
  <p>A production-grade <strong>self-hosted deployment system</strong> for Next.js applications on AWS, focused on automated releases and zero-downtime rollouts.</p>

  <ul>
    <li><p>Implemented <strong>atomic symlink switching</strong> for instant, zero-downtime deployments and one-click rollbacks.</p></li>

    <li><p>Containerized the application with <strong>multi-stage Docker builds</strong>, optimizing for minimal image size and isolated runtimes.</p></li>

    <li><p>Configured <strong>GitHub Actions</strong> for an automated build-test-deploy pipeline via SSH.</p></li>

    <li><p>Hardened production access with <strong>Nginx reverse proxy</strong> and systemd-managed container lifecycles.</p></li>
  </ul>

  <p><em>Tech: Next.js, Docker, GitHub Actions, Nginx, Bash, Systemd</em></p>
  `,
      start_date: null,
      end_date: null,
      date_format_input_type: "Year/Month",
      links: [],
    },
    {
      uuid: "3dc323e9-7a6b-4d10-8751-a3d7fd1e8c29",
      visible: false,
      title: "Notify Nepal",
      subtitle: "News Aggregation Platform",
      description:
        "<p>A news aggregation platform that pulls content from <strong>public RSS feeds</strong> across trusted Nepali and international sources, normalizing and displaying articles across politics, business, culture, and sports.</p><ul><li><p>Built a <strong>content aggregation engine</strong> that fetches, normalizes, and renders news from multiple RSS sources in a unified, responsive interface.</p></li><li><p>Optimized for <strong>performance, SEO, and accessibility</strong> — fast load times and strong search visibility out of the box.</p></li><li><p>Implemented proper <strong>source attribution</strong> and a content removal mechanism for publishers.</p></li></ul>",
      start_date: "2025-04-01",
      end_date: "2025-08-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "e7a2360e-af83-46a3-a7a4-2179b8efd2de",
          link: "https://notifynepal.com",
          label: "live",
        },
      ],
    },
    {
      uuid: "cebf00c3-3c46-43a3-bec6-cad54c5c8c32",
      visible: false,
      title: "Phoksundo",
      subtitle: "Tourism Platform · Nepal",
      description:
        "<p>A web platform promoting Phoksundo and surrounding regions in Nepal — a comprehensive travel guide covering <strong>attractions, accommodations, activities, and local culture</strong>.</p><ul><li><p>Built a <strong>structured content system</strong> for destinations, activities, and travel resources with an organized, visually engaging layout.</p></li><li><p>Integrated <strong>multimedia content</strong> (images, videos, maps) to help travelers plan trips effectively.</p></li><li><p>Optimized for <strong>performance and SEO</strong> to maximize reach among domestic and international tourists.</p></li></ul>",
      start_date: "2025-09-01",
      end_date: null,
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "a32649f9-f040-4f22-9397-58046b28021c",
          link: "https://phoksundo.com",
          label: "live",
        },
      ],
    },
    {
      uuid: "bccff299-3538-4e9c-9acb-8c733c10b584",
      visible: false,
      title: "E-Driving License Registration System",
      subtitle: "E-Governance · Team Lead",
      description:
        "<p>An e-governance platform designed to <strong>digitalize the driving license application process</strong> in Nepal — reducing queues by enabling online applications and appointment management.</p><ul><li><p><strong>Led a team of 4</strong>, coordinating frontend development and overall project design.</p></li><li><p>Designed a <strong>token-based appointment system</strong> for reserving slots and reducing wait times at government offices.</p></li><li><p>Built <strong>user registration, authentication, and profile management</strong> flows to demonstrate the full platform lifecycle.</p></li></ul>",
      start_date: null,
      end_date: "2025-04-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "500fd65a-9e8b-4dde-b4e1-0cd309d48a6d",
          link: "https://github.com/ppprabesh/E-DrivingLicenseRegistrationSystem",
          label: "GitHub",
        },
      ],
    },
    {
      uuid: "17303160-01d9-4c11-992f-665a3bb7d6be",
      visible: false,
      title: "E-Mitra",
      subtitle: "Full-Stack Restaurant Platform",
      description:
        "<p>A full-stack restaurant e-commerce platform with <strong>role-based access control</strong>, integrated payment gateways, and an analytics dashboard.</p><ul><li><p>Built an <strong>admin portal</strong> with analytics dashboard and order management system for business operations.</p></li><li><p>Integrated <strong>Khalti and eSewa payment gateways</strong> for a complete digital transaction flow.</p></li><li><p>Used <strong>Strapi as a headless CMS</strong> and <strong>Supabase</strong> for database management, keeping the architecture modular and maintainable.</p></li></ul>",
      start_date: "2024-11-01",
      end_date: "2025-04-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "dc666e52-50e8-4cfe-979f-0dbf4e54d3b6",
          link: "https://github.com/RahulKoju/E_Mitra",
          label: "GitHub",
        },
      ],
    },
    {
      uuid: "2ae67a13-f8bb-460d-bf85-d3ef03f586ef",
      visible: false,
      title: "Everest Canvas",
      subtitle: "E-Commerce · Canvas Prints",
      description:
        "<p>An eCommerce platform for selling <strong>high-quality canvas prints</strong> with support for diverse materials, shapes, sizes, and multi-panel options.</p><ul><li><p>Built a <strong>dynamic product catalog</strong> supporting multiple variants — standard, panoramic, and custom sizes.</p></li><li><p>Implemented <strong>live preview and customization features</strong> so customers can visualize their prints before purchasing.</p></li><li><p>Optimized for <strong>fast load times</strong> and responsive browsing across all devices.</p></li></ul>",
      start_date: "2025-04-01",
      end_date: "2025-08-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "3c4d5956-59b5-411e-9dab-f042fa8d10d4",
          link: "https://everestcanvas.com",
          label: "live",
        },
      ],
    },
    {
      uuid: "7cb4bcb0-4ce9-4fab-bc6f-f5e34a1305fd",
      visible: true,
      title: "OAuth & Payment API",
      subtitle: "Laravel · OAuth 2.0 · Payment Integration",
      description:
        "<p>A <strong>configuration-driven REST API</strong> integrating OAuth 2.0 authentication and multiple payment gateways for third-party login and digital transactions.</p><ul><li><p>Implemented <strong>OAuth 2.0</strong> via Laravel Socialite for secure third-party authentication.</p></li><li><p>Integrated <strong>eSewa and Khalti payment gateways</strong> with test APIs to simulate end-to-end transaction workflows.</p></li><li><p>Designed an <strong>API-first architecture</strong> for straightforward integration with web and mobile clients.</p></li></ul>",
      start_date: null,
      end_date: "2024-11-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "b537f659-3f4f-44d7-bd55-548734e811ac",
          link: "https://github.com/RahulKoju/Oauth_Payment_API",
          label: "GitHub",
        },
      ],
    },
    {
      uuid: "3acb2a79-ea4e-4821-b313-82f3a87fd610",
      visible: true,
      title: "Blog Application",
      subtitle: "MERN Stack · Full CMS",
      description:
        "<p>A full-featured content management system built with the <strong>MERN stack</strong> — JWT authentication, role-based access, and complete CRUD for posts and users.</p><ul><li><p>Implemented <strong>JWT-based auth</strong> with email verification and password recovery via Nodemailer.</p></li><li><p>Used <strong>JOI</strong> for request validation and <strong>Redux</strong> for global state management.</p></li><li><p>Designed a responsive UI with <strong>Tailwind CSS</strong> and <strong>Flowbite-React</strong>, deployed on Render with Firebase for media storage.</p></li></ul>",
      start_date: "2024-06-01",
      end_date: "2024-08-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "77d2470f-b475-44df-87e5-a169f7936ea6",
          link: "https://github.com/RahulKoju/mern-blog",
          label: "GitHub",
        },
        {
          uuid: "183f1fba-8e0e-49df-8848-92063d3cb05d",
          link: "https://mern-blog-xyxn.onrender.com/",
          label: "live",
        },
      ],
    },
    {
      uuid: "6f11fe81-c69b-45e0-8c3e-92715c2b1535",
      visible: false,
      title: "AI Chatbot",
      subtitle: "TypeScript · Groq · Open-Source LLMs",
      description:
        "<p>A conversational chatbot powered by <strong>open-source LLMs via Groq</strong>, built with a type-safe TypeScript backend and deployed as a public service.</p><ul><li><p>Integrated <strong>Groq's inference API</strong> for fast, low-latency responses from open-source models.</p></li><li><p>Built a <strong>type-safe backend</strong> with TypeScript for reliability and maintainability.</p></li></ul>",
      start_date: null,
      end_date: "2024-09-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "8ecffb8a-4531-4ef5-a5a0-bb12ffb2d60e",
          link: "https://github.com/RahulKoju/OpenAI-chat-bot",
          label: "GitHub",
        },
      ],
    },
    {
      uuid: "595dd451-309a-4f91-ac99-7a8a07abf4a8",
      visible: false,
      title: "Job Search App",
      subtitle: "Laravel · Eloquent · Blade",
      description:
        "<p>A job search and listing application built to practice <strong>core Laravel patterns</strong> — routing, controllers, policies, Eloquent ORM, and Blade templating.</p><ul><li><p>Implemented <strong>full CRUD</strong>, authentication, and unit testing for model relationships.</p></li><li><p>Used <strong>Eloquent ORM</strong> with factories and migrations for clean database management.</p></li><li><p>Built a responsive UI with <strong>Blade templates</strong>.</p></li></ul>",
      start_date: "2024-10-01",
      end_date: "2024-11-01",
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "5bc5990f-b623-4cc7-bfcc-98fef97d97e6",
          link: "https://github.com/RahulKoju/JobSearch_App",
          label: "GitHub",
        },
      ],
    },
    {
      uuid: "6d6a75bb-f93b-4191-8fa1-4144630859c2",
      visible: false,
      title: "URL Shortener",
      subtitle: "Node.js · Analytics",
      description:
        "<p>A URL shortening service with built-in analytics — shorten links and track <strong>clicks, referrers, and usage metrics</strong>.</p><ul><li><p>Implemented <strong>URL shortening and redirection</strong> with unique hash generation.</p></li><li><p>Built a simple <strong>analytics dashboard</strong> tracking clicks and referrer data.</p></li></ul>",
      start_date: null,
      end_date: null,
      date_format_input_type: "Year/Month",
      links: [
        {
          uuid: "1dad3657-f8e9-4ccc-bdf5-15a9a055ca08",
          link: "https://github.com/RahulKoju/UrlShortner-DiscrodBot",
          label: "GitHub",
        },
      ],
    },
  ],
  morelink: [
    {
      title: "GitHub",
      description: "My open-source projects and code repositories",
      link: "https://github.com/RahulKoju",
    },
    {
      title: "LinkedIn",
      description: "Professional profile and work experience",
      link: "https://www.linkedin.com/in/rahul-koju/",
    },
  ],
  education: [
    {
      date: "2022 - 2026",
      degree:
        "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
      institution: "Tribhuvan University, Kathmandu",
      college: "Bhaktapur Multiple Campus (Government College)",
      description:
        "Completed coursework covering algorithms, data structures, software engineering, databases, networking, and operating systems. Awaiting graduation.",
    },
    {
      date: "2019 - 2021",
      degree: "Higher Secondary Education (+2) in Science",
      institution: "HSEB, Nepal",
      college: "Khwopa Secondary School, Bhaktapur",
      description:
        "Completed higher secondary education in science with a focus on physics, chemistry, and mathematics.",
    },
  ],
};
