export const fetchProductsAsync = async () => {
    const response = await fetch('http://127.0.0.1:8081/productservice');
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.Errors);
    }
    return data;        
}