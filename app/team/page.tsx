'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, X, ExternalLink, Award, MapPin, Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/utils';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  linkedin: string;
  credentials?: string[];
  featured?: boolean;
}

const executiveLeadership: TeamMember[] = [
  {
    id: 'shaun',
    name: 'Shaun Jayachandran',
    title: 'Founder & Executive Director',
    photo: '/images/team/shaun jayachandran.jpg',
    bio: 'Shaun founded Hoops Creating Hope in 2012 with a simple theory: basketball could keep kids in school. Today, that theory is proven with 85% of our students completing high school—5.3x the national rate for their demographic. A 2x TEDx speaker and elite basketball coach, Shaun brings a legendary coaching lineage (John Wooden → Lefty Driesell → Morgan Wootten) to youth development in India. He combines 20+ years of coaching excellence with educational leadership expertise to create transformative programs.',
    linkedin: 'https://www.linkedin.com/in/shaunjayachandran',
    credentials: [
      'M.Ed. Educational Leadership',
      '20+ years elite basketball coaching',
      '2x TEDx Speaker on Leadership & Resilience',
      'Developed 80+ college athletes'
    ],
    featured: true
  },
  {
    id: 'ace',
    name: 'Durjoy "Ace" Bhattacharjya',
    title: 'Board Chair',
    photo: '/images/team/durjoy bhattacharjya.png',
    bio: 'Ace leads our Board with entrepreneurial vision and strategic expertise from building innovative healthcare and sports technology solutions. As Founder and CEO of medicalrecords.com, he brings deep understanding of scaling impact-driven organizations. His extensive background includes senior leadership at EXOS and Director roles at USTTA/US Open, combining sports industry expertise with governance excellence. Ace serves as a judge for both the Webby Awards and Harvard Business School Venture Competition, bringing world-class strategic oversight to our mission.',
    linkedin: 'https://www.linkedin.com/in/durjoy',
    credentials: [
      'Founder & CEO, medicalrecords.com',
      'Former Senior Executive, EXOS',
      'Judge, Webby Awards & HBS Venture Competition'
    ],
    featured: true
  }
];

const boardMembers: TeamMember[] = [
  {
    id: 'nicholas',
    name: 'Nicholas Rathod',
    title: 'Board Member',
    photo: '/images/team/Nick Rathod.jpg',
    bio: 'President of People of Culture Studios – Impact. Former Special Assistant to President Obama and Deputy Director for Intergovernmental Affairs in the White House. First person of South Asian descent to run a statewide campaign in U.S. history.',
    linkedin: 'https://www.linkedin.com/in/nick-rathod'
  },
  {
    id: 'ebony',
    name: 'Ebony Hoffman',
    title: 'Board Member',
    photo: '/images/team/Ebony Hoffman.avif',
    bio: 'Current LA Sparks Assistant Coach. Former WNBA player for Indiana Fever, Connecticut Sun, and LA Sparks. Former Assistant Coach for WNBA Seattle Storm. USC Athletic Hall of Fame inductee. International professional basketball career in WNBA and Europe.',
    linkedin: 'https://www.linkedin.com/in/ebony-hoffman-41314316'
  },
  {
    id: 'ajay',
    name: 'Ajay Mago',
    title: 'Board Member',
    photo: '/images/team/Ajay Mago.jpeg',
    bio: 'Managing Partner at Edwards Maxson Mago & Macaulay, LLP. Nationally recognized lawyer and boardroom advisor. Featured in Washington Post, India Business Law Journal, Law360, and Legal 500 U.S.',
    linkedin: 'https://www.linkedin.com/in/ajaymago/'
  },
  {
    id: 'vasu',
    name: 'Vasu Kulkarni',
    title: 'Board Member',
    photo: '/images/team/Vasu Kulkarni.jpeg',
    bio: 'Founder & CEO of Krossover, a sports data analytics company in NYC. "The Bangalore Blitz" from his basketball days at UPenn. Active in tech startup community and passionate about sports innovation.',
    linkedin: 'https://www.linkedin.com/in/vasudevkulkarni'
  },
  {
    id: 'ashleigh',
    name: 'Dr. Ashleigh Huffman',
    title: 'Board Member',
    photo: '/images/team/Ashleigh Huffman.png',
    bio: 'Global Director of Gender Equality at Athletes for Hope. PhD in Sociocultural Studies. Co-director of U.S. State Department\'s "Global Sports Mentoring Program," training 10,000+ global sports leaders from 75 countries.',
    linkedin: 'https://www.linkedin.com/in/ashleigh-huffman-phd'
  },
  {
    id: 'carie',
    name: 'Carie Small Richeal',
    title: 'Board Member',
    photo: '/images/team/Carie Small.jpeg',
    bio: 'Co-Founder and Editor of WSN247.com. Digital marketing professional and former Division I basketball player. Faculty member since 2012. Champion of digital tools and passionate advocate for gender equity in sports.',
    linkedin: 'https://www.linkedin.com/in/cariesmall'
  },
  {
    id: 'ani',
    name: 'Ani Sanyal',
    title: 'Board Member',
    photo: '/images/team/Ani Sanyal.jpg',
    bio: 'Entrepreneur and CEO/Co-founder of Kolkata Chai Co., a food and beverage brand introducing authentic masala chai to Western markets. NYU graduate (Economics & Finance) building a career at the intersection of culture, commerce, and creativity.',
    linkedin: 'https://www.linkedin.com/in/anisanyal2'
  },
  {
    id: 'prakash',
    name: 'Prakash Janakiraman',
    title: 'Board Member',
    photo: '/images/team/Prakash Janakiraman.jpeg',
    bio: 'Co-Founder and Chief Architect of Nextdoor, the world\'s largest social network for neighborhoods. Over 20 years building consumer applications used by hundreds of millions. Previously led engineering team for Google Maps.',
    linkedin: 'https://www.linkedin.com/in/pjanakiraman'
  },
  {
    id: 'raquel',
    name: 'Raquel Boudreau',
    title: 'Board Member',
    photo: '/images/team/Raquel Board Headshot.png',
    bio: 'Director of Operations, Social at Overtime, leading creative and operational strategy for one of basketball\'s most influential digital platforms. Former Senior Manager of Creative Project Management for PUMA Hoops.',
    linkedin: 'https://www.linkedin.com/in/raquelboudreau'
  },
  {
    id: 'meg',
    name: 'Meg O\'Donnell',
    title: 'Board Member',
    photo: '/images/team/Meg O\'Donnell.avif',
    bio: 'Passionate advocate for education equity and youth empowerment. Committed to expanding opportunities for underserved communities through sports-based development programs.',
    linkedin: 'https://www.linkedin.com/in/meghan-o-donnell-ms106'
  },
  {
    id: 'miten',
    name: 'Miten Shah',
    title: 'Board Member',
    photo: '/images/team/Miten Shah.jpg',
    bio: 'Strategic advisor bringing business expertise to nonprofit governance. Committed to driving sustainable growth and impact for youth development programs.',
    linkedin: 'https://www.linkedin.com/in/miten-shah-83504643'
  },
  {
    id: 'priya',
    name: 'Priya Giri Desai',
    title: 'Board Member',
    photo: '/images/team/Priya Giri Desai.jpeg',
    bio: 'Emmy-nominated producer and documentary filmmaker. Duke graduate with two decades of media experience including PBS, LIFE magazine, and award-winning documentary "Lovesick" about HIV/AIDS in India. Founding board member of The India Center Foundation.',
    linkedin: 'https://www.linkedin.com/in/priyagdesai/'
  }
];

