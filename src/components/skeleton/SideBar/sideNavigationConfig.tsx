import {ReactNode} from "react";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import {EPageType} from "../../pages/СustomizationPage/СustomizationPage";

export interface ISideNavigationConfig {
    path: string | null,
    name: string
    icon?: ReactNode
    routes?: ISideNavigationConfig[]
}


export const sideNavigationConfig: ISideNavigationConfig[] = [
    {path: '/', name: 'Статистика', icon: <QueryStatsIcon/>},

    {
        path: null, name: 'Настройки', icon: <SettingsIcon/>,
        routes: [
            {
                path: `customization/universities/${EPageType.table}`,
                name: 'Учебные заведения',
                icon: <SchoolOutlinedIcon/>
            },
        ]
    },
]