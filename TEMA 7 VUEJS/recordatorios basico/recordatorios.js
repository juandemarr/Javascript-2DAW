var recordatorio= new Vue({
    el:'#recordatorios',
    data:{
        message:'',
        recor:[]
    },
    methods:{
        anadirElemento:function(){
            this.recor.push(this.message);
        }
    }
})