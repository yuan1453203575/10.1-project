<template>
  <div class="add-goods">
    <div class="title">
      <h1>商品列表</h1>
      <span>刷新</span>
    </div>
    <div class="list">
      <div class="tit">添加商品</div>
      <div class="info">
        <p><label>商品编号:</label><input type="text" placeholder="请输入商品编号" v-model="id"></p>
        <p><label>商品名称:</label><input type="text" placeholder="请输入商品名称" v-model="goodsname"></p>
        <p>
          <label>商品编号:</label>
          <select v-model="goodstype">
            <option value="A类" selected>A类</option>
            <option value="B类">B类</option>
            <option value="C类">C类</option>
          </select>
        </p>
        <p><label>商品价格:</label><input type="text" placeholder="请输入商品价格" v-model="goodsprice"></p>
      </div>
      <button @click="addGoods">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      goodsname: '',
      goodstype: '',
      goodsprice: '',
    }
  },
  methods: {
    addGoods() {
      this.$store.dispatch('goods/addGoodsList',{id:this.id,goodsname:this.goodsname,goodstype:this.goodstype,goodsprice:this.goodsprice});
    }
  },

}
</script>

<style lang="scss" scoped>
.add-goods {
  background-color: #FAFAFA;
  .title {
    width: 100%;
    height: 80px;
    background-color: #F2F2F2;
    border-bottom: 1px solid #E4E4E4;
    padding-left: 40px;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #767676;
      font-size: 18px;
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 10px;
        height: 25px;
        background-color: #0099FF;
        position: absolute;
        left: -20px;
        top: -2px;
      }
    }
    span {
      cursor: pointer;
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 80px;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    margin: 20px;
    border: 1px solid #ccc;
    background-color: #e4e4e4;
    .tit {
      line-height: 60px;
      font-size: 20px;
      color: #333;
    }
    .info {
      margin-top: 20px;
      p {
        margin-bottom: 20px;
        label {
          margin-right: 20px;
        }
        input {
          width: 200px;
          height: 20px;
        }
        select {
          width: 200px;
          height: 26px;
        }
      }
    }
  }
}
</style>