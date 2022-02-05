import React from 'react'

import {FiX, FiClipboard} from 'react-icons/fi'
import './modal.css'

function Modal({closemodal, content}) {

    async function copyLink() {
        await navigator.clipboard.writeText(content.link)
        alert('Copiado com sucesso!')
    }

    return (
        <div className='container-modal'>
            <div className='header-modal'>
                <h2>Link encurtado:</h2>
                <button className='close-Modal' onClick={closemodal}>
                    <FiX size={28} color='#000'/>
                </button>
            </div>

            <span>{content.long_url}</span>

            <button className='btn-ShortLink' onClick={copyLink}>
                {content.link}
                <FiClipboard size={28} color='#FFF'/>
            </button>
        </div>
    )
}

export default Modal
