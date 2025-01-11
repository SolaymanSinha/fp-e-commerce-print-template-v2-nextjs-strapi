export async function fetchCategories() {
  const response = await fetch('http://127.0.0.1:1337/api/categories');
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
