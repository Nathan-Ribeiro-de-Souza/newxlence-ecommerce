import type { Gender } from '../types/ProductType'

type GenderProps = {
  selectedGender: Gender
  setSelectedGender: React.Dispatch<React.SetStateAction<Gender>>
}

export function SelectedGender({
  selectedGender,
  setSelectedGender
}: GenderProps) {
  return (
    <select
      className="filter-select"
      value={selectedGender}
      onChange={event => setSelectedGender(event.target.value as Gender)}
    >
      <option value="All">All genders</option>
      <option value="Unissex">Unisex</option>
      <option value="Men">Men</option>
      <option value="Women">Women</option>
    </select>
  )
}