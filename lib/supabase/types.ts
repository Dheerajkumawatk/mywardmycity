export type LeadType = 'demo' | 'contact';
export type LeadStatus = 'new' | 'contacted' | 'done';

export interface Lead {
  id: string;
  created_at: string;
  type: LeadType;
  name: string;
  phone: string;
  place: string | null;
  ward: string | null;
  interest: string | null;
  message: string | null;
  source: string | null;
  status: LeadStatus;
}
