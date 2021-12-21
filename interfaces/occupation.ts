export interface Time {
  from: number;
  to?: number;
}

export interface Role {
  id: string;
  title: string;
  time: Time;
  description: string;
}

export interface Occupation {
  id: string;
  company: string;
  logo: string;
  roles: Array<Role>;
}

export type Occupations = Array<Occupation>;
