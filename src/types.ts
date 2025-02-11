export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  householdSize: number;
  seniorCount: number;
  visits: Visit[];
}

export interface Visit {
  timestamp: number;
}
