export interface Column {
    accessor: string;
    title: string;
    sortable: boolean;
    render?: (props: any) => React.ReactNode;
}

export interface TabData {
    title: string;
    data: any[];
    columns: Column[];
    addFormFields?: string[];
    addEnabled?: boolean;
    minAgeFilter?: string;
    maxAgeFilter?: string;
    dateField?: string;
}

export interface RSLTest {
    id: string;
    reportNo: string;
    testDate: string;
    testingLab: string;
    result: boolean;
    recipeNo: number;
    material: string;
}

export interface ProductLine {
    productName: string;
    color: string;
    thickness: string;
    retannageCount: number;
    producedSquareMeters: number;
}

export interface Customer {
    customerName: string;
    customerType: string;
    authorizedPerson: string;
    contactMethod: number;
    email: string;
}

export interface CustomerContact {
    contactDate: string;
    contactType: number;
    contactPerson: string;
    responseDate: string;
    rslAcceptanceOrAddition: boolean;
}

export interface Cr6Test {
    reportNo: string;
    testDate: string;
    testingLab: string;
    resultWithAging: boolean;
    article: string;
}
export interface ChemicalSupplierContact {
    id: string;
    supplierName: string;
    contactDate: string;
    contactType: number;
    contactPerson: string;
    responseDate: string;
    sentBy: string;
    acceptanceOrAddition: boolean;
    version: string;
    rslMeetDate: string;
}
export interface Production {
    id: string;
    category: number;
    productionStrategy: number;
    rawHidetoWBLeatherPiece: number;
    rawHidetoWBLeatherWeight: number;
    wbLeatherM2: number;
    rawHidetoLimedPiece: number;
    rawHidetoLimedWeight: number;
    limedHidetoSplitWBLeatherPiece: number;
    limedHidetoSplitWBLeatherWeight: number;
    splitWBtoCrustLeatherSuedPiece: number;
    splitWBtoCrustLeatherSuedWeight: number;
    wbGrainLeathertoCrustLeatherPiece: number;
    wbGrainLeathertoCrustLeatherWeight: number;
    nubuckPiece: number;
    finishingApplied: number;
    totalWB: number;
    totalFinished: number;
}

export interface Cr2o3OilTest {
    id: string;
    date: string;
    testReportNo: string;
    batchNo: string;
    lab: string;
    sampleDate: string;
    bathTotalChromiumContent_Cr_mg_l: number;
    wbTotalChromiumContentCr_mg_kg_percentage: number;
    fatPercentageDetermination: number;
}
