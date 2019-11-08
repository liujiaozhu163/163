import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import TopList from '@/components/topList/TopList'
import Personalized from '@/components/personalized/Personalized'
import Artist from '@/components/artist/Artist'
import Album from '@/components/album/Album'
import Dj from '@/components/dj/Dj'
import Singer from'@/components/artist/Singer'
import Mvs from'@/components/artist/Mvs'
import Detail from '@/components/personalized/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/topList',
      name: 'topList',
      component: TopList
    },
    {
      path: '/personalized',
      name: 'personalized',
      component: Personalized
    },
    {
      path: '/artist',
      name: 'artist',
      component: Artist
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    },
    {
      path: '/dj',
      name: 'dj',
      component: Dj
    },
    {
      path: '/singer/:id',
      name: 'singer',
      component: Singer
    },
    {
      path: '/mvs/:id',
      name: 'mvs',
      component: Mvs
    },
    {
    	path:'/detail/:id',
    	name:'detail',
    	component: Detail
    }
  ]
})
