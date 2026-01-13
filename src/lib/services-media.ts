
export class ServicesMediaService {
  static getServicesImages() {
    const serviceImageMap: Record<string, string> = {
      businessEvents: encodeURI('/assets/media/Services/Business Events.jpg'),
      celebrationGalore: encodeURI('/assets/media/Services/Celebration Galore.jpg'),
      inauguration: encodeURI('/assets/media/Services/Launches - Products, Facility & Operations .jpg'),
      hybridEvents: encodeURI('/assets/media/Services/Hybrid Events .jpg'),
      specialEvents: encodeURI('/assets/media/Services/special events.jpg'),
      servicesLanding: encodeURI('/assets/media/Services/Services- Landing page 1.jpg'),
      conventionMeet: encodeURI('/assets/media/Services/Industry Convention, Customer & Dealer Meet.jpg'),
      generalServices: encodeURI('/assets/media/Services/Copy of Home page 2 -Industry Convention, Customer & Dealers Meet.jpg')
    };

    return serviceImageMap;
  }

  static getServicesHeroImages() {
    // Get local services images for hero carousel
    return [
      { src: encodeURI('/assets/media/Services/Business Events.jpg'), alt: 'Business Events', category: 'Business Events' },
      { src: encodeURI('/assets/media/Services/Celebration Galore.jpg'), alt: 'Celebrations', category: 'Celebrations' },
      { src: encodeURI('/assets/media/Services/Launches - Products, Facility & Operations .jpg'), alt: 'Inaugurations', category: 'Inaugurations' },
      { src: encodeURI('/assets/media/Services/Hybrid Events .jpg'), alt: 'Hybrid Events', category: 'Hybrid Events' },
      { src: encodeURI('/assets/media/Services/special events.jpg'), alt: 'Special Events', category: 'Special Events' },
      { src: encodeURI('/assets/media/Services/Industry Convention, Customer & Dealer Meet.jpg'), alt: 'Conventions', category: 'Conventions' }
    ];
  }

  static getServicesGallery() {
    // Get local images for gallery display
    return [
      { url: encodeURI('/assets/media/Services/Business Events.jpg'), title: 'Business Events', category: 'Business Events' },
      { url: encodeURI('/assets/media/Services/Celebration Galore.jpg'), title: 'Celebrations', category: 'Celebrations' },
      { url: encodeURI('/assets/media/Services/Launches - Products, Facility & Operations .jpg'), title: 'Inaugurations', category: 'Inaugurations' },
      { url: encodeURI('/assets/media/Services/Hybrid Events .jpg'), title: 'Hybrid Events', category: 'Hybrid Events' },
      { url: encodeURI('/assets/media/Services/special events.jpg'), title: 'Special Events', category: 'Special Events' },
      { url: encodeURI('/assets/media/Services/Industry Convention, Customer & Dealer Meet.jpg'), title: 'Conventions', category: 'Conventions' }
    ];
  }

  private static getCategoryFromFileName(fileName: string): string {
    if (fileName.toLowerCase().includes('business events')) return 'Business Events';
    if (fileName.toLowerCase().includes('celebration')) return 'Celebrations';
    if (fileName.toLowerCase().includes('inauguration')) return 'Inaugurations';
    if (fileName.toLowerCase().includes('hybrid')) return 'Hybrid Events';
    if (fileName.toLowerCase().includes('special')) return 'Special Events';
    if (fileName.toLowerCase().includes('convention') || fileName.toLowerCase().includes('dealers')) return 'Conventions';
    return 'Corporate Events';
  }
}