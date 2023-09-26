

function getLocalStorageDonationId() {
    const storedId = localStorage.getItem('donations');
    if (storedId) {
        return JSON.parse(storedId);
    }
    return [];
}

function saveToLocalStorage(id) {
    const storedId = getLocalStorageDonationId();

    const alreadyExist = storedId.find(donationId => donationId === id);

    if (!alreadyExist) {
        storedId.push(id);
        localStorage.setItem('donations', JSON.stringify(storedId));
    }
}




export { getLocalStorageDonationId, saveToLocalStorage }