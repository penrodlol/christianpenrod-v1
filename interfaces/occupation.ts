export interface Role {
  id: number;
  title: string;
  from: number;
  to?: number;
  description: string;
}

export type Roles = Array<Role>;

export interface Occupation {
  id: number;
  company: string;
  logo: string;
  roles: Roles;
}

export type Occupations = Array<Occupation>;
