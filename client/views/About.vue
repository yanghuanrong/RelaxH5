<template>
    <div>
        
    <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <van-image :height="200" fit="cover" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <van-image :height="200" fit="cover" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <van-image :height="200" fit="cover" src="http://47.104.247.183:4000/upload_static/images/1575343136136.jpg" />
            </van-swipe-item>
    </van-swipe>

        <van-row type="flex" >
           <van-col span="6" >
        </van-col>
           <van-col span="6" >
        </van-col>
           <van-col span="6" >
        </van-col>
           <van-col span="6" >
        </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>