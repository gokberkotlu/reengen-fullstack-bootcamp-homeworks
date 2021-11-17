<template>
    <div class="notification">
        <span>{{ toasterText }}</span>
        <i class="fas fa-times" @click="closeToaster"></i>
    </div>
</template>

<script>
export default {
    created() {
        // start the timer to close toaster
        this.timeToasterDisplay();
    },
    props: {
        toasterText: {
            type: String,
            default: 'Notification'
        },
        showToaster: Boolean
    },
    methods: {
        closeToaster() {
            // emit false to close toaster
            this.$emit('closeToaster', false)
        },
        timeToasterDisplay() {
            // timer to close toaster
            setTimeout(() => {
                this.closeToaster();
            }, 2000);
        }
    }
}
</script>

<style scoped>
    .notification {
        width: 8vw;
        min-width: 200px;
        height: 50px;
        position: fixed;
        top: 80px;
        right: 2%;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        font-size: 900;
        color: white;
        background-color: #333;
    }

    .fa-times {
        position: absolute;
        top: 10px;
        right: 12px;
        font-size: .9rem;
        transition: tranform .3s;
    }

    .fa-times:hover {
        transform: scale(1.1);
    }
</style>