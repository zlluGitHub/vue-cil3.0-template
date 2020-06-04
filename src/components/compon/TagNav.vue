<template>
  <div class="tags-nav">
    <div class="left-btn">
      <button type="button" class="ivu-btn ivu-btn-text">
        <span>
          <i class="ivu-icon ivu-icon-ios-arrow-back" style="font-size: 18px;"></i>
        </span>
      </button>
    </div>
    <div class="scroll-outer">
      <div class="scroll-body">
        <div class="ivu-tag ivu-tag-dot">
          <span class="ivu-tag-dot-inner"></span>
          <span class="ivu-tag-text">首页</span>
        </div>
        <div class="ivu-tag ivu-tag-primary ivu-tag-dot">
          <span class="ivu-tag-dot-inner"></span>
          <span class="ivu-tag-text">QQ群</span>
          <i class="ivu-icon ivu-icon-ios-close"></i>
        </div>
      </div>
    </div>
    <div class="right-btn">
      <div>
        <button type="button" class="ivu-btn ivu-btn-text">
          <span>
            <i class="ivu-icon ivu-icon-ios-arrow-forward" style="font-size: 18px;"></i>
          </span>
        </button>
      </div>

      <Dropdown trigger="click">
        <span class="close">
          <i class="ivu-icon ivu-icon-ios-close-circle-outline" style="font-size: 18px;"></i>
        </span>

        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "footers",
  props: {
    msg: String
  }
};
</script>
<style lang="scss" scoped>
.tags-nav {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  .scroll-outer {
    flex-grow: 1;
    box-shadow: inset 0 0 3px 1px hsla(0, 0%, 39.2%, 0.1);
    padding: 0 3px;
    background: rgba(238, 238, 238, 0.664);
  }
  .ivu-tag{
      cursor: pointer;
  }
  .right-btn {
    display: flex;
    border: 1px solid #f0f0f0;
    /deep/ .ivu-dropdown-rel{
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-left: 1px solid #f0f0f0;
    }
    .close:hover{
        color: #2d8cf0;
        cursor: pointer;
    }
  }
  
}
</style>
