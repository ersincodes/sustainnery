import TabComponent from '@/components/tabs/TabComponent';
import { energyData } from '@/lib/dataSet';

export default function EnergyDashBoard() {
    return <TabComponent tabsData={energyData} />;
}
