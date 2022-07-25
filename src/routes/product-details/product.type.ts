export interface Iproduct {
  product: {
    id: number;
    product_code: string;
    name: string;
    slug: string;
    price: number;
    sale_price: number;
    description: string;
    characteristics: string;
    gallery: string;
    file_id: number;
    document_id: number;
    review: string;
    specifications: string;
    equipment: string;
    lang: number;
    lang_hash: string;
    video_review: null;
    status: number;
    type: number;
    created_at: Date;
    updated_at: Date;
  };
  isMobile: boolean;
}
