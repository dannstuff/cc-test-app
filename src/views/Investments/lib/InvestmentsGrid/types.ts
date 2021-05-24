


export type InvestmentDTO = {
    id: string;
    name: string;
    description: string;
    investment: InvestmentDetails
    equity: string;
    images: Array<InvestmentImage>,
    "expires_at": string
}



export type InvestmentImage = {
    id: string,
    type: "logo" | "coverImage",
    src: string
}


export type InvestmentDetails = {
    current: Array<string>;
    target: Array<string>;
    percentage: number;
}