<template>
  <header>
    <div class="left">
      <div class="logo" :style="{width:logoWidth}">
        <img src="../../assets/img/logo.png" alt="logo" />
        <h1>前端模板</h1>
      </div>
      <div class="warp">
        <Icon
          @click="collapsedSider"
          :class="rotateIcon"
          type="md-menu"
        ></Icon>
      </div>
    </div>
    <ul class="right">
      <li>
        <Tooltip content="全屏放大" placement="bottom">
          <Icon type="ios-move" size="26"></Icon>
        </Tooltip>
      </li>
      <li>
        <Badge dot>
          <Tooltip content="消息" placement="bottom">
            <Icon type="ios-notifications-outline" size="26"></Icon>
          </Tooltip>
        </Badge>
      </li>
      <li>
        <Tooltip content="锁屏" placement="bottom">
          <Icon type="ios-unlock-outline" size="26"></Icon>
        </Tooltip>
      </li>
      <li>
        <Dropdown trigger="click" style="margin-left: 20px">
          <div class="author">
            <img src="../../assets/img/logo.png" alt="logo" />
            <span>管理员</span>
            <Icon type="md-arrow-dropdown" size="22" />
          </div>
          <DropdownMenu slot="list">
            <DropdownItem>个人中心</DropdownItem>
            <DropdownItem>修改密码</DropdownItem>
            <DropdownItem divided>退出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      logoWidth: this.width
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  props: ["width"],
  mounted(){

  },
  methods: {
    collapsedSider() {
      this.isCollapsed = !this.isCollapsed;
      this.logoWidth = this.isCollapsed ? "64px" : this.width;
      this.$event.emit("isCollapsed", this.isCollapsed);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  // background: #242f42;
  // color: #fff;
  // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  .left {
    display: flex;
    .logo {
      display: flex;
      padding: 8px 15px;
      padding-top: 12px;
      transition: width 0.2s ease-in-out;
      // align-items: center;
      // border-bottom: 1px solid rgba(255, 255, 255, 0.075);
      background: #515a6e;
      img {
        width: 28px;
        height: 28px;
        margin-right: 8px;
      }
      h1 {
        font-size: 15px;
        align-self: flex-end;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
      }
    }
    .warp{
      display: flex;
      align-items: center;
    }
  }
  .right {
    display: flex;
    align-items: center;
    margin-right: 20px;
    > li {
      margin: 0 20px;
      text-align: center;
      cursor: pointer;
    }
    .author {
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
/deep/ .ivu-icon-md-menu {
  transition: all 0.3s;
  cursor: pointer;
  font-size: 24px;
  padding: 5px 20px;
}
/deep/ .rotate-icon {
  transform: rotate(-90deg);
}
</style>
