import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import {tambahData} from "./database/dbOperations"
import { useParams } from "react-router-dom";
import { useState } from "react";



const Pinjam = () => {
    const {id} = useParams()
    const [formValue, setFormValue] = useState({
        borrowId: '',
        admin: '',
        borrower: '',
        class: '',
        phone: '',
        itemName: '',
        duration: ''
    })

    const handleSubmittedForm = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        addData()
    }

    const addData = async () => {
        try {
            await tambahData("pinjam", formValue)
        } catch (error) {
            console.error(error)
        }
    }

    return(
    <>
    <NavBar />
    <div className="container mx-auto d-flex justify-content-center align-items-center w-100">

        {/* <div className="card" style={{ width: '18rem' }}>
        <img src="Projector.png" className="card-img-top" alt="" />
        <h3>Proyektor 1</h3>
        </div> */}

        <div className="container mt-3 w-100 ">

            <div className="w-50 mx-auto">
                <h1 className="mb-2">Form peminjaman</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, veritatis necessitatibus itaque iusto odit et adipisci alias, non vitae atque impedit praesentium nostrum consequatur molestias?</p>
            </div>

            <form className="mx-auto mb-5 w-50" onSubmit={handleSubmittedForm}>

                <div className="mb-3">
                    <label className="form-label w-100">ID Pinjam <input type="text" placeholder="Masukkan ID pinjam" className="form-control w-100" onChange={(e) => setFormValue({ ...formValue, borrowId: e.target.value })} value={formValue.borrowId} /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Admin <input type="text" placeholder="Masukkan ID pinjam" className="form-control w-100" onChange={(e) => setFormValue({ ...formValue, admin: e.target.value })} value={formValue.admin} /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Nama Peminjam <input type="text" placeholder="Masukkan nama peminjam" className="form-control w-100" onChange={(e) => setFormValue({ ...formValue, borrower: e.target.value })} value={formValue.borrower} /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Kelas <input type="text" placeholder="Masukkan kelas peminjam" className="form-control w-100" onChange={(e) => setFormValue({ ...formValue, class: e.target.value })} value={formValue.class} /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">No. Tlp <input type="text" placeholder="Masukkan No. Tlp peminjam" className="form-control w-100" onChange={(e) => setFormValue({ ...formValue, phone: e.target.value })} value={formValue.phone} /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">ID Barang <input type="text" readOnly placeholder="ID barang" className="form-control w-100" value={id} /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Nama Barang <input type="text" placeholder="Masukkan nama barang" className="form-control w-100" onChange={(e) => setFormValue({ ...formValue, itemName: e.target.value })} value={formValue.itemName} /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Durasi <input type="text" placeholder="Masukkan durasi peminjaman (10:45)" className="form-control w-100" onChange={(e) => setFormValue({ ...formValue, duration: e.target.value })} value={formValue.duration} /></label>
                </div>
                    <button className="btn btn-primary" type="submit">Pinjam</button>
            </form>

        
        </div>

    </div>
    
    <Footer />
    </>
    )
}

export default Pinjam