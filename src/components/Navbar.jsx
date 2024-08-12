import './body.css'
function Navbar() {
  return (
    <div className='nav  flex justify-between items-center p-3 mt-5'>
        <div className="ml-5">
            <h1>NFT</h1>
        </div>
        <div className="mr-7">
            <ul className="flex justify-center items-center gap-14">
                <li>Home</li>
                <li>Marketplace</li>
                <li>Resources</li>
                <li>FAQ</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar