let mixin={
  data(){
    return{};
  },
  methods:{
    handleClosed(formName) {
      this.$refs[formName].resetFields();
    },
  }
};
export default mixin;