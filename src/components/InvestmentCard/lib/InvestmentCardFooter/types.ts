import { InvestmentDetails } from "../../../../views/Investments/lib/InvestmentsGrid/types";



export type InvestmentCardFooterProps = {
    investmentDetails: InvestmentDetails,
    expiryDate: string,
    equity: string
}

export type Props = InvestmentCardFooterProps;