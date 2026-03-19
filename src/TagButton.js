import "./TagButtonS.css"
export default function TagButton({title="no title", children}) {
    return <button className="tagButton">
        {title}
        {children}
        </button>
}