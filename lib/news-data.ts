// News data file
// Add new articles by adding objects to this array
// No need to modify layout code

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'press' | 'update' | 'event' | 'feature';
  image?: string;
  externalUrl?: string;
  content?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'nba-india-partnership-2019',
    title: 'Hoops Creating Hope Partners with NBA India',
    excerpt: 'We ran programs in Mumbai in conjunction with the historic NBA Games in India, bringing international recognition to our mission.',
    date: '2019-10-04',
    category: 'press',
    image: '/images/news/nba-india.jpg',
  },
  {
    id: 'hyderabad-expansion-2022',
    title: 'Expanding to Hyderabad: Our Third City',
    excerpt: 'Hoops Creating Hope launches programs in Hyderabad, bringing our basketball-based education model to a third major Indian city.',
    date: '2022-08-15',
    category: 'update',
  },
  {
    id: '2500-students-milestone',
    title: 'Milestone: 2,500+ Students Impacted',
    excerpt: 'We celebrate reaching over 2,500 students across Chennai, Bangalore, and Hyderabad with proven 85% high school completion rates.',
    date: '2024-03-01',
    category: 'update',
  },
  {
    id: 'crossover-scholars-2024',
    title: 'Crossover Scholars Program 2024',
    excerpt: 'This year\'s intensive 2-week summer academy brought together students and coaches from around the world for leadership development and basketball coaching.',
    date: '2024-06-15',
    category: 'event',
  },
  {
    id: 'girls-basketball-initiative',
    title: '60% Girls Participation: Breaking Barriers',
    excerpt: 'Our dedicated programs for girls have achieved 60% female participation, empowering young women in communities where opportunities are scarce.',
    date: '2024-01-20',
    category: 'feature',
  },
];

// Helper function to get articles by category
export function getArticlesByCategory(category: NewsArticle['category']) {
  return newsArticles.filter((article) => article.category === category);
}

// Helper function to get latest articles
export function getLatestArticles(count: number = 5) {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Helper function to get article by ID
export function getArticleById(id: string) {
  return newsArticles.find((article) => article.id === id);
}

// Category labels
export const categoryLabels: Record<NewsArticle['category'], string> = {
  press: 'Press',
  update: 'Update',
  event: 'Event',
  feature: 'Feature',
};
