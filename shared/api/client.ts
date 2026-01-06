import type { ContactFormData } from '../types';

export async function submitContactForm(data: ContactFormData): Promise<void> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log('Form submitted:', data);
}
