import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";


const EditData = () =>{
    return(
    <>
    <NavBar />
    <div className="container mx-auto d-flex justify-content-center align-items-center w-100 ">

        <div className="container mt-3 w-100">

            <div className="w-50 mx-auto">
                <h1 className="mb-2">Edit Data Alat</h1>
            </div>

            <form action="POST" className="mx-auto mb-5 w-50">

                <div className="mb-3">
                    <label className="form-label w-100">Nama Barang<input type="text" placeholder="Masukkan nama peminjam" className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Stok<input type="text" placeholder="Masukkan kelas peminjam" className="form-control w-100" /></label>
                </div>
                    <button className="btn btn-primary">Edit</button>
            </form>

        
        </div>

    </div>
    
    <Footer />
    </>
    )
}

export default EditData;