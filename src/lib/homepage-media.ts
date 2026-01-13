import homepageData from '@/../../homepage.json';

export class HomepageMediaService {
  static getServiceImages() {
    const serviceImageMap: Record<string, string> = {
      businessEvents: encodeURI('/assets/media/Services/Business Events.jpg'),
      celebrationGalore: encodeURI('/assets/media/Services/Celebration Galore.jpg'),
      inauguration: encodeURI('/assets/media/Services/Launches - Products, Facility & Operations .jpg'),
      dealersMeet: encodeURI('/assets/media/Services/Industry Convention, Customer & Dealer Meet.jpg'),
      hybridEvents: encodeURI('/assets/media/Services/Hybrid Events .jpg'),
      specialProjects: encodeURI('/assets/media/Services/special events.jpg')
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