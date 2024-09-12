import TabComponent from '@/components/tabs/TabComponent';
import { productionData } from '@/lib/dataSet';

export default function ProductionDashboard() {
    return <TabComponent tabsData={productionData} />;
}