const varsityHoopsCaptains: TeamMember[] = [
  {
    id: 'jorel',
    name: 'Jorel Joseph',
    title: 'Captain',
    photo: '/images/team/Jorel Joseph.avif',
    bio: 'Director of Business Development at Keolis North America. Captain of Wagner College D1 football team. Volunteered with Crossover Academy India, creating certification programs for coaches. 40 Under 40 honoree in Mass Transit industry.',
    linkedin: 'https://www.linkedin.com/in/jorel-joseph-92a14413'
  },
  {
    id: 'edward',
    name: 'Edward Pastorino',
    title: 'Captain',
    photo: '/images/team/Edward Pastorino.jpg',
    bio: 'Senior Manager of Enterprise SaaS Sales at Capital One Software. University of South Carolina graduate (B.S. in Investments and Risk Management). Proven leader in business development and strategic sales.',
    linkedin: 'https://www.linkedin.com/in/edwardpastorino/'
  }
];

const varsityHoopsMembers: TeamMember[] = [
  {
    id: 'parus',
    name: 'Parus Nischal',
    title: 'Board Member',
    photo: '/images/team/Parus Nischal.jpg',
    bio: 'Founder and CEO of Nischal Sports Group. Football player scout and agent representing athletes globally. Passionate about building sustainable grassroots sports infrastructure.',
    linkedin: 'https://www.linkedin.com/in/parus-nischal-896111113/'
  },
  {
    id: 'hannah',
    name: 'Hannah O\'Flynn',
    title: 'Board Member',
    photo: '/images/team/Hannah O\'Flynn.jpeg',
    bio: 'Content Producer and On-Camera Host at ESPN. Former Division I athlete at Dartmouth College. Former NBA and WNBA producer with 130k+ social media following. Passionate advocate for women\'s sports.',
    linkedin: 'https://www.linkedin.com/in/hannah-o-flynn-39138b62/'
  },
  {
    id: 'megc',
    name: 'Meg Christiansen',
    title: 'Board Member',
    photo: '/images/team/Meg Christiansen.jpeg',
    bio: 'Program Manager at Staffmark Group. Background in hospitality management and client engagement. Committed to operational excellence and community development through sports.',
    linkedin: 'https://www.linkedin.com/in/meg-christiansen-19a970223/'
  },
  {
    id: 'bailey',
    name: 'Bailey Holloway',
    title: 'Board Member',
    photo: '/images/team/Bailey Holloway.jpeg',
    bio: 'Program Manager at FundPlay Foundation. University of Alabama at Birmingham graduate. Dedicated to creating opportunities for youth through sports and education programs.',
    linkedin: 'https://www.linkedin.com/in/bailey-holloway-51873b132'
  },
  {
    id: 'jonah',
    name: 'Jonah Travis',
    title: 'Board Member',
    photo: '/images/team/Jonah Travis.jpeg',
    bio: 'Senior Media Associate at Taboola. Harvard graduate and recruited student athlete. Integral part of four Ivy League Championships and two NCAA Tournament wins. Volunteered with Crossover in India for two years.',
    linkedin: 'https://www.linkedin.com/in/jonah-travis-drop-me-a-line-07jtravis24-at-gmail'
  }
];

function MemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-dark-200 to-dark-300 border border-orange-primary/30 rounded-3xl p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-orange-primary transition-colors"
        >
          <X size={28} />
        </button>

        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-primary shadow-glow">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-4xl md:text-5xl font-display gradient-text mb-3">
            {member.name}
          </h3>
          <p className="text-orange-primary font-bold text-lg mb-6">
            {member.title}
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 text-left">
            {member.bio}
          </p>

          {member.credentials && (
            <div className="border-t border-orange-primary/20 pt-6 mb-6">
              <div className="space-y-3">
                {member.credentials.map((credential, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-400">
                    <Award className="w-5 h-5 text-orange-primary flex-shrink-0" />
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-primary hover:bg-orange-light text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TeamMemberCard({ member, index, onClick }: { member: TeamMember; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      className="group text-center cursor-pointer"
    >
      <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto mb-5 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent p-[3px] transition-all duration-400 group-hover:scale-105 group-hover:shadow-glow">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-400 group-hover:scale-110"
          />
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-primary transition-colors mb-2">
        {member.name}
      </h3>
      <p className="text-orange-primary font-semibold text-sm mb-3">
        {member.title}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto line-clamp-3">
        {member.bio}
      </p>
    </motion.div>
  );
}

function FeaturedMemberCard({ member, index, onClick }: { member: TeamMember; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={onClick}
      className="group glass border border-orange-primary/20 rounded-3xl p-8 md:p-12 cursor-pointer hover:border-orange-primary transition-all duration-400 hover:-translate-y-2 hover:shadow-glow"
    >
      <div className="relative w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden border-4 border-orange-primary shadow-glow">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-4xl md:text-5xl font-display gradient-text text-center mb-3">
        {member.name}
      </h3>
      <p className="text-orange-primary font-bold text-center text-lg mb-6">
        {member.title}
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        {member.bio.split('.').slice(0, 2).join('.')}.
      </p>

      {member.credentials && (
        <div className="border-t border-orange-primary/20 pt-6 space-y-3">
          {member.credentials.slice(0, 4).map((credential, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
              <Award className="w-4 h-4 text-orange-primary flex-shrink-0" />
              <span>{credential}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 text-sm pt-2">
            <Linkedin className="w-4 h-4 text-orange-primary" />
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-primary hover:text-orange-light font-bold transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Connect on LinkedIn →
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/90 via-orange-light/80 to-purple-accent/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block glass-dark px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-8"
          >
            Leadership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display text-white mb-6"
          >
            BOARD OF<br />DIRECTORS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium"
          >
            Guided by leaders who believe every child deserves a shot at changing their future
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-dark-100 to-dark-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display gradient-text mb-8"
          >
            Leading with Purpose
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed mb-6"
          >
            Our Board of Directors brings together{' '}
            <span className="text-white font-bold">
              diverse expertise from education, technology, business, and social impact
            </span>{' '}
            to guide Hoops Creating Hope&apos;s mission.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Together, they ensure that every decision we make serves our{' '}
            <span className="text-orange-primary font-bold">2,500+ students</span> across Chennai, Bangalore, and Hyderabad.
          </motion.p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 px-6 bg-gradient-to-b from-dark-200 to-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-400">
              Driving our mission from vision to impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {executiveLeadership.map((member, index) => (
              <FeaturedMemberCard
                key={member.id}
                member={member}
                index={index}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display gradient-text mb-4">
              Board Members
            </h2>
            <p className="text-xl text-gray-400">
              World-class expertise driving our mission forward
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {boardMembers.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Varsity Hoops Board */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-primary/5 to-purple-accent/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display text-white mb-4">
              Varsity Hoops Board
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Young professionals committed to passing leadership, equality, and hope to the next generation
            </p>
          </motion.div>

          {/* Captains */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-orange-primary text-center mb-10"
            >
              Team Captains
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {varsityHoopsCaptains.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>

          {/* Members */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {varsityHoopsMembers.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display gradient-text">
              Collective Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '20+', label: 'Board Members' },
              { number: '12+', label: 'Years of Service' },
              { number: '5', label: 'Industry Sectors' },
              { number: '3', label: 'Continents Represented' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass border border-orange-primary/15 rounded-2xl p-6 text-center hover:border-orange-primary transition-colors"
              >
                <div className="text-5xl md:text-6xl font-display gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-semibold text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-primary to-orange-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display text-black mb-6"
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-black/80 font-semibold mb-10"
          >
            Support the leadership that&apos;s changing 2,500+ lives
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-dark-200 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Fund a Student Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </main>
  );
}
