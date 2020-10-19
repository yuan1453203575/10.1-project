export default {
    path: "/",
    redirect: '/home',
    component: () => import("../layout/Index"),
    children: [
      // 首页
      {
        path: "/home",
        name: "home",
        redirect: "/home/system-home",
        component: {
            //直接提供组件的render函数，不需要vue文件了。
            render: (h) => <router-view />,
        },
        meta: {
          //路由的数据
          title: "首页",
        },
        children: [
            {
                path: 'system-home',
                name: 'system-home',
                component: () => import('../views/home/SystemHome'),
                meta: {
                    title: '系统首页',
                }
            },
            {
                path: 'account-setting',
                name: 'account-setting',
                component: () => import('../views/home/AccountSetting'),
                meta: {
                    title: '账户设置',
                }
            }
        ]
      },
      //商品
      {
        path: "goods",
        name: "goods",
        component: {
            //直接提供组件的render函数，不需要vue文件了。
            render: (h) => <router-view />,
          },
        redirect: "/goods/goods-list",
        meta: {
          //路由的数据
          title: "商品",
        },
        children: [
            {
                path: 'goods-list',
                name: 'goods-list',
                component: () => import('../views/goods/GoodsList'),
                meta: {
                    title: '商品列表',
                }
            },
            {
                path: 'add-Goods',
                name: 'add-Goods',
                component: () => import('../views/goods/AddGoods'),
                meta: {
                    title: '添加商品',
                }
            },
            {
                path: '商品分类',
                name: 'goods-category',
                component: () => import('../views/goods/GoodsCategory'),
                meta: {
                    title: '商品分类',
                }
            }
        ]
      },
      //订单
      {
        path: 'order',
        name: 'order',
        component: {
            //直接提供组件的render函数，不需要vue文件了。
            render: (h) => <router-view />,
        },
        redirect: '/order/order-list',
        meta: {
            title: '订单',
        },
        children: [
            {
                path: 'order-list',
                name: 'order-list',
                component: () => import('../views/order/OrderList'),
                meta: {
                    title: '订单列表',
                }
            }
        ]
      },
      //用户
      {
        path: 'user',
        name: 'user',
        component: {
            //直接提供组件的render函数，不需要vue文件了。
            render: (h) => <router-view />,
        },
        redirect: '/user/user-list',
        meta: {
            title: '用户',
        },
        children: [
            {
                path: 'user-list',
                name: 'user-list',
                component: () => import('../views/user/UserList'),
                meta: {
                    title: '用户列表',
                }
            }
        ]
      },
      //权限
      {
        path: 'limit',
        name: 'limit',
        component: {
            //直接提供组件的render函数，不需要vue文件了。
            render: (h) => <router-view />,
        },
        redirect: '/limit/member-management',
        meta: {
            title: '权限',
        },
        children: [
            {
                path: 'member-management',
                name: 'member-management',
                component: () => import('../views/limit/MemberManagement'),
                meta: {
                    title: '成员管理',
                }
            }
        ]
      }
    ],
  };
  