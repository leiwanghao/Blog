/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\Users\\l2352\\Desktop\\vuepress-theme-reco-demo-demo-1.x\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-77b74740",
    path: "/theme-reco/plugin.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-77b74740").then(next)
    },
  },
  {
    name: "v-416bdab0",
    path: "/theme-reco/api.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-416bdab0").then(next)
    },
  },
  {
    name: "v-0030ed12",
    path: "/theme-reco/theme.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0030ed12").then(next)
    },
  },
  {
    name: "v-5bf142aa",
    path: "/theme-reco/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5bf142aa").then(next)
    },
  },
  {
    path: "/theme-reco/index.html",
    redirect: "/theme-reco/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]