type SearchProps = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function Search({ search, setSearch }: SearchProps) {
  return (
    <label className="search-field">
      <span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10.5 18a7.5 7.5 0 1 1 5.3-12.8A7.5 7.5 0 0 1 10.5 18Zm0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
          <path d="M16.2 16.2 21 21l-1.4 1.4-4.8-4.8 1.4-1.4Z" />
        </svg>
      </span>

      <input
        type="text"
        value={search}
        placeholder="Search products..."
        onChange={event => setSearch(event.target.value)}
      />
    </label>
  )
}