export const ROUTES = [
    {
        path: '#wallet', id: 'wallet', title: 'Wallet', icon: 'apps', children: [
            { path: 'wallet/create', title: 'Create Wallet', icon: 'C' },
            { path: 'wallet/send', title: 'Send From Wallet', icon: 'S' }
        ]
    },
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'profile', title: 'User Profile', icon: 'person', children: null },
    { path: 'table', title: 'Table List', icon: 'content_paste', children: null },
    { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];