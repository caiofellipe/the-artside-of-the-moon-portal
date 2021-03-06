import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {ArtemisComponent} from './artemis/artemis.component'
import {VrComponent} from './vr/vr.component'
import {SobreComponent} from './sobre/sobre.component'

export const ROUTE: Routes = [
    {path: '', component: HomeComponent},
    {path: 'artemis', component: ArtemisComponent},
    {path: 'vr', component: VrComponent},
    {path: 'sobre', component: SobreComponent}
]

