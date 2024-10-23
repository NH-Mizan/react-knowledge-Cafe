import profile from'../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='justify-between flex items-center p-2 bg-red-200 mx-auto mb-6'>
            <h1 className=' text-2xl font-bold'>Cafe-Khonelage</h1>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;