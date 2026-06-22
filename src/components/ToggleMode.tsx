import type { Theme } from '../App'

type ToggleModeProps = {
  theme: Theme
  toggleTheme: () => void
}

export function ToggleMode({ theme, toggleTheme }: ToggleModeProps) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="theme-toggle-circle" />
      <span className="theme-toggle-text">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}