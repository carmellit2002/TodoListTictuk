// Creates options in the structure React Selects expects
export const createOptionElements = (categoryToImage) => {
    return Object.keys(categoryToImage).map((category) =>
        ({
            value: category,
            label: category
        })
    )
}