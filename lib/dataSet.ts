export interface TabData {
    title: string;
    data: any[];
    columns: {
        accessor: string;
        title: string;
        sortable: boolean;
    }[];
    minAgeFilter?: string;
    maxAgeFilter?: string;
}

//Production Data

export const productionData: TabData[] = [
    {
        title: 'Ham Deri Tedarikçi',
        data: [
            { id: 1, name: 'Ahmet Yılmaz', company: 'Deri A.Ş.', quality: 'A', quantity: 1000, price: 50, date: '2023-09-01' },
            { id: 2, name: 'Ayşe Kara', company: 'Kaliteli Deri Ltd.', quality: 'B', quantity: 800, price: 45, date: '2023-09-05' },
            { id: 3, name: 'Mehmet Demir', company: 'Anadolu Deri', quality: 'A', quantity: 1200, price: 55, date: '2023-09-10' },
            { id: 4, name: 'Fatma Şahin', company: 'Marmara Leather', quality: 'C', quantity: 600, price: 40, date: '2023-09-15' },
            { id: 5, name: 'Ali Öztürk', company: 'İstanbul Deri', quality: 'B', quantity: 900, price: 48, date: '2023-09-20' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'name', title: 'Tedarikçi Adı', sortable: true },
            { accessor: 'company', title: 'Şirket', sortable: true },
            { accessor: 'quality', title: 'Kalite', sortable: true },
            { accessor: 'quantity', title: 'Miktar (adet)', sortable: true },
            { accessor: 'price', title: 'Fiyat (TL)', sortable: true },
            { accessor: 'date', title: 'Tarih', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Yarı Mamul Tedarikçi',
        data: [
            { id: 1, productName: 'Yarı İşlenmiş Deri A', supplier: 'XYZ Kimya', quantity: 500, processStage: 'Tabaklama Öncesi', deliveryDate: '2023-10-01' },
            { id: 2, productName: 'Yarı İşlenmiş Deri B', supplier: 'ABC Kimyasalları', quantity: 700, processStage: 'Boyama Öncesi', deliveryDate: '2023-10-05' },
            { id: 3, productName: 'Yarı İşlenmiş Deri C', supplier: 'LMN Endüstri', quantity: 600, processStage: 'Finisaj Öncesi', deliveryDate: '2023-10-10' },
            { id: 4, productName: 'Yarı İşlenmiş Deri D', supplier: 'PQR Chemicals', quantity: 800, processStage: 'Tabaklama Öncesi', deliveryDate: '2023-10-15' },
            { id: 5, productName: 'Yarı İşlenmiş Deri E', supplier: 'EFG Endüstriyel', quantity: 550, processStage: 'Boyama Öncesi', deliveryDate: '2023-10-20' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'productName', title: 'Ürün Adı', sortable: true },
            { accessor: 'supplier', title: 'Tedarikçi', sortable: true },
            { accessor: 'quantity', title: 'Miktar', sortable: true },
            { accessor: 'processStage', title: 'İşlem Aşaması', sortable: true },
            { accessor: 'deliveryDate', title: 'Teslim Tarihi', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Tabaklama',
        data: [
            { id: 1, batchNo: 'TB001', leatherType: 'Sığır Derisi', quantity: 1000, tannin: 'Krom', startDate: '2023-11-01', endDate: '2023-11-05', status: 'Tamamlandı' },
            { id: 2, batchNo: 'TB002', leatherType: 'Keçi Derisi', quantity: 800, tannin: 'Bitkisel', startDate: '2023-11-03', endDate: '2023-11-08', status: 'Devam Ediyor' },
            { id: 3, batchNo: 'TB003', leatherType: 'Koyun Derisi', quantity: 1200, tannin: 'Krom', startDate: '2023-11-05', endDate: '2023-11-10', status: 'Başlamadı' },
            { id: 4, batchNo: 'TB004', leatherType: 'Sığır Derisi', quantity: 900, tannin: 'Sentetik', startDate: '2023-11-07', endDate: '2023-11-12', status: 'Devam Ediyor' },
            { id: 5, batchNo: 'TB005', leatherType: 'Keçi Derisi', quantity: 700, tannin: 'Krom', startDate: '2023-11-09', endDate: '2023-11-14', status: 'Başlamadı' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'batchNo', title: 'Parti No', sortable: true },
            { accessor: 'leatherType', title: 'Deri Tipi', sortable: true },
            { accessor: 'quantity', title: 'Miktar', sortable: true },
            { accessor: 'tannin', title: 'Tabaklama Maddesi', sortable: true },
            { accessor: 'startDate', title: 'Başlangıç Tarihi', sortable: true },
            { accessor: 'endDate', title: 'Bitiş Tarihi', sortable: true },
            { accessor: 'status', title: 'Durum', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Retenaj-Boyama',
        data: [
            { id: 1, batchNo: 'RB001', leatherType: 'Sığır Derisi', color: 'Siyah', quantity: 800, startDate: '2023-12-01', endDate: '2023-12-03', status: 'Tamamlandı' },
            { id: 2, batchNo: 'RB002', leatherType: 'Keçi Derisi', color: 'Kahverengi', quantity: 600, startDate: '2023-12-02', endDate: '2023-12-05', status: 'Devam Ediyor' },
            { id: 3, batchNo: 'RB003', leatherType: 'Koyun Derisi', color: 'Bej', quantity: 1000, startDate: '2023-12-04', endDate: '2023-12-07', status: 'Başlamadı' },
            { id: 4, batchNo: 'RB004', leatherType: 'Sığır Derisi', color: 'Kırmızı', quantity: 700, startDate: '2023-12-06', endDate: '2023-12-09', status: 'Devam Ediyor' },
            { id: 5, batchNo: 'RB005', leatherType: 'Keçi Derisi', color: 'Lacivert', quantity: 500, startDate: '2023-12-08', endDate: '2023-12-11', status: 'Başlamadı' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'batchNo', title: 'Parti No', sortable: true },
            { accessor: 'leatherType', title: 'Deri Tipi', sortable: true },
            { accessor: 'color', title: 'Renk', sortable: true },
            { accessor: 'quantity', title: 'Miktar', sortable: true },
            { accessor: 'startDate', title: 'Başlangıç Tarihi', sortable: true },
            { accessor: 'endDate', title: 'Bitiş Tarihi', sortable: true },
            { accessor: 'status', title: 'Durum', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Gelen Fason İş',
        data: [
            { id: 1, customerName: 'Moda Ayakkabı Ltd.', orderNo: 'GF001', leatherType: 'Sığır Derisi', process: 'Tabaklama', quantity: 1000, receiveDate: '2024-01-05', deadline: '2024-01-15' },
            { id: 2, customerName: 'Lüks Çanta A.Ş.', orderNo: 'GF002', leatherType: 'Keçi Derisi', process: 'Boyama', quantity: 800, receiveDate: '2024-01-07', deadline: '2024-01-18' },
            { id: 3, customerName: 'Elit Deri Ürünleri', orderNo: 'GF003', leatherType: 'Koyun Derisi', process: 'Finisaj', quantity: 1200, receiveDate: '2024-01-10', deadline: '2024-01-22' },
            { id: 4, customerName: 'Kaliteli Kemer San.', orderNo: 'GF004', leatherType: 'Sığır Derisi', process: 'Tabaklama', quantity: 900, receiveDate: '2024-01-12', deadline: '2024-01-25' },
            { id: 5, customerName: 'Modern Aksesuar Ltd.', orderNo: 'GF005', leatherType: 'Keçi Derisi', process: 'Boyama', quantity: 700, receiveDate: '2024-01-15', deadline: '2024-01-28' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'customerName', title: 'Müşteri Adı', sortable: true },
            { accessor: 'orderNo', title: 'Sipariş No', sortable: true },
            { accessor: 'leatherType', title: 'Deri Tipi', sortable: true },
            { accessor: 'process', title: 'İşlem', sortable: true },
            { accessor: 'quantity', title: 'Miktar', sortable: true },
            { accessor: 'receiveDate', title: 'Alım Tarihi', sortable: true },
            { accessor: 'deadline', title: 'Teslim Tarihi', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Giden Fason İş',
        data: [
            {
                id: 1,
                partnerCompany: 'Hızlı Tabaklama A.Ş.',
                orderNo: 'GD001',
                leatherType: 'Sığır Derisi',
                process: 'Tabaklama',
                quantity: 1500,
                sendDate: '2024-02-01',
                expectedReturn: '2024-02-10',
            },
            { id: 2, partnerCompany: 'Renk Ustası Ltd.', orderNo: 'GD002', leatherType: 'Keçi Derisi', process: 'Boyama', quantity: 1000, sendDate: '2024-02-03', expectedReturn: '2024-02-13' },
            { id: 3, partnerCompany: 'Özel İşlem San.', orderNo: 'GD003', leatherType: 'Koyun Derisi', process: 'Finisaj', quantity: 2000, sendDate: '2024-02-05', expectedReturn: '2024-02-15' },
            {
                id: 4,
                partnerCompany: 'Deri Dönüşüm Ltd.',
                orderNo: 'GD004',
                leatherType: 'Sığır Derisi',
                process: 'Tabaklama',
                quantity: 1800,
                sendDate: '2024-02-07',
                expectedReturn: '2024-02-17',
            },
            { id: 5, partnerCompany: 'Kalite Boya A.Ş.', orderNo: 'GD005', leatherType: 'Keçi Derisi', process: 'Boyama', quantity: 1200, sendDate: '2024-02-09', expectedReturn: '2024-02-19' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'partnerCompany', title: 'İş Ortağı Firma', sortable: true },
            { accessor: 'orderNo', title: 'Sipariş No', sortable: true },
            { accessor: 'leatherType', title: 'Deri Tipi', sortable: true },
            { accessor: 'process', title: 'İşlem', sortable: true },
            { accessor: 'quantity', title: 'Miktar', sortable: true },
            { accessor: 'sendDate', title: 'Gönderim Tarihi', sortable: true },
            { accessor: 'expectedReturn', title: 'Beklenen Dönüş', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Üretim Verileri',
        data: [
            { id: 1, productType: 'Tabaklanmış Deri', quantity: 5000, unit: 'adet', startDate: '2024-03-01', endDate: '2024-03-07', efficiency: 95, wastage: 2 },
            { id: 2, productType: 'Boyanmış Deri', quantity: 4500, unit: 'adet', startDate: '2024-03-03', endDate: '2024-03-10', efficiency: 93, wastage: 3 },
            { id: 3, productType: 'Finisajlı Deri', quantity: 4000, unit: 'adet', startDate: '2024-03-05', endDate: '2024-03-12', efficiency: 97, wastage: 1 },
            { id: 4, productType: 'Yarı İşlenmiş Deri', quantity: 5500, unit: 'adet', startDate: '2024-03-07', endDate: '2024-03-15', efficiency: 91, wastage: 4 },
            { id: 5, productType: 'Kromlu Deri', quantity: 4800, unit: 'adet', startDate: '2024-03-09', endDate: '2024-03-17', efficiency: 94, wastage: 2 },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'productType', title: 'Ürün Tipi', sortable: true },
            { accessor: 'quantity', title: 'Miktar', sortable: true },
            { accessor: 'unit', title: 'Birim', sortable: true },
            { accessor: 'startDate', title: 'Başlangıç Tarihi', sortable: true },
            { accessor: 'endDate', title: 'Bitiş Tarihi', sortable: true },
            { accessor: 'efficiency', title: 'Verimlilik (%)', sortable: true },
            { accessor: 'wastage', title: 'Fire Oranı (%)', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Krom Tüketimi',
        data: [
            { id: 1, date: '2024-04-01', batchNo: 'KT001', chromiumUsed: 500, unit: 'kg', leatherProcessed: 2000, efficiency: 0.25 },
            { id: 2, date: '2024-04-05', batchNo: 'KT002', chromiumUsed: 450, unit: 'kg', leatherProcessed: 1800, efficiency: 0.25 },
            { id: 3, date: '2024-04-10', batchNo: 'KT003', chromiumUsed: 550, unit: 'kg', leatherProcessed: 2200, efficiency: 0.25 },
            { id: 4, date: '2024-04-15', batchNo: 'KT004', chromiumUsed: 480, unit: 'kg', leatherProcessed: 1900, efficiency: 0.25 },
            { id: 5, date: '2024-04-20', batchNo: 'KT005', chromiumUsed: 520, unit: 'kg', leatherProcessed: 2100, efficiency: 0.25 },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'date', title: 'Tarih', sortable: true },
            { accessor: 'batchNo', title: 'Parti No', sortable: true },
            { accessor: 'chromiumUsed', title: 'Kullanılan Krom', sortable: true },
            { accessor: 'unit', title: 'Birim', sortable: true },
            { accessor: 'leatherProcessed', title: 'İşlenen Deri (adet)', sortable: true },
            { accessor: 'efficiency', title: 'Verimlilik (kg/adet)', sortable: true },
        ],
        minAgeFilter: 'chromiumUsed',
        maxAgeFilter: 'chromiumUsed',
    },
    {
        title: 'Cr203 ve Yağ Testleri',
        data: [
            { id: 1, date: '2024-05-01', batchNo: 'CY001', cr203Content: 3.5, fatContent: 6.2, pH: 3.8, shrinkageTemp: 98 },
            { id: 2, date: '2024-05-05', batchNo: 'CY002', cr203Content: 3.7, fatContent: 5.9, pH: 3.9, shrinkageTemp: 99 },
            { id: 3, date: '2024-05-10', batchNo: 'CY003', cr203Content: 3.4, fatContent: 6.5, pH: 3.7, shrinkageTemp: 97 },
            { id: 4, date: '2024-05-15', batchNo: 'CY004', cr203Content: 3.6, fatContent: 6.1, pH: 3.8, shrinkageTemp: 98 },
            { id: 5, date: '2024-05-20', batchNo: 'CY005', cr203Content: 3.8, fatContent: 6.0, pH: 4.0, shrinkageTemp: 100 },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'date', title: 'Test Tarihi', sortable: true },
            { accessor: 'batchNo', title: 'Parti No', sortable: true },
            { accessor: 'cr203Content', title: 'Cr2O3 İçeriği (%)', sortable: true },
            { accessor: 'fatContent', title: 'Yağ İçeriği (%)', sortable: true },
            { accessor: 'pH', title: 'pH Değeri', sortable: true },
            { accessor: 'shrinkageTemp', title: 'Büzülme Sıcaklığı (°C)', sortable: true },
        ],
        minAgeFilter: 'cr203Content',
        maxAgeFilter: 'cr203Content',
    },
];

//Energy Data

export const energyData: TabData[] = [
    {
        title: 'Enerji Kaynakları',
        data: [
            { id: 1, name: 'Ahmet Yılmaz', company: 'Deri A.Ş.', quality: 'A', quantity: 1000, price: 50, date: '2023-09-01' },
            { id: 2, name: 'Ayşe Kara', company: 'Kaliteli Deri Ltd.', quality: 'B', quantity: 800, price: 45, date: '2023-09-05' },
            { id: 3, name: 'Mehmet Demir', company: 'Anadolu Deri', quality: 'A', quantity: 1200, price: 55, date: '2023-09-10' },
            { id: 4, name: 'Fatma Şahin', company: 'Marmara Leather', quality: 'C', quantity: 600, price: 40, date: '2023-09-15' },
            { id: 5, name: 'Ali Öztürk', company: 'İstanbul Deri', quality: 'B', quantity: 900, price: 48, date: '2023-09-20' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'name', title: 'Tedarikçi Adı', sortable: true },
            { accessor: 'company', title: 'Şirket', sortable: true },
            { accessor: 'quality', title: 'Kalite', sortable: true },
            { accessor: 'quantity', title: 'Miktar (adet)', sortable: true },
            { accessor: 'price', title: 'Fiyat (TL)', sortable: true },
            { accessor: 'date', title: 'Tarih', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Enerji Tüketimi',
        data: [
            { id: 1, productName: 'Yarı İşlenmiş Deri A', supplier: 'XYZ Kimya', quantity: 500, processStage: 'Tabaklama Öncesi', deliveryDate: '2023-10-01' },
            { id: 2, productName: 'Yarı İşlenmiş Deri B', supplier: 'ABC Kimyasalları', quantity: 700, processStage: 'Boyama Öncesi', deliveryDate: '2023-10-05' },
            { id: 3, productName: 'Yarı İşlenmiş Deri C', supplier: 'LMN Endüstri', quantity: 600, processStage: 'Finisaj Öncesi', deliveryDate: '2023-10-10' },
            { id: 4, productName: 'Yarı İşlenmiş Deri D', supplier: 'PQR Chemicals', quantity: 800, processStage: 'Tabaklama Öncesi', deliveryDate: '2023-10-15' },
            { id: 5, productName: 'Yarı İşlenmiş Deri E', supplier: 'EFG Endüstriyel', quantity: 550, processStage: 'Boyama Öncesi', deliveryDate: '2023-10-20' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'productName', title: 'Ürün Adı', sortable: true },
            { accessor: 'supplier', title: 'Tedarikçi', sortable: true },
            { accessor: 'quantity', title: 'Miktar', sortable: true },
            { accessor: 'processStage', title: 'İşlem Aşaması', sortable: true },
            { accessor: 'deliveryDate', title: 'Teslim Tarihi', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
    {
        title: 'Enerji Skoru',
        data: [
            { id: 1, batchNo: 'TB001', leatherType: 'Sığır Derisi', quantity: 1000, tannin: 'Krom', startDate: '2023-11-01', endDate: '2023-11-05', status: 'Tamamlandı' },
            { id: 2, batchNo: 'TB002', leatherType: 'Keçi Derisi', quantity: 800, tannin: 'Bitkisel', startDate: '2023-11-03', endDate: '2023-11-08', status: 'Devam Ediyor' },
            { id: 3, batchNo: 'TB003', leatherType: 'Koyun Derisi', quantity: 1200, tannin: 'Krom', startDate: '2023-11-05', endDate: '2023-11-10', status: 'Başlamadı' },
            { id: 4, batchNo: 'TB004', leatherType: 'Sığır Derisi', quantity: 900, tannin: 'Sentetik', startDate: '2023-11-07', endDate: '2023-11-12', status: 'Devam Ediyor' },
            { id: 5, batchNo: 'TB005', leatherType: 'Keçi Derisi', quantity: 700, tannin: 'Krom', startDate: '2023-11-09', endDate: '2023-11-14', status: 'Başlamadı' },
        ],
        columns: [
            { accessor: 'id', title: 'ID', sortable: true },
            { accessor: 'batchNo', title: 'Parti No', sortable: true },
            { accessor: 'leatherType', title: 'Deri Tipi', sortable: true },
            { accessor: 'quantity', title: 'Miktar', sortable: true },
            { accessor: 'tannin', title: 'Tabaklama Maddesi', sortable: true },
            { accessor: 'startDate', title: 'Başlangıç Tarihi', sortable: true },
            { accessor: 'endDate', title: 'Bitiş Tarihi', sortable: true },
            { accessor: 'status', title: 'Durum', sortable: true },
        ],
        minAgeFilter: 'quantity',
        maxAgeFilter: 'quantity',
    },
];
