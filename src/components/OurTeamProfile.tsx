import React from 'react'

// Team data - you can move this to a separate file
const teamData = [
    {
        id: 1,
        name: "Priyanshu",
        position: "Chief Coordinator",
        image: "", // keeping blank as requested
        bio: "Leading the radio telescope project with expertise in project management and systems integration. Coordinates cross-functional teams to ensure seamless execution of this ambitious astronomical endeavor.",
        email: "priyanshu@company.com",
        linkedin: "#"
    },
    {
        id: 2,
        name: "Arnav",
        position: "Electronics Head",
        image: "",
        bio: "Specializes in RF engineering and signal processing systems. Responsible for designing and implementing the electronic components that capture and process radio signals from celestial objects.",
        email: "arnav@company.com",
        linkedin: "#"
    },
    {
        id: 3,
        name: "Kumar Shourya",
        position: "Mechanical Head",
        image: "",
        bio: "Expert in mechanical design and structural engineering. Leads the development of the telescope's mounting system, tracking mechanisms, and overall mechanical infrastructure.",
        email: "kumar@company.com",
        linkedin: "#"
    },
    {
        id: 4,
        name: "Indrajit Mandal",
        position: "Computing Head",
        image: "",
        bio: "Focuses on data acquisition, processing algorithms, and automation systems. Develops software solutions for telescope control, data analysis, and astronomical observations.",
        email: "indrajit@company.com",
        linkedin: "#"
    }
]

const OurTeamProfile = () => {
    return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of student engineers and researchers from BITS Pilani Goa Campus combines passion for radio astronomy with technical expertise to bring this ambitious 5-meter radio telescope project to life.
        </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamData.map((member) => (
            <div key={member.id} className="group">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                {member.image ? (
                    <>
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </>
                ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                    <div className="text-center">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                        </svg>
                        <p className="text-gray-500 text-sm font-medium">{member.name}</p>
                    </div>
                    </div>
                )}
                </div>
                
                {/* Profile Info */}
                <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                </p>
                
                {/* Contact Links */}
                <div className="flex space-x-3">
                    <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200"
                    title={`Email ${member.name}`}
                    >
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    </a>
                    <a
                    href={member.linkedin}
                    className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200"
                    title={`${member.name} on LinkedIn`}
                    >
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    )
}

export default OurTeamProfile;