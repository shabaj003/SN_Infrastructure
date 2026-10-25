import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './mobile-layering.css';

function SvgIcon({ kind = 'square', size = 20, strokeWidth = 1.8, ...props }) {
  const paths = {
    arrow: <><path d="M5 19 19 5M8 5h11v11"/></>, chevron: <path d="m9 18 6-6-6-6"/>,
    phone: <path d="M5 3h4l2 5-3 2c2 4 4 6 8 8l2-3 5 2v4c-10 1-19-8-18-18Z"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>, close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    building: <><path d="M4 21V5l8-3 8 3v16M8 8h1M8 12h1M8 16h1M15 8h1M15 12h1M15 16h1M3 21h18"/></>,
    warehouse: <><path d="m3 10 9-6 9 6v10H3Z M3 10h18M8 21v-6h8v6"/></>, road: <><path d="M8 21 10 3h4l2 18M12 3v3M12 10v3M12 17v3M4 21h16"/></>,
    house: <><path d="m3 11 9-8 9 8v10H3Z M9 21v-6h6v6"/></>, hammer: <><path d="m14 5 5 5M3 21l11-11M11 4l3-2 5 5-2 3-3-3-3 3-3-3Z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></>, pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
    message: <path d="M20 11.5a8 8 0 0 1-9 8l-6 2 2-5a8 8 0 1 1 13-5Z"/>, square: <rect x="4" y="4" width="16" height="16" rx="2"/>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>{paths[kind] || paths.square}</svg>;
}
const ArrowUpRight = p => <SvgIcon kind="arrow" {...p}/>; const ChevronRight = p => <SvgIcon kind="chevron" {...p}/>;
const Phone = p => <SvgIcon kind="phone" {...p}/>; const X = p => <SvgIcon kind="close" {...p}/>; const Menu = p => <SvgIcon kind="menu" {...p}/>;
const Building2 = p => <SvgIcon kind="building" {...p}/>; const Warehouse = p => <SvgIcon kind="warehouse" {...p}/>; const Route = p => <SvgIcon kind="road" {...p}/>;
const House = p => <SvgIcon kind="house" {...p}/>; const Hammer = p => <SvgIcon kind="hammer" {...p}/>; const Mail = p => <SvgIcon kind="mail" {...p}/>;
const MapPin = p => <SvgIcon kind="pin" {...p}/>; const MessageCircle = p => <SvgIcon kind="message" {...p}/>;

const phone = '9130006302';
const wa = '919130006302';
const services = [
  ['Industrial Warehouses', 'Purpose-built spaces engineered for capacity, safety and operations.', Warehouse],
  ['PEB Shed Construction', 'Fast, efficient pre-engineered buildings made to perform.', Building2],
  ['Road Construction', 'Durable infrastructure that keeps your business moving.', Route],
  ['Bungalow Construction', 'Thoughtful residential spaces built around your life.', House],
  ['Fabrication Works', 'Precision steel fabrication with robust finishing.', Hammer],
];

function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); const data = new FormData(e.currentTarget); const subject = encodeURIComponent(`Project enquiry from ${data.get('name')}`); const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nProject type: ${data.get('service')}\n\nRequirement:\n${data.get('message')}`); window.location.href = `mailto:sninfrastructuredevelopers@gmail.com?subject=${subject}&body=${body}`; setSent(true); };
  return <main className="site-shell">
    <nav className="nav"><a className="brand" href="#home" aria-label="SN Infrastructure home"><span className="brand-mark">SN<i/></span><span>INFRASTRUCTURE <b>& DEVELOPERS</b></span></a><div className={open ? 'navlinks is-open' : 'navlinks'}><a href="#services" onClick={()=>setOpen(false)}>Services</a><a href="#about" onClick={()=>setOpen(false)}>Why SN</a><a href="#contact" onClick={()=>setOpen(false)}>Contact</a><a className="nav-call" href={`tel:+91${phone}`}><Phone size={15}/> +91 {phone}</a></div><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></nav>
    <section className="hero" id="home"><div className="hero-grid"/><div className="hero-copy"><p className="eyebrow hero-in hero-in-1"><span/> Building across Talegaon Dabhade &amp; Pune</p><h1 className="hero-in hero-in-2">Construction built<br/><em>to last in Pune</em>.</h1><p className="hero-text hero-in hero-in-3">SN Infrastructure &amp; Developers delivers industrial warehouses, PEB sheds, road construction, bungalows and fabrication works in Talegaon Dabhade and the Pune region.</p><div className="hero-actions hero-in hero-in-4"><a className="button" href="#contact">Start a project <ArrowUpRight size={18}/></a><a className="text-link" href="#services">Explore our expertise <ChevronRight size={17}/></a></div></div><div className="hero-visual"><div className="floating-chip">EST. FOR EXCELLENCE <span>✦</span></div><div className="frame"><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85" alt="Modern industrial construction"/><div className="frame-shade"/></div><div className="spec-card"><span>01 / 05</span><b>Engineered<br/>to endure.</b><div className="line"/></div></div><div className="scroll-note">SCROLL TO DISCOVER <span/></div></section>
    <section className="intro" id="about"><div><p className="eyebrow dark"><span/> OUR PROMISE</p><h2>Strength in every<br/>detail. <em>Value in every</em><br/>decision.</h2></div><div className="intro-copy"><p>We are builders with a practical point of view. Our work pairs exacting execution with transparent collaboration — so your vision becomes a structure built to serve for generations.</p><a className="under-link" href="#contact">More about our approach <ArrowUpRight size={16}/></a></div><div className="stats"><div><b>05<sup>+</sup></b><span>Core construction<br/>specialities</span></div><div><b>100<sup>%</sup></b><span>Commitment to safety<br/>& quality</span></div><div><b>01</b><span>Trusted team from<br/>plan to handover</span></div></div></section>
    <section className="services" id="services"><div className="section-head"><div><p className="eyebrow"><span/> CONSTRUCTION SERVICES IN PUNE REGION</p><h2>Capability with<br/><em>character.</em></h2></div><p>From Talegaon Dabhade to the Pune region, discuss your warehouse, PEB shed, road, bungalow or fabrication project with our team.</p></div><div className="service-list">{services.map(([title,text,Icon],i)=><article className="service" key={title}><span className="num">0{i+1}</span><Icon className="service-icon" strokeWidth={1.4}/><div><h3>{title}</h3><p>{text}</p></div><a href="#contact" aria-label={`Enquire about ${title}`}><ArrowUpRight/></a></article>)}</div></section>
    <section className="project-banner"><div className="banner-image"/><div className="banner-content"><p className="eyebrow"><span/> LET'S BUILD TOGETHER</p><h2>Your next landmark<br/>starts <em>here.</em></h2><a className="button" href="#contact">Discuss your project <ArrowUpRight size={18}/></a></div><div className="banner-stamp">SN<br/><small>BUILT WITH<br/>PURPOSE</small></div></section>
    <section className="contact" id="contact"><div className="contact-info"><p className="eyebrow dark"><span/> GET IN TOUCH</p><h2>Bring us the<br/><em>blueprint.</em></h2><p className="contact-lead">Tell us what you’re planning. We’ll bring the right people, ideas and capability to make it real.</p><div className="contact-method"><Phone/><div><span>CALL US</span><a href="tel:+919130006302">+91 91300 06302</a><a href="tel:+919359740637">+91 93597 40637</a></div></div><div className="contact-method"><Mail/><div><span>EMAIL</span><a href="mailto:sninfrastructuredevelopers@gmail.com">sninfrastructuredevelopers@gmail.com</a></div></div><div className="contact-method"><MapPin/><div><span>VISIT</span><p>Plot No. 76, Indrapuri Colony, Talegaon Dabhade 410506.</p></div></div></div><form className="form" onSubmit={handleSubmit}><div className="form-title">Project enquiry <span>✦</span></div><label>Your name<input required name="name" placeholder="Enter your name"/></label><label>Phone number<input required name="phone" type="tel" placeholder="Your best contact number"/></label><label>I'm interested in<select name="service"><option>Industrial Warehouse</option><option>PEB Shed Construction</option><option>Road Construction</option><option>Bungalow Construction</option><option>Fabrication Works</option><option>Other</option></select></label><label>Tell us about your project<textarea required name="message" placeholder="Location, scope, timeline..." rows="3"/></label><button className="button form-button" type="submit">Send enquiry <ArrowUpRight size={18}/></button>{sent&&<p className="sent">Your email client is opening with your enquiry.</p>}</form></section>
    <footer><div className="footer-brand"><span className="brand-mark">SN<i/></span><p>Building strength.<br/>Creating value.</p></div><p>© {new Date().getFullYear()} SN Infrastructure & Developers.</p><div className="footer-actions"><a href={`https://wa.me/${wa}?text=Hello%20SN%20Infrastructure%2C%20I%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a><a href={`tel:+91${phone}`}>Call now <ArrowUpRight size={15}/></a></div></footer><a className="wa-float" href={`https://wa.me/${wa}?text=Hello%20SN%20Infrastructure%2C%20I%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/></a>
  </main>
}
createRoot(document.getElementById('root')).render(<App/>);
