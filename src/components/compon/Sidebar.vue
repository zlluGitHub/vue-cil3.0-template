
<template>
  <Sider ref="side1" hide-trigger collapsible v-model="isCollapsed" :width="width" class="warp-sider">
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" v-if="!isCollapsed">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper"/>内容管理
        </template>
        <MenuItem name="1-1">文章管理</MenuItem>
        <MenuItem name="1-2">评论管理</MenuItem>
        <MenuItem name="1-3">举报管理</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-people" />用户管理
        </template>
        <MenuItem name="2-1">新增用户</MenuItem>
        <MenuItem name="2-2">活跃用户</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="3-1">新增和启动</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
    <!-- <ul class="side-nav" v-else>
      <li v-for="(item,i) in menulist" :key="i+'q'"  @mouseover="handleMouseOver(item.btnName)">
        <i class="ivu-icon ivu-icon-ios-navigate"></i>
        <ul class="ivu-layout-sider" v-for="(item,i) in item.children " :key="i+'q'">
          <li>{{item.btnName}}</li>
        </ul>
      </li>
    </ul>-->
    <div class="side-nav" v-else>
      <div class="side-list" v-for="(item,i) in menulist" :key="i+'q'">
        <Dropdown>
          <div>
            <Icon type="md-analytics" />
          </div>
          <DropdownMenu slot="list" v-if="item.children">
            <DropdownItem v-for="(item,i) in item.children " :key="i+'w'">{{item.btnName}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  </Sider>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
      mouseOver: "",
      menulist: [
        {
          btnName: "选项1111111",
          icoName: "fa fa-home fa-fw",
          children: [
            {
              icoName: "fa fa-adn",
              btnName: "选项1-1"
            }
          ]
        },
        {
          btnName: "选项2",
          children: [
            {
              fnHandler: "Handler5",
              btnName: "选项2-1"
            }
          ]
        },
        {
          btnName: "选项3",
          fnHandler: "Handler4"
        },
        {
          btnName: "选项4",
          disabled: true
        }
      ]
    };
  },
   props: ["width"],
  computed: {
    menuitemClasses() {
      return [this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  created() {
    this.$event.on("isCollapsed", e => {
      this.isCollapsed = e;
    });
  },
  mounted() {
    this.$refs.sideNav;
  },
  methods: {
    handleMouseOver(name) {
      this.mouseOver = name;
    }
  }
};
</script>
<style lang="scss" scoped>
.warp-sider{
  padding-top: 20px;
}





.side-nav {
  color: #fff;
  /deep/ .ivu-dropdown {
    position: relative !important;

    .ivu-dropdown-rel {
      padding: 15px 22px;
      cursor: pointer;
      i{
        font-size: 20px;
      }
    }
    .ivu-select-dropdown {
      top: 0px !important;
      left: 70px !important;
      background-color: #515a6e;
      padding: 10px 0;
      .ivu-dropdown-item {
        color: #fff;
        padding: 8px 20px;
      }
    }
  }
}
</style>