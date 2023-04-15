const cart = {
    items: [],
    add (product) {
        // for (const item of this.items) {
        //     if (item.name === product.name) {
        //         item.quantity += 1;
        //         return;
        //     }
        // }
        const newProduct = {
            ...product,
            quantity: 1,
        }
        this.item.push (product)
    },
    remove (productName) {},
    clear() {},
    countTotalPrice
}