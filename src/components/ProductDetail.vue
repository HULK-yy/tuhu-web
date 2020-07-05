<template>
    <div id="product">
        <div class="top-box">
            <div class="top-mask">
                <div class="top-bar">
                    <div class="bar-elec">
                        <div class="min"></div>
                        <div class="hui"></div>
                        <div class="hui"></div>
                        <div class="hei"></div>
                        <div class="hei"></div>
                    </div>
                    <div class="bar-font">
                        12:30
                    </div>
                </div>
                <img src="@/assets/车品/标题栏@1x.png" class="ret-img">
                <img src="@/assets/车品/分享@1x.png" class="fen-img">
                <img src="@/assets/车品/更多@1x.png" class="gen-img">
            </div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
                <van-swipe-item v-for="(item, i) in imgList" :key="i">
                    <p>
                        <img style="max-width:100%; max-height:100%" :src="item" />
                    </p>
                </van-swipe-item>
            </van-swipe>
            <div class="top-btn-bom">
                <div class="btn-video">视频</div>
                <div class="btn-img">图片</div>
                <div class="btn-ye">
                    {{ curImgIndex + 1}}/{{ imgList.length }}
                </div>
            </div>
        </div>
        <div class="price-box">
            <div class="all-price">
                <div class="current-price">
                    <span style="font-size:15px">￥</span>
                    <span style="font-size:25px">{{ product.MarketingPrice }}</span> 
                </div>
                <div class="vip-price">
                    <div>￥{{ product.Price }}</div>
                    <img src="@/assets/车品/黑卡标签 copy 4@3x.png" />
                </div>
            </div>
            <div class="collect">
                <van-icon size="12" name="star-o" class="icon"/>
                <span class="font">收藏</span>
            </div>
        </div>
        <div class="title">
            {{ product.DisplayName }}
        </div>
        <div class="des">
            <p>{{ product.ShuXing5 }}</p>
            <p class="s">购胎享好礼！指定轮胎送小保养/定制充气泵！点击查看>></p>
        </div>
        <div class="noP">
            <span>途虎正品保 PICC中国人保承保</span>
            <span>30亿正品险担保 最高赔付200万</span>
        </div>
        <product-order/>
        <div class="choose-box">
            <span class="get-title">已选</span>
            <span class="get-size">{{ chooseProduceMsg.color }}，{{ chooseProduceMsg.size }}，{{ chooseProduceMsg.num }}</span>
            <img src="@/assets/车品/更多弹窗-灰 copy@3x.png">
        </div>
        <div class="zheng-box">
            <div class="icon-box">
                <van-icon name="certificate" color="#4A90E2" /><span>全正品</span> 
                <van-icon name="certificate" color="#4A90E2" /><span>低价格</span> 
                <van-icon name="certificate" color="#4A90E2" /><span>放心购</span> 
                <van-icon name="certificate" color="#4A90E2" /><span>快递达</span> 
            </div>
        </div>
        <product-comment :sTimer="sTimer"/>
        <product-overlay @my-event="getProductMsg" :shopProduct="product"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
import ProductOrder from "@/components/ProductOrder.vue";
import ProductComment from "@/components/ProductComment.vue";
import ProductOverlay from "@/components/ProductOverlay.vue";
@Component({
    components: {
        ProductOrder,
        ProductComment,
        ProductOverlay
    }
})
export default class ProductDetail extends Vue {
    @Prop() private msg!: string;
    @Prop() public sTimer?: number;

    curImgIndex: number = 0;
    chooseProduceMsg: object = {};
    product: Object = {};
    imgList: Array<string> = [];
    lastTimer: number = 0;
    timer: number = 0;
    created () { 
        // 轮播图图片请求接口
        axios
            .get("/Product/GetProductDetail?activityId=&pid=OL-MO-ONE-5W40-1%7C")
            .then(res => {
                // console.log(res);
                this.lastTimer = new Date().getTime();
                this.timer = this.lastTimer - this.sTimer;
                axios.post('https://geylnu.com/tuhu/networkRequestMonitor', {
                    url: 'http://localhost:8080',
                    th_app_id: 'web',
                    duration: this.timer + 'ms',
                    httpCode: res.status
                }).then(res => {
                    console.log(res);
                });
                this.product = res.data.Product;
                this.imgList = res.data.Product.Image.ImageUrls;
            });
    }
    onChange (index: number) {
        this.curImgIndex = index;
    }
    getProductMsg(value: object) {
        this.chooseProduceMsg = value;
    }
}
</script>

