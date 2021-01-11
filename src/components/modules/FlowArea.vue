<template>
  <div class="flow-area" id="we" ref="flowArea" @mouseup="handlerMouseup">
    <flow-node
      v-for="(item, i) in nodes"
      :key="'node' + i"
      :id="item.id"
      :node="item"
      shape="square"
      :style="{ top: item.y + 'px', left: item.x + 'px' ,cursor}"
    >
      <p>{{ item.name }}</p>
    </flow-node>
  </div>
</template>

<script>
import FlowNode from "./FlowNode";
import jsplumb from "jsplumb";
import {
  jsPlumbConfig,
  flowAnchors,
  flowAnchor,
  flowData,
} from "@/config/flow.config.js";
export default {
  name: "FlowArea",
  components: { FlowNode },
  data() {
    return {
      nodes: [],
      cursor:'move'
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    // jsPlumb.ready(() => {
    this.initFlowCanvas(flowData);
    // });
  },
  methods: {
    toggleDraggable(type) {
      if (type==='connection') {
         this.cursor = 'crosshair'
      }else  if (type==='drag-drop') {
         this.cursor = 'move'
      }
     
      flowData.nodes.forEach(function (node, index) {
        let f = jsPlumb.toggleDraggable(node.id);
        if (!f) {
          let config = { ...jsPlumbConfig, ...{ anchor: flowAnchor } };
          jsPlumb.makeSource(node.id, config);
          jsPlumb.makeTarget(node.id, config);
        } else {
          jsPlumb.unmakeSource(node.id);
          jsPlumb.unmakeTarget(node.id);
        }
      });
    },
    handlerMouseup(e) {
      console.log(e);
      // let node = {
      //   type: "start",
      //   name: "开始d4",
      //   id: "asfas14",
      //   icon: "pause-circle",
      //   height: 0,
      //   width: 0,
      //   x: e.offsetX,
      //   y: e.offsetY,
      // };
      // this.nodes.push(node);
      // this.$nextTick(() => {
      //   let config = { ...jsPlumbConfig, ...{ anchor: flowAnchor } };
      //   jsPlumb.makeSource(node.id, config);
      //   jsPlumb.makeTarget(node.id, config);

      //   // flowAnchors.forEach((anchor) => {
      //   //   jsPlumb.addEndpoint(node.id, { anchor }, jsPlumbConfig);
      //   // });

      //   jsPlumb.draggable(node.id, true);
      // });
      console.log(this.nodes);
    },

    initFlowCanvas(data) {
      // jsPlumb.clear();
      //  jsPlumb.destroy();
      jsPlumb.getInstance({});
      console.log(jsPlumb);
      // jsPlumb.importDefaults({
      //   ConnectionsDetachable: false,
      // });
      jsPlumb.ready(() => {
        // this.nodes.forEach((node, index) => {
        //   this.$nextTick(() => {
        //     jsPlumb.remove(node.id);
        //   });
        // });

        jsPlumb.deleteEveryEndpoint();
        jsPlumb.deleteEveryConnection();
        // jsPlumb.unmakeEverySource();
        // jsPlumb.unmakeEveryTarget();
        // jsPlumb.doReset()
        // jsPlumb.unbindContainer();
        // jsPlumb.undraggable();
        // jsPlumb.setSuspendDrawing(true);
        // jsPlumb.setSuspendDrawing(false, true);
        this.loadFlowData(data ? data : { links: [], nodes: [] });
      });
    },

    // 初始化flow数据
    loadFlowData(data) {
      // this.$refs.flowArea.remove();
      this.nodes = data.nodes;
      // .map((item) => {
      //   item.handleType = this.$store.state.flowMenuObj.type;
      //   return item;
      // });
      // jsPlumb.importDefaults({
      //   ConnectionsDetachable: true,
      // });

      // jsPlumb.batch(() => {
      //   console.log("batch");
      // });
      let links = data.links;
      // data.nodes.forEach((node) => {
      //   console.log(type);
      //   this.$nextTick(() => {
      //     if (type === "connection") {
      //       let config = { ...jsPlumbConfig, ...{ anchor: flowAnchor } };
      //       // jsPlumb.makeSource(node.id, config);
      //       // jsPlumb.makeTarget(node.id, config);
      //       //   jsPlumb.stopDrag(node.id);
      //       //   jsPlumb.unbindDraggable(node.id);
      //       //   console.log(jsPlumb.isAlreadyDraggable(node.id));
      //       // } else if (type === "drag-drop") {
      //       jsPlumb.draggable(node.id, {
      //         containment: "parent",
      //         handle: () => {
      //           console.log("sds");
      //         },
      //         grid: flowConfig.defaultStyle.alignGridPX,
      //         drag: function (e) {
      //           console.log("sds1");
      //           // if (flowConfig.defaultStyle.isOpenAuxiliaryLine) {
      //           //   that.$emit("alignForLine", e);
      //           // }
      //         },
      //         stop: function (e) {
      //           console.log("sds2");
      //           // that.node.x = e.pos[0];
      //           // that.node.y = e.pos[1];
      //           // if (that.currentSelectGroup.length > 1) {
      //           //   that.$emit("updateNodePos");
      //           // }
      //           // that.$emit("hideAlignLine");
      //         },
      //       });
      //     }

      //     // flowAnchors.forEach((anchor) => {
      //     //   jsPlumb.addEndpoint(node.id, { anchor }, jsPlumbConfig);
      //     // });
      //   });
      // });

      links.forEach((link, index) => {
        this.$nextTick(() => {
          jsPlumb.connect(
            {
              source: link.sourceId,
              target: link.targetId,
            },
            {
              // uuids: ["point-" + link.sourceId, "point-" + link.targetId],
              isSource: jsPlumbConfig.isSource, // 是否可以拖动（作为连线起点）
              isTarget: jsPlumbConfig.isTarget, // 是否可以放置（连线终点）
              //连线的样式
              paintStyle: jsPlumbConfig.connectorStyle, //连线的样式
              hoverPaintStyle: jsPlumbConfig.connectorHoverStyle,

              //  锚点
              endpoint: jsPlumbConfig.endpoints,
              endpointStyle: jsPlumbConfig.paintStyle,
              endpointHoverStyle: jsPlumbConfig.hoverPaintStyle,

              connector: jsPlumbConfig.connector,
              anchor: flowAnchor,
              overlays: jsPlumbConfig.connectorOverlays,
            }
          );

          // if (link.label != "") {
          //   conn.setLabel({
          //     label: link.label,
          //     cssClass: "linkLabel",
          //   });
          // }
        });
      });
      // that.plumb.bind("beforeDrop", function (info) {
      //   // let sourceId = info.sourceId;
      //   // let targetId = info.targetId;

      //   // if (sourceId == targetId) return false;
      //   // let filter = that.flowData.linkList.filter(
      //   //   (link) => link.sourceId == sourceId && link.targetId == targetId
      //   // );
      //   // that.$message.destroy();
      //   // if (filter.length > 0) {
      //   //   that.$message.error("同方向的两节点连线只能有一条！");
      //   //   return false;
      //   // }
      //   return true;
      // });

      that.plumb.bind("connection", function (conn, e) {});
      that.plumb.bind("beforeDrop", function (conn, e) {});
      // 连线击事件操作
      jsPlumb.bind("click", function (conn, originalEvent) {
        console.log("删除连线", conn);
        // 删除连线
        jsPlumb.deleteConnection(conn);
      });
    },
    addNode() {
      this.$nextTick(() => {
        console.log(node.id);
        // jsPlumb.makeSource(node.id, jsPlumbConfig);

        // jsPlumb.makeTarget(node.id, jsPlumbConfig);
        jsPlumb.draggable(node.id, true);
        // console.log(jsPlumb.draggable(node.id,true));
      });
    },
  },
};
</script>

<style scoped lang="scss">
.flow-area {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
