<template>
    <div>
        <Header :basket="basket" />
        <Toaster @closeToaster="showToaster = $event" v-if="showToaster" :showToaster="showToaster" :toasterText="toasterText" />
        <b-container>
            <b-row class="product-cards-container">
                <product-card
                @basketUpdate="setBasket($event)"
                @sizeReqWarning="callToaster($event)"
                v-for="product in products"
                :index="product.id"
                :product="product"
                :key="product.id" />
            </b-row>
        </b-container>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import Header from './Header.vue'
import Toaster from './Toaster.vue'
export default {
    name: 'App',
    components: {
        ProductCard,
        Header,
        Toaster
    },
    data() {
        return {
            basket: [],
            products: [
                {
                    id: 1,
                    name: "NIKE EPIC REACT FLYKNIT v1".toUpperCase(),
                    category: "WOMEN'S RUNNING SHOE".toUpperCase(),
                    detail: "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look.",
                    price: 150,
                    rating: 4,
                    colorCode: "#D3ADAC",
                    image: "nike-epic-react-pink.jpg"
                },
                {
                    id: 2,
                    name: "NIKE EPIC REACT FLYKNIT v1".toUpperCase(),
                    category: "WOMEN'S RUNNING SHOE".toUpperCase(),
                    detail: "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look.",
                    price: 150,
                    rating: 4.7,
                    colorCode: "#3476A6",
                    image: "nike-epic-react-blue.jpg"
                },
                {
                    id: 3,
                    name: "NIKE EPIC REACT FLYKNIT v2".toUpperCase(),
                    category: "WOMEN'S RUNNING SHOE".toUpperCase(),
                    detail: "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look.",
                    price: 150,
                    rating: 3.6,
                    colorCode: "#D3ADAC",
                    image: "nike-epic-react-pink.jpg"
                },
                {
                    id: 4,
                    name: "NIKE EPIC REACT FLYKNIT v2".toUpperCase(),
                    category: "WOMEN'S RUNNING SHOE".toUpperCase(),
                    detail: "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look.",
                    price: 150,
                    rating: 5,
                    colorCode: "#3476A6",
                    image: "nike-epic-react-blue.jpg"
                },
            ],
            showToaster: false,
            toasterText: '',
        }
    },
    methods: {
        setBasket(addedItem) {
            // set basket with added item
            let checkSameNameSize = this.basket.find(function(item) {
                if(item.productName === addedItem.productName &&
                item.productSize === addedItem.productSize &&
                item.productColor === addedItem.productColor) {
                    return true;
                }
            });
            if(checkSameNameSize) {
                this.basket[this.basket.indexOf(checkSameNameSize)].productNumber += addedItem.productNumber;
            } else {
                this.basket.push(addedItem)
            }
            this.callToaster('Product is added!')
        },
        callToaster(info) {
            // call toaster with toaster text
            let clear = async () => {
                this.showToaster = false;
            }
            this.toasterText = info;
            // reset component async before setting showToaster true
            clear().then(() => {
                this.showToaster = true;
            })
        }
    }
}
</script>

<style scoped>
    .product-cards-container {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }
</style>
