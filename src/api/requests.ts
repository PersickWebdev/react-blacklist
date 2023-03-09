import axios from 'axios';
import { Endpoints } from './endpoints';

export const Requests = {
    companies: {
        getAll: async () => {
            return await axios.get(Endpoints.companies);
        }
    },
    managers: {
        getAll: async () => {
            return await axios.get(Endpoints.managers);
        }
    },
    industries: {
        getAll: async () => {
            return await axios.get(Endpoints.industries);
        }
    },
    reasons: {
        getAll: async () => {
            return await axios.get(Endpoints.reasons);
        }
    }
}