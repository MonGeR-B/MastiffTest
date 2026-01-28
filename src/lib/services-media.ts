
export class ServicesMediaService {
  static getServicesImages() {
    const serviceImageMap: Record<string, string> = {
      businessEvents: '/assets/media/Services/Business Events.jpg',
      celebrationGalore: '/assets/media/Services/Celebration Galore.jpg',
      inauguration: '/assets/media/Services/LaunchesProductsFacility&Operations.jpg',
      hybridEvents: '/assets/media/Services/Hybrid Events .jpg',
      specialEvents: '/assets/media/Services/special events.jpg',
      servicesLanding: '/assets/media/Services/Services- Landing page 1.jpg',
      conventionMeet: '/assets/media/Services/IndustryConventionCustomer&DealerMeet.jpg',
      generalServices: '/assets/media/Services/Copy of Home page 2 -Industry Convention, Customer & Dealers Meet.jpg',
      corporateOffsite: '/assets/media/Services/LaunchesProductsFacility&Operations.jpg',
      venueSelection: '/assets/media/Services/IndustryConventionCustomer&DealerMeet.jpg'
    };

    return serviceImageMap;
  }

  static getServicesHeroImages() {
    // Get local services images for hero carousel
    return [
      { src: '/assets/media/Services/Business Events.jpg', alt: 'Business Events', category: 'Business Events' },
      { src: '/assets/media/Services/Celebration Galore.jpg', alt: 'Celebrations', category: 'Celebrations' },
      { src: '/assets/media/Services/LaunchesProductsFacility&Operations.jpg', alt: 'Inaugurations', category: 'Inaugurations' },
      { src: '/assets/media/Services/Hybrid Events .jpg', alt: 'Hybrid Events', category: 'Hybrid Events' },
      { src: '/assets/media/Services/special events.jpg', alt: 'Special Events', category: 'Special Events' },
      { src: '/assets/media/Services/IndustryConventionCustomer&DealerMeet.jpg', alt: 'Conventions', category: 'Conventions' }
    ];
  }

  static getServicesGallery() {
    // Get local images for gallery display
    return [
      { url: '/assets/media/Services/Business Events.jpg', title: 'Business Events', category: 'Business Events' },
      { url: '/assets/media/Services/Celebration Galore.jpg', title: 'Celebrations', category: 'Celebrations' },
      { url: '/assets/media/Services/LaunchesProductsFacility&Operations.jpg', title: 'Inaugurations', category: 'Inaugurations' },
      { url: '/assets/media/Services/Hybrid Events .jpg', title: 'Hybrid Events', category: 'Hybrid Events' },
      { url: '/assets/media/Services/special events.jpg', title: 'Special Events', category: 'Special Events' },
      { url: '/assets/media/Services/IndustryConventionCustomer&DealerMeet.jpg', title: 'Conventions', category: 'Conventions' }
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