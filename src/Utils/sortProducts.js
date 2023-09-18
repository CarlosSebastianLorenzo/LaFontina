function sortProducts(array, field, order) {
    
    const sortedArray = [...array];

    sortedArray.sort((a, b) => {
        let comparator = 0;

        if (field === "price") {
            comparator = a.price - b.price;
        } else if (field === "title") {
            comparator = a.title.localeCompare(b.title);
        } else if (field === "category") {
            comparator = a.category.localeCompare(b.category);
        }

        return order === "asc" ? comparator : -comparator;
    });

    return sortedArray;
}

export default sortProducts