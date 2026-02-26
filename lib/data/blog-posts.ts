import { images } from '@/lib/utils'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  date: string
  category: 'Impact' | 'Programs' | 'Community' | 'Events' | 'Press'
  image: string
  featured?: boolean
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: '2025-annual-impact-report',
    title: '2025 Impact Report: 2,500 Students and Counting',
    excerpt: 'Our most transformative year yet. From an 85% high school completion rate to expanding into new communities, here is what your support made possible in 2025.',
    content: `This year, Hoops Creating Hope reached a milestone we once thought was decades away: 2,500 active students across Chennai, Bangalore, and Hyderabad. When I started Crossover in 2010 with 45 kids on a single court in Chennai, I never imagined we would be writing this report. But here we are, and the numbers tell a story that is far bigger than basketball.

Our 85% high school completion rate held steady for the fifth consecutive year. To put that in perspective, the national average for students in similar socioeconomic demographics sits at roughly 16%. That is not a typo. Our students are completing high school at 5.3 times the rate of their peers. And it is not because we found exceptional kids. It is because we built an exceptional system around ordinary kids who just needed someone to believe in them.

This year we also launched our first college readiness cohort in Bangalore. Thirty-two students from our senior program began SAT prep, college application workshops, and career mentoring sessions with professionals from across India and the United States. Fourteen of those students have already received conditional acceptance letters from universities. For most of them, they are the first in their families to even consider higher education.

Our girls program continues to be the heartbeat of everything we do. Sixty percent of our students are girls, and this year we saw a record number of female team captains across all three cities. Repriya, one of our earliest scholars, returned as a full-time coach in Chennai this year. Watching her run drills with the same intensity and compassion that her coaches showed her six years ago is proof that this model works. The cycle is real.

None of this happens without you. Every donation, every volunteer hour, every shared post on social media creates ripples that reach courts and classrooms across India. We are not done. We are just getting started.`,
    author: 'Shaun Jayachandran',
    authorRole: 'Founder & Executive Director',
    date: '2025-12-15',
    category: 'Impact',
    image: images.teamGathering,
    featured: true,
    readTime: '6 min read',
  },
  {
    slug: 'hyderabad-chapter-expansion',
    title: 'Hyderabad Chapter Expands to Three New Neighborhoods',
    excerpt: 'After two years of building our foundation in Hyderabad, we are opening courts in Kukatpally, Begumpet, and Secunderabad, bringing our program to 400 more students.',
    content: `When we first set foot in Hyderabad in 2020, it was the middle of a pandemic. We had no courts, no local coaches, and no students. What we had was a proven model and the stubborn belief that it would work here too. Five years later, Hyderabad has become our fastest-growing chapter.

This month, we officially opened programs in three new neighborhoods: Kukatpally, Begumpet, and Secunderabad. Each location was chosen based on months of community mapping, school partnerships, and conversations with local families. We do not just show up with basketballs and good intentions. We embed ourselves in the community first. We learn the bus routes kids take, the hours parents work, the specific barriers that keep students from staying in school.

In Kukatpally, we partnered with the municipal government to resurface an abandoned playground into a regulation half-court. The transformation was stunning. A space that had been used as an informal garbage dump is now a place where 120 kids practice three times a week. The first day we opened, a line of students stretched around the block. Some of them had never held a basketball before.

Begumpet presented a different challenge. The neighborhood is more urban, more crowded, and the schools are under intense pressure to produce exam results. We worked with three school principals to integrate our program into their after-school schedule, framing basketball not as a distraction from academics but as a complement to them. Within the first month, teachers reported improved attendance on practice days.

Our Hyderabad team is now 12 coaches strong, and we expect to serve 400 students across these new sites by the end of the quarter. The demand is real. The model works. And Hyderabad is proving that what started in Chennai can scale across India.`,
    author: 'Kavitha Reddy',
    authorRole: 'Hyderabad Chapter Director',
    date: '2025-11-02',
    category: 'Programs',
    image: images.outdoorCourt,
    readTime: '5 min read',
  },
  {
    slug: 'repriya-university-graduate',
    title: 'From Crossover Courts to University Stage: Repriya\'s Journey',
    excerpt: 'Repriya was one of our first students in Chennai. This spring she graduated from university and returned as a full-time coach. Her story is everything we work for.',
    content: `I still remember the first day Repriya showed up to practice in 2013. She was twelve, shy, and had never played a team sport in her life. Her mother had heard about the program from a neighbor and sent Repriya mostly because it meant free after-school supervision while she worked a second shift at the garment factory.

Repriya did not take to basketball immediately. She was uncoordinated, frustrated, and embarrassed. But she kept showing up. Every single day. Within six months, she was one of the most reliable players on the court. Not the most talented. The most reliable. She understood something that took other students years to learn: showing up is the hardest part, and everything else follows.

By her second year, Repriya was tutoring younger students during our study sessions. By her third year, she was team captain. Her grades, which had been middling, climbed steadily as her confidence grew. Her mother told us that Repriya had started talking about college, something no one in their family had ever done.

Repriya graduated from university this past May with a degree in physical education. She turned down a job at a private school in Chennai to come back to Crossover as a full-time coach. When I asked her why, she said something I will never forget: "This court gave me my life. I want to give it to someone else." She now coaches 85 students in our Chennai South program, and watching her run practice is like watching the mission come alive.

This is what the cycle of impact looks like. A scared twelve-year-old becomes a university graduate who becomes a coach who creates more university graduates. It is not a theory anymore. It is Repriya. It is real.`,
    author: 'Shaun Jayachandran',
    authorRole: 'Founder & Executive Director',
    date: '2025-09-18',
    category: 'Community',
    image: images.repriya,
    readTime: '5 min read',
  },
  {
    slug: 'volunteer-spotlight-coach-sarah',
    title: 'Volunteer Spotlight: Coach Sarah\'s Summer in Bangalore',
    excerpt: 'Sarah Chen left her coaching job at a Division I program in the US to spend two months in Bangalore. What she found changed her perspective on basketball forever.',
    content: `When I first applied to volunteer with Hoops Creating Hope, I thought I was going to teach basketball. I have coached for fourteen years, including seven at the Division I level in the United States. I know pick-and-roll sets. I know defensive rotations. I know how to break down film. What I did not know was how little any of that would matter.

My first day at the Bangalore chapter, I walked into a practice session expecting to see kids running layup lines. Instead, I saw Coach Arjun leading a circle discussion about a student who had been struggling with attendance. The whole team was problem-solving together. A fifteen-year-old suggested that two teammates walk with the struggling student to school each morning so he would not skip. They implemented it that week. His attendance has not dropped since.

The basketball here is real. These kids can play. But the game is a vehicle, not a destination. Every drill has a life lesson embedded in it. A three-on-two fast break becomes a lesson in communication. A missed free throw becomes a lesson in resilience. A blown defensive assignment becomes a conversation about accountability. I have never seen basketball used this deliberately.

I spent eight weeks running clinics, coaching games, and learning far more than I taught. The highlight was our end-of-summer tournament where teams from all three Bangalore neighborhoods competed. The intensity was incredible. But what struck me most was the sportsmanship. Students from opposing teams hugged after the final whistle. The losing team stayed to cheer during the championship game. This is not normal in competitive sports anywhere in the world.

I am already planning my return trip for next summer. If you are a coach or athlete considering volunteering with HCH, stop considering and just do it. This program will change your understanding of what basketball can be.`,
    author: 'Sarah Chen',
    authorRole: 'Volunteer Coach, USA',
    date: '2025-08-05',
    category: 'Community',
    image: images.coachHighFive,
    readTime: '5 min read',
  },
  {
    slug: 'crossover-cup-2025-recap',
    title: 'Crossover Cup 2025: Three Cities, One Championship',
    excerpt: 'Our biggest inter-city tournament brought together 48 teams from Chennai, Bangalore, and Hyderabad for three days of basketball, community, and celebration.',
    content: `The third annual Crossover Cup wrapped up last weekend, and it was our most ambitious tournament yet. Forty-eight teams. Three cities. Three days. One championship bracket that had the entire Bangalore indoor facility shaking with noise by the final buzzer.

This year we introduced a new format. Instead of separating by age group alone, we created mixed-city teams for the first two days. A point guard from Chennai played alongside a center from Hyderabad. A Bangalore shooting guard set screens for a Chennai forward she had never met before. The idea was to break down the chapter rivalries and build connections across cities. It worked beyond our expectations.

The skill level this year was noticeably higher. Our coaching staff has been running standardized development programs across all three chapters, and the results showed. Ball handling was crisper. Defensive rotations were tighter. And the three-point shooting, especially from the girls division, was remarkable. Priya from our Bangalore South program hit seven threes in the semifinal, a tournament record.

But the moments that mattered most happened off the court. During the opening ceremony, six of our senior scholars shared their stories in front of 500 students, coaches, and families. Utkarsh, who graduated from our program and came back as a coach, spoke about the day he almost dropped out of school and how his teammates literally showed up at his house to walk him to class. There was not a dry eye in the gym.

The championship game between Bangalore North and Chennai Central went to overtime. Chennai won by two points on a driving layup at the buzzer. But the image that stays with me is what happened after: both teams sitting together at center court, sharing water bottles and phone numbers, already talking about next year. This is what we build. Not just basketball players. A community.`,
    author: 'Arjun Mehta',
    authorRole: 'Programs Director',
    date: '2025-07-20',
    category: 'Events',
    image: images.programActivity,
    readTime: '5 min read',
  },
  {
    slug: 'nike-partnership-announcement',
    title: 'Hoops Creating Hope Partners with Nike Community Impact',
    excerpt: 'A new three-year partnership with Nike will provide equipment, coaching resources, and facility upgrades across all three of our chapters in India.',
    content: `We are thrilled to announce a transformative three-year partnership with Nike Community Impact that will significantly expand our capacity to serve students across Chennai, Bangalore, and Hyderabad. This partnership represents the largest corporate commitment in Hoops Creating Hope history.

Under the agreement, Nike will provide annual equipment grants including basketballs, shoes, and training gear for all active students in our program. For many of our kids, this will be the first time they own a proper pair of basketball shoes. That might sound like a small thing, but when you have watched students practice barefoot on concrete courts in 40-degree heat, you understand what a pair of shoes means. It means dignity. It means being taken seriously. It means being part of something real.

Beyond equipment, Nike will fund facility upgrades at six of our existing courts. This includes proper surfacing, lighting for evening practices, and covered seating for families who come to watch. Our Kukatpally court in Hyderabad, which we resurfaced just last year, will receive full lighting that allows us to run evening sessions for students who attend afternoon school shifts.

The partnership also includes coaching development. Three of our senior coaches will participate in Nike coaching certification programs, and Nike will send two coaching consultants to work with our staff for one month each year. This investment in our coaches is perhaps the most valuable part of the deal. Our coaches are the backbone of everything we do, and giving them world-class development makes the entire program stronger.

We want to be transparent: this partnership comes with no strings attached regarding branding or curriculum changes. Nike approached us because they believed in our model, and the agreement preserves our complete independence in how we run our programs. We are grateful for partners who understand that the best way to help is to invest in what already works and then get out of the way.`,
    author: 'Shaun Jayachandran',
    authorRole: 'Founder & Executive Director',
    date: '2025-06-10',
    category: 'Press',
    image: images.scholars,
    readTime: '5 min read',
  },
  {
    slug: 'tedx-talk-basketball-education-india',
    title: 'TEDx Chennai: Why Basketball Is India\'s Most Powerful Education Tool',
    excerpt: 'Shaun Jayachandran took the TEDx Chennai stage to share 15 years of data proving that basketball keeps kids in school at 5.3x the national rate.',
    content: `Last month I stood on the red circle at TEDx Chennai and told a story I have been living for fifteen years. The talk was titled "The Court is the Classroom" and it made a simple argument: basketball is the most effective education intervention tool available in India today, and we have the data to prove it.

I opened with a question that silenced the room. "What if I told you that the best way to keep a child in school is not a better textbook, not a better teacher, not even a better school. What if the best way to keep a child in school is a basketball?" The audience was skeptical. Good. Skepticism is where the best conversations start.

I walked through fifteen years of data. Our 85% high school completion rate versus the 16% national average for similar demographics. Our attendance tracking that shows students in our program miss 60% fewer school days than their peers. Our longitudinal study following our first cohort of graduates, 70% of whom are now employed or in higher education. I showed the methodology. I showed the controls. I showed the peer-reviewed analysis. This is not anecdotal. This is rigorous.

The core of the talk focused on why basketball specifically works in India. It is a non-traditional sport here, which means girls start on equal footing with boys. Nobody has a decade of experience. Everyone is a beginner. That creates a rare space of genuine equality that does not exist in cricket, football, or most other organized activities available to underserved youth. When you combine that equality with daily structure, team accountability, and adult mentorship, you create an environment where education becomes possible.

The response was overwhelming. We received over 200 partnership inquiries in the week following the talk, and three school districts in Tamil Nadu have reached out about integrating our model into their after-school programs. The talk will be published on the TEDx YouTube channel next month, and we will share it as soon as it goes live. The conversation is just beginning.`,
    author: 'Shaun Jayachandran',
    authorRole: 'Founder & Executive Director',
    date: '2025-04-22',
    category: 'Press',
    image: images.portrait,
    readTime: '5 min read',
  },
  {
    slug: 'year-end-review-2024',
    title: 'Looking Back, Looking Forward: Our 2024 Year in Review',
    excerpt: 'From new courts in Hyderabad to record-breaking graduation rates, 2024 was a year of growth, challenges, and renewed commitment to our mission.',
    content: `As we close out 2024, I want to take a moment to reflect on a year that tested us, taught us, and ultimately made us stronger. This is not a polished annual report. This is an honest look at where we are, where we struggled, and where we are headed.

The highlights are real. We crossed 2,000 active students for the first time. Our Hyderabad chapter, which launched during the pandemic, grew from 180 to 450 students. We held our second annual Crossover Cup tournament with participation from all three cities. And our high school completion rate remained at 85%, consistent with our five-year average. These are numbers we are proud of, and they represent real kids whose lives are different because this program exists.

But 2024 also brought challenges we need to be honest about. Funding was tighter than expected. Two major grants we had budgeted for came in at reduced amounts, which forced us to delay our planned expansion into two new Bangalore neighborhoods. We also lost three experienced coaches to higher-paying positions at private schools, a reminder that we need to invest more in coach compensation and development. We cannot build a world-class program on volunteer-level wages.

Our girls program continued to be our strongest pillar. Sixty percent of our active students are girls, and female participation actually increased this year. We attribute this to our deliberate recruitment strategy and to the growing number of female coaches in our system. Representation matters. When girls see women coaching, they see a future for themselves in leadership.

Looking ahead to 2025, our priorities are clear: expand the Hyderabad chapter to three new neighborhoods, launch our first college readiness cohort in Bangalore, increase coach compensation by 20%, and begin formal planning for a fourth city. We have our eyes on Pune, where initial community conversations have been encouraging. The mission has never been more urgent. The model has never been more proven. Let us keep going.`,
    author: 'Shaun Jayachandran',
    authorRole: 'Founder & Executive Director',
    date: '2025-01-08',
    category: 'Impact',
    image: images.twoGirls,
    readTime: '6 min read',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured)
}

export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, count)
}
