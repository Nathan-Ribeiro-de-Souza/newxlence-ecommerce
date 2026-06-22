import type { Category } from '../types/ProductType'

type CategoriesProps = {
  selectedCategory: Category
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>
}

export function SelectedCategory({
  selectedCategory,
  setSelectedCategory
}: CategoriesProps) {
  return (
    <select
      className="filter-select"
      value={selectedCategory}
      onChange={event => setSelectedCategory(event.target.value as Category)}
    >
      <option value="All">All categories</option>
      <option value="Animes">Animes</option>
      <option value="Music">Music</option>
      <option value="Faith">Faith</option>
      <option value="Quotes">Quotes</option>
      <option value="Horror">Horror</option>
      <option value="Arts">Arts</option>
      <option value="Cartoon">Cartoon</option>
    </select>
  )
}