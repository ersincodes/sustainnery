import { TabData } from '@/types/management-types';

//Energy Data

export const energyData: TabData[] = [
    {
        title: 'Enerji Kaynakları',
        data: [
            { id: 1, sourceName: 'Doğal Gaz', supplier: 'EnerjiCo A.Ş.', type: 'Fosil', quantity: 1000, unit: 'MWh', price: 50, date: '2023-09-01' },
            { id: 2, sourceName: 'Güneş Enerjisi', supplier: 'SolarTech Ltd.', type: 'Yenilenebilir', quantity: 800, unit: 'MWh', price: 45, date: '2023-09-05' },
            { id: 3, sourceName: 'Rüzgar Enerjisi', supplier: 'WindPower A.Ş.', type: 'Yenilenebilir', quantity: 1200, unit: 'MWh', price: 55, date: '2023-09-10' },
            { id: 4, sourceName: 'Kömür', supplier: 'MadenCo Ltd.', type: 'Fosil', quantity: 600, unit: 'MWh', price: 40, date: '2023-09-15' },
            { id: 5, sourceName: 'Biyokütle', supplier: 'BiyoEnerji A.Ş.', type: 'Yenilenebilir', quantity: 900, unit: 'MWh', price: 48, date: '2023-09-20' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'sourceName', title: 'Kaynak Adı', sortable: true },
            { accessor: 'supplier', title: 'Tedarikçi', sortable: true },
            { accessor: 'type', title: 'Tür', sortable: true },
            { accessor: 'quantity', title: 'Miktar (MWh)', sortable: true },
            { accessor: 'price', title: 'Fiyat (TL/MWh)', sortable: true },
            { accessor: 'date', title: 'Tarih', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
        addEnabled: true,
        dateField: 'date',
    },
    {
        title: 'Enerji Tüketimi',
        data: [
            { id: 1, department: 'Üretim', consumption: 500, unit: 'kWh', processType: 'Tabaklama', date: '2023-10-01' },
            { id: 2, department: 'Boyahane', consumption: 700, unit: 'kWh', processType: 'Boyama', date: '2023-10-05' },
            { id: 3, department: 'Finisaj', consumption: 600, unit: 'kWh', processType: 'Cilalama', date: '2023-10-10' },
            { id: 4, department: 'Kesimhane', consumption: 800, unit: 'kWh', processType: 'Kesim', date: '2023-10-15' },
            { id: 5, department: 'Depo', consumption: 550, unit: 'kWh', processType: 'Soğutma', date: '2023-10-20' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'department', title: 'Departman', sortable: true },
            { accessor: 'consumption', title: 'Tüketim (kWh)', sortable: true },
            { accessor: 'processType', title: 'İşlem Türü', sortable: true },
            { accessor: 'date', title: 'Tarih', sortable: true },
        ],
        minAgeFilter: 'consumption',
        maxAgeFilter: 'consumption',
        addEnabled: true,
        dateField: 'date',
    },
];
