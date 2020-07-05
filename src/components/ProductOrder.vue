<template>
    <div class="order">
        <div class="getTicket divClass">
            <span class="title">领券</span>
            <span class="man">满200减20</span>
            <span class="man">满400减50</span>
            <img src="@/assets/车品/更多弹窗-灰 copy@3x.png">
        </div>
        <div class="promotion divClass">
            <span class="title">促销</span>
            <span class="man">赠</span>
            <span class="msg">满2件85折，满4件8折</span>
            <img src="@/assets/车品/更多弹窗-灰 copy@3x.png">
            <p>
                <span class="man">团</span>
                <span class="msg">两人拼购买仅需¥68.00</span>
            </p>
            <p>
                <span class="man">折</span>
                <span class="msg">APP端第2件半价，第3件0元（不可叠加）</span>
            </p>
        </div>
    </div>
</template>


<style scoped lang="less">
.order{
    width: 360px;
    height: 160px;
    background-color: #fff;
    .divClass{
        span.title{
            font-size:14px;
            font-family:ArialMT;
            color:rgba(140,140,140,1);
            margin-right: 6px;
        }
        span.man{
            height:18px;
            line-height: 18px;
            background-color: rgba(241, 98, 126, 0.1);
            border-radius:2px;
            font-size: 12px;
            color:rgba(223,51,72,1);
            margin-left: 6px;
            padding: 1px 6px 1px 4px;
        }
        img{
            float: right;
            height: 7px;
            margin-right: 25px;
            margin-top: 18px;
        }
    }
    .getTicket{
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 16px;
        span{
            display: inline-block;
        }
    }
    .promotion{
        width: 100%;
        height: 110px;
        padding-left: 16px;
        span.msg{
            width:227px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            margin-left: 6px;
        }
        img{
            margin-top: 4px;
        }
        p{
            margin-left: 34px;
        }
    }
}
</style>