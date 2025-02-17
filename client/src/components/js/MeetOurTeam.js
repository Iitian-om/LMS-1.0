import React, { useEffect } from 'react';
import '../css/MeetOurTeam.css';
import teamData from '../../data/teamData.json';
import Navbar from './Navbar';
import Footer from './Footer';

const MeetOurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            <main className="meet-our-team-container">
                <div className="meet-our-team">
                    <h1>Meet Our EduHub Developers Team</h1>
                    <div className="team-section">
                        {teamData.map(member => (
                            <div key={member.id} className="team-member">
                                <img src={member.photo} alt={`${member.name}`} className="team-member-photo" />
                                <div className="team-member-info">
                                    <h2>{member.name}</h2>
                                    <h3>{member.role}</h3>
                                    <p>{member.description}</p>
                                    <div className="team-member-buttons">
                                        <a href={`mailto:${member.email}`} className="button">Email</a>
                                        <a href={member.profileLink} target="_blank" rel="noopener noreferrer" className="button">Profile</a>
                                        <a href={member.Website} target="_blank" rel="noopener noreferrer" className="button">Website</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MeetOurTeam;