import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image URLs from Dropbox (converted to raw format)
export const images = {
  hero: 'https://www.dropbox.com/scl/fi/hedg7j23aw3zrbz4ur39i/Crossover-Shoeless-HyderabadJPG.JPG?rlkey=lp7z43jvkztdagcdkgmy2ua0v&st=ggn4gy84&raw=1',
  twoGirls: 'https://www.dropbox.com/scl/fi/w197c9ecnea5q5wxg0t66/1457-PORTRAITS-Crossover-Bangalore-Chapter-2024-April-_04A6670.jpg?rlkey=ety6gbyl27596l9jkk3i6n9av&st=axtewm0w&raw=1',
  coachHighFive: 'https://www.dropbox.com/scl/fi/inagd8fh1wz0ed8cvoe6e/1069-Crossover-_-Bangalore-Chapter-_-2024-April-_-_04A3892.jpg?rlkey=3pehvcl02b6iw7z6dwzshygyv&st=fkcx8c9g&raw=1',
  portrait: 'https://www.dropbox.com/scl/fi/w8j3a2pghr2yymz1mlen4/1512-PORTRAITS-Crossover-Bangalore-Chapter-2024-April-_04A7695.jpg?rlkey=1ljeaeot0nwy89fjxhufcfsw1&st=st2peigl&raw=1',
  outdoorCourt: 'https://www.dropbox.com/scl/fi/gegs4g2spczbi1rih0tkf/1039-Crossover-_-Bangalore-Chapter-_-2024-April-_-_04A6064.jpg?rlkey=z0zbd4if462xclf4y0arjkaji&st=0tgo2gbx&raw=1',
  teamGathering: 'https://www.dropbox.com/scl/fi/tx164ep8hbj2vq06oryof/1076-Crossover-_-Bangalore-Chapter-_-2024-April-_-_04A0536.jpg?rlkey=84th0wcl57cxp8ho2dtar5n91&st=g1ux89jt&raw=1',
  colorfulBuilding: 'https://www.dropbox.com/scl/fi/j09n62o0w73zjxkz30oj2/1013-Crossover-_-Bangalore-Chapter-_-2024-April-_-_04A4030.jpg?rlkey=jhvbb1d9lrrtwkbyk8iobwbv7&st=99ahhj23&raw=1',
  programActivity: 'https://www.dropbox.com/scl/fi/o47kldd70kxsotyx7jh1x/1027-Crossover-_-Bangalore-Chapter-_-2024-April-_-_04A0306.jpg?rlkey=v7rmzvs4odc8gs4nwijueamk6&st=nzi319kv&raw=1',
  scholars: 'https://www.dropbox.com/scl/fi/55xt6nhx0qf98dazlmx2v/1108-Crossover-_-Bangalore-Chapter-_-2024-April-_-_04A4012.jpg?rlkey=wxif4lyne6i6vvy4x0guqewma&st=eoz5vir6&raw=1',
  repriya: 'https://www.dropbox.com/scl/fi/zdadnzlceay1iq5555zqw/Repriya-kid.png?rlkey=2dcf27uwluezofferx4yq8ndn&st=8p9fcwfh&raw=1',
}

// Video URLs
export const videos = {
  intro: 'https://www.dropbox.com/scl/fi/ccz40ad6p330skc1d37lo/Hoops-Creating-Hope-Intro.MP4?rlkey=pf5q6xc5s4ih0rqd0pzvnllg8&st=xvvzavp4&raw=1',
}

// Site metadata
export const siteConfig = {
  name: 'Hoops Creating Hope',
  description: 'Empowering 2,500+ underserved youth in India through basketball, education, and mentorship. Join us in transforming lives from courts to careers.',
  url: 'https://hoopscreatinghope.org',
  donateUrl: 'https://givebutter.com/2025HoopsCreatingHope',
  socialLinks: {
    instagram: 'https://www.instagram.com/hoopscreatinghope/',
    facebook: 'https://www.facebook.com/CrossoverBasketball.India/',
    linkedin: 'https://www.linkedin.com/company/hoops-creating-hope/',
  },
  email: 'info@hoopscreatinghope.org',
}

// Navigation links
export const navLinks = {
  takeAction: [
    { label: 'Give Hope Today', href: siteConfig.donateUrl, external: true },
    { label: 'Mentor & Coach & Create', href: '/volunteer' },
    { label: 'Start a Fundraiser', href: '/get-involved#fundraise' },
    { label: 'Partner With Us', href: '/partnerships' },
  ],
  aboutUs: [
    { label: 'Our Story', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Impact Report', href: '/impact' },
    { label: 'In The News', href: '/news' },
    { label: 'Contact Us', href: `mailto:${siteConfig.email}` },
  ],
  whyBasketball: [
    { label: 'How We Work', href: '/programs' },
    { label: 'Our Impact', href: '/impact' },
    { label: 'Student Stories', href: '/stories' },
    { label: 'Get Involved', href: '/get-involved' },
  ],
}

// Stats data
export const stats = [
  { number: '2,500+', label: 'Children Impacted', description: 'Lives changed across Chennai, Bangalore, and Hyderabad since 2012' },
  { number: '85%', label: 'High School Retention', description: 'Our students complete high school at 5.3x the rate of their demographic' },
  { number: '60%', label: 'Girls in Leadership', description: 'Empowering girls through sports in communities where opportunities are scarce' },
  { number: '13+', label: 'Years of Impact', description: 'Proven track record of transforming lives through basketball' },
]

// Programs data
export const programs = [
  {
    title: 'Crossover Courts to Careers',
    description: 'Year-round after-school program combining academics and attendance with basketball, mentorship, and life skills development.',
    image: images.programActivity,
  },
  {
    title: 'Crossover Scholars Program',
    description: 'Intensive 2-week summer academy with leadership development, college prep, basketball coaching, and local coaches clinics.',
    image: images.scholars,
  },
]

// Values data
export const values = [
  { title: 'Leadership', description: 'Every student is a leader in training. We develop captains on the court and change-makers in their communities.' },
  { title: 'Gender Equality', description: "Basketball doesn't see gender—only talent and heart. Our courts are spaces where girls and boys compete as equals." },
  { title: 'Character', description: 'How you handle wins matters. How you handle losses matters more. We build students who show up and lift up.' },
  { title: 'Teamwork', description: 'Basketball is five players moving as one. These lessons transfer directly from the court to life.' },
  { title: 'Communication', description: 'Call for the ball. Speak up when you see something. We teach students to find their voice and use it.' },
]

// Format number with animation-friendly format
export function formatNumber(num: string | number): string {
  return num.toString()
}

// Scroll to element
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
