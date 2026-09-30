export const portfolioData = {
  personal: {
    fullName: "GANSE Kpèhoué Gille-Christ",
    shortName: "Gille-Christ",
    tagline: "Étudiant en troisième année de Licence de Sécurité Informatique & Développeur Full-Stack Junior",
    bioSummary: "Passionné par la défense des systèmes d'information, les réseaux sécurisés et le développement d'architectures web robustes. Je combine une rigueur académique en cybersécurité à l'IFRI avec une solide maîtrise pratique du code (Next.js, Python, Linux, Cryptographie).",
    location: "Abomey-Calavi / Cotonou, Bénin",
    phone: "+229 01 67 96 93 40",
    phoneRaw: "+2290167969340",
    email: "kpehoue@gmail.com",
    github: "https://github.com/elchristo229",
    githubUsername: "elchristo229",
    availability: "Ouvert aux opportunités de stage, de projet et d'emploi",
    educationLevel: "Licence 3 Sécurité Informatique — IFRI / UAC",
    photos: {
      primary: "./profile-suit.jpeg",
      academic: "./profile-board.jpeg",
      lifestyle: "./profile-tunic.jpeg"
    }
  },

  stats: [
    { label: "Moyenne ANSSI SecNum", value: "88.5%", detail: "4 modules validés", icon: "ShieldCheck" },
    { label: "Rapports de TP & Audits", value: "65+", detail: "Pages techniques rédigées", icon: "FileCode" },
    { label: "Projets & Hackathons", value: "4+", detail: "Dont Bitcoin Mastermind", icon: "Flame" },
    { label: "Expérience en Entreprise", value: "2", detail: "Stages ANPE & Quantum Tech", icon: "Building2" },
  ],

  certifications: [
    {
      id: "anssi-secnum",
      title: "SecNumacadémie — MOOC Cybersécurité",
      issuer: "ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information - France)",
      date: "27 Février 2026",
      official: true,
      grade: "88.5% de moyenne",
      badgeColor: "emerald",
      image: "./cert-anssi-secnum.jpg",
      description: "Validation officielle des 4 modules fondamentaux de la sécurité des systèmes d'information.",
      modules: [
        { name: "Panorama de la SSI", score: "90.0%" },
        { name: "Sécurité de l'authentification", score: "86.0%" },
        { name: "Sécurité sur Internet", score: "84.0%" },
        { name: "Sécurité du poste de travail et nomadisme", score: "94.0%" }
      ],
      pdf: "./cert-anssi-secnum.jpg"
    },
    {
      id: "cursa-cybersecurity",
      title: "Introduction à la Cybersécurité",
      issuer: "Sec Academy / Plateforme Cursa",
      date: "04 – 05 Octobre 2025",
      official: true,
      grade: "Certifié (ID: u7051280)",
      badgeColor: "cyan",
      image: "./cert-cursa-cybersecurity.png",
      description: "Formation intensive de 6h17 couvrant l'analyse des menaces, la sécurité périmétrique et les bonnes pratiques défensives.",
      pdf: "./cert-cursa-cybersecurity.png"
    },
    {
      id: "sololearn-sql",
      title: "Introduction to SQL",
      issuer: "Sololearn (Certificate CC-S3EOR7OR)",
      date: "16 Mai 2025",
      official: true,
      grade: "Réussite vérifiée",
      badgeColor: "blue",
      image: "./cert-sololearn-sql.png",
      description: "Maîtrise des requêtes relationnelles, jointures complexes, agrégation et modélisation de données SQL.",
      pdf: "./cert-sololearn-sql.png"
    }
  ],

  projects: [
    {
      id: "mediproof",
      title: "MediProof — Dossiers Médicaux Sécurisés",
      category: "security",
      categoryLabel: "Cybersécurité & Blockchain",
      featured: true,
      context: "Bitcoin Mastermind Hackathon 2026",
      summary: "Plateforme décentralisée assurant l'intégrité infalsifiable des dossiers médicaux grâce au hashing temps réel SHA-256 et à l'ancrage sur la blockchain Bitcoin (OP_RETURN).",
      stack: ["Next.js 15", "Prisma ORM", "PostgreSQL", "Bitcoin OP_RETURN", "bitcoinjs-lib", "JWT"],
      highlights: [
        "Horodatage et ancrage immuable sur la blockchain Bitcoin",
        "Génération de QR codes dynamiques pour vérification publique instantanée",
        "Dashboards avec contrôle d'accès granulaire par rôle (Admin, Médecin, Patient)",
        "Journalisation d'audit inviolable garantissant la traçabilité"
      ],
      docPreview: null,
      presentationFile: "./MediProof_Presentation.pptx",
      links: [
        { label: "Présentation PPTX", url: "./MediProof_Presentation.pptx", type: "download" },
        { label: "Code GitHub", url: "https://github.com/elchristo229", type: "external" }
      ]
    },
    {
      id: "ebios-rm",
      title: "Analyse des Risques EBIOS RM — Startup Microcrédit Mobile",
      category: "security",
      categoryLabel: "Gouvernance & Gestion des Risques",
      featured: true,
      context: "IFRI / UAC — Module Gestion des risques & incidents",
      summary: "Rapport complet de 16 pages réalisant les 5 ateliers EBIOS RM pour une Fintech mobile opérant sous réglementation BCEAO/UEMOA et loi APDP (Bénin).",
      stack: ["EBIOS RM (ANSSI)", "BCEAO Instruction n°008", "Loi APDP Bénin", "ISO 27005", "AWS Architecture"],
      highlights: [
        "Atelier 1 : Cadrage, valeurs métier, biens supports et cartographie des parties prenantes",
        "Atelier 2 : Évaluation des sources de risques (cybercriminels, initiés malveillants, concurrents)",
        "Atelier 3 : Objectifs visés et scénarios stratégiques",
        "Ateliers 4 & 5 : Scénarios opérationnels et traitement des risques avec mesures concrètes"
      ],
      docPreview: {
        prefix: "tp-ebios-rm",
        pages: 3,
        totalDocPages: 16
      },
      fileUrl: "./TP3_EBIOS_RM_Rapport_Complet.pdf",
      links: [
        { label: "Consulter le rapport", url: "./TP3_EBIOS_RM_Rapport_Complet.pdf", type: "preview" },
        { label: "Télécharger PDF", url: "./TP3_EBIOS_RM_Rapport_Complet.pdf", type: "download" }
      ]
    },
    {
      id: "saas-dao",
      title: "SaaS DAO — Automatisation des Appels d'Offres",
      category: "web",
      categoryLabel: "Full-Stack & Cloud",
      featured: true,
      context: "Quantum Technology — Stage académique",
      summary: "Application d'automatisation et de gestion des dossiers d'appels d'offres pour les entreprises soumissionnaires, avec module dédié de fiches techniques.",
      stack: ["Figma", "Django", "Supabase", "PostgreSQL", "AWS EC2", "Python"],
      highlights: [
        "Conception UX/UI complète des maquettes interactives sur Figma",
        "Développement du module de gestion de fiches techniques (upload, tags, versioning)",
        "Intégration de Supabase avec back-end Django",
        "Déploiement et sécurisation sur instance virtuelle Cloud AWS"
      ],
      docPreview: {
        prefix: "rapport-stage",
        pages: 3,
        totalDocPages: 12
      },
      fileUrl: "./Rapport_Stage_QuantumTechnology_GANSE.pdf",
      links: [
        { label: "Rapport de Stage", url: "./Rapport_Stage_QuantumTechnology_GANSE.pdf", type: "preview" }
      ]
    },
    {
      id: "stage-anpe",
      title: "Stage à la Direction Informatique — ANPE Bénin",
      category: "experience",
      categoryLabel: "Infrastructure & Réseaux d'Entreprise",
      featured: false,
      context: "Agence Nationale Pour l'Emploi (ANPE), Cotonou",
      summary: "Stage académique d'un mois au cœur du service informatique : maintenance du parc, diagnostic réseau, sécurisation des postes et support utilisateur.",
      stack: ["Administration Réseau", "Sécurité des Postes", "Active Directory", "Diagnostic LAN", "Assistance IT"],
      highlights: [
        "Encadré par Mme DEMAHOU Maria, Assistante Chef Service Informatique",
        "Gestion et maintenance préventive de l'infrastructure réseau locale",
        "Sensibilisation des collaborateurs aux bonnes pratiques d'hygiène informatique",
        "Optimisation de la disponibilité des postes de travail opérationnels"
      ],
      docPreview: null,
      fileUrl: "./Rapport_Stage_ANPE_GANSE (1).docx",
      links: [
        { label: "Télécharger Document", url: "./Rapport_Stage_ANPE_GANSE (1).docx", type: "download" }
      ]
    },
    {
      id: "vpn-lab",
      title: "Déploiement & Analyse VPN PPTP & L2TP",
      category: "network",
      categoryLabel: "Réseaux & Tunnels Sécurisés",
      featured: false,
      context: "IFRI / UAC — Encadrement Dr BIBI Honorat",
      summary: "Mise en œuvre d'une infrastructure VPN nomade sécurisée sous Cisco IOS et GNS3 reliant machines virtuelles clientes (Ubuntu / Kali Linux).",
      stack: ["Cisco IOS", "GNS3", "VPDN", "MS-CHAPv2", "MPPE", "AAA", "Kali Linux"],
      highlights: [
        "Configuration avancée VPDN, virtual-template et protocoles d'encapsulation",
        "Mise en place de l'authentification sécurisée et pool d'adresses dynamiques",
        "Analyse comparée des faiblesses de PPTP face aux garanties offertes par L2TP",
        "Vérification des sessions et analyse des tunnels via 'show vpdn'"
      ],
      docPreview: {
        prefix: "tp-vpn-pptp-l2tp",
        pages: 3,
        totalDocPages: 10
      },
      fileUrl: "./TP4_Securite_Reseaux_Gille_Jerry.pdf",
      links: [
        { label: "Rapport VPN PDF", url: "./TP4_Securite_Reseaux_Gille_Jerry.pdf", type: "preview" }
      ]
    },
    {
      id: "wireshark-lab",
      title: "Analyse du Trafic ICMP & ARP avec Wireshark",
      category: "network",
      categoryLabel: "Analyse Forensique & Protocoles",
      featured: false,
      context: "IFRI / UAC — Encadrement Dr BIBI Honorat",
      summary: "Rapport technique approfondi de 18 pages disséquant les trames Ethernet II, les requêtes ARP locales vs passerelle et l'interprétation des codes d'erreur ICMP.",
      stack: ["Wireshark", "ICMP", "ARP", "Analyse de Trames", "Inspection Réseau"],
      highlights: [
        "Capture et filtrage sélectif des flux ICMP Echo Request / Echo Reply",
        "Identification de la structure des en-têtes IP et champs TTL",
        "Décryptage des mécanismes de résolution d'adresses ARP et détection d'anomalies",
        "Étude de l'impact des pare-feux et des configurations de sécurité réseau"
      ],
      docPreview: {
        prefix: "tp-icmp-wireshark",
        pages: 3,
        totalDocPages: 18
      },
      fileUrl: "./TP_Securite_Reseaux.pdf",
      links: [
        { label: "Rapport Wireshark PDF", url: "./TP_Securite_Reseaux.pdf", type: "preview" }
      ]
    },
    {
      id: "dns-bind9",
      title: "Architecture & Administration DNS BIND9",
      category: "network",
      categoryLabel: "Services Réseau & Résolution",
      featured: false,
      context: "IFRI / UAC — Encadrement Mr FAGLA Natus",
      summary: "Mise en place d'une infrastructure DNS d'entreprise avec séparation physique du serveur DNS et du serveur Web, configuration des zones directes et inverses.",
      stack: ["BIND9", "named.conf", "Zones Directes (A)", "Zones Inverses (PTR)", "dig", "Linux"],
      highlights: [
        "Déclaration et sécurisation de named.conf.local",
        "Création méthodique des fichiers de zone avec enregistrements SOA, NS, A, CNAME",
        "Mise en œuvre du reverse DNS (fichiers in-addr.arpa et enregistrements PTR)",
        "Batterie de tests de validation avec 'dig' et 'dig -x'"
      ],
      docPreview: {
        prefix: "tp-dns-bind9",
        pages: 3,
        totalDocPages: 9
      },
      fileUrl: "./TP_DNS___GANSE_Gille-Christ.pdf",
      links: [
        { label: "Rapport DNS PDF", url: "./TP_DNS___GANSE_Gille-Christ.pdf", type: "preview" }
      ]
    },
    {
      id: "crypto-gnupg",
      title: "Cryptographie Appliquée avec GnuPG (GPG)",
      category: "security",
      categoryLabel: "Cryptographie & PKI",
      featured: false,
      context: "IFRI / UAC — Encadrement Mr Nelson SAHO",
      summary: "Mise en pratique du chiffrement asymétrique RSA, de l'infrastructure de clés publiques, des signatures électroniques et de la validation de signature.",
      stack: ["GnuPG (GPG)", "RSA 4096", "SHA-256", "PKI", "Signature Numérique", "Linux Bash"],
      highlights: [
        "Génération de paires de clés asymétriques et révocation",
        "Échange sécurisé de clés publiques sur réseau non sécurisé",
        "Chiffrement ciblé avec clé publique du destinataire",
        "Validation de l'intégrité et de l'authenticité par signature numérique"
      ],
      docPreview: null,
      fileUrl: null,
      links: [
        { label: "Détails dans le CV", url: "./CV_GANSE_Kpehoue_Gille-Christ.pdf", type: "preview" }
      ]
    }
  ],

  documents: [
    {
      id: "cv-security",
      title: "Curriculum Vitae — Sécurité Informatique",
      subtitle: "Parcours IFRI, Certifications ANSSI & Travaux Pratiques",
      type: "pdf",
      badge: "Recommandé Recruteur SOC",
      pages: 3,
      previewPrefix: "cv-securite",
      fileUrl: "./CV_GANSE_Kpehoue_Gille-Christ.pdf",
      description: "Le résumé complet de mon profil axé sur la protection des systèmes, la cryptographie, les réseaux et mes acquis académiques."
    },
    {
      id: "cv-dev",
      title: "Curriculum Vitae — Développeur Full-Stack",
      subtitle: "Projets Next.js, Django, Prisma, APIs & Hackathons",
      type: "pdf",
      badge: "Profil Dev / SaaS",
      pages: 1,
      previewPrefix: "cv-developpement",
      fileUrl: "./CV_Ganse_Kpehoue_Gille-Christ_Developpeur.pdf",
      description: "Mon parcours orienté développement applicatif, architecture de bases de données relationnelles et interfaces utilisateur modernes."
    },
    {
      id: "rapport-quantum",
      title: "Rapport de Stage — Quantum Technology",
      subtitle: "Stage académique SaaS DAO (Figma, Django, AWS)",
      type: "pdf",
      badge: "Stage Entreprise",
      pages: 3,
      previewPrefix: "rapport-stage",
      fileUrl: "./Rapport_Stage_QuantumTechnology_GANSE.pdf",
      description: "Rapport de stage de 12 pages détaillant la conception, le développement et le déploiement cloud d'une solution SaaS."
    },
    {
      id: "tp-ebios",
      title: "Rapport d'Analyse des Risques — EBIOS RM",
      subtitle: "Fintech Microcrédit Mobile sous réglementation BCEAO",
      type: "pdf",
      badge: "Audit EBIOS RM",
      pages: 3,
      previewPrefix: "tp-ebios-rm",
      fileUrl: "./TP3_EBIOS_RM_Rapport_Complet.pdf",
      description: "Étude méthodologique approfondie en 5 ateliers de la cartographie des risques et des mesures techniques défensives."
    },
    {
      id: "tp-vpn",
      title: "Rapport Technique — Protocoles VPN PPTP & L2TP",
      subtitle: "Supervision Dr BIBI Honorat — Tunnels et chiffrement",
      type: "pdf",
      badge: "Laboratoire Réseau",
      pages: 3,
      previewPrefix: "tp-vpn-pptp-l2tp",
      fileUrl: "./TP4_Securite_Reseaux_Gille_Jerry.pdf",
      description: "Mise en œuvre concrète d'une passerelle VPN Cisco avec authentification sécurisée et encapsulation de paquets."
    },
    {
      id: "tp-wireshark",
      title: "Rapport Technique — Forensique ICMP Wireshark",
      subtitle: "Analyse microscopique du trafic réseau",
      type: "pdf",
      badge: "Analyse Forensique",
      pages: 3,
      previewPrefix: "tp-icmp-wireshark",
      fileUrl: "./TP_Securite_Reseaux.pdf",
      description: "Examen détaillé de 18 pages des trames réseau et des protocoles de diagnostic avec capture Wireshark."
    },
    {
      id: "tp-dns",
      title: "Rapport Technique — Serveur DNS BIND9",
      subtitle: "Configuration des zones directes et inverses",
      type: "pdf",
      badge: "Services Linux",
      pages: 3,
      previewPrefix: "tp-dns-bind9",
      fileUrl: "./TP_DNS___GANSE_Gille-Christ.pdf",
      description: "Architecture de serveurs DNS de production avec validation par requêtes dig sur Linux Debian."
    },
    {
      id: "pres-mediproof",
      title: "Présentation de Projet — MediProof",
      subtitle: "Dossier de présentation Bitcoin Mastermind 2026",
      type: "pptx",
      badge: "Hackathon 2026",
      pages: null,
      previewPrefix: null,
      fileUrl: "./MediProof_Presentation.pptx",
      description: "Slide deck complet exposant la vision produit, l'architecture d'intégrité Bitcoin et le modèle opérationnel de MediProof."
    }
  ],

  skills: {
    cybersecurity: [
      { name: "Fondamentaux SSI (ANSSI)", level: 92, tag: "Certifié" },
      { name: "Cryptographie Asymétrique (GPG / RSA)", level: 88, tag: "Pratique" },
      { name: "Gestion des Risques (EBIOS RM / ISO 27005)", level: 85, tag: "Méthodologie" },
      { name: "Sécurité Authentification & JWT", level: 86, tag: "Web & API" },
      { name: "Sécurité Postes & Nomadisme", level: 94, tag: "Hardening" },
      { name: "Journalisation & Audit Immuable", level: 82, tag: "Compliance" }
    ],
    networks: [
      { name: "Protocoles TCP/IP & Modèle OSI", level: 90, tag: "Théorie & Lab" },
      { name: "Analyse Forensique (Wireshark / ICMP)", level: 88, tag: "Inspection" },
      { name: "Tunnels VPN (PPTP, L2TP, Cisco IOS)", level: 84, tag: "GNS3" },
      { name: "Administration DNS BIND9 (Zones A/PTR)", level: 86, tag: "Linux" },
      { name: "Administration Linux (Debian, Ubuntu, Kali)", level: 85, tag: "Système" }
    ],
    fullstack: [
      { name: "Next.js 15 & React", level: 85, tag: "Front-end Moderne" },
      { name: "JavaScript / TypeScript", level: 84, tag: "Langage" },
      { name: "Python (Scripts & Automation)", level: 82, tag: "Scripts" },
      { name: "Django & APIs REST", level: 80, tag: "Backend" },
      { name: "PostgreSQL, Prisma & Supabase", level: 84, tag: "Bases de Données" },
      { name: "Figma (Prototypage & Design UI/UX)", level: 80, tag: "Design" }
    ],
    devops: [
      { name: "Git & GitHub", level: 88, tag: "Version control" },
      { name: "AWS (EC2, notions RDS/S3)", level: 78, tag: "Cloud" },
      { name: "Bash Scripting & Automatisation", level: 80, tag: "CLI" },
      { name: "Génération PDF (Python/ReportLab)", level: 85, tag: "Outils" }
    ]
  },

  timeline: [
    {
      period: "3 Août – 4 Septembre 2026 (1 mois)",
      type: "experience",
      title: "Stagiaire à la Direction Informatique",
      organization: "Agence Nationale Pour l'Emploi (ANPE) — Cotonou, Bénin",
      mentor: "Mme DEMAHOU Maria (Assistante Chef Service Informatique)",
      details: [
        "Maintenance et supervision du parc informatique de la direction",
        "Diagnostic et résolution des incidents réseaux et postes utilisateurs",
        "Sensibilisation aux consignes d'hygiène et de sécurité numérique",
        "Découverte concrète du fonctionnement d'un service IT d'une institution publique"
      ]
    },
    {
      period: "6 – 18 Juillet 2026 (2 semaines)",
      type: "experience",
      title: "Stagiaire Développeur & IT — SaaS DAO",
      organization: "Quantum Technology — Cotonou, Bénin",
      mentor: "Mr Martin (Admin Réseaux) & M. Mermoz HOUNGA",
      details: [
        "Conception intégrale des maquettes interactives sur Figma",
        "Développement d'un gestionnaire autonome de fiches techniques (upload PDF, tags, versioning)",
        "Intégration de l'ORM Django avec la base de données Supabase",
        "Déploiement de l'application sur une machine virtuelle AWS EC2"
      ]
    },
    {
      period: "Février 2026",
      type: "certification",
      title: "Certification SecNumacadémie (ANSSI)",
      organization: "Agence Nationale de la Sécurité des Systèmes d'Information (France)",
      mentor: "Validation officielle des 4 modules avec 88.5% de moyenne",
      details: [
        "Panorama de la SSI (90%) · Sécurité de l'authentification (86%)",
        "Sécurité sur Internet (84%) · Sécurité du poste de travail et nomadisme (94%)"
      ]
    },
    {
      period: "2026 – 2027 · année en cours",
      type: "education",
      title: "Licence 3 en Sécurité Informatique",
      organization: "IFRI — Institut de Formation et de Recherche en Informatique, UAC Bénin",
      mentor: "Dr BIBI Honorat, Mr Nelson SAHO, Mr FAGLA Natus, M. Augustin ZOUMENOU",
      details: [
        "Enseignements : Sécurité des réseaux, Cryptographie, Systèmes d'exploitation, Administration Linux, Protocoles Internet",
        "Travaux pratiques : EBIOS RM (16 pages), VPN PPTP/L2TP, Wireshark ICMP/ARP (18 pages), BIND9 DNS"
      ]
    },
    {
      period: "2025 – 2026",
      type: "education",
      title: "Licence 2 en Sécurité Informatique",
      organization: "IFRI — Institut de Formation et de Recherche en Informatique, UAC Bénin",
      mentor: "Deuxième année du cursus en sécurité informatique",
      details: []
    },
    {
      period: "2024 – 2025",
      type: "education",
      title: "Licence 1 en Sécurité Informatique",
      organization: "IFRI — Université d'Abomey-Calavi (UAC)",
      mentor: "Fondations théoriques et algorithmiques",
      details: [
        "Bases des réseaux informatiques, architecture des ordinateurs et programmation"
      ]
    },
    {
      period: "2023 – 2024",
      type: "education",
      title: "Formation en Génie Informatique & Télécommunications",
      organization: "EPAC — Université d'Abomey-Calavi (UAC)",
      mentor: "Formation d'ingénierie préparatoire",
      details: [
        "Programmation, électronique numérique, mathématiques appliquées et architecture des systèmes"
      ]
    },
    {
      period: "2023",
      type: "education",
      title: "Baccalauréat Scientifique — Série C",
      organization: "CEG 1 Abomey-Calavi, Bénin",
      mentor: "Filière Mathématiques et Sciences Physiques",
      details: [
        "Obtention avec mention — solide bagage analytique et mathématique"
      ]
    }
  ]
};
