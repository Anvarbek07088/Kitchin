let orderList = [];
let totalPrice = 0;

function order(item) {
    orderList.push(item);
    updateOrderList();
}

function updateOrderList() {
    const listElement = document.getElementById('order-list');
    listElement.innerHTML = '';
    orderList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

function ByurtmaOtmen(){
    const listElement = document.getElementById('order-list');
    listElement.innerHTML = '';
    const totalElement = document.getElementById('total');
    totalElement.textContent = 'Jami: ' + 0 + ' so\'m';
    // totalPrice=0
    orderList=[]
}

function calculateTotal() {
    // totalPrice = 0;
    orderList.forEach(item => {
        switch(item) {
            case 'Palov':
                totalPrice += 25000;
                break;
            case 'Lagmon':
                totalPrice += 20000;
                break;
            case 'Kola':
                totalPrice += 5000;
                break;
            case 'Ayran':
                totalPrice += 3000;
                break;
            // Boshqa taomlar va ichimliklar uchun case larni qo'shing
        }
    });
    const totalElement = document.getElementById('total');
    totalElement.textContent = 'Jami: ' + totalPrice + ' so\'m';
}
