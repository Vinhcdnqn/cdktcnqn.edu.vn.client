import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    //cái này là chỗ khi chạy localhost:4200 là nó nhận đầu tiên
    path: '',//trống ko có gì
    redirectTo: 'dashboard',//thay thành cái này khỏi chuyển login
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  }, 
  {
    //đây là chỗ nãy định nghĩa
    path: 'login',
    loadChildren: './login/login.module#LoginModule'//nó mở module này
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Danh mục'
    },
    children: [
      {
        path: 'file',
        children: [
          {
            path: '',
            loadChildren: './views/file/file.module#FileModule'
          }
        ]
      },
      {
        path: 'vanbanphapquy',
        children: [
          {
            path: '',
            loadChildren: './views/vanbanphapquy/vanbanphapquy.module#VanbanphapquyModule'
          }
        ]
      },
      {
        path: 'lienhe',
        children: [
          {
            path: '',
            loadChildren: './views/lienhe/lienhe.module#LienheModule'
          }
        ]
      },
      {
        path: 'hoidap',
        children: [
          {
            path: '',
            loadChildren: './views/hoidap/hoidap.module#HoidapModule'
          }
        ]
      },
      {
        path: 'hinhanhhoatdong',
        children: [
          {
            path: '',
            loadChildren: './views/hinhanhhoatdong/hinhanhhoatdong.module#HinhanhhoatdongModule'
          }
        ]
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },      
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
