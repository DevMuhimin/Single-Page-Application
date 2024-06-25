export const getSlug = (string) =>{

    // Lowercase the string and replace spaces with hyphens
    const slug = string.toLowerCase().replace(/\s+/g,"-");

    // Remove special character and non-alphanumeric characters
    return slug;
};