import {v4 as uuidv4} from 'uuid'

class Order {
    constructor(cart, total, address) {
        this.id = uuidv4();
        this.cart = cart;
        this.total = total;
        this.address = address;
    }
}

export default Order;