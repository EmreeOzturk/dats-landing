export type MenuItem = {
  name: string;
  href: string;
  id: number;
};

export type LeaderboardDataItem = {
  order: number;
  address: string;
  totalPoint: number;
  assignedResourceCount: number;
  assignedCpuCount: number;
  assignedBandwith: number;
  lastLocation: string;
  lastCity: string;
  lastCountry: string;
};
