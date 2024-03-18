import Icon from "./Icon"

function Empty({text}) {
    return (
        <div className="alert-empty">
            <Icon iconPath={"ph ph-file-dashed"} />
            <span>{text}</span>
        </div>
    )
}

export default Empty