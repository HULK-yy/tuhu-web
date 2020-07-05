<template>
  <div id="product-overlay">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="在线客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button @click="addBtn" type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="按车型购买" />
    </van-goods-action>
    <van-overlay :show="showPopup">
      <div class="popup-box">
        <div class="vis-popup-box">
          <div class="product-top">
            <img :src="shopProduct.Image.ImageUrls[0]" style="height:120px">
            <div class="current-price">
              <span style="font-size:15px">¥</span>
              <span style="font-size:25px">{{ shopProduct.MarketingPrice }}</span>
            </div>
            <div class="vip-price">
              <span>¥{{ shopProduct.Price }}</span>
              <img src="@/assets/车品/黑卡标签 copy 4@3x.png" />
            </div>
            <van-icon name="cross" @click="onClickCross" class="cross" />
          </div>
          <div class="product-msg">
            <div class="msg msg-color">
              <div class="title">颜色</div>
              <van-tag class="tag"
                @click="chooseColor(shopProduct.ShuXing2)"
                size="large" round 
                :color="tagColor?'#ffe1e1':'#eee'"
                :text-color="tagColor?'red':'black'">
                {{ shopProduct.ShuXing2 }}
              </van-tag>
            </div>
            <div class="msg msg-size">
              <div class="title">尺寸</div>
              <van-tag 
                @click="chooseSize(shopProduct.ProductSize)"
                size="large" round 
                :color="tagSize?'#ffe1e1':'#eee'"
                :text-color="tagSize?'red':'black'">
                {{ shopProduct.ProductSize }}
              </van-tag>
            </div>
            <div class="msg msg-num">
              <div class="title number">数量</div>
              <van-stepper v-model="tagNum" style="float: right"/>
            </div>
          </div>
          <div class="btn" @click="onClickAsk">确认</div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from 'axios';
interface ChooseMsg {
  color: string;
  size: string;
  num: string;
}
@Component
export default class ProductOverly extends Vue {
  @Prop() private msg!: string;
  @Prop() public shopProduct?: Object;
  @Prop() public sTimer?: number;
  showPopup: boolean = false;
  tagColor: boolean = false;
  tagSize: boolean = false;
  tagNum: number = 0;
  pid: string = '';
  chooseData: ChooseMsg = {color: '', size: '', num: ''};

  addBtn() {
    this.showPopup = true;
  }
  onClickAsk() {
    this.pid = this.shopProduct.Pid;
    axios.post('https://geylnu.com/tuhu/clickElement', {
      elementId: 'btn',
      th_app_id: 'web',
      productId: this.pid
    })
    this.showPopup = false;
    if(this.tagColor && this.tagSize){
      this.chooseData.num = this.tagNum + "件";
    }
    this.$emit('my-event', this.chooseData);
  }
  onClickCross() {
    this.showPopup = false;
  }
  chooseColor(getColor: string) {
    this.tagColor = !this.tagColor;
    if(this.tagColor){
      this.chooseData.color = getColor;
    }else{
      this.chooseData.color = '';
    }
  }
  chooseSize(getSize: string) {
    this.tagSize = !this.tagSize;
    if(this.tagColor){
      this.chooseData.size = getSize;
    }else{
      this.chooseData.size = '';
    }
  }
}
</script>

<style scoped lang="less">
#product-overlay{
  box-sizing: border-box;
}
.van-goods-action{
  width: 360px;
}
.popup-box{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .vis-popup-box{
    width: 100%;
    height: 85%;
    border-radius: 3px 3px 0 0;
    background-color: #fff;
    .product-top{
      position: relative;
      box-sizing: border-box;
      height: 30%;
      padding: 15px 15px;
      div{
        display: inline-block;
      }
      .current-price{
        font-size:15px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(223,52,72,1);
        margin-left: 10px;
      }
      .vip-price{
        color: #b49e70;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        font-size: 15px;
        margin-left: 4px;
        img{
            height: 16px;
            margin-left: 2px;
            margin-bottom: -2px;
        }
      }
      .cross{
        position: absolute;
        top: 15px;
        right: 15px;
      }
    }
    .product-msg{
      box-sizing: border-box;
      height: 58%;
      padding: 0 16px;
      .title{
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 1000;
        font-size: 18px;
        color: black;
        margin-bottom: 10px;
      }
      .tag{
        margin-right: 22px;
      }
      .msg{
        margin-bottom: 20px;
      }
      .msg-num{
        div{
          display: inline-block;
        }

      }
    }
    .btn{
      background-color: red;
      border-radius: 20px;
      width: 90%;
      margin: 0 auto;
      text-align: center;
      padding: 10px 0;
      color: #fff;
    }
  }
}
</style>


