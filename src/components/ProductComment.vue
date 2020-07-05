<template>
  <div id="comment">
    <div id="comment-box">
      <div class="comment-number">
        <div class="title-style">商品评论</div>
        <div>
          <span class="good-style">好评率</span>
          <span style="margin-right:5px;font-size:14px;">98.8%</span>
          <van-icon size="14" color="#C0C0C0" name="arrow" />
        </div>
      </div>
      <div class="tag-box">
        <div>
          <van-tag size="large" round color="#ffe1e1" text-color="#ad0000">质量非常好 88</van-tag>
        </div>
        <div>
          <van-tag size="large" round color="#ffe1e1" text-color="#666666">
            物流快
            588
          </van-tag>
        </div>
        <div>
          <van-tag size="large" round color="#ffe1e1" text-color="#666666">轮胎好 正品 588</van-tag>
        </div>
        <div>
          <van-tag size="large" round color="#ffe1e1" text-color="#666666">质量非常好 588</van-tag>
        </div>
        <div>
          <van-tag size="large" round color="#ffe1e1" text-color="#666666">价格低 588</van-tag>
        </div>
        <div>
          <van-tag size="large" round color="#ffe1e1" text-color="#666666">价格低 588</van-tag>
        </div>
      </div>
    </div>
    <comment-detail :commentList="commentListData" />
    <div class="divide"></div>
    <div class="all-comment">
      <span @click="showAllComment()">查看全部评论 ({{allCommentList.length}})</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
import CommentDetail from "@/components/CommentDetail.vue";

@Component({
  components: {
    CommentDetail
  }
})
export default class ProductComment extends Vue {
  @Prop() private msg!: string;
  @Prop() public sTimer?: number;

  commentListData: Array<Object> = [];
  allCommentList: Array<Object> = [];
  lastTimer: number = 0;
  timer: number = 0;
  created() {
    // 获取评论列表
    axios
      .get("/Comment/SelectProductTopNComments?productId=OL-MO-ONE-5W40-1")
      .then(res => {
        this.lastTimer = new Date().getTime();
        this.timer = this.lastTimer - this.sTimer;
        if (res.data.Comments !== []) {
          axios.post('https://geylnu.com/tuhu/networkRequestMonitor', {
              url: 'http://localhost:8080',
              th_app_id: 'web',
              duration: this.timer + 'ms',
              httpCode: res.status
          });
          // 分别存储全部评论列表以及第一个评论列表
          this.allCommentList = res.data.Comments;
          this.commentListData = [res.data.Comments[0]];
        }
      });
  }
  showAllComment() {
    this.commentListData = this.allCommentList;
  }
}
</script>

<style>
#comment {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
}
#comment-box {
  height: 4%;
}
.all-comment span:hover {
  text-decoration: underline;
  cursor: pointer;
}
.divide {
  background: rgba(248, 248, 248, 1);
  height: 5px;
}
.comment-number {
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.title-style {
  margin-left: 15px;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
}
.good-style {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 5px;
}
.tag-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 18px;
}
.tag-box div {
  margin-left: 15px;
  margin-bottom: 10px;
}
.tag-box div van-tag {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.all-comment {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgb(20, 7, 7);
  margin-bottom: 50px;
}
</style>


