

function ContactAndSupport() {
   
    const contactInfo = {
        address: 'Main Street- 123, Anytown, USA',
        phone: '+1 123 456 7890',
        email: 'info@social_meedia.com',
    };

    return (
        <div className="my-10">
             <div className="ml-10 md:w-4/12 my-10">
                <h2 className="text-3xl text-start uppercase border-t-4 border-sky-700 text-sky-500 font-bold py-2">Contact and Support</h2>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 mb-8">
                {/* <h2 className="text-3xl text-center font-bold mb-8">Contact and Support</h2> */}
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <div className="bg-sky-950 p-6 rounded-lg shadow-md mb-4 sm:mb-0 sm:w-1/3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Address</h3>
                        <p>{contactInfo.address}</p>
                    </div>
                    <div className="bg-sky-950 p-6 rounded-lg shadow-md mb-4 sm:mb-0 sm:w-1/3 sm:ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p>{contactInfo.phone}</p>
                    </div>
                    <div className="bg-sky-950 p-6 rounded-lg shadow-md sm:w-1/3 sm:ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p>{contactInfo.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactAndSupport;