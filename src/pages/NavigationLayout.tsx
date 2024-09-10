import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function NavigationLayout() {
    return <><MainNavigation /><Outlet /></>
}

export default NavigationLayout;
