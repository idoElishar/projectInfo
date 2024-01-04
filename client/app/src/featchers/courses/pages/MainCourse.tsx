import './MainCourse.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Statistic from './Graph';
import StudentsTable from './Table';
function MainCourse() {
    const rating = 4
    const stars = []
    for (let i = 0; i <= 5; i++) {
        console.log(stars);

        stars.push(<span key={i} className={`fa fa-star ${i <= rating ? 'checked' : ''}`}></span>)
    }
    return (
        <div className="main" >
            <div className='title' >
                <div style={{  display: 'flex' }}>
                    <h2>HTML Course</h2>
                    <div className="teacher-info">
                        <img src="https://oklahoma-council.transforms.svdcdn.com/production/assets/img/Teacher-in-front-of-chalkboard.jpeg?w=3000&h=2000&auto=compress%2Cformat&fit=crop&crop=focalpoint&fp-x=0.3059&fp-y=0.2246&dm=1644340079&s=3020830ce187ed5578c03928dde0156b" alt="Teacher's Image" className="teacher-image" />
                        <div className="teacher-details">
                            <h2>Teacher: Sagi Chubuk</h2>
                            <p>Ph.D. in Computer Science</p>
                            <p>10 years teaching experience</p>
                        </div>
                    </div>
                </div>

                <div className='stars' style={{}}>
                    {stars}
                </div>
                <div className='text' style={{}}>Dive into web development with HTML Essentials course. Ideal for beginners, this course covers the fundamentals of HTML, the backbone of the web. You'll learn how to structure web pages, utilize tags, and create forms. By the end, you'll have the skills to build your own basic website. No prior experience needed!</div>
                <div className="center" style={{}}>
                    <div className="paper" style={{}}>
                        <div className="paper-content" style={{}}>
                            <textarea >What will we learn in this course? &#10; &#10;✔ Creating web pages using HTML.&#10;✔  Adding graphics and multimedia to pages.&#10;✔  Creating forms and tables.&#10;✔  Using complex HTML tags.&#10;✔  Working with the WordPress system.&#10;✔  Uploading the site to the Internet</textarea>
                        </div>
                    </div>
                    <StudentsTable  />
                </div>
            </div>
            <Statistic />
        </div>
    )
}
export default MainCourse