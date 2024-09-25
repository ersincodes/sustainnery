import { fetchData } from '../baseService';

export const fetchRSLTestsData = () => fetchData('/RSLTests');
export const fetchProductLinesData = () => fetchData('/ProductLines');
export const fetchCustomersData = () => fetchData('/Customers');
export const fetchCustomerContactsData = () => fetchData('/CustomerContacts');
export const fetchCr6TestsData = () => fetchData('/Cr6Tests');
