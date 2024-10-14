import Contact from '../Models/Contact.js';
import Carson from '../assets/Carson.jpg';

const contactInstance = new Contact(
  'Carson Chang',
  'gimchang30@gmail.com', // Corrected email format
  '240-786-2088',
  '5218 Spalding Dr Ooltewah, TN 37363',
  'Software Engineer',
  Carson ,
  'Scheer Partners',
  ['Latest Pitch', 'Company Brochure', 'Company Presentation']
);

export default contactInstance;