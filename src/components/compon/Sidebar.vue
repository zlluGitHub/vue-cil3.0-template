
<template>
  <Sider
    ref="side1"
    hide-trigger
    collapsible
    v-model="isCollapsed"
    :width="width"
    class="warp-sider"
  >
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" v-if="!isCollapsed">
      <!-- -->
      <div v-for="(item,i) in menulist" :key="i+'q1'">
        <MenuItem v-if="!item.children" name="1">
          <Icon :type="item.icoName" />
          <span>{{item.btnName}}</span>
        </MenuItem>
        <Submenu v-else :name="i+'q1'">
          <template slot="title">
            <Icon :type="item.icoName" />
            <span >{{item.btnName}}</span>
          </template>
          <MenuItem
            v-for="(item,key) in item.children "
            :key="key+'w1'"
            :name="i+key+'w1'"
          >{{item.btnName}}</MenuItem>
        </Submenu>
      </div>
    </Menu>

    <div class="side-nav" v-else>
      <div class="side-list" v-for="(item,i) in menulist" :key="i+'q'">
        <Dropdown>
          <div>
            <Icon :type="item.icoName" />
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
          icoName: "md-analytics",
          children: [
            {
              icoName: "ios-paper",
              btnName: "选项1-1"
            },
            {
              icoName: "ios-paper",
              btnName: "选项1-2"
            }
          ]
        },
        {
          btnName: "选项2",
          icoName: "ios-bookmarks",
          children: [
            {
              icoName: "ios-paper",
              btnName: "选项2-1"
            }
          ]
        },

        {
          btnName: "选项3",
          icoName: "logo-codepen",
          children: [
            {
              icoName: "ios-paper",
              btnName: "选项1-1"
            },
            {
              icoName: "ios-paper",
              btnName: "选项1-2"
            }
          ]
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
.warp-sider {
  padding-top: 20px;
  background: #001529;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

/deep/ .ivu-menu-dark,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  background: transparent;
}
/deep/ .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover {
  background: #515a6e30;
}

/deep/
  .ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-opened
  .ivu-menu-submenu-title {
  background: #515a6e30;
}
/deep/ .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  background: #515a6e30;
}
/deep/
  .ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: #515a6e30;
  color: rgba(255, 255, 255, 0.7);
}
/deep/ .ivu-menu-submenu-title {
  position: relative;
  span {
    // display: block;
    // display: inline-block;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
/deep/ .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
  text-indent: 5px;
}
/deep/ .ivu-menu-submenu-title:before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 0%;
  width: 4px;
  background-color: #009688;
  transition: all 0.2s ease;
}
/deep/ .ivu-menu-submenu:hover {
  .ivu-menu-submenu-title:before {
    height: 100%;
  }
}
/deep/ .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
  .ivu-menu-submenu-title:before {
    height: 100%;
  }
}
.side-nav {
  color: #fff;
  /deep/ .ivu-dropdown {
    position: relative !important;

    .ivu-dropdown-rel {
      padding: 15px 22px;
      cursor: pointer;
      i {
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