<style scoped lang="less">
.top-box{
    box-sizing: border-box;
    width: 360px;
    background-color: #fff;
}
.top-mask{
    position: absolute;
    width: 360px;
    height: 100px;
    z-index: 9999;
    img{
        position: absolute;
        width: 32px;
        height: 32px;
        top: 29px;
    }
}
.ret-img{
    left: 9px;
}
.fen-img{
    left: 276px;
}
.gen-img{
    left: 318px;
}
.top-bar{
    width: 360px;
    // height: 24px;
    .bar-elec{
        width: 8px;
        // height: 13px;
        position: absolute;
        top: 5px;
        left: 301px;
        div{
            height: 3px;
            width: 100%;
            background-color: #999;
        }
        .min{
            height: 1px;
            width: 4px;
            margin-left: 2px;
        }
        .hei{
            background-color: #333;
        }
    }
    .bar-font{
        width:33px;
        // height:24px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:24px;
        float: right;
        margin-right: 9px;
    }
}
.top-btn-bom{
    div{
        width: 48px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        background-color: green;
        border-radius: 15px;
        font-size: 14px;
        position: absolute;
        top: 345px;
    }
    .btn-video{
        left: 122px;
        background-color: rgba(255,255,255,1);
        border:1px solid rgba(237,237,237,1);
    }
    .btn-img{
        left: 190px;
        color: #ffffff;
        background: rgba(223,51,72,1);
        border:1px solid rgba(237,237,237,1);
    }
    .btn-ye{
        left: 300px;
        color: #ffffff;
        background-color: rgba(140,140,140,1);
        border:1px solid rgba(237,237,237,1);
    }
}

.price-box{
    box-sizing: border-box;
    background-color: #fff;
    width: 360px;
    height: 55px;
    // margin-top: 15px;
    div{
        display: inline-block;
        height: 55px;
        line-height: 55px;
    }
    // .all-price{
    //     float: left;
    // }
    .current-price{
        margin-left: 16px;
        font-size:15px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(223,52,72,1);
    }
    .vip-price{
        color: #b49e70;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        font-size: 15px;
        margin-left: 2px;
        img{
            height: 18px;
            margin-left: 2px;
            margin-bottom: -2px;
        }
    }
    .collect{
        width: 61px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        background-color: rgba(245, 245, 245, 1);
        border-radius: 100px 0px 0px 100px;
        float: right;
        margin-top: 15px;
        .icon{
            color: #666;
            margin-right: 2px;
        }
        .font{
            font-size:12px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
        }
    }
}

.title{
    box-sizing: border-box;
    background-color: #fff;
    width: 360px;
    height: 44px;
    line-height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: rgba(51,51,51,1);
    padding: 0 16px;
}

.des{
    box-sizing: border-box;
    background-color: #fff;
    width:360px;
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
    padding: 15px 0 15px 16px;
    p{
        margin: 0;
    }
    .s{
        color: rgba(223,51,72,1);
        padding-top: 6px;
    }
}

.noP{
    box-sizing: border-box;
    width: 360px;
    background-color: #fff;
    margin: 10px 0;
    padding: 8px 0 5px 16px;
    line-height: 28px;
    span{
        display: inline-block;
    }
    span:nth-of-type(1){
        font-size: 16px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: rgba(51,51,51,1);
    }
    span:nth-of-type(2){
        font-size: 14px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(153,153,153,1);
    }
}

.choose-box{
    box-sizing: border-box;
    width: 360px;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    margin: 10px 0;
    span{
        display: inline-block;
    }
    span.get-title{
        width:30px;
        font-size:15px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(51,51,51,1);
        padding-left: 16px;
    }
    span.get-size{
        width:188px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        padding-left: 12px;
    }
    img{
        float: right;
        height: 7px;
        margin-right: 12px;
        margin-top: 20px;
    }
}

.zheng-box{
    box-sizing: border-box;
    width:360px;
    height:40px;
    line-height: 40px;
    margin-bottom: 10px;
    background:rgba(240,243,250,1);
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(74,144,226,1);
    .icon-box{
        padding-left: 16px;
        .van-icon-certificate::before{
            font-size: 14px;
        }
        .van-icon{
            display: inline-block;
            margin-top: 10px;
        }
        span{
            display: inline-block;
            margin-right: 15px;
        }
    }
}

</style>