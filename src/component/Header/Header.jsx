const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-3xl pt-5'>Knowledge Cafe</h1>
                <img className="py-5" src="../../../public/profile.png" alt="" />
            </div>
            <hr className="py-5" />
        </div>
    );
};

export default Header;