<template>
  <div id="comment-detail">
    <div id="comment-card" v-for="(comment,i) in commentList" :key="i">
      <div class="divide"></div>
      <div class="comment-top">
        <div class="head-box">
          <div class="head-img">
            <span class="head-circle">
              <img :src="comment.HeadImage" />
            </span>
          </div>
          <div style="margin-left:10px;">
            <div class="head-font">
              {{comment.UserName}}
              <span class="car-type">{{comment.CarTypeDes}}</span>
            </div>
            <div>
              <span v-for="(rate,i) in comment.CommentR1" :key="i">
                <van-icon size="10" color="#DF3348" name="star" />
              </span>
            </div>
          </div>
        </div>
        <div class="head-img">
          <span class="data-style">{{comment.CommentTime}}</span>
        </div>
      </div>
      <div class="comment-middle">
        <div style="margin-bottom:1%">{{comment.CommentContent}}</div>
        <div class="img-box">
          <p class="img-106x112" v-for="(img,i) in comment.CommentImages" :key="i">
            <img :src="img" />
          </p>
        </div>
      </div>
      <div class="comment-bottom">
        <div style="margin-bottom: 5px;">{{comment.InstallShop}}</div>
        <div>购买时间: {{comment.OrderTime}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class CommentDetail extends Vue {
  @Prop() private msg!: string;
  @Prop() public commentList?: Array<any>;
}
</script>

<style scoped>
#comment-detail {
  height: 100%;
}
#comment-card {
  height: 20%;
}
.divide {
  background:rgba(248,248,248,1);
  height: 5px;
}
.comment-top {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.head-box {
  display: flex;
  width: 50%;
}
.comment-img {
  width: 106px;
  height: 112px;
}
.head-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 2%;
}
.head-img img {
  max-width: 100%;
  max-height: 100%;
}
.head-circle img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.head-font {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.car-type {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.data-style {
  font-size: 12px;
  font-family: Apercu;
  color: rgba(153, 153, 153, 1);
}
.comment-middle {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-left: 15px;
  margin-right: 2%;
  margin-top: 1%;
  margin-bottom: 1%;
}
.comment-bottom {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin-left: 15px;
  margin-bottom: 10px;
}
.img-106x112 {
  width: 106px;
  height: 102px;
  margin-right: 5px;
}
.img-106x112 img {
  width: 100%;
  max-height: 100%;
  display: block;
}

.img-box {
  display: flex;
  flex-wrap: wrap;
}
</style>


