import React from 'react';
import './MeetOurTeam.css';
import teamData from '../data/teamData.json';

const MeetOurTeam = () => {
    return (
        <main className="meet-our-team">
            <h1>Meet Our Team</h1>
            <div className="team-section">
                <h2>Instructor</h2>
                <div className="team-members">
                    {teamData.filter(member => member.role === "Course Instructor").map(member => (
                        <div key={member.id} className="team-member">
                            <img src={member.photo} alt={`${member.name}`} />
                            <div className="team-member-info">
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                                <div className="team-member-buttons">
                                    <a href={`mailto:${member.email}`} className="button">Email</a>
                                    <a href={member.profileLink} target="_blank" rel="noopener noreferrer" className="button">Profile</a>
                                    <a href={member.personalProfile} target="_blank" rel="noopener noreferrer" className="button">Personal</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="team-section">
                <h2>Team Lead</h2>
                <div className="team-members">
                    {teamData.filter(member => member.role === "Lead Developer").map(member => (
                        <div key={member.id} className="team-member">
                            <img src={member.photo} alt={`${member.name}`} />
                            <div className="team-member-info">
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                                <div className="team-member-buttons">
                                    <a href={`mailto:${member.email}`} className="button">Email</a>
                                    <a href={member.profileLink} target="_blank" rel="noopener noreferrer" className="button">Profile</a>
                                    <a href={member.personalProfile} target="_blank" rel="noopener noreferrer" className="button">Personal</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="team-section">
                <h2>Backend Developer</h2>
                <div className="team-members">
                    {teamData.filter(member => member.role === "Backend Developer").map(member => (
                        <div key={member.id} className="team-member">
                            <img src={member.photo} alt={`${member.name}`} />
                            <div className="team-member-info">
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                                <div className="team-member-buttons">
                                    <a href={`mailto:${member.email}`} className="button">Email</a>
                                    <a href={member.profileLink} target="_blank" rel="noopener noreferrer" className="button">Profile</a>
                                    <a href={member.personalProfile} target="_blank" rel="noopener noreferrer" className="button">Personal</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="team-section">
                <h2>Frontend Developer</h2>
                <div className="team-members">
                    {teamData.filter(member => member.role === "UI/UX Designer").map(member => (
                        <div key={member.id} className="team-member">
                            <img src={member.photo} alt={`${member.name}`} />
                            <div className="team-member-info">
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                                <div className="team-member-buttons">
                                    <a href={`mailto:${member.email}`} className="button">Email</a>
                                    <a href={member.profileLink} target="_blank" rel="noopener noreferrer" className="button">Profile</a>
                                    <a href={member.personalProfile} target="_blank" rel="noopener noreferrer" className="button">Personal</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="team-section">
                <h2>Project Manager</h2>
                <div className="team-members">
                    {teamData.filter(member => member.role === "Project Manager").map(member => (
                        <div key={member.id} className="team-member">
                            <img src={member.photo} alt={`${member.name}`} />
                            <div className="team-member-info">
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                                <div className="team-member-buttons">
                                    <a href={`mailto:${member.email}`} className="button">Email</a>
                                    <a href={member.profileLink} target="_blank" rel="noopener noreferrer" className="button">Profile</a>
                                    <a href={member.personalProfile} target="_blank" rel="noopener noreferrer" className="button">Personal</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default MeetOurTeam;