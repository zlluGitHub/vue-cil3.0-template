import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash', //默认 有#号
  routes: [
    {
      path: '/',
      name: 'Section',
      component: () => import('../components/content/Section.vue')
    },
    // {
    //   path: '/second',
    //   name: 'secondIndex',
    //   component: secondIndex,
    //   redirect: '/Index',//设置默认指向的路径
    //   children: [ //这里就是二级路由的配置
    //     {
    //       path: '/talent',
    //       name: 'TalentMain',
    //       component: TalentMain
    //     }
    //   ]
    // },
  ]
})
