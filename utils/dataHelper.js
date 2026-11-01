export function getProcessedTestData(data) {
    const processedData = { ...data };

    const mobileValue = processedData.mobileNumber || processedData.number;
    
    if (mobileValue === "RANDOM_10_" || mobileValue === "RANDOM_10_DIGITS") {
        const randomNum = Math.floor(1000000000 + Math.random() * 9000000000).toString();
        processedData.mobileNumber = randomNum;
        processedData.number = randomNum;
    }
    return processedData; 
}