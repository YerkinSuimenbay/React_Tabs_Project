import React, { useState, useEffect } from "react"
import {MdPlayArrow} from "react-icons/md";

const Tab = ({people}) => {
    const [index, setIndex] = useState(0);

    const {title, dates, duties, company} = people[index];

    useEffect(() => {
        document.querySelectorAll(".tabs-btn").forEach(btn => btn.id = "")
        document.querySelector(`.btn${index}`).id += "active"
    }, [index])

    return (
        <section>
            <aside>
                {people.map((person, index) => {
                    return <Button key={index} company={person.company} index={index} setIndex={setIndex} />
                })}
            </aside>
            <article>
                <p className="job">{title}</p>
                <h4 className="name">{company}</h4>
                <p className="date">{dates}</p>
                <div>
                    {duties.map((duty, index) => {
                        return  <div className="duty" key={index}><MdPlayArrow className="arrow"/> <span>{duty}</span></div>
                    })}
                </div>
            </article>
        </section>
    )
}

const Button = (props) => {
    const {index, company, setIndex} = props;
    return (
        <button className={`tabs-btn btn${index}`} onClick={() => setIndex(index)}>{company}</button>
    )
}

export default Tab;