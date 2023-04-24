import { faQ } from "@fortawesome/free-solid-svg-icons"
import faq_img from "/faq_img.png"
import Steps from "/steps.png"
import "./help.css"

const Help = ()=>{
    const faqs = [
        {id: 1, header: "What is snoF" , content: "lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sta"},
        {id: 2, header: "What is snoF" , content: "lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sta"},
        {id: 3, header: "What is snoF" , content: "lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sta"},
        // {id: 4, header: "What is snoF" , content: "snof is an organisation ..."},
        // {id: 5, header: "What is snoF" , content: "snof is an organisation ..."},
        // {id: 5, header: "What is snoF" , content: "snof is an organisation ..."},
        // {id: 5, header: "What is snoF" , content: "snof is an organisation ..."},
        // {id: 5, header: "What is snoF" , content: "snof is an organisation ..."},
        // {id: 5, header: "What is snoF" , content: "snof is an organisation ..."},



    ]
    return(
        <div className="main-help-container">
            <div className="left-help-content">
                <div className="upper-help-content">
                    <header className="upper-content-header">
                        <h3>Help <span style={{color: "#367588"}}>center</span></h3>
                        <h5>got a question about SNoF? we are here to help.</h5>
                    </header>

                    <div className="middle-upper-content">
                        <h5>Steps to follow</h5>
                        <div className="steps-container">
                            <img src={Steps} className="steps-overview"/>
                        </div>
                    </div>                    
                </div>
                <div className="form-container">
                        <h5>Submit your question in this sandbox</h5>
                        <form className="help-form">
                            <textarea  className="ask-textarea" placeholder="write your question ..." required/>
                            <div className="submit-help-form">
                                <button type="submit">send</button>
                            </div>
                        </form>
                        <h3>or Simply send us an email on <span style={{color: "#9342C4", cursor: "pointer"}}>snof-support@gmail.com</span> </h3>
                </div>
                <div className="bottom-content">
                    <div className="left-bottom-content">
                        <h3>still have questions</h3>
                        <h6>can’t find the answer you are looking for? please chat with our friendly support team </h6>
                    </div>
                    <button type="button">Get in touch </button>
                </div>
            </div>
            <div className="right-help-content">
                <h3>FAQs</h3>
                <h4>Here are the frequently asked questions about snoF</h4>
                <div className="faqs-container">
                    {faqs.map(faq=> {
                        return(
                            <div key={faq.id} className="singlefaq">
                                <div className="single-faq-header">
                                    <img src={faq_img}/>
                                    <h2>{faq.header}</h2>
                                </div>
                                <p>{faq.content}</p>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )

}

export default Help