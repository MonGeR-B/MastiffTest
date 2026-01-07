import mediaUrls from '@/../../media_urls.json';

export class ServicesMediaService {
  static getServicesImages() {
    const serviceImageMap: Record<string, string> = {
      businessEvents: '/assets/images/services/DSC01247-scaled-1.jpg',
      celebrationGalore: '/assets/images/services/DSC01514-scaled-1.jpg',
      inauguration: '/assets/images/services/DSC01696-scaled-1.jpg',
      hybridEvents: '/assets/images/services/DSC01901-scaled-1.jpg',
      specialEvents: '/assets/images/services/DSC01980-scaled-1.jpg',
      servicesLanding: '/assets/images/services/DSC02447-scaled-1.jpg',
      conventionMeet: '/assets/images/services/DSC01878-scaled-1.jpg',
      generalServices: '/assets/images/services/DSC02449-scaled-1.jpg'
    };

    return serviceImageMap;
  }

  static getServicesHeroImages() {
    // Get local services images for hero carousel
    return [
      { src: '/assets/images/services/DSC01247-scaled-1.jpg', alt: 'Business Events', category: 'Business Events' },
      { src: '/assets/images/services/DSC01514-scaled-1.jpg', alt: 'Celebrations', category: 'Celebrations' },
      { src: '/assets/images/services/DSC01696-scaled-1.jpg', alt: 'Inaugurations', category: 'Inaugurations' },
      { src: '/assets/images/services/DSC01901-scaled-1.jpg', alt: 'Hybrid Events', category: 'Hybrid Events' },
      { src: '/assets/images/services/DSC01980-scaled-1.jpg', alt: 'Special Events', category: 'Special Events' },
      { src: '/assets/images/services/DSC01878-scaled-1.jpg', alt: 'Conventions', category: 'Conventions' }
    ];
  }

  static getServicesGallery() {
    // Get local images for gallery display
    return [
      { url: '/assets/images/services/DSC01247-scaled-1.jpg', title: 'Business Events', category: 'Business Events' },
      { url: '/assets/images/services/DSC01514-scaled-1.jpg', title: 'Celebrations', category: 'Celebrations' },
      { url: '/assets/images/services/DSC01696-scaled-1.jpg', title: 'Inaugurations', category: 'Inaugurations' },
      { url: '/assets/images/services/DSC01901-scaled-1.jpg', title: 'Hybrid Events', category: 'Hybrid Events' },
      { url: '/assets/images/services/DSC01980-scaled-1.jpg', title: 'Special Events', category: 'Special Events' },
      { url: '/assets/images/services/DSC01878-scaled-1.jpg', title: 'Conventions', category: 'Conventions' }
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