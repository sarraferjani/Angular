import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TicketComponent } from '../../ticket/ticket.component';
import { InvoiceComponent } from '../../invoice/invoice.component';
import { ProductComponent } from '../../product/product.component';
import { DeviceunitComponent } from '../../deviceunit/deviceunit.component';
import { OrderComponent } from '../../order/order.component';
import { CartComponent } from '../../cart/cart.component';
import { NavbarComponent} from '../../navbar/navbar.component'

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'payment-back',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'ticket',        component: TicketComponent },
    { path: 'invoice',        component: InvoiceComponent },
    { path: 'product',        component: ProductComponent },
    { path: 'order',        component: OrderComponent },
    { path: 'deviceunit',        component: DeviceunitComponent },
    { path: 'cart',        component: CartComponent },
    { path: 'navbar',        component: NavbarComponent },
];
