<template>
  <div>
    <button>原生按钮</button>
    <input type="text">
    <meta-row>
    <meta-button>默认按钮</meta-button>
    <meta-button type="primary">主要按钮</meta-button>
    <meta-button type="success">成功按钮</meta-button>
    <meta-button type="info">信息按钮</meta-button>
    <meta-button type="warning">警告按钮</meta-button>
    <meta-button type="danger">危险按钮</meta-button>
    </meta-row>
    <meta-date-picker
      type="date"
      placeholder="选择日期">
    </meta-date-picker>
    <meta-row>
    <meta-button icon="el-icon-search" circle></meta-button>
    <meta-button type="primary" icon="el-icon-edit" circle></meta-button>
    <meta-button type="success" icon="el-icon-check" circle></meta-button>
    <meta-button type="info" icon="el-icon-message" circle></meta-button>
    <meta-button type="warning" icon="el-icon-star-off" circle></meta-button>
    <meta-button type="danger" icon="el-icon-delete" circle></meta-button>
    </meta-row>
  </div>
</template>

<script>
  export default {
      name:'App',
  }
</script>

