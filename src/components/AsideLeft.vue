<template>
  <aside>
    <ul>
      <li
        v-for="(node, i) in asideData"
        :key="node.type + 'key' + i"
        @mousedown="handlerMousedown($event, node.type + '-node-' + i)"
      >
        <div class="menu-item" :id="node.type + '-node-' + i">
          开始
          <div>是问问的</div>
          <p>是的</p>
        </div>
      </li>
    </ul>
  </aside>
</template>
从vvvvvv
<script>
export default {
  name: "aside-left",
  data() {
    return {
      copyNode: null,
      nodePosition: {},
      asideData: [
        {
          nodeName: "scsds",
          type: "adsd",
        },
        {
          nodeName: "scsds",
          type: "adsd",
        },
        {
          nodeName: "scsds",
          type: "adsd",
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    document.querySelector("#zll-index").onmousemove = (e) => {
      let event = e || window.event || event;
      if (this.copyNode) {
        this.copyNode.style.top = `${event.y - this.nodePosition.offsetY}px`;
        this.copyNode.style.left = `${event.x - this.nodePosition.offsetX}px`;
      }
    };
    document.querySelector("#zll-index").onmouseup = (e) => {
      let event = e || window.event || event;
      if (this.copyNode) {
        this.copyNode.remove();
        this.copyNode = null;
      }
    };
  },
  methods: {
    handlerMousedown(e, id) {
      let event = e || window.event || event;
      let offsetY = 0;

      let node = document.querySelector("#" + id); //复制节点
      this.nodePosition = {
        offsetX: event.x - node.offsetLeft,
        offsetY: event.y - node.offsetTop,
      };
      this.copyNode = node.cloneNode(true);
      this.copyNode.className += " copy";
      this.copyNode.style.top = `${event.y - this.nodePosition.offsetY}px`;
      this.copyNode.style.left = `${event.x - this.nodePosition.offsetX}px`;
      node.parentNode.appendChild(this.copyNode);
    },
  },
};
</script>

<style scoped lang="scss">
aside {
  ul {
    li {
      margin-bottom: 10px;
      .menu-item {
        background: coral;
        cursor: move;
        user-select: none;
        width: 80px;
        height: 65px;
      }
      .copy {
        position: fixed;
        // z-index: 99999;
      }
    }
  }
}
</style>
