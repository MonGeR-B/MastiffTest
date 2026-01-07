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
    // Get the numbered home page images for portfolio
    const portfolioImages = [
      '/assets/images/home/01-01.png',
      '/assets/images/home/2-02.png',
      '/assets/images/home/3-03.png',
      '/assets/images/home/4-04.png',
      '/assets/images/home/5-05.png',
      '/assets/images/home/6-06.png'
    ];

    return portfolioImages;
  }
}