<template>
<div class="gx-container gx-work-con">
    <Tab :list='tabList' @tab-change='tabChange'/>

    <div id="tabContent" class="gx-tab-content">
        <div v-show="activeKey===0">
            <ul class="work-list-ul">
                <Card type='workOrder'  :item='item' v-for="(item, index) in allList" :key="index" />

                <!-- <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list1.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">每周一消防基础巡检（14周）</p>
                        <p class="work-list-time"><span>李明</span> | <span>基础巡检</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-processed">未完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list2.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">每月消防网络巡检（4月）</p>
                        <p class="work-list-time"><span>李明</span> | <span>网络巡检</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list3.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">每日消防网络巡检</p>
                        <p class="work-list-time"><span>李明</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list4.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">临时巡检</p>
                        <p class="work-list-time"><span>李明</span> | <span>临时巡检</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li> -->
            </ul>
            <div class="list-bottom-img"></div>
        </div>
        <div v-show="activeKey===1">
            <ul class="work-list-ul">
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list1.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">每周一消防基础巡检（14周）</p>
                        <p class="work-list-time"><span>李明</span> | <span>基础巡检</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-processed">未完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list2.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">每月消防网络巡检（4月）</p>
                        <p class="work-list-time"><span>李明</span> | <span>网络巡检</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list3.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">每日消防网络巡检</p>
                        <p class="work-list-time"><span>李明</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list4.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">临时巡检</p>
                        <p class="work-list-time"><span>李明</span> | <span>临时巡检</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list4.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">临时巡检</p>
                        <p class="work-list-time"><span>李明</span> | <span>临时巡检</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
            </ul>
            <div class="list-bottom-img"></div>
        </div>
        <div v-show="activeKey===2">
            <ul class="work-list-ul">
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list1.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">每周一消防基础巡检（14周）</p>
                        <p class="work-list-time"><span>李明</span> | <span>基础巡检</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-processed">未完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                    <div  class="work-list-img">
                        <img src="images/patrol_list3.png">
                    </div>
                    <div class="work-list-right">
                        <p class="work-list-title">每日消防网络巡检</p>
                        <p class="work-list-time"><span>李明</span></p>
                        <p class="work-list-info">
                            <span>2020-02-23 13:23:30</span>
                            <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                        </p>
                    </div>
                </li>
                <li class="work-list-li">
                <div  class="work-list-img">
                    <img src="images/patrol_list4.png">
                </div>
                <div class="work-list-right">
                    <p class="work-list-title">临时巡检</p>
                    <p class="work-list-time"><span>李明</span> | <span>临时巡检</span></p>
                    <p class="work-list-info">
                        <span>2020-02-23 13:23:30</span>
                        <a href="javascript:;" class="work-list-state work-list-complete">已完成<i class="icon-arrow"></i></a>
                    </p>
                </div>
            </li>
            </ul>
            <div class="list-bottom-img"></div>
        </div>
    </div>
</div>

</template>

<script>
import Tab from '@/components/tab/index.vue'
import Card from '@/components/card/card.vue'

export default {
  data () {
    return {
        activeKey:0,
      tabList: [
          {
              label:'全部',
              count:'10',
              key:0
          },
          {
              label:'待处理',
              count:'10',
              key:1
          },
          {
              label:'已完成',
              count:'10',
              key:2
          },
      ],
      allList:[
          {
              imgUrl:'/static/assets/images/patrol_list1.png',
              name:'每周一消防基础巡检（14周）',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              summary:'李明 | 临时巡检'
          },{
              imgUrl:'/static/assets/images/patrol_list2.png',
              name:'每月消防网络巡检（4月）',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },{
              imgUrl:'/static/assets/images/patrol_list3.png',
              name:'每日消防网络巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
          {
              imgUrl:'/static/assets/images/patrol_list4.png',
              name:'临时巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
      ],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    Tab,
    Card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    tabChange(index) {
        console.log(index);
        
        this.activeKey=index
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
