class Order {
    constructor(cart, total, address) {
        this.id = Date.now().toString(16);
        this.cart = cart;
        this.total = total;
        this.address = address;
    }
}

export default Order;