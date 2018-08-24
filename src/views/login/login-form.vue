<template>
    <Form ref="loginForm" :model="form" :rules="rules">
        <Form-item prop="userName">
            <Input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                <Icon :size="16" type="ios-person"></Icon>
                </span>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                <Icon :size="14" type="md-lock"></Icon>
                </span>
            </Input>
        </Form-item>
        <Form-item>
            <Button @click="handleSubmit" type="primary" long>登录</Button>
        </Form-item>
    </Form>
</template>
<script>
export default {
    name: 'LoginForm',
    props: {
        userNameRules: {
            type: Array,
            default: () => {
                return [
                { required: true, message: '账号不能为空', trigger: 'blur' }
                ];
            }
            },
        passwordRules: {
            type: Array,
            default: () => {
                return [
                { required: true, message: '密码不能为空', trigger: 'blur' }
                ];
            }
        }
    },
    data () {
        return {
            form: {
                userName: 'security',
                password: '123456'
            }
        };
    },
    computed: {
        rules () {
            return {
                userName: this.userNameRules,
                password: this.passwordRules
            };
        }
    },
    methods: {
        handleSubmit(){
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$emit('on-success-valid', {
                        userName: this.form.userName,
                        password: this.form.password
                    });
                }
            });
        }
    }
};
</script>
