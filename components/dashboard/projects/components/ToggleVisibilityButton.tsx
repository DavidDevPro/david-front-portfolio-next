interface Props {
    showVisible: boolean
    toggleShowVisible: () => void
}

export const ToggleVisibilityButton = ({ showVisible, toggleShowVisible }: Props) => (
    <button onClick={toggleShowVisible} className="btn btn-secondary">
        {showVisible ? 'Afficher tous les projets' : 'Afficher uniquement les visibles'}
    </button>
)
