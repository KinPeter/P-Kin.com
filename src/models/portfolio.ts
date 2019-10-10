export interface PortfolioItem {
    id?: string;
    name: string;
    descr: string;
    badges: string[];
    features: PortfolioFeature[];
    image: string;
    link: string | null;
    repo: string | null;
    addedAt: number;
}

export interface PortfolioFeature {
    title: string;
    text: string;
}
