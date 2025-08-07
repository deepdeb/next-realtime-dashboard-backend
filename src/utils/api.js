exports.getRandomRevenueData = () => {
    const randomData = [
        {
            name: "Mahindra",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "Reliance",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "Infosys",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "Tata",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "HDFC",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "Zomato",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "Sun Pharma",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "Samsung",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        }
    ];

    return new Promise((resolve, reject) => {
        const revenueData = randomData?.map(item => {
            const profit = item?.totalRevenue - item?.loss;
            return { ...item, profit };
        });

        if (randomData) {
            resolve(revenueData);
        } else {
            reject(new Error("Profit cannot be negative"));
        }
    });
}