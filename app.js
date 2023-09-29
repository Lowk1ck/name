let low = receipt();
        let delivery = 9000; 
        let sum = delivery;
        let hp = [];

        for (let key in low) {
            hp.push(`${key} ${low[key].info}`);
            sum += low[key].price;
        }
        console.log(`Вы заказали ${hp.join()} | Общая стоимость ${sum} сумм с доставкой (${delivery})`);




























































console.log();