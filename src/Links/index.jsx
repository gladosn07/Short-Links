import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiTrash, FiLink } from 'react-icons/fi'
import Modal from '../Components/Modal'

import {deleteLink, getLinkSave} from '../services/storeLinks'

import './links.css'

function Links() {
    const [myLinks, setMyLinks] = useState([])

    const [data,setData] = useState({})
    const [showModal, setShowModal] = useState(false)
    
    const [emptyList, setEmptyList] = useState(false)

    useEffect(() => {
        async function getLink() {

            const result = await getLinkSave('@shotLink')

            if(result.length === 0){
                setEmptyList(true)
            }

            setMyLinks(result)
        }
        getLink()
    },[])

    function handleOpenLink(link) {
        setData(link)
        setShowModal(true)
    }

    async function handleDelete(id) {

        const res = await deleteLink(myLinks, id)
        
        if(res.length === 0){
            setEmptyList(true)
        }

        setMyLinks(res)
    }

    return (
        <div className='container-links'>

            <div className="header-Links">
                <Link to='/'>
                    <FiArrowLeft size={38} color='#FFF' />
                </Link>
                <h1>Meus Links</h1>
            </div>

            {emptyList && (
                <div className='links-item'>
                    <h2 className="empty-list">Sua lista está vazia!</h2>
                </div>
            )}

            {myLinks.map(link => (
                <div key={link.id} className='links-item'>
                <button className='link' onClick={() => handleOpenLink(link)}>
                    <FiLink size={18} color='#FFF'/>
                    {link.long_url}
                </button>

                <button className='delete-link' onClick={() => handleDelete(link.id)}>
                    <FiTrash size={18} color='#FF5454' />
                </button>
            </div>
            ))}

            {showModal && (
                <Modal 
                closemodal={() => setShowModal(false)}
                content={data}
                />
            )}
        </div>
    )
}

export default Links
