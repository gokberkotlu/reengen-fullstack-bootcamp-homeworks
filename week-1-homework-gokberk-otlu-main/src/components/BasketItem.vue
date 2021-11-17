<template>
    <div class="basket-wrapper">
        <i @click="deleteItem" class="fas fa-trash-alt"></i>
        <b-row class="basket-item-container m-0" :style="cssBasketVar">
            <b-col cols="4">
                <b-img class="product-card-image" :src="require('../assets/' + item.productImage)" fluid
                    alt="Responsive image">
                </b-img>
            </b-col>
            <b-col>
                <p class="basket-product-name">{{ item.productName }}</p>
                <div class="mb-1 mt-2">
                    <span class="basket-product-header">Size:</span>
                    <span class="basket-product-size">{{ item.productSize }}</span>
                </div>
                <div>
                    <i @click="decreaseProductNumber" class="fas fa-minus"></i>
                    <span class="basket-product-number">{{ item.productNumber }}</span>
                    <i @click="increaseProductNumber" class="fas fa-plus"></i>
                </div>
                <div class="basket-products-price-container">
                    <span class="basket-product-header">Price:</span>
                    <span class="ms-1">${{ item.productPrice * item.productNumber }}</span>
                </div>    
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    props: ["item", "basket"],
    methods: {
        decreaseProductNumber() {
            // decrease number of same type products
            if(this.item.productNumber > 1) {
                this.item.productNumber -= 1;
            } else {
                this.deleteItem();
            }
        },
        increaseProductNumber() {
            // increase number of same type products
            this.item.productNumber += 1;
        },
        deleteItem() {
            // delete selected type of products
            this.basket.splice(this.basket.indexOf(this.item), 1);
        }
    },
    computed: {
        cssBasketVar() {
            // bind style property color to use inside css as root value
            return {
                '--basket-item-color': this.item.productColor
            }
        }
    },
}
</script>

<style scoped>
    .basket-wrapper {
        position: relative;
    }

    .basket-item-container {
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    .basket-item-container img {
        transition: transform .8s;
    }

    .basket-item-container:hover img {
        transform: scale(1.1);
    }

    .basket-product-name {
        color: var(--basket-item-color);
        margin-bottom: 5px;
        margin-top: 5px;
    }

    .basket-product-number {
        margin: 0 7px;
    }

    .basket-product-header {
        font-weight: bold;
    }

    .basket-product-size {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: var(--basket-item-color);
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-left: 5px;
        font-size: .8rem;
    }

    .basket-products-price-container {
        text-align: right;
        margin-bottom: 10px;
    }

    i.fa-trash-alt {
        position: absolute;
        top: 9px;
        right: 5px;
        transition: transform .3s;
        cursor: pointer;
    }

    i.fa-minus, i.fa-plus {
        color: #333;
        transition: transform .3s;
        cursor: pointer;
    }

    i.fa-minus:hover, i.fa-plus:hover, i.fa-trash-alt:hover {
        transform: scale(1.1);
    }

    p {
        margin: 0;
    }

</style>