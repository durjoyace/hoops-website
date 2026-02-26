// Form submission configuration
// To use Formspree: sign up at formspree.io, create forms, and paste IDs below
// Leave empty to fall back to mailto: links

export const formConfig = {
  // Formspree form IDs (e.g., 'xrgvalke')
  contactFormId: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || '',
  volunteerFormId: process.env.NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID || '',
  newsletterFormId: process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID || '',
}

export function getFormspreeUrl(formId: string) {
  return `https://formspree.io/f/${formId}`
}
