/* ==========================================================================
   YOUR CONTENT LIVES HERE  —  this is the only file you need to edit.
   Add a certificate, course, project or design by copying one of the
   existing { ... }, blocks, pasting it below, and changing the text.
   Keep the commas and quotes. Save, commit, and the site updates itself.
   ========================================================================== */

window.SITE = {

  /* ---------- Basic details ---------- */
  profile: {
    name: "Teresia Kemunto Omae",
    shortName: "Teresia",
    initials: "TK",
    title: "Electronic & Computer Engineer",
    roles: ["Technical Support", "Network Operations", "SOC Analysis", "Cloud & Network Security", "Graphic Design"],
    location: "Nairobi, Kenya",
    email: "teresiakemunto8@gmail.com",
    phone: "+254 796 173 506",
    linkedin: "https://www.linkedin.com/in/teresia-kemunto",
    github: "https://github.com/omae26",
    credly: "https://www.credly.com/users/teresia-omae",    // e.g. "https://www.credly.com/users/your-name"  (leave "" to hide)
    behance: "",             // optional, e.g. "https://www.behance.net/your-name"
    cv: "assets/Teresia_Kemunto_Omae_CV.pdf",
    photo: "assets/profile.jpg",   // drop a photo at this path; initials show until then
    openToWork: true,
    // Optional: paste a free Formspree URL (https://formspree.io) to make the form send
    // straight to your inbox. Leave "" and the form opens the visitor's email app instead.
    formEndpoint: ""
  },

  /* ---------- Hero + About text ---------- */
  intro:
    "I keep networks alive and systems secure, and I make things look good while doing it. " +
    "Electronic & Computer Engineering graduate with hands-on experience in live network monitoring, " +
    "IT support, database operations and industrial systems, now growing into cloud and network security.",

  about: [
    "I'm an Electronic and Computer Engineering graduate from JKUAT with hands-on experience in first-level IT support, network monitoring, hardware and software troubleshooting, database support and technical operations.",
    "At Poa! Internet I supported a Network Operations Centre, watching live IP networks across 50+ distribution points, troubleshooting connectivity incidents and escalating faults to protect service-level targets. Before that I supported PHP-based system and database work, data migration, performance testing, backups and recovery planning.",
    "Alongside engineering, I work part time as a graphic designer volunteer. I like clear visuals and tidy documentation as much as clean configs, and I bring a customer-focused, proactive approach to every incident I handle."
  ],

  /* ---------- Headline numbers (from your CV) ---------- */
  stats: [
    { value: 50, suffix: "+", label: "Distribution points monitored" },
    { value: 30, suffix: "+", label: "Incidents resolved" },
    { value: 25, suffix: "%", label: "Faster query response" },
    { value: 3,  suffix: "",  label: "Industry attachments" }
  ],

  /* ---------- Work experience (newest first) ---------- */
  experience: [
    {
      role: "NOC Technician Intern",
      org: "Poa! Internet Ltd.",
      place: "Nairobi, Kenya",
      period: "Jun 2025 – Aug 2025",
      points: [
        "Provided first-level support by monitoring live IP networks across 50+ distribution points, identifying faults and escalating issues to maintain service-level targets.",
        "Diagnosed and resolved connectivity issues involving IP addressing and LAN/WAN environments during site visits, restoring service for 30+ incidents.",
        "Supported data centre visits to troubleshoot core network devices and complete equipment updates, contributing to a 15% reduction in repeat incident tickets."
      ]
    },
    {
      role: "Backend Developer Attaché",
      org: "Learnsoft Beliotech Solutions Ltd.",
      place: "Nairobi, Kenya",
      period: "May 2024 – Aug 2024",
      points: [
        "Supported system and database configuration using PHP during data migration projects, with zero data-loss incidents.",
        "Assisted with performance testing; indexing and caching improvements increased query response times by up to 25%.",
        "Performed routine backups and recovery planning, achieving 100% recovery-readiness during testing."
      ]
    },
    {
      role: "Electrical Engineer Attaché",
      org: "Kenya Seed Company Ltd.",
      place: "Kitale, Kenya",
      period: "May 2023 – Aug 2023",
      points: [
        "Diagnosed and resolved hardware and electrical faults on motors and control systems, reducing downtime by an estimated 20%.",
        "Installed and serviced control switches for 20+ units while keeping accurate equipment records and following safety requirements.",
        "Planned preventive maintenance schedules to improve reliability and minimise unplanned disruption."
      ]
    }
  ],

  /* ---------- Education (add more entries the same way) ---------- */
  education: [
    {
      degree: "BSc Electronic and Computer Engineering",
      school: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      place: "Juja, Kenya",
      period: "2021 – 2026",
      notes: []   // optional: ["Final-year project: ...", "Relevant units: ..."]
    }
  ],

  /* ---------- Expertise cards ---------- */
  expertise: [
    {
      icon: "network",
      title: "Networking & NOC",
      text: "Live monitoring, incident triage and escalation across distributed IP networks. Network device configurations.",
      tags: ["IP addressing", "DNS", "DHCP", "LAN/WAN", "TCP/IP", "VPN & IPSec", "Routers & switches configs", "Network monitoring"]
    },
    {
      icon: "shield",
      title: "Cybersecurity & Data Protection",
      text: "Security awareness and SOC fundamentals, currently deepening cloud and network security.",
      tags: ["SOC analysis", "Wazuh SIEM", "MITRE ATT&CK", "Log analysis", "Digital forensics (intro)", "Cyber Best Practises", "Backups & recovery", "Cloud & Network Security"]
    },
    {
      icon: "server",
      title: "Systems Administration",
      text: "Setting up, imaging and maintaining Windows and Linux environments.",
      tags: ["Windows Admin", "Linux", "Active Directory", "OS imaging & deployment"]
    },
    {
      icon: "code",
      title: "Programming",
      text: "Database configuration, Front-end development, migrations.",
      tags: ["PHP", "Python ", "HTML", "CSS", "JavaScript", "Data migration", "Indexing & caching", "Performance testing"]
    },
    {
      icon: "bolt",
      title: "Industrial & Electrical Systems",
      text: "Fault diagnosis and preventive maintenance on motors and control systems.",
      tags: ["Motors", "Generators", "Industrial control", "Preventive maintenance"]
    },
    {
      icon: "palette",
      title: "Graphic Design",
      text: "Brand visuals, posters and social graphics with an engineer's eye for structure.",
      tags: ["PhotoShop", "Canva", "Branding", "Posters & flyers", "Social media graphics."]
    }
  ],

  /* ---------- "Currently learning" strip (shown above the projects) ----------
     "series" must match the "series" value on the projects that belong to it.
     The lab count is calculated automatically as you add more labs.                  */
  learning: {
    label: "Currently learning",
    title: "Cloud & Network Security",
    provider: "Cybershujaa",
    series: "cybershujaa",
    text: "A hands-on programme where every topic comes with a lab and a written report. My completed labs are listed below, newest first.",
    focus: ["Network fundamentals (OSI & TCP/IP)", "Packet & traffic analysis", "Routing & switching", "VPNs & IPsec"]
  },

  /* ---------- Projects & case files ----------
     category: "networking" | "security" | "development" | "systems" | "design"
     Add links: [{ label: "Source", url: "https://github.com/..." }]  (optional)       */
  projects: [

    /* ===== SOC masterclass (Oct 2026) ===== */
    {
      title: "CyberHer Africa SOC Masterclass",
      category: "soc",
      featured: true,
      status: "Masterclass · Oct 2026",
      problem: "Detect, investigate and document attacks the way a SOC analyst does.",
      text: "Completed a 4-week, scenario-based Security Operations masterclass on the CTFROOM RangeTime platform, run with CyberHer, the Internet Society Kenya, Swift Limited and CyberYetu. Solved 76 of 91 challenges across 6 scenarios mapped to 13 SOC skills, scoring 1,344 of 1,484 points and ranking 52nd of 332 participants.",
      highlights: [
        "Investigated Linux logs (16 of 17 challenges) and Windows systems (all 9 administration challenges, plus service investigation).",
        "Collected forensic artefacts from compromised systems (11 of 11), analysed the file system, and built event timelines.",
        "Mapped attacker behaviour to the MITRE ATT&CK framework (7 of 7), and investigated account manipulation and authentication events.",
        "Monitored and triaged alerts in Wazuh, an open-source SIEM and XDR platform (6 of 7)."
      ],
      tags: ["SOC", "Wazuh", "MITRE ATT&CK", "Log analysis", "Digital forensics", "Incident investigation"],
      links: [{ label: "Verify certificate", url: "https://app.ctfroom.com/certverify" }]
    },

    /* ===== Cybershujaa · Cloud & Network Security labs (newest first) ===== */
    {
      title: "Site-to-Site IPsec VPN",
      category: "security",
      series: "cybershujaa",
      featured: true,
      status: "Lab · Week 5",
      problem: "Protect traffic between two remote networks across an untrusted network.",
      text: "Configured and verified an encrypted IPsec VPN tunnel between two Cisco routers (R1 and R3) through a pass-through router (R2), working entirely from the command line in Cisco Packet Tracer.",
      highlights: [
        "Activated the security licence package and defined the \"interesting traffic\" with an extended ACL covering the two LANs.",
        "Built IKE Phase 1 (ISAKMP: AES-256, pre-shared key, Diffie-Hellman group 5) and Phase 2 (ESP with AES and SHA-HMAC transform set, crypto map).",
        "Verified with show crypto ipsec sa: counters at zero before traffic, rising after pings between the LANs, and unchanged for traffic outside the VPN."
      ],
      tags: ["IPsec", "IKE / ISAKMP", "ACLs", "AES-256", "Cisco IOS CLI", "Packet Tracer"],
      links: []
    },
    {
      title: "Network Traffic Analysis (Hack The Box Academy)",
      category: "security",
      series: "cybershujaa",
      status: "Module · Week 2",
      problem: "Learn to read raw network traffic and spot what does not belong.",
      text: "Completed the Introduction to Network Traffic Analysis module: capturing, filtering and investigating packets with Wireshark and tcpdump, from protocol fundamentals through to a guided investigation.",
      highlights: [
        "Worked through OSI and TCP/IP layers, TCP vs UDP, the three-way handshake, and common protocols (FTP, SMB, HTTP and HTTPS/TLS).",
        "Used tcpdump and TShark capture and display filters, and read and wrote .pcap files; used Wireshark's Statistics and Analyze tools and followed TCP streams.",
        "Analysed a packet capture end to end to find suspicious activity, and worked through decrypting an RDP session."
      ],
      tags: ["Wireshark", "tcpdump", "TShark", "TCP/IP", "Traffic analysis", "Hack The Box"],
      links: [{ label: "Module completion", url: "https://academy.hackthebox.com/achievement/2896493/81" }]
    },
    {
      title: "Switch & Router Network Build",
      category: "networking",
      series: "cybershujaa",
      status: "Lab · Week 2",
      problem: "Connect two separate networks and prove end-to-end connectivity.",
      text: "Cabled and configured a small routed network (two PCs, a switch and a router) in Cisco Packet Tracer, then verified it with show commands.",
      highlights: [
        "Assigned static IPs and gateways, and explained why the first pings failed: the router acting as default gateway was not yet configured.",
        "Configured the router interfaces and the switch hostname, VLAN 1 management interface and default gateway.",
        "Confirmed end-to-end connectivity (PC to PC and switch to PC) and read the routing table and interface status with show ip route and show ip interface brief."
      ],
      tags: ["Cisco IOS", "Routing", "VLAN 1", "Static IP", "Packet Tracer"],
      links: []
    },
    {
      title: "Wireshark ICMP Capture & Analysis",
      category: "networking",
      series: "cybershujaa",
      status: "Lab · Week 1",
      problem: "See how local and remote traffic differ at the packet level.",
      text: "Captured and analysed ICMP traffic in Wireshark on a live Wi-Fi interface, pinging the default gateway and external websites, and tied what I saw back to the network layers.",
      highlights: [
        "Applied an ICMP display filter and matched the Ethernet II source and destination MAC addresses to my PC and to the router.",
        "Explained how ARP resolves an IP address to a MAC address on the local network.",
        "Explained why local hosts show their real MAC addresses while remote traffic does not: it sits on a different network."
      ],
      tags: ["Wireshark", "ICMP", "ARP", "Ethernet II", "ipconfig"],
      links: []
    },
    {
      title: "TCP/IP & OSI Models in Action",
      category: "networking",
      series: "cybershujaa",
      status: "Lab · Week 1",
      problem: "Watch a web request travel through every layer of the model.",
      text: "Built a web client and server in Cisco Packet Tracer, then used Simulation mode to follow an HTTP request packet by packet and inspect each layer.",
      highlights: [
        "Configured IPv4 addressing, the HTTP service and a DNS record, and tested the link with ping.",
        "Inspected PDUs at each layer: the HTTP host (Layer 7), TCP ports (Layer 4), IP addresses (Layer 3) and MAC addresses (Layer 2).",
        "Identified the ARP, TCP and HTTP events in the exchange, including how the TCP connection is closed."
      ],
      tags: ["OSI model", "TCP/IP", "HTTP", "DNS", "ARP", "Packet Tracer"],
      links: []
    },

    /* ===== Work experience case files ===== */
    {
      title: "Live IP Network Monitoring",
      category: "networking",
      status: "Internship",
      problem: "Keep 50+ distribution points online and within service-level targets.",
      text: "Monitored live IP networks at a NOC, triaged faults, escalated incidents and joined site and data-centre visits, restoring service for 30+ incidents and helping cut repeat tickets by 15%.",
      tags: ["NOC", "LAN/WAN", "IP addressing", "Incident response"],
      links: []
    },
    {
      title: "PHP Data Migration & Query Tuning",
      category: "development",
      status: "Attachment",
      problem: "Move platform data safely and make queries faster.",
      text: "Supported PHP-based system and database configuration during migrations with zero data loss, then improved query response by up to 25% through indexing and caching.",
      tags: ["PHP", "Databases", "Indexing", "Caching"],
      links: []
    },
    {
      title: "Backup & Recovery Planning",
      category: "security",
      status: "Attachment",
      problem: "Make sure data can always be restored when something breaks.",
      text: "Ran routine backups and tested recovery procedures to reach 100% recovery-readiness, strengthening operational continuity.",
      tags: ["Backups", "Disaster recovery", "Data protection"],
      links: []
    },
    {
      title: "Motor & Control System Maintenance",
      category: "systems",
      status: "Attachment",
      problem: "Reduce unplanned equipment downtime.",
      text: "Diagnosed hardware and electrical faults, installed and serviced control switches for 20+ units, and planned preventive maintenance, cutting downtime by an estimated 20%.",
      tags: ["Motors", "Control systems", "Maintenance planning"],
      links: []
    }
    /* ,{ title: "Your next project", category: "networking", status: "Active",
         problem: "One line on the problem.", text: "What you built and the result.",
         tags: ["Tag 1", "Tag 2"], links: [{ label: "Source", url: "https://github.com/you/repo" }] } */
  ],

  /* ---------- Graphic design gallery ----------
     1. Save the image in  assets/designs/  (e.g. poster-1.jpg)
     2. Add a line below. Leave the list empty to show a friendly placeholder.        */
  designs: [
    // { title: "Event poster", type: "Poster", image: "assets/designs/poster-1.jpg" },
     { title: "Event poster", type: "Poster", image: "assets/designs/poster-1.png" },
     { title: "Business flyer", type: "Poster", image: "assets/designs/poster-2.jpeg" },
     { title: "Church poster", type: "Poster", image: "assets/designs/poster-3.jpeg" },
     
  ],

  /* ---------- Certifications & short courses ----------
     type: "certification" | "course"      status: "Completed" | "Ongoing"
     link (optional): Credly / Coursera / issuer verification URL (best option).
     file (optional): a PDF in assets/certs/, e.g. "assets/certs/google-it.pdf".
     image (optional): a picture in assets/certs/, shown as a preview.         */
  certificates: [
    { title: "Google IT Support Professional Certificate", issuer: "Coursera", type: "certification", status: "Ongoing", year: "", link: "", file: "", image: "" },
    { title: "Network Basics", issuer: "Cisco Networking Academy", type: "certification", status: "Completed", year: "", link: "", file: "", image: "" },
    { title: "IT Customer Support Basics", issuer: "Cisco Networking Academy", type: "certification", status: "Completed", year: "", link: "", file: "", image: "" },
    { title: "Soft Skills Training", issuer: "McKinsey Forward Program", type: "course", status: "Completed", year: "", link: "", file: "", image: "" },
    { title: "CyberHer Africa: SOC Masterclass", issuer: "CTFROOM RangeTime · with Internet Society Kenya, Swift Limited & CyberYetu", type: "course", status: "Completed", year: "Oct 2026",
      link: "https://app.ctfroom.com/certverify", file: "", image: "assets/certs/cyberher-soc.jpg",
      learned: ["Security Operations (SOC) skills, verified by the issuer (ID CTFR-EVT-E22E28EE1E)", "Linux and Windows log analysis, forensic collection, timelines", "MITRE ATT&CK mapping and Wazuh alert triage", "Qualified for 18 CPE points"] },
    { title: "Cloud & Network Security", issuer: "Cybershujaa", type: "course", status: "Ongoing", year: "", link: "", file: "", image: "",
      learned: ["OSI & TCP/IP, packet analysis with Wireshark and tcpdump", "Cisco routing, switching and site-to-site IPsec VPNs", "Hands-on labs with written reports every week"] }
  ],

  /* ---------- Toolbox ---------- */
  tools: [
    { group: "Networking", items: ["IP addressing", "DNS", "DHCP", "LAN/WAN", "VLAN", "VPN/IPSec", "Wireshark", "tcpdump", "Cisco IOS CLI", "Packet Tracer"] },
    { group: "Systems", items: ["Windows Admin", "Linux", "Active Directory", "OS imaging", "Patching & updates"] },
    { group: "Programming", items: ["PHP", "Python ", "HTML/CSS/JS", "SQL", "Data migration"] },
    { group: "Security", items: ["SOC analysis", "Wazuh (SIEM)", "MITRE ATT&CK", "Log analysis", "Network traffic analysis", "IPsec & ACLs", "Backups & recovery", "Cybersecurity awareness", "Cloud security (learning)"] },
    { group: "Graphic Design", items: ["PhotoShop", "Canva", "CapCut", "DaVinci Resolve", "Branding", "Video Editing"] },
    { group: "Industrial", items: ["Motors", "Generators", "Industrial control systems"] }
  ]
};
