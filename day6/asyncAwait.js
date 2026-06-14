async function getUserData(id) {
    const user = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: 'Test User'
            });
        }, 500);
    });

    return user;
}

// Example usage
(async () => {
    const data = await getUserData(1);
    console.log(data);
})();