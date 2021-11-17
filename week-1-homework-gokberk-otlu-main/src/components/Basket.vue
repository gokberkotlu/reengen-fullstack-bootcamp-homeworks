<template>
    <div>
        <b-button @click="openModel" class="open-model">
            <i class="fas fa-shopping-basket fa-lg me-2"></i>
            <span>{{ calculateProductNumber() }}</span>
        </b-button>
        <b-modal ref="basketModel" title="Basket">
            <b-row v-if="basket.length === 0">
                <p>Basket is empty</p>
            </b-row>
            <basket-item v-else v-for="(item, index) in basket" :item="item" :key="index" :basket="basket" />
            <div class="basket-total-price-container">
                <span class="fw-bold">Total Price:</span>
                <span class="ms-1">${{ totalPrice() }}</span>
            </div>
        </b-modal>
    </div>
</template>

<script>
import BasketItem from './BasketItem.vue'
    export default {
        props: ["basket"],
        components: {
            BasketItem
        },
        methods: {
            openModel() {
                // Show basket inside modal
                this.$refs["basketModel"].show();
            },
            totalPrice() {
                // calculate total price of products
                let total = 0;
                this.basket.forEach(item => {
                    total += item.productPrice * item.productNumber
                });
                return total;
            },
            calculateProductNumber() {
                let productNumber = 0;
                this.basket.forEach(item => {
                    productNumber += item.productNumber
                });
                return productNumber;
            }
        },
    }
</script>

<style scoped>
    .open-model {
        background-color: transparent;
    }

    .basket-total-price-container {
        border: 1px solid gray;
        display: inline-block;
        padding: 5px 10px;
        margin-top: 15px;
    }
</style>