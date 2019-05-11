import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import payBoxCom from '@/components/payBoxCom'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: 'Main',
			component: main
		},{
      path: '/payBoxCom',
      name: 'payBoxCom',
      component: payBoxCom
    }
  ]
})
