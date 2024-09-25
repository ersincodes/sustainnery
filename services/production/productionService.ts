import { fetchData } from '../baseService';

export const fetchRawLeatherSuppliersData = () => fetchData('/RawLeatherSuppliers');
export const fetchIntermediateGoodsSuppliersData = () => fetchData('/IntermediateGoodsSuppliers');
export const fetchTanningsData = () => fetchData('/Tannings');
export const fetchRetannageDyeingsData = () => fetchData('/RetannageDyeings');
export const fetchProductionsData = () => fetchData('/Productions');
export const fetchChromiumConsumptionsData = () => fetchData('/ChromiumConsumptıons');
export const fetchCr2o3OilTestsData = () => fetchData('/Cr2o3_OilTests');
