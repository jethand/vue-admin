<style lang="less">
    @import './main.less';
</style>

<template>
    <Layout style="height: 100%" class="main">
        <Header class="header-con">
            <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
                <user :user-avator="userAvator"/>
                <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
            </header-bar>
        </Header>
        <Content>
            <Layout>
                <Content>
                    <keep-alive :include="cacheList"></keep-alive>
                </Content>
            </Layout>
        </Content>
    </Layout>
</template>
<script>
import HeaderBar from './components/header-bar';
import User from './components/user';
import Fullscreen from './components/fullscreen';
import { promiseCurry } from '@/lib/utils'
export default {
    data(){
        return {
            cacheList: [],
            collapsed: false,
            userAvator: '',
            isFullscreen: false
        }
    },
    methods: {
        handleCollapsedChange(){

        },
        async testApi(){
            const catcher = () => {
                console.log('Error')
            };
            const requestRes = await promiseCurry(_S.login, {userName: 'xx', password: '12345'}, catcher);
            console.log(requestRes);
        }
    },
    beforeMount(){
        this.testApi();
    },
    components: {
        HeaderBar,
        Fullscreen,
        User
    },
}
</script>

