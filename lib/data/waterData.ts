import { TabData } from '@/types/management-types';

export const waterData: TabData[] = [
    {
        title: 'Su Kaynakları',
        data: [
            { id: 1, sourceName: 'Şehir Şebekesi', supplier: 'BelediyeSu A.Ş.', quality: 'İçme Suyu', quantity: 1000, unit: 'm³', price: 5, date: '2023-09-01' },
            { id: 2, sourceName: 'Kuyu Suyu', supplier: 'FabrikaSu Ltd.', quality: 'Endüstriyel', quantity: 800, unit: 'm³', price: 2, date: '2023-09-05' },
            { id: 3, sourceName: 'Arıtılmış Su', supplier: 'GeriDönüşüm A.Ş.', quality: 'Proses', quantity: 1200, unit: 'm³', price: 3, date: '2023-09-10' },
            { id: 4, sourceName: 'Yağmur Suyu', supplier: 'EkoSu Ltd.', quality: 'Ham', quantity: 600, unit: 'm³', price: 1, date: '2023-09-15' },
            { id: 5, sourceName: 'Nehir Suyu', supplier: 'DoğalSu A.Ş.', quality: 'Ham', quantity: 900, unit: 'm³', price: 1.5, date: '2023-09-20' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'sourceName', title: 'Kaynak Adı', sortable: true },
            { accessor: 'supplier', title: 'Tedarikçi', sortable: true },
            { accessor: 'quality', title: 'Kalite', sortable: true },
            { accessor: 'quantity', title: 'Miktar (m³)', sortable: true },
            { accessor: 'price', title: 'Fiyat (TL/m³)', sortable: true },
            { accessor: 'date', title: 'Tarih', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
        addEnabled: true,
        dateField: 'date',
    },
    {
        title: 'Su Tüketimi',
        data: [
            { id: 1, department: 'Tabaklama', consumption: 500, unit: 'm³', processType: 'Yıkama', date: '2023-10-01' },
            { id: 2, department: 'Boyahane', consumption: 700, unit: 'm³', processType: 'Boyama', date: '2023-10-05' },
            { id: 3, department: 'Finisaj', consumption: 300, unit: 'm³', processType: 'Temizleme', date: '2023-10-10' },
            { id: 4, department: 'Laboratuvar', consumption: 100, unit: 'm³', processType: 'Test', date: '2023-10-15' },
            { id: 5, department: 'Genel Temizlik', consumption: 200, unit: 'm³', processType: 'Temizlik', date: '2023-10-20' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'department', title: 'Departman', sortable: true },
            { accessor: 'consumption', title: 'Tüketim (m³)', sortable: true },
            { accessor: 'processType', title: 'İşlem Türü', sortable: true },
            { accessor: 'date', title: 'Tarih', sortable: true },
        ],
        minAgeFilter: 'consumption',
        maxAgeFilter: 'consumption',
        addEnabled: true,
        dateField: 'date',
    },
    {
        title: 'Atık Su Kaynakları',
        data: [
            { id: 1, sourceName: 'Tabaklama Atık Suyu', quantity: 400, pollutantLevel: 'Yüksek', treatmentMethod: 'Kimyasal Arıtma', disposalDate: '2023-11-01' },
            { id: 2, sourceName: 'Boyahane Atık Suyu', quantity: 600, pollutantLevel: 'Orta', treatmentMethod: 'Biyolojik Arıtma', disposalDate: '2023-11-03' },
            { id: 3, sourceName: 'Finisaj Atık Suyu', quantity: 200, pollutantLevel: 'Düşük', treatmentMethod: 'Filtrasyon', disposalDate: '2023-11-05' },
            { id: 4, sourceName: 'Laboratuvar Atık Suyu', quantity: 50, pollutantLevel: 'Yüksek', treatmentMethod: 'Özel İşlem', disposalDate: '2023-11-07' },
            { id: 5, sourceName: 'Genel Temizlik Atık Suyu', quantity: 150, pollutantLevel: 'Düşük', treatmentMethod: 'Basit Arıtma', disposalDate: '2023-11-09' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'sourceName', title: 'Kaynak Adı', sortable: true },
            { accessor: 'quantity', title: 'Miktar (m³)', sortable: true },
            { accessor: 'pollutantLevel', title: 'Kirletici Seviyesi', sortable: true },
            { accessor: 'treatmentMethod', title: 'Arıtma Yöntemi', sortable: true },
            { accessor: 'disposalDate', title: 'İmha Tarihi', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
        addEnabled: true,
        dateField: 'disposalDate',
    },
];
