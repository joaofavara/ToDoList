import ProgressBar from '@/components/ProgressBar.vue';
export default {
    components: { ProgressBar },
    data(){
        return {
            isLoading: true,
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => { 
            setTimeout(() => {
                vm.isLoading = false;
            }, 2000);
        });
    }
};