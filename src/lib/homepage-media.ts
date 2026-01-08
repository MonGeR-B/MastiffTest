import homepageData from '@/../../homepage.json';

export class HomepageMediaService {
  static getServiceImages() {
    const serviceImageMap: Record<string, string> = {
      businessEvents: '/assets/images/services/DSC01247-scaled-1.jpg',
      celebrationGalore: '/assets/images/services/DSC01514-scaled-1.jpg',
      inauguration: '/assets/images/services/DSC01696-scaled-1.jpg',
      dealersMeet: '/assets/images/services/DSC01878-scaled-1.jpg',
      hybridEvents: '/assets/images/services/DSC01901-scaled-1.jpg',
      specialProjects: '/assets/images/services/DSC01980-scaled-1.jpg'
    };

    return serviceImageMap;
  }

  static getHeroVideo() {
    return '/assets/videos/wm-2025-intro-M2_l2.mp4';
  }

  static getPortfolioImages() {
    // Use portfolio images - actual event photos from portfolio folder
    const portfolioImages = [
      '/assets/images/portfolio/92A2004-scaled-1.jpg',
      '/assets/images/portfolio/DSC02450-scaled-1.jpg',
      '/assets/images/portfolio/PSGF6309-1-scaled-1-1024x1024.jpg',
      '/assets/images/portfolio/Untitled-design-19-1.png',
      '/assets/images/portfolio/Untitled-design-23-1.png',
      '/assets/images/services/DSC01247-scaled-1.jpg'
    ];

    return portfolioImages;
  }
}