export interface formData {
  fullName: string;
  birthDate: string;
  motherName: string;
  city: string;
  birthState: string;
  school: string;
  class: string;
  email: string;
  password: string;
}

export interface IBook {
  id: number;
  title?: string;
  author?: string;
  pages?: number;
  readingAge?: string;
  quantityRecyclablesNeeded?: string;
  format?: string;
  img?: string;
}
