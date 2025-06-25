
async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    console.log('\nShopee Cart Toltal:');

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);   
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`Item ${name} removido do carrinho.`);
    } else {
        console.log(`Item ${name} não foi encontrado.`);
    }
}

async function removeItem(userCart, item) {
     //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    deleteItem(userCart, item.name);
    return;
  }
}

async function displayCart(userCart) {
    console.log("\nshopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name}: R$${item.price} x ${item.quantity} | Subtotal = R$${item.subtotal()}`);
    });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };