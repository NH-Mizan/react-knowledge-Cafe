import profile from'../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='justify-between flex items-center p-2 bg-red-200'>
            <h1 className='bg-red-200 text-2xl bold'>Cafe-Khonelage</h1>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;