import { Routes } from '@angular/router';

const routes: Routes = [
  // JHipster'ın login sayfası, diğerleri geçici olarak kaldırıldı
  {
    path: 'login',
    loadComponent: () => import('app/login/login.component'),
    title: 'Giriş Yap',
  },
  // Ana sayfa ve diğer tüm sayfalar için ana çerçeve
  {
    path: '',
    loadComponent: () => import('app/layouts/main/main.component'),
    children: [
      {
        path: '', // Ana sayfa (örn: localhost:9000/)
        loadComponent: () => import('app/home/home.component'),
        title: 'Ana Sayfa',
      },
      {
        path: 'ekibimiz', // localhost:9000/ekibimiz
        loadComponent: () => import('app/pages/team/team.component').then(m => m.TeamComponent),
        title: 'Ekibimiz',
      },
      {
        path: 'hakkimizda-biz-kimiz',
        loadComponent: () => import('app/pages/about/who-we-are/who-we-are.component').then(m => m.WhoWeAreComponent),
        title: 'Biz Kimiz?',
      },
      {
        path: 'yonetim-sistemi-politikasi',
        loadComponent: () => import('app/pages/about/management-policy/management-policy.component').then(m => m.ManagementPolicyComponent),
        title: 'Entegre Yönetim Sistemi Politikası',
      },
      {
        path: 'gizlilik-politikasi',
        loadComponent: () => import('app/pages/about/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
        title: 'Gizlilik Politikası',
      },
      {
        path: 'iletisim',
        loadComponent: () => import('app/pages/contact/contact.component').then(m => m.ContactComponent),
        title: 'İletişim',
      },
    ],
  },
];

export default routes;
