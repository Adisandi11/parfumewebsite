export interface ContentfulImage {
  fields: {
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
    title: string;
  };
}

export interface PerfumeFields {
  name: string;
  description: any; 
  price: number;
  category: string;
  image: any; // Allow any to handle both Asset objects and direct URL strings
  featured: boolean;
}

export interface Perfume {
  sys: {
    id: string;
  };
  fields: PerfumeFields;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}