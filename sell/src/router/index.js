import Vue from 'vue';
import Router from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import sellers from 'components/sellers/sellers';
import '../common/stylus/index.styl';
import VueResource from 'vue-resource';

Vue.use(Router);
Vue.use(VueResource);

const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/sellers',
    component: sellers
  }
  ];

const router = new Router({
  routes,
  linkActiveClass: 'active'
});

router.replace('/goods');
export default router;
