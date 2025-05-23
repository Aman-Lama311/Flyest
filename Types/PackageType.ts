export interface PackageType {
    id: string;
    categoryId: string;
    subCategoryId: string;
    name: string;
    overview: string;
    coverImage: string;
    elevation: number;
    distance: number;
    season: string;
    slug: string;
    routeMap: string;
    gallery: string[];
    requirements: string[];
    testimonial: any[]; // You can define a `Testimonial` interface if needed
  
    attraction: AttractionType[];
    itenary: ItenaryType[];
    exclusion: ExclusionType[];
    inclusion: InclusionType[];
    fixedDates: FixedDateType[];
    addons: AddonType[];
  
    createdAt: string;
    updatedAt: string;
  }
  
  export interface AttractionType {
    _id: string;
    title: string;
    description: string;
    package: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface ItenaryType {
    _id: string;
    title: string;
    description: string;
    package: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface ExclusionType {
    _id: string;
    title: string;
    description: string;
    package: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface InclusionType {
    _id: string;
    title: string;
    description: string;
    package: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface FixedDateType {
    id: string;
    package: string;
    startDate: string;
    endDate: string;
    status: string;
    numberOfPerson: number;
    pricePerPerson: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface AddonType {
    _id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  