import { https } from './https';

export const MUTATIONS = {
  sendContact: async function (data: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    insuranceProvider?: string;
    message: string;
  }) {
    return await https.post(`/email/api/contact`, data);
  },
  sendCareer: async function (data: {
    fullName: string;
    resume: File[];
    phoneNumber: string;
    emailAddress: string;
    position: string;
  }) {
    const formData = new FormData();

    formData.append('fullName', data.fullName);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('emailAdress', data.emailAddress);
    formData.append('position', data.position);

    formData.append('resume', data.resume[0]);

    return https.post('/email/api/career', formData);
  },
};
