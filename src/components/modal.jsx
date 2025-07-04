import ReactDom from 'react-dom'
export default function Modal(props){
    const {showExcercise, handleCloseModal}= props
    const {name,description}=showExcercise || {}
    return ReactDom.createPortal((  
    <div className="modal-container">
        <div className="modal-underlay" onClick={handleCloseModal}></div>
        <div className="modal-content">
            <div>
                <h6>Name</h6>
                <h2 className="skill-name">{name.replaceAll("-"," ")}</h2>
                <h6>Description</h6>
                <p>{description}</p>
            </div>
        </div>
        </div>)
      ,document.getElementById('portal'))
}