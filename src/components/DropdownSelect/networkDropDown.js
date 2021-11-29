import React from 'react'
import { useState } from 'react'
import './networkDropdown.css'




export default function NetworkDropDown() {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState([{ id: 82, label: "Meter" }, { id: 361, label: "Theta" }]);
    const [selectedItem, setSelectedItem] = useState(82);


    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {

        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        setOpen(true)
        window.sessionStorage.setItem("chainId", id)
        window.location.href = '/'

    }

    return (
        <div className='dropdown'>
            <div className='dropdown-header' onClick={toggleDropdown}>
                {items.find(item => item.id == selectedItem).label}
                <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
            </div>

            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {items.map((item) => (
                    <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} key={item.id} id={item.id}>


                        <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>



                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

