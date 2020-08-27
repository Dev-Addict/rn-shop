class Order {
    constructor(cart, total) {
        this.id = Date.now().toString(16);
        this.cart = cart;
        this.total = total;
        this.time = Date.now();
    }
}

export default Order;