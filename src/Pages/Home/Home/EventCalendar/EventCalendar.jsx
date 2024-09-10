import React from 'react';

function EventCalendar() {
    // Updated event data for a social media platform
    const events = [
        {
            id: 1,
            title: 'Social Media Marketing Workshop',
            date: '2025-04-10',
            time: '2:00 PM - 4:00 PM',
            location: 'Online Event',
        },
        {
            id: 2,
            title: 'Photography Contest Deadline',
            date: '2025-04-15',
            time: 'All Day',
            location: 'Online',
        },
        {
            id: 3,
            title: 'Live Music Performance',
            date: '2025-04-20',
            time: '7:00 PM - 9:00 PM',
            location: 'Local Venue',
        },
        {
            id: 4,
            title: 'Cooking Class: Italian Cuisine',
            date: '2026-04-25',
            time: '6:00 PM - 8:00 PM',
            location: 'Community Center',
        },
        {
            id: 5,
            title: 'Fitness Challenge Kickoff',
            date: '2024-12-01',
            time: 'All Day',
            location: 'Online',
        },
        {
            id: 6,
            title: 'Science Fair Expo',
            date: '2024-12-15',
            time: '2:00 PM - 4:00 PM',
            location: 'Online Event',
        },
    ];

    return (
        <div className="my-10">

            <div className="ml-10 md:w-3/12 my-10">
                <h2 className="text-3xl text-start uppercase border-t-4 border-sky-700 text-sky-500 font-bold py-2">Event Calendar</h2>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                {/* <h2 className="text-3xl text-center font-bold mb-8">Event Calendar</h2> */}

                {/* <div className="mx-auto text-center md:w-4/12 my-8">
                </div> */}
                {/* <h3 className="text-3xl uppercase border-y-4 py-4">Top Liked Posts</h3> */}

                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-sky-950 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                            <p className="text-gray-500 mb-2">
                                Date: {new Date(event.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                            <p className="text-gray-500 mb-2">Time: {event.time}</p>
                            <p className="text-gray-500">Location: {event.location}</p>
                            <button className="bg-sky-300 text-sky-950 px-4 py-2 rounded-md mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                                Attend
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EventCalendar;
