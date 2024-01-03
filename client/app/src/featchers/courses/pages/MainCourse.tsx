import './MainCourse.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Statistic from './Graph';
function MainCourse() {
    const rating = 4
    const stars = []
    for (let i = 0; i <= 5; i++) {
        console.log(stars);

        stars.push(<span key={i} className={`fa fa-star ${i <= rating ? 'checked' : ''}`}></span>)
    }
    return (
        <div className="main">
            <div className='title'>
                <h2>HTML Course</h2>
                <div className='stars'>
                    {stars}
                </div>
                <div className="paper">
                    <div className="paper-content">
                        <textarea >What will we learn in this course? &#10; &#10;✔ Creating web pages using HTML.&#10;✔  Adding graphics and multimedia to pages.&#10;✔  Creating forms and tables.&#10;✔  Using complex HTML tags.&#10;✔  Working with the WordPress system.&#10;✔  Uploading the site to the Internet</textarea>
                    </div>
                </div>
                <Statistic />
            </div>

        </div>
    )
}

export default MainCourse