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
        <div className="main" style={{ border: "2px solid red" }}>
            <div className='title' style={{ border: "2px solid blue" }}>
                <h2>HTML Course</h2>
                <div className='stars' style={{ border: "2px solid green" }}>
                    {stars}
                </div>
                <div className='text'>Dive into web development with HTML Essentials course. Ideal for beginners, this course covers the fundamentals of HTML, the backbone of the web. You'll learn how to structure web pages, utilize tags, and create forms. By the end, you'll have the skills to build your own basic website. No prior experience needed!</div>
                <div className="paper" style={{ border: "2px solid yellow" }}>
                    <div className="paper-content" style={{ border: "2px solid black" }}>
                        <textarea >What will we learn in this course? &#10; &#10;✔ Creating web pages using HTML.&#10;✔  Adding graphics and multimedia to pages.&#10;✔  Creating forms and tables.&#10;✔  Using complex HTML tags.&#10;✔  Working with the WordPress system.&#10;✔  Uploading the site to the Internet</textarea>
                    </div>
                </div>
            </div>
            <Statistic/>
        </div>
    )
}

export default MainCourse