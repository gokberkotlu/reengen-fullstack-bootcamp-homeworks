<template>
    <b-col sm="11" md="9" lg="5" :id="`product-card-${index}`" class="product-card-col" :style="cssColorVar">
        <b-row class="product-card">
            <b-col cols="6" class="product-image-size-container p-0 me-4">
                <b-row>
                    <b-img class="product-card-image" :src="require('../assets/' + this.product.image)" fluid
                        alt="Responsive image">
                    </b-img>
                </b-row>
                <b-row>
                    <h5 class="choose-size">CHOOSE SIZE</h5>
                    <b-row class="size-container m-0">
                        <div
                        @click="setSize"
                        v-for="size in sizes"
                        :key="size">
                            {{ size }}
                        </div>
                    </b-row>
                </b-row>
            </b-col>
            <b-col class="p-0">
                <h3 class="product-category">{{ product.category }}</h3>
                <h2 class="product-header">{{ product.name }}</h2>
                <span class="product-price">$ {{ product.price + ((selectedSize ? selectedSize : sizes[0]) - 5) * 10 }}</span>
                <div>
                    <b-form-rating id="rating-inline" :color="product.colorCode" readonly no-border
                        style="background-color: transparent; padding: 0; box-shadow: none;" inline
                        v-model="product.rating">
                    </b-form-rating>
                </div>
                <p class="product-explanation">
                    {{product.detail}}
                </p>
                <b-row class="btn-add-to-card">
                    <b-col cols="4">
                        <select name="product-select-numbers" id="product-select-numbers" v-model="productNumber">
                            <option v-for="i in 10" :key="i">{{ i }}</option>
                        </select>
                    </b-col>
                    <b-col cols="8" @click="addToBasket">
                        <span class="add-to-card">ADD TO CARD</span>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    export default {
        data() {
            return {
                productNumber: 1,
                sizes: [5,6,7,8,9,10,11,12],
                selectedSize: null
            }
        },
        props: ['product', 'basket', 'index'],
        computed: {
            cssColorVar() {
                return {
                    '--color': this.product.colorCode
                }
            }
        },
        methods: {
            addToBasket() {
                // features of added product
                let addedItem = {
                    productName: this.product.name,
                    productImage: this.product.image,
                    productNumber: parseInt(this.productNumber),
                    productColor: this.product.colorCode,
                    productSize: this.selectedSize,
                    productPrice: this.product.price + ((this.selectedSize ? this.selectedSize : this.sizes[0]) - 5) * 10
                }
                if(this.selectedSize) {
                    // emit added item to parent component to push basket data
                    this.$emit('basketUpdate', addedItem)
                } else {
                    // send warning to toaster inside the parent component
                    this.$emit('sizeReqWarning', 'Size is required')
                }
            },
            setSize(event) {
                // size boxes selection
                this.selectedSize = parseInt(event.target.innerHTML);
                document.querySelectorAll(`#product-card-${this.index} .size-container__selected`).forEach(element => {
                    element.classList.remove("size-container__selected");
                })
                event.target.classList.add("size-container__selected");
            }
        },
    }
</script>

<style scoped>
    .product-card-col {
        min-width: 375px;
    }

    .product-card-col:hover img {
        transform: scale(1.1);
    }

    .product-card {
        text-align: start;
        border-radius: 10px;
        overflow: hidden;
        padding: 23px 20px;
        background-color: #F4F5F5;
        box-shadow: 5px 4px 6px -1px rgba(145, 145, 145, 0.95);
    }

    .product-image-size-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product-card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .8s;
    }

    .choose-size {
        font-size: 1rem;
        color: var(--color);
    }

    .size-container {
        display: flex;
        justify-content: space-between;
    }

    .size-container * {
        box-sizing: border-box;
        padding: 0;
        width: calc(12.5% - 2px);
        font-size: .9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: .3px solid var(--color);
        color: var(--color);
        cursor: pointer;
    }

    .size-container__selected {
        background-color: var(--color);
        color: #fff;
    }

    .product-category {
        font-size: 1rem;
        color: var(--color);
    }

    .product-header {
        font-size: 1.2rem;
    }

    .product-price {
        font-size: 1.3rem;
        color: var(--color);
        font-weight: bold;
    }

    .product-explanation {
        font-size: .8rem;
    }

    .btn-add-to-card .add-to-card {
        color: #fff;
        background-color: var(--color);
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
    }

    #product-select-numbers {
        height: 100%;
        width: 100%;
        color: var(--color);
        border: 1px solid var(--color);
        text-align: center;
        border-radius: 4px;
    }
</style>