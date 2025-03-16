
interface FormProp {
    userId: number;
    name: string;
    country: string;
    inspiration: string;
    product: string;
    solution: string;
    advantage: string;
    envision: string;
    goals: string;
    business_model: string;
    revenue_stream: string;
    pricing: string;
    startup_cost: number;
    expenditure: number;
    profitability: number;
    capital: number;
    investor?: string;
    self_funding: boolean;
    capital_invest: number;
    capital_raised: number;
    projected_needs: string;
    hiring: string;
    job_hire: string;
    sale_target: string;
    marketing: string;
    risk: string;
    compliance_concern: string;
    financial_metrics: string;
    cash_flow_time: string;
    bank_statement?: File[];
    cash_flow_statement?: File[];
    budget_document?: File[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }

  interface CFOState {
    loading: boolean;
    error: string | null;
    success: boolean;
  }
  
  export default CFOState