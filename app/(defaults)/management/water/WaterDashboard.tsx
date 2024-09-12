import TabComponent from '@/components/tabs/TabComponent';
import { productionData } from '@/lib/dataSet';

export default function WaterDashboard() {
    return <TabComponent tabsData={productionData} />;
}
