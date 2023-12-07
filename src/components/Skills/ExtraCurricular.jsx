import React from 'react';

const ExtraCurricular = () => {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Extra-Curricular</h3>
            <div className="skills__dabba">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Dance</h3>
                        <span className="skills__level">Advance</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Football</h3>
                        <span className="skills__level">Advance</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Beatboxing</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Cube Solving</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraCurricular