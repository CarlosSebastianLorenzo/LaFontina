function sortProducts(array, field, order) {
    
    const sortArray = [...array];

    const sortedArray = sortArray.sort((a, b) => {
        let comparator = 0;

        if (field == "Precio") {
            comparator = a.price - b.price;
        } else if (field == "Nombre") {
            comparator = a.title.localeCompare(b.title);
        } else if (field == "Categoría") {
            const categoryA = typeof a.class === "string" ? a.class : "";
            const categoryB = typeof b.class === "string" ? b.class : "";
            comparator = categoryA.localeCompare(categoryB);
        }

        return order == "asc" ? comparator : -comparator;
    });

    return sortedArray;
}

export default sortProducts