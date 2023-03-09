export interface ICompany {
    id: string;
    name: string;
    country: string;
    city: string;
    industry: string;
    key_person: string;
    key_person_phone: string;
    key_person_email: string;
    manager: string;
    reason_type: string;
    reason_description: string;
}

export interface IManager {
    id: string;
    name: string;
}

export interface IReason {
    id: string;
    name: string;
}

export interface ISearchFormData {
    company: string;
}