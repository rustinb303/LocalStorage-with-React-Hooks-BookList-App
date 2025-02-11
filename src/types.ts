interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  householdSize: number;
  seniorCount: number;
  visits: Visit[];
}

interface Visit {
  timestamp: number;
}

export type { Customer, Visit };
