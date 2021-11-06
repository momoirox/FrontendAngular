import { ICity } from "./city";

export enum Gender {
    Male, 
    Female
  }
export interface IPatient {
    
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth : Date;
    gender : Gender;
    email: string;
    phoneNumber: string;
    street: string;
    streetNumber: string;
    cityId: number;
    city: ICity;
    medicalRecord: any;

}
