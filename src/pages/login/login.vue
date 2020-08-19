<template>
    <view>
        <div class="title">
            {{title}}
            <uni-badge text="1"></uni-badge>
            <view class="test">789</view>
        </div>
    </view>
</template>

<script>
import {API} from '@/framework/api';

export default {
    data() {
        return {
            title: '',
            href: 'https://mzxh.top'
        };
    },
    async onLoad() {
        let [err, res] = await API.get('');
        console.log(res)
        this.title = res.data.hello
    },
}
</script>

<style lang="scss">
    .title {
        font-size: 12px;
        color: red;
         ::v-deep .test {
            color: #4cd964;
        }
    }
</style>


