exports.getRandomRevenueData = () => {
    const randomData = [
        {
            name: "NovaCorp Alpha",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "NovaCorp Beta",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "NovaCorp Gamma",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "NovaCorp Delta",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "NovaCorp Sigma",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "NovaCorp Orion",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "NovaCorp Titan",
            totalRevenue: Math.floor(Math.random() * 10000),
            loss: Math.floor(Math.random() * 10000)
        },
        {
            name: "NovaCorp Zenith",
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